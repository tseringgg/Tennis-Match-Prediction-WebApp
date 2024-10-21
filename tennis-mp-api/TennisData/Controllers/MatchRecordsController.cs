using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using TennisData.Dtos;
using Domain.Models;

namespace TennisData.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MatchRecordsController : ControllerBase
    {
        private readonly IMatchRecordContext _context;
        private readonly IMapper _mapper;

        public MatchRecordsController(IMatchRecordContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: MatchRecords
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MatchRecordDto>>> GetMatchRecords()
        {
            //return View(await _context.MatchRecords.ToListAsync());
            var result = await _context.MatchRecords.Take(10).ToListAsync();
            //var result = await _context.MatchRecords.ToListAsync();

            //return Ok(_mapper.Map<IEnumerable<MatchRecordDto>>(result));

            var x = _mapper.Map<IEnumerable<MatchRecordDto>>(result);
            
            return Ok(x);
        }

        [HttpGet("recent-match/{playerName}")]
        public async Task<ActionResult<MatchRecordDto>> GetRecentMatch(string playerName)
        {
            var match = await _context.MatchRecords
                .Where(m => m.p0_name == playerName || m.p1_name == playerName)
                .OrderByDescending(m => m.tny_date)
                .FirstOrDefaultAsync();

            if (match == null)
            {
                return NotFound();
            }
            var x = _mapper.Map<MatchRecordDto>(match);
            return Ok(x);
        }

        [HttpGet("matches-between/{player1}/{player2}")]
        public async Task<ActionResult<IEnumerable<MatchRecordDto>>> GetMatchesBetweenPlayers(string player1, string player2, [FromQuery] int pageSize = 10, [FromQuery] int pageNumber = 0)
        {
            var matches = await _context.MatchRecords
                .Where(m =>
                    (m.p0_name == player1 && m.p1_name == player2) ||
                    (m.p0_name == player2 && m.p1_name == player1))
                .OrderBy(x => x.id)
                .Skip(pageNumber * pageSize)
                .Take(pageSize)
                .ToListAsync();
            var matchCount = await _context.MatchRecords
                .Where(m =>
                    (m.p0_name == player1 && m.p1_name == player2) ||
                    (m.p0_name == player2 && m.p1_name == player1))
                .CountAsync();

            if (!matches.Any())
            {
                return NotFound();
            }
            var x = _mapper.Map<IEnumerable<MatchRecordDto>>(matches);
            SetPaginationHeader(matchCount);
            return Ok(x);
        }

        private void SetPaginationHeader (int totalRecords)
        {
            Response.Headers.Add("X-Pagination", Newtonsoft.Json.JsonConvert.SerializeObject(new
            {
                totalRecords
            }));
        }

    }
}

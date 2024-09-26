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

            //return Ok(_mapper.Map<IEnumerable<MatchRecordDto>>(result));
            
            var x = _mapper.Map<IEnumerable<MatchRecordDto>>(result);
            return Ok(x);
        }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using TennisData.Models;

namespace TennisData.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MatchRecordsController : ControllerBase
    {
        private readonly IMatchRecordContext _context;

        public MatchRecordsController(IMatchRecordContext context)
        {
            _context = context;
        }

        // GET: MatchRecords
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MatchRecord>>> GetMatchRecords()
        {
            //return View(await _context.MatchRecords.ToListAsync());
            var result = _context.MatchRecords.Take(10);
            return await result.ToListAsync();
        }

    }
}

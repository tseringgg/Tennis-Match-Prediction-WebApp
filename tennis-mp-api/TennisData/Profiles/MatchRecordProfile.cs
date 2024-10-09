using AutoMapper;
using TennisData.Dtos;
using Domain.Models;

namespace TennisData.Profiles
{
    public class MatchRecordProfile : Profile
    {
        public MatchRecordProfile()
        {
            CreateMap<MatchRecord, MatchRecordDto>().ReverseMap();
        }
    }
}

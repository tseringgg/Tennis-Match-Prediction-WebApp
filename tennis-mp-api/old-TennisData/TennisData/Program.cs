using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Domain.Models;
using TennisData.Profiles;


var builder = WebApplication.CreateBuilder(args);


// Add services to the container.
//var connectionString = "Data Source=JORJEI-PC;Initial Catalog=TennisData;Integrated Security=True;Encrypt=True;TrustServerCertificate=True";
//builder.Services.AddDbContext<MatchRecordContext>(options => options.UseSqlServer(connectionString));
builder.Services.AddDbContext<MatchRecordContext>();

builder.Services.AddScoped<IMatchRecordContext>(provider => (IMatchRecordContext)provider.GetRequiredService<MatchRecordContext>());

builder.Services.AddControllers();
//builder.Services.AddDbContext<MatchRecordContext>();


//builder.Services.AddDbContext<TodoContext>(opt =>
    //opt.UseInMemoryDatabase("TodoList"));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(opt =>
{
    opt.AddPolicy("AllowSpecificOrigins",
        builder =>
        {
            builder.WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
});

var config = new MapperConfiguration(mc =>
{
    mc.AddProfile(new MatchRecordProfile());
});
var mapper = config.CreateMapper();
config.AssertConfigurationIsValid();
builder.Services.AddSingleton(mapper);

//builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies()); // reflection checks all assemblies, not optimal


var app = builder.Build();

app.UseCors("AllowSpecificOrigins");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

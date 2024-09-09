using StockPriceViewer.Server.Hubs;
using StockPriceViewer.Server.Models;
using StockPriceViewer.Server.Workers;

namespace StockPriceViewer.Server;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowReactApp",
                conf =>
                {
                    conf.WithOrigins("https://localhost:5173")
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials();
                });
        });

        builder.Services.AddSingleton<StockRepository>();
        builder.Services.AddControllers();
        builder.Services.AddSignalR();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen(options => { options.SupportNonNullableReferenceTypes(); });
        builder.Services.AddSingleton<StockUpdater>();

        var app = builder.Build();

        app.UseDefaultFiles();
        app.UseStaticFiles();

        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseCors("AllowReactApp");

        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.MapControllers();
        app.MapHub<StockHub>("/stockHub");

        app.MapFallbackToFile("/index.html");
        
        var stockUpdater = app.Services.GetRequiredService<StockUpdater>();
        stockUpdater.StartAsync(app.Lifetime.ApplicationStopped);
        
        app.Run();
    }
}
using Microsoft.AspNetCore.SignalR;
using StockPriceViewer.Server.Hubs;
using StockPriceViewer.Server.Models;

namespace StockPriceViewer.Server.Workers;

public class StockUpdater : BackgroundService
{
    private readonly ILogger<StockUpdater> _logger;
    private readonly StockRepository _stockRepository;
    private readonly IHubContext<StockHub> _hubContext;

    public StockUpdater(ILogger<StockUpdater> logger, StockRepository stockRepository, IHubContext<StockHub> hubContext)
    {
        _logger = logger;
        _stockRepository = stockRepository;
        _hubContext = hubContext;
    }

    protected override async Task ExecuteAsync(CancellationToken cancellationToken)
    {
        while (!cancellationToken.IsCancellationRequested)
        {
            _stockRepository.UpdateStocks();
            _logger.LogInformation("Stocks updated");
            await _hubContext.Clients.All.SendAsync("UpdateStocks", _stockRepository.Stocks, cancellationToken);
            await Task.Delay(2000, cancellationToken);
        }
    }
}
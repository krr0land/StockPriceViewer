using Microsoft.AspNetCore.SignalR;
using StockPriceViewer.Server.Models;

namespace StockPriceViewer.Server.Hubs;

public class StockHub(StockRepository stockRepository) : Hub
{
    public async Task UpdateStocks()
    {
        await Clients.All.SendAsync("UpdateStocks", stockRepository.Stocks);
    }
}
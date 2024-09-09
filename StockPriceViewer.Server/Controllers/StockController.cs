using Microsoft.AspNetCore.Mvc;
using StockPriceViewer.Server.Models;

namespace StockPriceViewer.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class StockController(ILogger<StockController> logger, StockRepository stockRepository) : ControllerBase
{
    [HttpGet]
    [Route("GetCompanies")]
    public IEnumerable<string> GetCompanies()
    {
        logger.LogInformation("Getting companies");
        return stockRepository.Companies;
    }
    
    [HttpGet]
    [Route("GetStocks")]
    public IEnumerable<Stock> GetStocks()
    {
        logger.LogInformation("Getting stocks");
        return stockRepository.Stocks;
    }
}
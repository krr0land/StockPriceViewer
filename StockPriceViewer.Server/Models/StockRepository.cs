namespace StockPriceViewer.Server.Models;

public class StockRepository
{
    private static readonly string[] _companies =
    [
        "Microsoft", "Google", "Apple", "Amazon", "Facebook"
    ];

    private readonly Stock[] _stocks;
    
    public StockRepository()
    {
        _stocks = _companies.Select(name => new Stock
        {
            Id = name.GetHashCode(),
            Name = name,
            Price = Random.Shared.Next()
        }).ToArray();
    }
    
    public IEnumerable<Stock> Stocks => _stocks;
    
    public IEnumerable<string> Companies => _companies;
    
    public Stock? GetStock(int id)
    {
        return _stocks.FirstOrDefault(stock => stock.Id == id);
    }
    
    public void UpdateStocks()
    {
        foreach (var stock in _stocks)
            stock.Price = Random.Shared.Next() % 1000000 / 1000.0m;
    }
}
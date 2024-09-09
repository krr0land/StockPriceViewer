namespace StockPriceViewer.Server.Models;

public record Stock
{
    public int Id { get; init; }
    public required string Name { get; init; }
    public decimal Price { get; set; }
}
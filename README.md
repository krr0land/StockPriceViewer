## Stock Price Ticker View 3000

You're tasked with making a "frontend/client" and "backend/server" application, which displays Stock Prices.
You should not spend more than 1-2 hours on this, as it only serves as a common talking point. Furthermore, there will be no penalty for not finishing the assignment completely, as mentioned before, it's just a common talking point.

We would prefer C# or Python implementations, but in the end the choice of programming language is yours.

# Requirements are as follows:

- Stock Price Model:
  Should have a price with decimal support
  Should have a Name, eg: Google, Apple, Microsoft, Berkshire etc.
  Extend with extra information, if you have the time, but not needed.
  Generated Prices do not need to look "real". Just a random price is sufficient

- Frontend/Client:
  Should receive "Stock Price Models" from the backend.
  These prices should be displayed in a human-readable format
  This can just be something as simple as a console application

- Backend/Server
  Generate "Stock Price Models" every 1-2 seconds.
  The generated "Stock Price Models" should be the same set of Stocks (Apple, Google, Microsoft etc.) every time
  Send the generated prices to the frontend using network communication

Interviewing bullet points:
- Network Protocol / Wire Transfer format used. Pros/Cons. What could be better? Would this work with multiple clients
- Generation method used / service serving prices. How (if not implemented) could we handle server side filters, if clients are only interested in a subset of "Stock Price Models".
- Tests? How could we test this.

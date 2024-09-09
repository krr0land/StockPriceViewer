import StockViewSignalR from "./Views/StockViewSignalR.tsx";
import StockViewApi from "./Views/StockViewApi.tsx";

export default function App() {
    return (
        <div id="App">
            <StockViewApi />
            <StockViewSignalR />
        </div>
    );
}

import {Stock} from "../Api/backendApi.ts";
import {Box, Table, Heading, Spinner} from "@radix-ui/themes";
import { HubConnectionBuilder } from '@microsoft/signalr';
import {useEffect, useState} from "react";

export default function StockViewSignalR() {
    const [stocks, setStocks] = useState<Stock[]>([]);

    useEffect(() => {
        const connection = new HubConnectionBuilder().withUrl('https://localhost:7262/stockHub').build();
        connection.start().then(() => {
            console.log('Connection started');
        }).catch((err) => console.log('Error while establishing connection: ' + err));

        connection.on('UpdateStocks', (newStocks) => {
            setStocks(newStocks);
        });
    }, []);

    return (
        <div className="mr-auto ml-auto max-w-fit">
            <Box pt="8">
                <Heading size="8" as="h1">Stocks with SignalR</Heading>
            </Box>
            <Box pt="8">
                {stocks.length == 0 && <Spinner size="3"/>}
                {stocks.length > 0 && (
                    <Table.Root>
                        <Table.Header>
                            <Table.Row align="center">
                                <Table.ColumnHeaderCell justify="center">Company</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell justify="center">Price</Table.ColumnHeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {stocks.map((stock) => (
                                <Table.Row align="center" key={stock.id}>
                                    <Table.Cell justify="center">{stock.name}</Table.Cell>
                                    <Table.Cell justify="center">{stock.price?.toFixed(3)}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>
                )}
            </Box>
        </div>
    );
}
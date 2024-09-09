import {useGetStocksQuery} from "../Api/backendApi.ts";
import {Box, Table, Heading, Text, Spinner} from "@radix-ui/themes";

export default function StockViewApi() {
    const { data, error, isLoading } = useGetStocksQuery(undefined, { pollingInterval: 1000 });

    return (
        <div className="mr-auto ml-auto max-w-fit">
            <Box pt="8">
                <Heading size="8" as="h1">Stocks with API</Heading>
            </Box>
            <Box pt="8">
                {isLoading && <Spinner size="3"/>}
                {error && <Text>Error: {JSON.stringify(error)}</Text>}
                {data && (
                    <Table.Root>
                        <Table.Header>
                            <Table.Row align="center">
                                <Table.ColumnHeaderCell justify="center">Company</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell justify="center">Price</Table.ColumnHeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {data.map((stock) => (
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
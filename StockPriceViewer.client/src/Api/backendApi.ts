import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCompanies: build.query<GetCompaniesApiResponse, GetCompaniesApiArg>({
            query: () => ({ url: `/Stock/GetCompanies` }),
        }),
        getStocks: build.query<GetStocksApiResponse, GetStocksApiArg>({
            query: () => ({ url: `/Stock/GetStocks` }),
        }),
    }),
    overrideExisting: false,
});
export { injectedRtkApi as backendApi };
export type GetCompaniesApiResponse = /** status 200 Success */ string[];
export type GetCompaniesApiArg = void;
export type GetStocksApiResponse = /** status 200 Success */ Stock[];
export type GetStocksApiArg = void;
export type Stock = {
    id?: number;
    name?: string;
    price?: number;
};

export const { useGetCompaniesQuery, useGetStocksQuery } = injectedRtkApi;

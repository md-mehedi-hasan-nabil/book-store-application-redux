import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_API_URL,
});

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: async (args, api, extraOptions) => {
        let result = await baseQuery(args, api, extraOptions);
        return result;
    },
    tagTypes: [],
    endpoints: (builder) => ({}),
});

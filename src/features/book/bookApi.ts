import { apiSlice } from "../api/apiSlice";

export const bookApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => ({
                url: "/books",
            }),
        }),
    }),
});

export const { useGetBooksQuery } = bookApi;
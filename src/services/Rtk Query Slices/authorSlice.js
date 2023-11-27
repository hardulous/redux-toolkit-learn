import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// First create api slice by createApi() method
export const authorApi = createApi({
  reducerPath: "authorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakerestapi.azurewebsites.net/",
  }),
  endpoints: (builder) => {
    return {
      // For get req use .query()
      getAuthors: builder.query({
        query: () => ({
          url: "api/v1/Authors",
        }),
      }),
      // For other than get req .mutation()
      addAuthor: builder.mutation({
        query: (post) => ({
          url: "api/v1/Authors",
          method: "POST",
          body: post,
        }),
      }),
    };
  },
});

// Here automatically a hook with endpoint name will be created for use
export const { useGetAuthorsQuery, useAddAuthorMutation } = authorApi;

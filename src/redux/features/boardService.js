import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getBearerToken = () => {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmZmYjljMDBhMDYzMTk4M2UyNzkyOCIsImlhdCI6MTY5NDgzOTkxMCwiZXhwIjoxNjk0OTI2MzEwfQ.KVKbx89Cpj125Ip5NeH0Nz_opOwyxl7a5smQA5SENuc";
};

export const boardService = createApi({
  reducerPath: "board",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://witty-gold-pigeon.cyclic.cloud/api/v1",
    prepareHeaders: (headers) => {
      const token = getBearerToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    // get all boards
    getBoards: builder.query({
      query: () => ({
        url: "/boards",
        method: "GET",
      }),
    }),

    // create a single board with a button
    createBoard: builder.mutation({
      query: (data) => ({
        url: "boards",
        method: "POST",
        body: data,
      }),
    }),

    // get single Board
    singleBoard: builder.query({
      query: (id) => ({
        url: `/boards/${id}`,
        method: "GET",
      }),
    }),

    //Delete single Board
    deleteBoard: builder.mutation({
      query: (id) => ({
        url: `/boards/${id}`,
        method: "DELETE",
      }),
    }),

    updateBoard: builder.mutation({
      query: ({ id, data }) => ({
        url: `/boards/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetBoardsQuery,
  useCreateBoardMutation,
  useSingleBoardQuery,
  useDeleteBoardMutation,
  useUpdateBoardMutation,
} = boardService;
export default boardService.reducer;

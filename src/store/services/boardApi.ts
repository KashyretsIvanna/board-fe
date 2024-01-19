/** @format */

import { ApiRoutes, ApiTags, keepUnusedDataFor } from '../constants/api.constants';
import { emptySplitApi } from '../emptySplitApi';
import { BoardById } from '../types/board.types';

const serviceRoute = ApiRoutes.board;

export const boardApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getBoardById: builder.query<BoardById, { boardId: string }>({
      query: (body: { boardId: string }) => ({
        url: serviceRoute + `/${body.boardId}`,
        method: 'GET',
      }),
      keepUnusedDataFor: keepUnusedDataFor,
      providesTags: [ApiTags.board],
    }),

    deleteBoard: builder.mutation<void, { boardId: string }>({
      query: (body: { boardId: string }) => ({
        url: serviceRoute + `/${body.boardId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [ApiTags.board],
    }),
    createBoard: builder.mutation({
      query: (body: { name: string }) => ({
        url: serviceRoute,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useCreateBoardMutation, useDeleteBoardMutation, useGetBoardByIdQuery } = boardApi;

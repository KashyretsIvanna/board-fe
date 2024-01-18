import { ApiRoutes, ApiTags } from '../constants/api.constants';
import { emptySplitApi } from '../emptySplitApi';

const serviceRoute = ApiRoutes.card;

export const cardApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteCard: builder.mutation<void, { cardId: string }>({
      query: (body: { cardId: string }) => ({
        url: serviceRoute + `/${body.cardId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [ApiTags.card, ApiTags.board],
    }),
    createCard: builder.mutation({
      query: (body: { description: string; title: string; statusId: string }) => ({
        url: serviceRoute,
        method: 'POST',
        body,
      }),
      invalidatesTags: [ApiTags.board],
    }),
    updateCardById: builder.mutation({
      query: (body: { id: string; title: string; description: string }) => ({
        url: serviceRoute,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: [ApiTags.board],
    }),
    updateCardOrder: builder.mutation({
      query: (body: { cardId: string; statusId?: string; order?: number }) => ({
        url: serviceRoute + '/order',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: [ApiTags.card, ApiTags.board],
    }),
  }),
});

export const {
  useCreateCardMutation,
  useDeleteCardMutation,
  useUpdateCardOrderMutation,
  useUpdateCardByIdMutation,
} = cardApi;

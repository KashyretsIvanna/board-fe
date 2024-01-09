import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseApiUrl, ApiTags } from './constants/api.constants';
export const emptySplitApi = createApi({
  reducerPath: 'emptySplitApi',
  tagTypes: Object.values(ApiTags),
  endpoints: () => ({}),
  baseQuery: fetchBaseQuery({
    baseUrl: baseApiUrl,
  }),
});

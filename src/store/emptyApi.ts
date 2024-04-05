import { createApi, BaseQueryFn } from '@reduxjs/toolkit/query/react';
import axios, { AxiosError, isAxiosError } from '~/services/axios';

const axiosBaseQuery: BaseQueryFn = async ({ url, method, body }) => {
  try {
    const result = await axios({ url, method, data: body });
    return { data: result.data };
  } catch (axiosError) {
    if (isAxiosError(axiosError)) {
      const error = axiosError as AxiosError;
      let errorMessage: string = error.message;
      // axios errors have a `response` object, containing the actual server response
      if (error.response) {
        if (typeof error.response.data === 'string') {
          errorMessage = error.response.data;
        } else {
          errorMessage = 'An error occurred.';
        }
      }
      return { error: { message: errorMessage, status: error.response?.status } };
    }
    return { error: { message: 'An error occurred.' } };
  }
};

// initialize an empty api service that we'll inject endpoints into later as needed
const emptySplitApi = createApi({
  baseQuery: axiosBaseQuery,
  endpoints: () => ({}),
});

export default emptySplitApi;

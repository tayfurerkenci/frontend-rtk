import { createApi, BaseQueryFn } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery: BaseQueryFn = async ({ url, method, body }) => {
  try {
    const result = await axios({ url, method, data: body });
    return { data: result.data };
  } catch (axiosError) {
    if (axios.isAxiosError(axiosError)) {
      let errorMessage: string = axiosError.message;
      // axios errors have a `response` object, containing the actual server response
      if (axiosError.response) {
        errorMessage = axiosError.response.data;
      }
      return { error: { message: errorMessage, status: axiosError.response?.status } };
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

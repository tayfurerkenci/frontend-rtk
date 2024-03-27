import { emptySplitApi as api } from './emptyApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation<CreateUserApiResponse, CreateUserApiArg>({
      query: (queryArg) => ({ url: `/users`, method: 'POST', body: queryArg.createUserRequest }),
    }),
    loginUser: build.mutation<LoginUserApiResponse, LoginUserApiArg>({
      query: (queryArg) => ({ url: `/users/login`, method: 'POST', body: queryArg.loginUserRequest }),
    }),
    createTransfer: build.mutation<CreateTransferApiResponse, CreateTransferApiArg>({
      query: (queryArg) => ({ url: `/transfers`, method: 'POST', body: queryArg.transferRequest }),
    }),
    getAccounts: build.query<GetAccountsApiResponse, GetAccountsApiArg>({
      query: (queryArg) => ({ url: `/accounts`, params: { page_id: queryArg.pageId, page_size: queryArg.pageSize } }),
    }),
    createAccount: build.mutation<CreateAccountApiResponse, CreateAccountApiArg>({
      query: (queryArg) => ({ url: `/accounts`, method: 'POST', body: queryArg.body }),
    }),
    getAccountById: build.query<GetAccountByIdApiResponse, GetAccountByIdApiArg>({
      query: (queryArg) => ({ url: `/accounts/${queryArg.id}` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as simpleBankApi };
export type CreateUserApiResponse = /** status 200 User created successfully */ UserResponse;
export type CreateUserApiArg = {
  createUserRequest: CreateUserRequest;
};
export type LoginUserApiResponse = /** status 200 User logged in successfully */ LoginUserResponse;
export type LoginUserApiArg = {
  /** A user login with a username and password */
  loginUserRequest: LoginUserRequest;
};
export type CreateTransferApiResponse = /** status 200 User created successfully */ UserResponse;
export type CreateTransferApiArg = {
  transferRequest: TransferRequest;
};
export type GetAccountsApiResponse = /** status 200 A list of accounts */ AccountRead[];
export type GetAccountsApiArg = {
  /** Page number */
  pageId?: number;
  /** Number of items per page */
  pageSize?: number;
};
export type CreateAccountApiResponse = /** status 200 Account created successfully */ AccountRead;
export type CreateAccountApiArg = {
  body: {
    /** The currency of the account */
    currency: 'USD' | 'EUR' | 'CAD' | 'TRY';
  };
};
export type GetAccountByIdApiResponse = /** status 200 Successful operation */ AccountRead;
export type GetAccountByIdApiArg = {
  id: string;
};
export type UserResponse = {
  /** The username of the user */
  username?: string;
  /** The full name of the user */
  full_name?: string;
  /** The email of the user */
  email?: string;
  /** The time when the password was last changed */
  password_changed_at?: string;
  /** The time when the user was created */
  created_at?: string;
};
export type CreateUserRequest = {
  /** The username of the user */
  username: string;
  /** The password of the user */
  password: string;
  /** The full name of the user */
  full_name: string;
  /** The email of the user */
  email: string;
};
export type LoginUserResponse = {
  /** The access token for the user */
  access_token?: string;
  user?: UserResponse;
};
export type LoginUserRequest = {
  /** The username of the user */
  username: string;
  /** The password of the user */
  password: string;
};
export type TransferRequest = {
  /** The ID of the account to transfer from */
  from_account_id: number;
  /** The ID of the account to transfer to */
  to_account_id: number;
  /** The amount to transfer */
  amount: number;
  /** The currency of the transfer */
  currency: string;
};
export type Account = {
  /** The owner of the account */
  owner: string;
  /** The balance of the account */
  balance: number;
  /** The currency of the account */
  currency: string;
};
export type AccountRead = {
  /** The ID of the account */
  id?: number;
  /** The owner of the account */
  owner: string;
  /** The balance of the account */
  balance: number;
  /** The currency of the account */
  currency: string;
  /** The date and time when the account was created */
  created_at?: string;
};
export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useCreateTransferMutation,
  useGetAccountsQuery,
  useCreateAccountMutation,
  useGetAccountByIdQuery,
} = injectedRtkApi;

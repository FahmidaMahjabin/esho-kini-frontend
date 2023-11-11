import { authApi } from "./api/authApi";
import { baseApi } from "./api/baseApi";
import { departmentApi } from "./api/departmentApi";
import { ProductApi } from "./api/productApi";
import { reviewApi } from "./api/reviewApi";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  [authApi.reducerPath]: authApi.reducer,

  [departmentApi.reducerPath]: departmentApi.reducer,
  [ProductApi.reducerPath]: ProductApi.reducer,
  [reviewApi.reducerPath]: reviewApi.reducer,
};

import { Iproduct, Imeta } from "@/interfaces/commonType";
import { baseApi } from "./baseApi";

export const ProductApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: (arg: Record<string, any> | undefined) => ({
        url: "product/all-products",
        method: "GET",
        params: arg,
      }),
      // providesTags: [tagTypes.department],
      transformResponse: (response: Iproduct, meta: Imeta) => {
        return {
          Products: response,
          meta: meta,
        };
      },
    }),
    addProduct: build.mutation({
      query: (data) => ({
        url: "Product/add-Product",
        method: "POST",
        data: data,
      }),
      //   invalidatesTags: ["department"],
    }),
  }),
});

export const { useGetAllProductsQuery, useAddProductMutation } = ProductApi;

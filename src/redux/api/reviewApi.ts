import { IReview, Imeta } from "@/interfaces/commonType";
import { baseApi } from "./baseApi";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllReviews: build.query({
      query: () => ({
        url: "review/all-reviews",
        method: "GET",
        // params: arg,
      }),
      // providesTags: [tagTypes.department],
      transformResponse: (response: IReview, meta: Imeta) => {
        return {
          Reviews: response,
          meta: meta,
        };
      },
    }),
    addReview: build.mutation({
      query: (data) => ({
        url: "review/add-review",
        method: "POST",
        data: data,
      }),
      //   invalidatesTags: ["department"],
    }),
  }),
});

export const { useGetAllReviewsQuery, useAddReviewMutation } = reviewApi;

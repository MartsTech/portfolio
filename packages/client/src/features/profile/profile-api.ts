import { baseApi } from "@app/api";
import { apiMethods, apiStatusCodes } from "@app/api/api-constants";
import { profileLoaded } from "./profile-state";
import { ProfileModel } from "./profile-types";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<{ profile: ProfileModel }, void>({
      query: () => ({
        url: `/cms/profile/getProfile`,
        method: apiMethods.METHOD_GET,
      }),
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        const result = await queryFulfilled;
        if (result.meta?.response?.status === apiStatusCodes.STATUS_200) {
          dispatch(profileLoaded({ profile: result.data.profile }));
        }
      },
      providesTags: (result) => [{ type: "Profile", id: result?.profile._id }],
    }),
  }),
});

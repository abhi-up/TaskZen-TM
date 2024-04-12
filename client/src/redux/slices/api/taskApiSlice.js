import { apiSlice } from "../apiSlice"

const TASKS_URL = "/task"

export const taskApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardStats: builder.query({
            query: () => ({
                url: `${TASKS_URL}/dashboard`,
                method: "GET",
                credentials: "include",
            }),
        }),
    }),
})

export const { useGetDashboardStatsQuery } = taskApiSlice

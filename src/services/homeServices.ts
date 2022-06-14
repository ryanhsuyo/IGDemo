import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// import IGStory from "pages/home/components/IGStory";
type IGPost = {
    id: number;
    location: string;
    account: string;
    avatar: string;
    photo: string;
    likes: number;description: string;
    hashTags: string;
    createTime: string;
}


type IGStory = {
    id: number;
    name: string;
    avatar: string;
}

export const homeApi = createApi({
    reducerPath: "homeApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/"}),
    endpoints: (builder) => ({
        getIGStoies: builder.query<IGStory[], number | "all">({
            query: (id) => {
                if (id !== "all"){
                    return `stories/${id}`;
                }
                return "stories";
            },
        }),
        getIGPosts: builder.query<IGPost[], number | "all">({
            query: (id) => {
                if (id !== "all"){
                    return `posts/${id}`;
                }
                return "posts";
            },
        }),
    }),
});


export const { useGetIGStoiesQuery, useGetIGPostsQuery} = homeApi

import { fetcher } from "@/utils/fetcher";

const baseURL = "https://genti.kr";

export const creatorQueryKeys = {
    myInfo: ["myInfo"],
    currentMatch: ["currentMatch"],
};

export const creatorQueryOptions = {
    myInfo: {
        queryKey: creatorQueryKeys.myInfo,
        queryFn: async () => {
            const res = await fetcher(`${baseURL}/api/creators`);
            return res.json();
        },
    },
    currentMatch: {
        queryKey: creatorQueryKeys.currentMatch,
        queryFn: async () => {
            const res = await fetcher(`${baseURL}/api/creators/picture-generate-requests/assigned`);
            return res.json();
        },
    },
};

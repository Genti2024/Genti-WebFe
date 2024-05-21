import { fetcher } from "@/utils/fetcher";

const baseURL = "https://genti.kr";

export const pictureQueryKeys = {
    currentMatch: ["currentMatch"],
    pictureGenerateRequest: (id?: number) => ["pictureGenerateRequest", id],
};

export const pictureQueryOptions = {
    currentMatch: {
        queryKey: pictureQueryKeys.currentMatch,
        queryFn: async () => {
            const res = await fetcher(`${baseURL}/api/creators/picture-generate-requests/assigned`);
            return res.json();
        },
    },
    pictureGenerateRequest: (id?: number) => ({
        queryKey: pictureQueryKeys.pictureGenerateRequest(id),
        queryFn: async () => {
            const res = await fetcher(`${baseURL}/api/creators/picture-generate-requests/${id}`);
            return res.json();
        },
    }),
};

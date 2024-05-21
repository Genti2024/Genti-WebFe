import { fetcher } from "@/utils/fetcher";

const baseURL = "https://genti.kr";

const pictureMutationOptions = {
    pictureGenerateRequest: {
        mutationFn: async ({ id, action }: { id: number; action: "accept" | "reject" }) => {
            const res = await fetcher(`${baseURL}/api/creators/picture-generate-requests/${id}/${action}`, {
                method: "POST",
            });
            const data = await res.json();
            console.log(data);
            return data;
        },
    },
};

export { pictureMutationOptions };

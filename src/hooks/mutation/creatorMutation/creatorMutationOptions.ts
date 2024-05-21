import { CreatorStatusResponse, MyInfo } from "@/types/ApiReqRes";
import { fetcher } from "@/utils/fetcher";
import { queryClient } from "@/utils/queryClient";

const baseURL = "https://genti.kr";

const creatorMutationOptions = {
    status: {
        mutationFn: async (status: boolean) => {
            const res = await fetcher(`${baseURL}/api/creators/status`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ workable: status }),
            });

            return (await res.json()) as CreatorStatusResponse;
        },
    },
    account: {
        mutationFn: async (input: Omit<MyInfo, "workable">) => {
            const res = await fetcher(`${baseURL}/api/creators/account`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(input),
            });

            const data = (await res.json()) as CreatorStatusResponse;
            if (data.success) {
                return data;
            }
            throw new Error(data.errorMessage ?? "계좌 등록에 실패했습니다.");
        },
        onSuccess: (_: unknown, response: Omit<MyInfo, "workable">) => {
            const prevData = queryClient.getQueryData(["myInfo"]) as MyInfo;
            queryClient.setQueryData(["myInfo"], { ...prevData, response });
        },
    },
    pictureGenerateRequest: {
        mutationFn: async ({ id, action }: { id: number; action: "accept" | "reject" }) => {
            const res = await fetcher(`${baseURL}/api/creators/picture-generate-requests/${id}/${action}`, {
                method: "POST",
            });

            return (await res.json()) as CreatorStatusResponse;
        },
    },
};

export { creatorMutationOptions };

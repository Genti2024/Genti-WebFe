import { useQuery } from "@tanstack/react-query";
import { MyInfoResponse } from "@/types/ApiReqRes";
import { creatorQueryOptions } from "./creatorQueryOptions";

const useMyInfoQuery = () => {
    return useQuery<MyInfoResponse>(creatorQueryOptions.myInfo);
};

export const creatorQuery = {
    useMyInfoQuery,
};

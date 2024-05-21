import { useQuery } from "@tanstack/react-query";
import { pictureQueryOptions } from "./pictureQueryOption";
import { DetailedPictureGenerateResponse, MatchedWorkResponse } from "@/types/ApiReqRes";

const useCurrentMatchQuery = () => {
    return useQuery<MatchedWorkResponse>(pictureQueryOptions.currentMatch);
};

const usePictureRequestDetailQuery = (id?: number) => {
    return useQuery<DetailedPictureGenerateResponse>(pictureQueryOptions.pictureGenerateRequest(id));
};

const pictureQuery = {
    useCurrentMatchQuery,
    usePictureRequestDetailQuery,
};

export default pictureQuery;

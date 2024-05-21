import { useMutation } from "@tanstack/react-query";
import { pictureMutationOptions } from "./pictureMutationOptions";

const usePicReqStatusMutation = () => {
    return useMutation(pictureMutationOptions.pictureGenerateRequest);
};

const pictureMutation = {
    usePicReqStatusMutation,
};

export default pictureMutation;

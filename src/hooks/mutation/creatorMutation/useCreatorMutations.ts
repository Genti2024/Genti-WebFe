import { useMutation } from "@tanstack/react-query";
import { creatorMutationOptions } from "./creatorMutationOptions";

const useCreatorStatusMutations = () => {
    return useMutation(creatorMutationOptions.status);
};

const useCreatorAccountMutations = () => {
    return useMutation(creatorMutationOptions.account);
};

export const creatorMutation = {
    useCreatorStatusMutations,
    useCreatorAccountMutations,
};

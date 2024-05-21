import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import useLoginStore from "@/store/useLoginStore";
import { loginQueryOptions } from "./loginQueryOptions";
import { creatorQueryKeys } from "../creatorServices/creatorQueryOptions";

const useLoginQuery = () => {
    const query = useQuery(loginQueryOptions.creatorLogin);
    const queryClient = useQueryClient();
    const { setAccessToken, setIsLogin } = useLoginStore();

    useEffect(() => {
        if (query?.data?.response?.accessToken) {
            setIsLogin(true);
            setAccessToken(query.data.response.accessToken);
            queryClient.invalidateQueries({ queryKey: creatorQueryKeys.myInfo });
            queryClient.invalidateQueries({ queryKey: creatorQueryKeys.currentMatch });
        }
    }, [query.data, setAccessToken, setIsLogin, queryClient]);

    return query;
};

const loginQuery = {
    useLoginQuery,
};

export default loginQuery;

import useLoginStore from "@/store/useLoginStore";

export const fetcher = async (url: string, options?: RequestInit) => {
    const jwt = useLoginStore.getState().accessToken;

    if (!jwt) {
        throw new Error("No JWT token found.");
    }
    const res = await fetch(url, {
        ...options,
        headers: {
            ...options?.headers,
            Authorization: `${jwt}`,
        },
    });

    return res;
};

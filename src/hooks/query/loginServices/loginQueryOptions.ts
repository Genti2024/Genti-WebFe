const baseURL = "https://genti.kr";

export const loginQueryKeys = {
    creatorLogin: ["testJWT"],
};

export const loginQueryOptions = {
    creatorLogin: {
        queryKey: loginQueryKeys.creatorLogin,
        queryFn: async () => {
            const res = await fetch(`${baseURL}/login/testjwt?role=creator`);
            return res.json();
        },
    },
};

import { create } from "zustand";

interface LoginStates {
    isLogin: boolean;
    accessToken?: string;
}
interface LoginActions {
    setIsLogin: (isLogin: boolean) => void;
    setAccessToken: (accessToken: string) => void;
}

type LoginStore = LoginStates & LoginActions;

const useLoginStore = create<LoginStore>((set) => ({
    isLogin: false,
    setIsLogin: (isLogin) => set({ isLogin }),
    setAccessToken: (accessToken) => set({ accessToken }),
}));

export default useLoginStore;

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAuthStore = create(
    persist(
        (set, get) => ({
            token: null,
            user: null,
            setUser: (user) => set((state) => ({ ...state, user: user })),
            setToken: (token) => set((state) => ({ ...state, token: token })),
        }),
        {
            name: "math-test-app",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

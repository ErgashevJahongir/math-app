import { create } from "zustand";
import { persist } from "zustand/middleware";

//zustandda bu store yaratish example, bunda hech qanaqa provider qilib o'rab shart emas shunchaki atomik ishliydi hozirgi appga juda mos
export const useAuthStore = create(
    //persist faqat authda ishlating sababi bu yerda faqat shu holatda localstorage kerak
    persist(
        (set, get) => ({
            token: null,
            refreshToken: null,
            setToken: (token) => set({ token: token }),
        }),
        {
            name: "auth", //bu yerda localstorageda saqlanadigan keyi bu json qilib saqlaydi
        }
    )
);


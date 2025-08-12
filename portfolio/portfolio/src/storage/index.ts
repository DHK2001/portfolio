import {
  localStorageGetTheme,
  localStorageSetTheme,
} from "@/utils/local-storage-helpers";
import { create } from "zustand";

type Store = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const useStore = create<Store>()((set) => ({
  theme: localStorageGetTheme() ?? "light",
  setTheme: (themeP: string) => {
    set(() => ({ theme: themeP }));
    localStorageSetTheme(themeP);
  },
}));

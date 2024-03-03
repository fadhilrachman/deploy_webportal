import { create } from "zustand";

export const usePPDB = create((set, get) => ({
  payload: {
    name: "",
    nisn: "",
  },
  setUpdateForm: (payload) => {
    console.log("cuy");
    console.log({ kontol: payload });
    set((state) => ({
      //   ...state,
      payload: payload,
    }));
  },
}));

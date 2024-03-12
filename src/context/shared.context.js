import { create } from "zustand";

export const useShared = create((set, get) => ({
  idSchool: null,
  schoolName: null,
  setIdSchool: (payload) => {
    set((state) => ({
      idSchool: payload,
    }));
  },
  setSchoolName: (payload) => {
    set((state) => ({
      schoolName: payload,
    }));
  },
}));

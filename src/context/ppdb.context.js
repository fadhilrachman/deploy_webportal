import { create } from "zustand";

export const usePPDB = create((set, get) => ({
  payload: {
    fullName: "",
    nisn: "",
    email: "",
    // certificates: [
    //   {
    //     certificate: "",
    //     description: "",
    //   },
    // ],
  },
  otp: false,
  setOtp: (payload) => {
    set((state) => ({
      otp: payload,
    }));
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

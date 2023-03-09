import {create} from 'zustand';

export const useModal = create((set) => ({
  open: false,
  setOpen: (bool) => set({open: Boolean(bool)}),
}));

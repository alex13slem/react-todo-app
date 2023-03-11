import {create} from 'zustand';

export const useModalState = create((set) => ({
  open: false,
  setOpen: (bool) => set({open: Boolean(bool)}),
}));
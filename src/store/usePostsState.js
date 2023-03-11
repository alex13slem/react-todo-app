import {create} from 'zustand';

export const usePostsState = create((set) => ({
  posts: [],
  filter: {sort: '', query: ''},
  setPosts: (posts) => set({posts}),
  setFilter: ({sort, query}) => set({filter: {sort, query}}),
  pagination: {
    page: 1,
    limit: 10,
    totalPages: 0,
    setPage: (page) =>
      set((state) => ({pagination: {...state.pagination, page}})),
    setLimit: (limit) =>
      set((state) => ({pagination: {...state.pagination, limit}})),
    setTotalPages: (totalPages) =>
      set((state) => ({pagination: {...state.pagination, totalPages}})),
  },
}));

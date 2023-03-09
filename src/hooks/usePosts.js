import {useMemo} from 'react';

export const useSortedPosts = (posts, sort) =>
  useMemo(() => {
    if (!sort) {
      return posts;
    }
    return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
  }, [posts, sort]);

export const useSortedAndSearchedPosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);
  return useMemo(() => {
    return [...sortedPosts].filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [sortedPosts, query]);
};

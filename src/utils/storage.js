export const getStoredPosts = () => {
  const stored = localStorage.getItem('sceneit_posts');
  return stored ? JSON.parse(stored) : [];
};

export const savePosts = (posts) => {
  localStorage.setItem('sceneit_posts', JSON.stringify(posts));
};

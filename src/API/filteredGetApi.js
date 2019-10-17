export default item => {
  const {
    comments,
    downloads,
    id,
    largeImageURL,
    likes,
    views,
    webformatURL,
  } = item;
  return { comments, downloads, id, largeImageURL, likes, views, webformatURL };
};

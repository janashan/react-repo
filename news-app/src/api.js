
export const getArticles = async obj => {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${obj.searchTopic}&country=${obj.country}&category=${obj.category}&sortBy=publishedAt`, {
    method: 'GET',
    headers: {
      authorization: '0258a42fe95444ff89f6415834f4f287',
      Accept: 'application/json',
    },
  });

  const json = await response.json();
  return json;
};
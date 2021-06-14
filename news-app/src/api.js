import { NEWS_API_KEY } from "./config";

export const getArticles = async obj => {
  const response = await fetch(
        `https://newsapi.org/v2/top-headlines?q=${obj.searchTopic}&country=${obj.country}&category=${obj.category}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
  );
  debugger
  const json = await response.json();
  return json;
};

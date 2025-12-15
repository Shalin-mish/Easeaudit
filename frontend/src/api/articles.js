const API = "http://localhost:5000/api/articles";

export const getArticles = () =>
  fetch(API).then(res => res.json());

export const getAvailableArticles = () =>
  fetch(`${API}/available`).then(res => res.json());

export const getArticleStatus = () =>
  fetch(`${API}/status`).then(res => res.json());

export const createArticle = (data) =>
  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json());

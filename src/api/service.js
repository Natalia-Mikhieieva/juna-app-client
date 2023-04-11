import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5005/api",
  // withCredentials: true // => you might need this option if using cookies and sessions
});

const errorHandler = (err) => {
  throw err;
};

const getCatalogs = () => {
  return api
    .get("/allcatalogs")
    .then((res) => res.data)
    .catch(errorHandler);
};

const getItems = () => {
  return api
    .get("/items")
    .then((res) => res.data)
    .catch(errorHandler);
};

const uploadImage = (file) => {
  return api
    .post("/upload", file)
    .then((res) => res.data)
    .catch(errorHandler);
};

const createCatalog = (newCatalog) => {
  return api
    .post("/allcatalogs", newCatalog)
    .then((res) => res.data)
    .catch(errorHandler);
};
const createItem = (newItem) => {
  return api
    .post("/items", newItem)
    .then((res) => res.data)
    .catch(errorHandler);
};
const createComment = (newComment) => {
  return api
  .post("item/:itemId/comments", newComment)
  .then((res) => res.data)
  .catch(errorHandler);
}

export default {
  getItems,
  getCatalogs,
  uploadImage,
  createCatalog,
  createItem,
  createComment
};

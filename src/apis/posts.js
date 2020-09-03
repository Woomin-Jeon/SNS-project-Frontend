import axios from 'axios';
import {serverURL} from "../config";

const POSTS_URL = `${serverURL}:7000/posts`;

export const getPosts = async () => {
  const { data } = await axios.get(POSTS_URL);
  return data;
};

export const addPost = async (id, name, contents, profile, imagePath, time) => {
  const { data } = await axios.post(POSTS_URL, {
    id, name, contents, profile, imagePath, time,
  });
  return data;
};

export const removePost = async (uniqueKey) => {
  const { data } = await axios.patch(`${POSTS_URL}/del`, { uniqueKey });
  return data;
};

export const editPost = async (uniqueKey, updatedContents) => {
  const { data } = await axios.patch(POSTS_URL, { uniqueKey, updatedContents });
  return data;
};

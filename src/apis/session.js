import axios from 'axios';
import {serverURL} from "../config";

const SESSION_URL = `${serverURL}:7000/session`;

export const checkSessionExist = async () => {
  const { data } = await axios.get(SESSION_URL);
  return data;
};

export const destroySession = async (userID) => {
  const { data } = await axios.patch(SESSION_URL, { userID });
  return data;
};

export const login = async (userID, userPW, socketID) => {
  const { data } = await axios.post(
    SESSION_URL,
    { userID, userPW, socketID },
    { withCredentials: true }
  );

  return data;
};

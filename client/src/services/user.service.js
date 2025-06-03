import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const signIn = async (email, password) => {
  const { data } = await axios.post(
    `${BASE_URL}/sign-in`,
    {
      email,
      password,
    },
    { withCredentials: true }
  );

  return data;
};

export const signUp = async (payload) => {
  const { data } = await axios.post(`${BASE_URL}/sign-up`, payload, {
    withCredentials: true,
  });

  return data;
};

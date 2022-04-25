import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

const BASE_URL = "http://localhost:5000";

function createConfig(token: string) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export async function signIn(data: any) {
  const userData = await axios.post(`${BASE_URL}/sign-in`, data);
  return userData;
}

export async function signUp(data: any) {
  if (checkSamePassword(data.password, data.confirmPassword)) {
    const promise = await axios.post(`${BASE_URL}/sign-up`, data);
    return promise;
  }
  return false;
}

function checkSamePassword(password: string, confirmPassword: string) {
  if (password !== confirmPassword) {
    return false;
  }
  return true;
}

export async function logOut(token: string) {
  const config = createConfig(token);
  await axios.delete(`${BASE_URL}/logout`, config);
}

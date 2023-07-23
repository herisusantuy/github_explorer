import axios from 'axios';
import useSWR from 'swr';

const BASE_URL = import.meta.env.VITE_BASEURL;
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const githubApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `token ${TOKEN}`
  }
});

export const fetcher = async (url: string) => {
  try {
    const response = await githubApi.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const useUser = (username: string) => {
  const { data, error, isLoading } = useSWR(
    `users?username${username}`,
    fetcher
  );
  return {
    users: data,
    isLoading,
    isError: error
  };
};

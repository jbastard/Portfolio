import axios from 'axios';

const GITHUB_API_KEY = process.env.GITHUB_API_KEY;

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${GITHUB_API_KEY}`,
    Accept: 'application/vnd.github.v3+json',
  },
});

const getUser = async (username: string) => {
  const response = await githubApi.get(`/users/${username}`);
  return response.data;
};

const getRepos = async (username: string) => {
  const response = await githubApi.get(`/users/${username}/repos`);
  return response.data;
};

const getRepo = async (username: string, repo: string) => {
  const response = await githubApi.get(`/repos/${username}/${repo}`);
  return response.data;
};

export const gitHubRepository = {
  getUser,
  getRepos,
  getRepo,
};
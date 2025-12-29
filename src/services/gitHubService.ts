import { gitHubRepository } from "@repositories/gitHubRepository";


// Fetch et entre en DB les repos valides d'un utilisateur GitHub
const fetchGitHubUserRepositories = async (username: string) => {
  
  return gitHubRepository.getUser(username);
}
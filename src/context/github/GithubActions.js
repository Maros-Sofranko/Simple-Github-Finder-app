import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: {Authorization: `token ${GITHUB_TOKEN}`}
})

// Search for users
export const searchUsers = async (text) => {
    // CEZ FETCH API
    /* const response = await fetch(`${GITHUB_URL}/search/users?q=${text}`, {
        heareds: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    });

    const { items } = await response.json();

    return items; */

    // CEZ AXIOS
    const response = await github.get(`/search/users?q=${text}`);
    return response.data.items;
}

// Get single user and his/her repos in one function
export const getUserAndRepos = async (login) => {
    const params = new URLSearchParams({
        sort: "created",
        per_page: 10
    })

    const userData = await github.get(`/users/${login}`);
    const userReposData = await github.get(`users/${login}/repos?${params}`);

    return {user: userData.data, repos: userReposData.data};
}

// Get single user
/* export const getUser = async (login) => {
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
        heareds: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    });

    if (response.status === 404) {
        window.location = "/notfound";
    } else {
        const data = await response.json();

        return data;
    }
} */

// Get user Repos
/* export const getUserRepos = async (login) => {
    const params = new URLSearchParams({
        sort: "created",
        per_page: 10
    })

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
        heareds: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    });

    const data = await response.json();

    return data;
} */
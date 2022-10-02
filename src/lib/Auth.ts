import Const from "@type/Const";

export default class Auth {
    username: string;
    accessToken: string;

    constructor(queryParams: string = window.location.search) {
        const urlParams: URLSearchParams = new URLSearchParams(queryParams);
        this.username = urlParams.get(Const.USERNAME_QUERY_KEY) || localStorage.getItem(Const.USERNAME_STORAGE_KEY);
        this.accessToken = urlParams.get(Const.ACCESS_TOKEN_QUERY_KEY) || localStorage.getItem(Const.ACCESS_TOKEN_STORAGE_KEY);
    }

    getCredentials() {
        const { username, accessToken } = this;
        return { username, accessToken };
    }

    updateCredentialsInStorage() {
        localStorage.setItem(Const.USERNAME_STORAGE_KEY, this.username);
        localStorage.setItem(Const.ACCESS_TOKEN_STORAGE_KEY, this.accessToken);
    }

    async verifyCredentials() {

    }
}
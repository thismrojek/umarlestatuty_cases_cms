import Const from "@type/Const";
import REST from "../data/REST";

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
        const basicAuth: string = `Basic ${btoa(`${username}:${accessToken}`)}`;
        return { username, accessToken, basicAuth };
    }

    updateCredentialsInStorage() {
        localStorage.setItem(Const.USERNAME_STORAGE_KEY, this.username);
        localStorage.setItem(Const.ACCESS_TOKEN_STORAGE_KEY, this.accessToken);
    }

    async verifyCredentials() {
        const Rest = new REST();
        const credentialsVerified: boolean = await Rest.request.credentials.verify();
        if (credentialsVerified) this.updateCredentialsInStorage();
        
        return credentialsVerified;
    }
}
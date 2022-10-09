import Auth from "@lib/Auth";
import env from "@lib/env";

export default class REST {
    private basicAuthCredentials: string;
    public coreRESTUrl: string;

    constructor() {
        const CredentialsManager: Auth = new Auth();
        this.basicAuthCredentials = CredentialsManager.getCredentials().basicAuth;
        this.coreRESTUrl = env.REST_CORE_URL;        
    }

    private getRequestHeaders(): Headers {
        const requestHeaders: Headers = new Headers();
        requestHeaders.append('Authorization', this.basicAuthCredentials);

        return requestHeaders;
    }

    private getRequestEndpoint(path: string): string {
        return `http://localhost:2137${path}`;
    }

    public request = {
        credentials: {
            verify: async () => {
                const response = await fetch(this.getRequestEndpoint('/auth/verify'), { headers: this.getRequestHeaders() });
                const verifyResult = await response.json();
                return verifyResult.success ? verifyResult.success : false;
            }
        },

        cases: {
            get: async (keywords: string = '') => {
                const response = await fetch(this.getRequestEndpoint(`/cases?keywords=${keywords}`));
                return await response.json();
            }
        }
    }
}
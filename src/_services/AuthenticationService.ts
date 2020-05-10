import axios, {AxiosInstance, AxiosResponse} from "axios";

export class AuthenticationService {
    protected axiosInstance: AxiosInstance;

    constructor() {
        //todo move to configuration
        this.axiosInstance = axios.create({
            baseURL: 'http://147.135.210.61:8081'
            //baseURL: 'http://localhost:8081'
        });
    }

    public register(email: string, password: string, confirmPassword: string): Promise<any> {
        if (password !== confirmPassword) {
            return Promise.reject() //todo reason
        }

        if (!AuthenticationService.isEmail(email)) {
            return Promise.reject() //todo reason
        }

        return this.axiosInstance.post('/v1/user', {
            email: email,
            password: password
        })
            .then(this.handleResponse)
            .then((response: AxiosResponse) => {
                return response.data
            })
    }

    public login(email: string, password: string): Promise<string> {
        if (!AuthenticationService.isEmail(email)) {
            return Promise.reject() //todo reason
        }

        return this.axiosInstance.post('/v1/login', {
            email: email,
            password: password
        })
            .then(this.handleResponse)
            .then((response: AxiosResponse) => {
                let token = response.headers['authorization'];

                localStorage.setItem('token', token);

                return token;
            })
    }

    public logout() {
        localStorage.removeItem('token');
        location.reload();
    }

    private handleResponse(response: AxiosResponse): AxiosResponse {
        if (!AuthenticationService.isResponseOk(response)) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                this.logout();
            }

            const data = response.data;
            const error = (data && data.data.message) || response.statusText;

            throw new Error(error)
        }

        return response
    }

    private static isEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    private static isResponseOk(response: AxiosResponse): boolean {
        return (response.status >= 200 && response.status < 300)
    }
}
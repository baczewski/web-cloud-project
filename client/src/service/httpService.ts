import { 
    isUndefined, 
    omitBy, 
    trimEnd, 
    trimStart 
} from 'lodash';

export class HttpError extends Error {
    constructor(public status: number, public message: string, public body: any) {
        super(message);
    }
}

interface RequestOptions {
    body?: unknown;
    query?: Record<string, string | undefined>;
};

class HttpService {
    public authErrorHandler = () => { }

    constructor(private baseUrl: string) { }

    async get<T>(path: string, options: RequestOptions = { }) {
        return this.request<T>('GET', path, options);
    }

    async post<T>(path: string, options: RequestOptions) {
        return this.request<T>('POST', path, options);
    }

    async put<T>(path: string, options: RequestOptions) {
        return this.request<T>('PUT', path, options);
    }

    async delete<T>(path: string, options: RequestOptions) {
        return this.request<T>('DELETE', path, options);
    }

    private async request<T>(method: string, path: string, options: RequestOptions): Promise<T> {
        const authToken = localStorage.getItem('user');

        const queryWithoutUndefined = omitBy(options.query, isUndefined) as Record<string, string>;
        const queryParams = new URLSearchParams(queryWithoutUndefined).toString();
        const url = `${trimEnd(this.baseUrl, '/')}/${trimStart(path, '/')}?${queryParams}`;

        const response = await fetch(url, {
            method,
            ...(options.body ? { body: JSON.stringify(options.body) } : { }),
            headers: {
                ...(options.body ? { 'Content-Type': 'application/json' } : { }),
                ...(authToken ? { 'Authorization': `Bearer ${authToken}` } : { })
            }
        });
        
        if (response.status === 401) {
            this.authErrorHandler();
        }

        if (response.status >= 300) {
            let body = undefined;

            try {
                body = await response.json();
            } catch {
                console.log();
            }

            console.log(body);

            throw new HttpError(response.status, 'Something went wrong', body);
        }

        return await response.json();
    }
}

export const httpService = new HttpService('http://localhost:8080');
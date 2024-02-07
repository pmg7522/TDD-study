export interface IErrorResponse {
    message: string | string[];
    error: string;
    statusCode: number;
}

export interface IResponse {
    message: string;
    data: any | null;
    meta?: any;
}

export interface IAccessToken {
    accessToken: string;
}

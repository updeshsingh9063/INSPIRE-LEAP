import { Request, Response, NextFunction } from 'express';
export declare class AppError extends Error {
    statusCode: number;
    isOperational: boolean;
    constructor(message: string, statusCode: number);
}
export declare const asyncHandler: (fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>) => (req: Request, res: Response, next: NextFunction) => void;
export declare const sendSuccess: (res: Response, data: unknown, message?: string, statusCode?: number) => Response<any, Record<string, any>>;
export declare const sendPaginated: (res: Response, data: unknown[], total: number, page: number, limit: number, message?: string) => Response<any, Record<string, any>>;
export declare const getPaginationParams: (query: {
    page?: string;
    limit?: string;
}) => {
    page: number;
    limit: number;
    skip: number;
};
//# sourceMappingURL=response.d.ts.map
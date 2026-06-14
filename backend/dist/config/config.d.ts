export declare const config: {
    port: number;
    nodeEnv: string;
    isDev: boolean;
    db: {
        url: string;
    };
    jwt: {
        accessSecret: string;
        refreshSecret: string;
        accessExpiresIn: string;
        refreshExpiresIn: string;
    };
    session: {
        secret: string;
    };
    email: {
        host: string;
        port: number;
        user: string;
        pass: string;
        from: string;
        adminEmail: string;
    };
    razorpay: {
        keyId: string;
        keySecret: string;
    };
    frontend: {
        url: string;
    };
    rateLimit: {
        windowMs: number;
        max: number;
    };
};
//# sourceMappingURL=config.d.ts.map
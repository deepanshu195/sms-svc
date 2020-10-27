export interface ServiceCred {
    type: string;
    cred: {
        transactional: {
            method: string;
            api_key: string;
            sender: string;
            baseEndpoint: string;
        };
        otp: {
            method: string;
            api_key: string;
            sender: string;
            baseEndpoint: string;
        };
        promotional: {
            method: string;
            api_key: string;
            sender: string;
            baseEndpoint: string;
        };
    };
}
export interface Credentials {
    vendorConfigList: Array<ServiceCred>;
}
export interface Logger {
    log: any;
    info: any;
    error: any;
}

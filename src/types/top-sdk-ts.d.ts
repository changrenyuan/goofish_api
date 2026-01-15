declare module '@local/topsdk' {
  export interface ApiClientOptions {
    appkey: string;
    appsecret: string;
    url?: string;
    REST_URL?: string;
  }

  export class ApiClient {
    constructor(options: ApiClientOptions);

    execute(
      apiname: string,
      params: Record<string, any>,
      callback: (error: any, response: any) => void
    ): void;
  }

  export class TmcClient {
    constructor(options: ApiClientOptions);
  }

  export class DingTalkClient {
    constructor(options: ApiClientOptions);
  }
}

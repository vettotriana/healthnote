import 'express';

declare module 'express-serve-static-core' {
  interface Response {
    __: (phrase: string, ...args: any[]) => string;
    __n: (phrase: string, count: number) => string;
  }
}

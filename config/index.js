import Env from './env';

let config = {
    env: Env,
    production: {
        env: "production",
        baseURL: "http://127.0.0.1:8090"
    },
    dev: {
        env: "dev",
        baseURL: "http://127.0.0.1:8090"
    }
};
export default config;

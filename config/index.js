var path = require('path');

module.exports = {
    production: {
        env: "production",
        port: 8090,
        baseURL: "http://127.0.0.1"
    },
    dev: {
        env: "development",
        port: 8090,
        baseURL: "http://127.0.0.1"
    }
};

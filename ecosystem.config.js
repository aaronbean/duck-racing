module.exports = {
    apps: [
        {
            name: 'duck-racing',
            script: 'serve',
            env: {
                PM2_SERVE_PATH: './app/dist',
                PM2_SERVE_PORT: 5173,
                PM2_SERVE_SPA: 'true',
            },
        },
    ],
};

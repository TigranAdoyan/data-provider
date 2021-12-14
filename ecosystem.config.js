module.exports = {
  apps: [
    {
      name: 'CDP',
      script: './app.js',
      watch: false,
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production'
      },
    },
  ],
};

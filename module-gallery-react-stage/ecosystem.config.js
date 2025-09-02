module.exports = {
  apps: [
    {
      name: 'DXP-Component-Gallery-Dev',
      script: 'npm',
      args: 'start',
      env: {
        PORT: 3000,
        NODE_ENV: 'production',
      }
    },
    {
      name: 'DXP-Component-Gallery-Stage',
      script: 'npm',
      args: 'start',
      env: {
        PORT: 4001,
        NODE_ENV: 'production',
      }
    }
  ]
};

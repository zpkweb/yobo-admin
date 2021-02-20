module.exports = {
  apps: [
    {
      name: 'yobo-admin',
      // exec_mode: 'cluster',
      // instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      // script: './server.js',
      args: 'start',
      port: '3080',
      env: {
        ORIGIN: "http://39.105.190.188:7001"
      }
    },
  ],
}

const path = require('path')
const Restapify = require('restapify').default

const apiFolderPath = path.resolve(__dirname, './api')

const rpfy = new Restapify({
    rootDir: apiFolderPath,
    port: process.env.PORT,
})

console.log("route", rpfy.getServedRoutes());

rpfy.on('error', ({error, message}) => {
    console.log(error + ' ' + message)
})

rpfy.on('start', () => {
    console.log(`restapify API is served at ${rpfy.publicPath}`);
})

rpfy.run()

const Hapi = require('@hapi/hapi');
const routers = require('./routers');

(async()=>{
    const server = Hapi.server({
        port:5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        routes:{
            cors:{
                origin:['*'],
            }
        }
    });
    server.route(routers);

    await server.start();
    console.log(`server run is ${server.info.uri}`);
})();
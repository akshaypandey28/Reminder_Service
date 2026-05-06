const express = require('express');

const { PORT } = require('./config/serverConfig.js');

const jobs = require('./utils/job.js');

const ApiRoutes = require('./routes/index.js'); //ApiRoutes is a router

const setupAndStartServer = async () => {
    const app = express();

    app.use(express.json());

    app.use(express.urlencoded({extended: true}));

    app.use('/api',ApiRoutes); 
    
    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
        jobs();
    });
}

setupAndStartServer();
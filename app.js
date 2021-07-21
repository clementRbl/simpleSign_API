import express from 'express';
import Server from './src/config/server';
import db from './src/config/database';
import config from './src/config/env';
import morgan from 'morgan';
import routes from './src/modules';

const middlewares = {morgan};

const application = new Server(express, routes, middlewares);

(async () => {
    try {
        await db.associateAll(db.sequelize.models)
        await db.sequelize.sync({atler: true})
        await application.listen(config.app_port);
    } catch (e) {
        console.log(e);
    }
})()
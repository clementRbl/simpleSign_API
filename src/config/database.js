import {Sequelize} from 'sequelize';
import config from './env';

const sequelize = new Sequelize( config.db_name, config.db_user, config.db_password, {dialect: "mysql"});
const associateAll = async (models) => Object.values(models).map((model) => model.associate(models));
const db = {sequelize, Sequelize, associateAll};

export default db;
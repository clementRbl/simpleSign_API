import {Model, DataTypes} from 'sequelize';
import db from '../../config/database';

class AdminDao extends Model {
    static init(sequelize) {
        return super.init(
            {
                email: DataTypes.STRING,
                password: DataTypes.STRING,
            }, {sequelize, modelName: 'Admin',freezeTableName: true}
        );
    }
};

AdminDao.init(db.sequelize);


export default AdminDao;
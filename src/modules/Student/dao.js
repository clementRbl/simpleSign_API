import {Model, DataTypes} from 'sequelize';
import db from '../../config/database';

class StudentDao extends Model {
    static init(sequelize) {
        return super.init(
            {
                email: DataTypes.STRING,
                password: DataTypes.STRING,
                role: DataTypes.STRING
            }, {sequelize, modelName: 'Student', freezeTableName: true}
        );
    }
    static associate(models) {
        console.log(models);
        // this.belongsTo(models.Promotion)
            return this;
        };
};

StudentDao.init(db.sequelize);

export default StudentDao;
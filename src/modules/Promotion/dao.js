import {Model, DataTypes} from 'sequelize';
import db from '../../config/database';

class PromotionDao extends Model {
    static init(sequelize) {
        return super.init(
            {
                email: DataTypes.STRING,
                password: DataTypes.STRING,
                role: DataTypes.STRING
            }, {sequelize, modelName: 'Promotion', freezeTableName: true}
        );
    }
    static associate(models) {
        console.log(models);

        // this.hasMany(models.Promotion, { foreignKey: 'id_promotion', as: 'Promotion'});
        // this.hasMany(models.Student, { foreignKey: 'id_promotion', as: 'Student'});
            return this;
        };
};

PromotionDao.init(db.sequelize);

export default PromotionDao;
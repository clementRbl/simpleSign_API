import {Model, DataTypes} from 'sequelize';
import db from '../../config/database';

class ProfessorDao extends Model {
    static init(sequelize) {
        return super.init(
            {
                email: DataTypes.STRING,
                password: DataTypes.STRING,
                role: DataTypes.STRING
            }, {sequelize, modelName: 'Professor', freezeTableName: true}
        );
    }
    static associate(models) {
        console.log(models);

        // this.hasMany(models.Promotion, { foreignKey: 'id_professor', as: 'Promotion'});
        // this.hasMany(models.Student, { foreignKey: 'id_professor', as: 'Student'});
            return this;
        };
};

ProfessorDao.init(db.sequelize);

export default ProfessorDao;
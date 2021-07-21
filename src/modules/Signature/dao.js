import {Model, DataTypes} from 'sequelize';
import db from '../../config/database';

class SignatureDao extends Model {
    static init(sequelize) {
        return super.init(
            {
                typeDate: DataTypes.STRING,
                isSignedFromProfessor: DataTypes.BOOLEAN
            }, {sequelize, modelName: 'Signature', freezeTableName: true}
        );
    }
};

SignatureDao.init(db.sequelize);

export default SignatureDao;
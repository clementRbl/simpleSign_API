import {Model, DataTypes} from 'sequelize';
import db from '../../config/database';

class SignatureDao extends Model {
    static init(sequelize) {
        return super.init(
            {
                date: DataTypes.DATE,
                isSignedFromProfessor: DataTypes.BOOLEAN
            }, {sequelize, modelName: 'Signature'}
        );
    }
};

SignatureDao.init(db.sequelize);

export default SignatureDao;
class SignatureRepository {
    constructor(signatureDao) {
        this.signatureDao = signatureDao
    }

    async findAll() {
        return await this.signatureDAO.findAll();
    }

}

export default SignatureRepository
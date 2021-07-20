import SignatureEntity from './entity';

class SignatureService {
    constructor(signatureRepository) {
        this.signatureRepo = this.signatureRepository;
    }

    async getAll() {
        const signatures = await this.signatureRepo.findAll();
        return signatures.map((signature) => new SignatureEntity(signature));
    }
}

export default SignatureService
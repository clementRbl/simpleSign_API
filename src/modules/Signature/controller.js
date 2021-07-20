class SignatureController {
    
    constructor(signatureService) {
        this.signatureService = signatureService
    }

    getAll = async ({res, next}) => {
        try {
            let signatures = await this.signatureService.getAll()
            res.status(200).json(signatures)
        } catch (error) {
            next(err)
        }
    }
}

export default SignatureController
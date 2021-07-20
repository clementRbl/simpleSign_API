

class SignatureEntity {
    
    constructor({id, date, isSignedFromProfessor = []}) {
        this.id = id;
        this.date = date
        this.isSignedFromProfessor = isSignedFromProfessor
    }
}

export default SignatureEntity;
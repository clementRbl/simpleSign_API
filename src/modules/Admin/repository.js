class AdminRepository {
    constructor(adminDao, studentDao, professorDao) {
        this.adminDAO = adminDao;
        this.studentDAO = studentDao;
        this.professorDAO = professorDao;
    }

    async getAllAdmins() {
        return await this.adminDAO.findAll();
    }

    async getAllStudents() {
        return await this.studentDAO.findAll();
    }

    async getAllProfessors() {
        return await this.professorDAO.findAll();
    }

    async registerAdmin(adminEntity) {
        return await this.adminDAO.create(adminEntity)
    }

    async registerStudent(studentEntity) {
        return await this.studentDAO.create(studentEntity)
    }

    async registerProfessor(professorEntity) {
        return await this.professorDAO.create(professorEntity)
    }

}

export default AdminRepository
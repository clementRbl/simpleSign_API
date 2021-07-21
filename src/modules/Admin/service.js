import ProfessorEntity from '../Professor/entity';
import StudentEntity from '../Student/entity'
import AdminEntity from './entity'

class adminService {
    constructor(adminRepository) {
        this.adminRepo = adminRepository
    }

    async getAllAdmins() {
        const admins = await this.adminRepo.getAllAdmins();
        return admins.map((admin) => new AdminEntity(admin));
    }

    async getAllStudents() {
        const students = await this.adminRepo.getAllStudents();
        return students.map((student) => new StudentEntity(student));
    }

    async getAllProfessors() {
        const professors = await this.adminRepo.getAllProfessors();
        return professors.map((professor) => new ProfessorEntity(professor));
    }

    async registerAdmin(adminData) {
        const adminEntity = new AdminEntity(adminData);
        const newAdmin = await this.adminRepo.registerAdmin(adminEntity)
        return new AdminEntity(newAdmin)
    }

    async registerStudent(studentData) {
        const studentEntity = new StudentEntity(studentData);
        const newStudent = await this.adminRepo.registerStudent(studentEntity)
        return new StudentEntity(newStudent)
    }

    async registerProfessor(professorData) {
        const professorEntity = new ProfessorEntity(professorData);
        const newProfessor = await this.adminRepo.registerProfessor(professorEntity)
        return new ProfessorEntity(newProfessor)
    }
}

export default adminService;
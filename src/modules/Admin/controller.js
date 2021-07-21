class AdminController {
    
    constructor(adminService) {
        this.adminService = adminService;
    }
    getAllAdmins = async ({res, next}) => {
        try {
            let admins = await this.adminService.getAllAdmins();
            res.status(200).json(admins)
        } catch (err) {
            next(err)
        }
    }

    getAllStudents = async ({res, next}) => {
        try {
            let students = await this.adminService.getAllStudents();
            res.status(200).json(students)
        } catch (err) {
            next(err)
        }
    }

    getAllProfessors = async ({res, next}) => {
        try {
            let professor = await this.adminService.getAllProfessors();
            res.status(200).json(professor)
        } catch (err) {
            next(err)
        }
    }

    registerAdmin = async (req, res, next) => {
        try {
            const admin = await this.adminService.registerAdmin({...req.body})
            res.status(201).json(admin)
        } catch (error) {
            next(error)
        }
    }

    registerStudent = async (req, res, next) => {
        try {
            const student = await this.adminService.registerStudent({...req.body})
            res.status(201).json(student)
        } catch (error) {
            next(error)
        }
    }

    registerProfessor = async (req, res, next) => {
        try {
            const professor = await this.adminService.registerProfessor({...req.body})
            res.status(201).json(professor)
        } catch (error) {
            next(error)
        }
    }

    
}

export default AdminController
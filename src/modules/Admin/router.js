class AdminRouter {
    constructor(router, adminController) {
        this.router = router;
        this.initializeRoutes(adminController);
        return this.router;
    }

    initializeRoutes(adminController) {
        this.router.route('/admins')
            .get(adminController.getAllAdmins)
            .post(adminController.registerAdmin);

        this.router.route('/students')
            .get(adminController.getAllStudents)
            .post(adminController.registerStudent);

        this.router.route('/professors')
            .get(adminController.getAllProfessors)
            .post(adminController.registerProfessor);
    }
}

export default AdminRouter;

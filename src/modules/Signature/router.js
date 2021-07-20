class SignatureRouter {
    constructor(router, signatureController) {
        this.router = router;
        this.initializeRoutes(signatureController);
        return this.router;
    }

    initializeRoutes(signatureController) {
        this.router.route('/signatures')
            .get(signatureController.getAll)
    }
}

export default SignatureRouter;

class Server {
    constructor(express, routes, middlewares) {
        this.app = express();
        this.initializeBodyParsing(express);
        this.initializeMiddlewares(middlewares);
        this.initializeApplicationRouter(routes);
    }

    initializeBodyParsing(express) {
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
    }

    initializeMiddlewares({morgan}) {
        this.app.use(morgan('combined'));
    }

    initializeApplicationRouter(routes) {
        this.app.use(routes);
    }

    listen(port) {
        this.app.listen(port, async () => console.log(`application started on port : ${port}`));
    }
}

export default Server;
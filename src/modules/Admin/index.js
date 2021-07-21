import {Router} from 'express';

import StudentDao from '../Student/dao';
import ProfessorDao from '../Professor/dao';
import AdminDao from './dao';
import AdminRepository from './repository';
import AdminService from './service';
import AdminController from './controller';
import AdminRouter from './router';

const router = Router()

const adminRepository = new AdminRepository(AdminDao, StudentDao, ProfessorDao);
const adminService = new AdminService(adminRepository);
const adminController = new AdminController(adminService);
const adminRouter = new AdminRouter(router, adminController);

export {adminRouter, AdminDao, StudentDao}
import {Router} from 'express';

import StudentDao from './dao';
import StudentRepository from './repository';
import StudentService from './service';
import StudentController from './controller';
import StudentRouter from './router';

const router = Router()

const studentRepository = new StudentRepository(StudentDao);
const studentService = new StudentService(studentRepository);
const studentController = new StudentController(studentService);
const studentRouter = new StudentRouter(router, studentController);

export {studentRouter, StudentDao}
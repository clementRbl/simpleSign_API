import {Router} from 'express';

import ProfessorDao from './dao';
import ProfessorRepository from './repository';
import ProfessorService from './service';
import ProfessorController from './controller';
import ProfessorRouter from './router';

const router = Router()

const professorRepository = new ProfessorRepository(ProfessorDao);
const professorService = new ProfessorService(professorRepository);
const professorController = new ProfessorController(professorService);
const professorRouter = new ProfessorRouter(router, professorController);

export {professorRouter, ProfessorDao}
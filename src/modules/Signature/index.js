import {Router} from 'express';

import SignatureDao from './dao';
import SignatureRepository from './repository';
import SignatureService from './service';
import SignatureController from './controller';
import SignatureRouter from './router';

const router = Router()

const signatureRepository = new SignatureRepository(SignatureDao);
const signatureService = new SignatureService(signatureRepository);
const signatureController = new SignatureController(signatureService);
const signatureRouter = new SignatureRouter(router, signatureController);

export {signatureRouter, SignatureDao}
import {Router} from 'express';

import PromotionDao from './dao';
import PromotionRepository from './repository';
import PromotionService from './service';
import PromotionController from './controller';
import PromotionRouter from './router';

const router = Router()

const promotionRepository = new PromotionRepository(PromotionDao);
const promotionService = new PromotionService(promotionRepository);
const promotionController = new PromotionController(promotionService);
const promotionRouter = new PromotionRouter(router, promotionController);

export {promotionRouter, PromotionDao}
import ProfessorEntity from '../Professor/entity';
import StudentEntity from '../Student/entity'
import PromotionEntity from './entity'

class promotionService {
    constructor(promotionRepository) {
        this.promotionRepo = promotionRepository;
    }

    async getAllpromotions() {
        const promotions = await this.promotionRepo.getAllPromotions();
        return promotions.map((promotion) => new PromotionEntity(promotion));
    }

    async createPromotion(promotionData) {
        const promotionEntity = new PromotionEntity(promotionData);
        const newPromotion = await this.promotionRepo.createPromotion(promotionEntity)
        return new PromotionEntity(newPromotion)
    }

}

export default promotionService;
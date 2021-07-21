class PromotionController {
    constructor(promotionService) {
        this.promotionService = promotionService;
    }

    getAllPromotions = async ({res, next}) => {
        try {
            let promotions = await this.promotionService.getAllPromotions();
            res.status(200).json(promotions)
        } catch (err) {
            next(err)
        }
    }

    createPromotion = async (req, res, next) => {
        try {
            const promotion = await this.promotionService.createPromotion({...req.body})
            res.status(201).json(promotion)
        } catch (error) {
            next(error)
        }
    }

}

export default PromotionController
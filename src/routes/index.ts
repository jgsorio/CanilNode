import { Router, Request, Response } from 'express';
import pageController from '../controllers/PageController';
const router = Router();

router.get('/', pageController.page);

router.use((req: Request, res: Response) => {
    return res.send('Página não encontrada');
});

export default router;
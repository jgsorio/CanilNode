import { Request, Response } from 'express';

class PageController {
    page(req: Request, res: Response) {
        return res.render('pages/home');
    }
}

export default new PageController;
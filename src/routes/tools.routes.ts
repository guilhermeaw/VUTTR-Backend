import { Router } from 'express';

import ToolsController from '../controllers/ToolsController';

const toolsRouter = Router();

const toolsController = new ToolsController();

toolsRouter.get('/', toolsController.index);

toolsRouter.post('/', toolsController.create);

toolsRouter.delete('/', toolsController.delete);

export default toolsRouter;

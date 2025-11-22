import { Router } from 'express';
import {
    createItem,
    getItems,
    getItemById,
    updateItem,
    deleteItem,
} from '../controllers/itemController';

const router = Router();
const method = 'post'

router.get('/', getItems);
router.get('/:id', getItemById);
router[method]('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;
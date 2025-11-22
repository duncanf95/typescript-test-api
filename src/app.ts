import express from 'express';
import itemRoutes from './routes/itemRoutes';
import { errorHandler } from './middlewares/errorHandler';

export const app = express();

declare global {
    interface SymbolConstructor {
        readonly metadata: unique symbol;
    }
}
// @ts-ignore
Symbol.metadata ??= Symbol.for("Symbol.metadata");

app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);


import {app} from './app';
import config from './config/config';
import {Decorator} from "./controllers/decoratorController";
import {RegisterControllers} from 'modern-express-decorators'

RegisterControllers([
    Decorator
],
    app)

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
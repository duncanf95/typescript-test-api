import {app} from './app';
import config from './config/config';
import {RegisterControllers} from 'modern-express-decorators'
import {TestController} from "./controllers/TestController";

RegisterControllers([
    TestController
],
    app)

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
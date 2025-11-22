import {app} from './app';
import config from './config/config';
import {Decorator} from "./controllers/decoratorController";
import {Controller} from "./decorators/classDecorator";

function debugRoutes(controller: any) {
    console.log("test:")
    console.log(controller[Symbol.metadata].baseRoute)
}



debugRoutes(Decorator)

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
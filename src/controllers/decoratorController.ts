import {Controller} from "../decorators/classDecorator";

export class Decorator {
    @Controller
    private someVal: string = ''
    getData() {
        return {}
    }
}
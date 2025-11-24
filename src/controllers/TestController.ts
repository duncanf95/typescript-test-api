import {Request, Response} from "express";
import {Controller, Get, Post} from "modern-express-decorators";
import {Param} from "modern-express-decorators";

@Controller('/base_route')
export class TestController {
    public someVal: string

    constructor() {
        this.someVal = 'value'
    }

    @Get('/sub_route')
    public getData(req: Request, res: Response,)
    {
        res.json(
            {
                thing: this.someVal
            }
        )
        return res
    }

    @Post('/sub_route')
    public async postData(req: Request, res: Response,)
    {
        res.json(
            req.body
        )
        return res
    }

    @Param
    public async testParam(something: string) {

    }
}
import {Request, Response} from "express";
import {Controller, Get, Post} from "modern-express-decorators";

@Controller('/base_route')
export class Decorator {
    public someVal: string

    constructor() {
        this.someVal = 'value'
    }

    @Get('/sub_route')
    public getData(req: Request, res: Response,)
    {
        console.log(this)
        res.json(
            {
                thing: this.someVal
            }
        )
        return res
    }

    @Post('/sub_route')
    public postData(req: Request, res: Response,)
    {
        console.log(this)
        res.json(
            req.body
        )
        return res
    }
}
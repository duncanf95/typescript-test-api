import {Context} from "node:vm";

export function Controller(_target: any, context: Context) {
    context.metadata['baseRoute'] = '/some_route'
    context.metadata['routes'] = ['']
    console.log(context)
}
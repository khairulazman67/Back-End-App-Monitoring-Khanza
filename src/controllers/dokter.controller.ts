import { NextFunction, Request, Response } from 'express'


export const getDoctor = async(req: Request, res:Response, next:NextFunction)=>{
    try{
        const products = 'await getAllProducts()';
        res.send(products)
    }catch (error) {
        next(error);
    }
}

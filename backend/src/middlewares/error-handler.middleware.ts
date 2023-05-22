import { NextFunction, Request, Response } from "express";

const errorHandler = (error: any, request:Request, response:Response, next:NextFunction) => {
    response.status(400).json({
        statusCode: 400,
        message: error,
        error: 'Server Error'
    });
}

export default errorHandler;
import express, { NextFunction, Request, Response } from 'express';
import { getRecommendations } from '../services/recommendations.service';
import { getMovie } from '../services/movies.service';

const moviesRouter = express.Router();

moviesRouter.get('/', async (request:Request, response:Response, next:NextFunction) => {
    const params = request.query;
    try {
        const recommendation = await getRecommendations(params.message as string || 'give me a random movie');
        const movieInfo = await getMovie(recommendation.title); 
        response.send({
            ...movieInfo?.results[0],
            title: recommendation.title,
            description: recommendation.description
        });
    } catch(error) {
        next(error);
    }
});

export default moviesRouter;
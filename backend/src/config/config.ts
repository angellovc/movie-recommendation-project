import dotenv from 'dotenv';

dotenv.config();
const recommendationsApi = process.env.RECOMMENDATIONS_API || '';
const recommendationsKey = process.env.RECOMMENDATIONS_KEY || '';
const moviesApi = process.env.MOVIES_API || '';
const moviesKey = process.env.MOVIES_KEY || '';
const moviesHost = process.env.MOVIES_HOST || '';
const host = process.env.HOST;
export {
    recommendationsApi,
    recommendationsKey,
    moviesApi,
    moviesKey,
    moviesHost,
    host,
}
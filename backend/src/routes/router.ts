import {Application} from 'express';
import moviesRouter from './movies.route';

const router = (app: Application) => {
    app.use('/movies',moviesRouter);
}

export default router;
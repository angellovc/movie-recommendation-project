import express from 'express';
import router from './routes/router';
import cors from 'cors';
import errorHandler from './middlewares/error-handler.middleware';

const app = express();

app.use(express.json());
    app.use(cors({
        origin: '*',
        methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
	}));
router(app);
app.use(errorHandler);


app.listen(3000, () => {
    console.log('Listening on port 3000')
})
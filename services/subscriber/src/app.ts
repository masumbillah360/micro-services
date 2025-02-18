import express from 'express';
import morgan from 'morgan';

const app = express();


// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
    res.json({
        success: true,
        message: 'Subscriber service is up and running!',
    });
});

app.get('/health', (_req, res) => {
    res.json({
        success: true,
        message: 'Subscriber service is up and running!',
    });
});

export default app;

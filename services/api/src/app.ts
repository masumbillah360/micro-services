import express, { Request, Response } from 'express';
import morgan from 'morgan';

// Config & Utils
import config from './config';
import proxyRequest from './utils';

// App
const app = express();

//Register Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Request Logger Middleware
app.use((req, _res, next) => {
    console.log(`[ REQUEST ] ${req.method} ${req.originalUrl}`);
    next();
});

// Dynamic Route Registration for Microservices
Object.entries(config.services).forEach(([serviceName, serviceUrl]) => {
    app.use(`/${serviceName}`, (req: Request, res: Response) => {
        console.log(`[ PROXY ] ${serviceName.toUpperCase()} -> ${req.url}`);
        proxyRequest(serviceUrl, req, res);
    });
});

// Health Check Route
app.get('/', (_req, res) => {
    res.json({
        success: true,
        message: 'API service is up and running!',
    });
});

export default app;

import axios from 'axios';
import { Request, Response } from 'express';

const proxyRequest = async (
    serviceUrl: string,
    req: Request,
    res: Response
) => {
    try {
        console.log(`Proxying request to ${serviceUrl}${req.path}`);
        const url = `${serviceUrl}${req.path}`;
        const response = await axios({
            method: req.method as any,
            url,
            data: req.body,
            headers: req.headers,
        });
        res.status(response.status).json(response.data);
    } catch (error: any) {
        console.log(error);
        console.error('[ Error Message ]', error.message);
        res.status(error.response?.status || 500).json({
            error: error.message,
        });
    }
};

export default proxyRequest;
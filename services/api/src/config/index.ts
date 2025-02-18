import { config } from 'dotenv';
config();

export default {
    PORT: process.env.PORT || 3000,
    services: {
        auth: 'http://auth:3001',
        blogs: 'http://blogs:3002',
        comments: 'http://comments:3003',
        feedbacks: 'http://feedbacks:3004',
        reactions: 'http://reactions:3005',
        subscriber: 'http://subscriber:3006',
    },
};

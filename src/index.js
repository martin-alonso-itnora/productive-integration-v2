import dotenv from 'dotenv';
import App from './functions/app';
dotenv.config();

const app = new App();
app.initialize();
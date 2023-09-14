import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'; // to use env variables
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import router from './router.js';

dotenv.config();

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'public') });
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

const startApp = async () => {
    try {
        const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => {
            console.log(`SERVER RUNNING ON PORT=${PORT}`, new Date());
        });
    } catch (e) {
        console.log('Start App Error', e);
    }
};

startApp();

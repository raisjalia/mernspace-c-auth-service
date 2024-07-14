// Express Application instance server running in separate file

import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Auth Service');
});

export default app
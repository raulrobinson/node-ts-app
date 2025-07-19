import express from 'express';

const app = express();
const port = 3000;

app.get('/', (_req, res) => {
    res.send('Hello from Node TypeScript!');
});

app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
});

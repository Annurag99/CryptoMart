import express from 'express';
import path from 'path';
import fetch from 'node-fetch';
import indexRouter from './routes/index.js';

const app = express();

// view engine setup
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'ejs');
app.use('/', indexRouter);

app.use(express.static(path.join(process.cwd(), 'public')));
// Serve the index.html file
app.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "index.html"));
});

// Define the endpoint to fetch comics/anime
app.get('/comics/anime', async (req, res) => {
    try {
        const response = await fetch("https://f76bda4c-44c7-4714-91a9-d45f4a4cda92.mock.pstmn.io");
        const data = await response.json();
        res.json(data);
        console.log(res.json(data));
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

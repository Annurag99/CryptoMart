import express from 'express';
import path from 'path';
import fetch from 'node-fetch';
import indexRouter from './routes/index.js';

const app = express();

// view engine setup
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'ejs');
app.use('/', indexRouter);

// Serve the index.html file
app.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "index.html"));
});

// Endpoint to get vodka cocktails===ds
app.get('/cocktails/vodka', async (req, res) => {
    try {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka");
        const data = await response.json();
        res.json(data);  
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

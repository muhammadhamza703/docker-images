const express = require('express');
const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/healthcheck', (_, res) => res.status(200).send('Server is healthy'));

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));

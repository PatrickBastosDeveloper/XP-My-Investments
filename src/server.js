require('dotenv').config();
const app = require('./api');

const { PORT } = process.env || 3000;

app.listen(PORT, () => console.log(`Starting port ${PORT}`));

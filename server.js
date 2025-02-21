import 'dotenv/config';
import app from './src/app.js';

const PORT = process.env.PORT || null;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
import 'dotenv/config';
import app from './src/app.js';
import connectDB from "./src/config/database.js";

const PORT = process.env.PORT;

connectDB().then(() => {
    app.listen(PORT, () => console.log(`🚀 Server is running at http://localhost:${PORT}`));
});

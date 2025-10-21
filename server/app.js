import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import documentsRouter from './routes/documents.js';
import path from 'path';
import fs from 'fs';


dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());


const UPLOAD_DIR = process.env.UPLOAD_DIR || 'uploads';
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });


// Routes
app.use('/api/documents', documentsRouter);


// Static serving of uploaded files (optional)
app.use('/uploads', express.static(path.join(process.cwd(), UPLOAD_DIR)));


const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
console.log('MongoDB connected');
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => {
console.error('MongoDB connection error', err);
});


export default app;
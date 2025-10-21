import mongoose from 'mongoose';


const DocumentSchema = new mongoose.Schema({
filename: String,
path: String,
text: String,
analysis: mongoose.Schema.Types.Mixed,
}, { timestamps: true });


export default mongoose.model('Document', DocumentSchema);
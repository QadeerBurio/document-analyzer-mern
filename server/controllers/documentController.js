import fs from "fs";
import Document from "../models/Document.js";
import { extractTextFromFile } from "../services/parser.js";
import { analyzeTextWithGemini } from "../services/geminiService.js";

// ✅ Upload and analyze document
export async function uploadDocument(req, res) {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const filePath = req.file.path;
    const originalName = req.file.originalname;

    // 1️⃣ Extract text
    const text = await extractTextFromFile(filePath);

    // 2️⃣ Save document
    const doc = new Document({
      filename: originalName,
      path: filePath,
      text: text.slice(0, 10000),
    });
    await doc.save();

    // 3️⃣ Analyze with Gemini
    const prompt = `You are a professional document analyst. Provide:
1) concise 3-line summary,
2) list of detected entities (people, dates, organizations),
3) list of action items or recommendations,
4) confidence score 0-100,
5) JSON block with keys: summary, entities, recommendations, confidence.

Document text:\n${text.slice(0, 30000)}\n
Respond with JSON only.`;

    const analysis = await analyzeTextWithGemini(prompt);

    // 4️⃣ Save analysis
    doc.analysis = analysis;
    await doc.save();

    return res.json({ id: doc._id, analysis });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message || "Server error" });
  }
}

// ✅ Get all documents
export async function getDocuments(req, res) {
  try {
    const docs = await Document.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// ✅ Get single document by ID
export async function getDocumentById(req, res) {
  try {
    const { id } = req.params;
    const doc = await Document.findById(id);
    if (!doc) return res.status(404).json({ error: "Document not found" });
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

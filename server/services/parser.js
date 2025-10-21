import fs from "fs/promises";
import mammoth from "mammoth";
import { createRequire } from "module";

// ✅ Properly import CommonJS module 'pdf-parse' in ESM
const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");

export async function extractTextFromFile(filePath) {
  const buf = await fs.readFile(filePath);
  const ext = filePath.split(".").pop().toLowerCase();

  // ✅ Handle PDFs
  if (ext === "pdf") {
    try {
      const data = await pdfParse(buf);
      return (data.text || "").trim();
    } catch (e) {
      console.warn("pdf parse failed", e);
    }
  }

  // ✅ Handle DOCX/DOC
  if (ext === "docx" || ext === "doc") {
    try {
      const { value } = await mammoth.extractRawText({ buffer: buf });
      return (value || "").trim();
    } catch (e) {
      console.warn("mammoth failed", e);
    }
  }

  // ✅ Fallback to plain text
  return buf.toString("utf8").trim();
}

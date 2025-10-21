// server/services/geminiService.js
import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ✅ Primary and fallback models
const PRIMARY_MODEL = "models/gemini-2.5-pro";
const FALLBACK_MODEL = "models/gemini-2.0-flash"; // fast, lighter version

// Helper: delay function
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const analyzeTextWithGemini = async (text) => {
  let attempts = 0;
  let lastError = null;

  // Try 3 times with exponential backoff
  while (attempts < 3) {
    try {
      const model = genAI.getGenerativeModel({
        model: attempts < 2 ? PRIMARY_MODEL : FALLBACK_MODEL,
      });

      const result = await model.generateContent(text);
      return result.response.text();
    } catch (error) {
      console.error(`Gemini attempt ${attempts + 1} failed:`, error?.statusText || error);
      lastError = error;
      if (error?.status === 503) {
        console.log("Model overloaded — retrying in 3s...");
        await sleep(3000 * (attempts + 1));
        attempts++;
      } else {
        break;
      }
    }
  }

  return (
    lastError?.message ||
    "Gemini service temporarily unavailable. Please try again later."
  );
};

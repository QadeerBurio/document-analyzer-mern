<h1 align="center">📄 Document Analyzer (MERN + Gemini AI)</h1>

<p align="center">
  <img src="Demo.png" alt="Document Analyzer Preview" width="800"/>
</p>

<p align="center">
  <b>A full-stack MERN web app to upload, analyze, and summarize documents using Gemini AI</b><br/>
  Extract key insights, generate summaries, and ask intelligent questions — all in one elegant interface.
</p>

<p align="center">
  <a href="https://github.com/<your-username>/document-analyzer-mern/stargazers"><img src="https://img.shields.io/github/stars/<your-username>/document-analyzer-mern?style=social" alt="GitHub stars"/></a>
  <a href="https://github.com/<your-username>/document-analyzer-mern/issues"><img src="https://img.shields.io/github/issues/<your-username>/document-analyzer-mern" alt="GitHub issues"/></a>
  <a href="https://github.com/<your-username>/document-analyzer-mern/blob/main/LICENSE"><img src="https://img.shields.io/github/license/<your-username>/document-analyzer-mern" alt="License"/></a>
</p>

---

## 🧠 Overview

**Document Analyzer** is a professional MERN-based application that leverages the **Gemini AI API** to:

* 🔍 Extract and process text from PDF, DOCX, or TXT documents
* ✨ Automatically summarize long files into concise insights
* 💬 Provide Q&A functionality to interact with document content
* 📊 Highlight entities, key facts, and structured data

Users can upload documents and receive intelligent summaries, answers, and semantic insights in a clean, responsive interface.

---

## 🚀 Key Features

* Upload and analyze PDF/DOCX/TXT files
* Real-time progress bar for uploads
* LLM-powered summarization and Q&A
* Document history and role-based access
* Beautiful, modern dashboard UI with preview thumbnails

---

## 🧩 Tech Stack

* **Frontend:** React + Tailwind CSS + Axios + React Dropzone
* **Backend:** Node.js + Express + Multer + JavaScript 
* **Database:** MongoDB 
* **AI Model:** Gemini (Google) AI Studio

---

## 📁 Repository Structure

```
/ (root)
├── analyzer/          # React app (Vite)
├── server/           # Express API
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── routes/
│   │   └── workers/
│   └── uploads/
│
│
└── README.md
```

---

## ⚙️ Environment Setup

1. **Clone Repository**

```bash
git clone https://github.com/<your-username>/document-analyzer-mern.git
cd document-analyzer-mern
```

2. **Backend Setup**

```bash
cd backend
npm install
cp .env.example .env
# Add your Gemini / OpenAI API key
npm run dev
```

3. **Frontend Setup**

```bash
cd ../frontend
npm install
npm run dev
```

4. **Visit** → [http://localhost:3000](http://localhost:3000)

---

## 🔑 Example `.env` Configuration

```bash
PORT=5000
DATABASE_URL=postgres://user:pass@localhost:5432/doc_analyzer
PGVECTOR_ENABLED=true
STORAGE_DIR=./uploads
OPENAI_API_KEY=your_gemini_or_openai_key_here
```

> ⚠️ Never commit your `.env` file to GitHub.

---

## 🖥️ Screenshots

| Feature            | Preview                                                        |
| ------------------ | -------------------------------------------------------------- |
| **Dashboard**      | ![Dashboard](Demo.png)                  |
| **Upload Page**    | ![Upload Demo](document.png)         |
| **Summary Result** | ![Summary Preview](Document_Analysis.png) |
| **Q&A Chat**       | ![Q\&A Interface](list.png)         |

---



## 🛡️ Security Best Practices

* Server-side API calls only (hide API keys)
* Validate file size/type on upload
* Use HTTPS in production

---

## 📚 License

MIT License © <your-name>

---

### 💬 Contributing

Pull requests are welcome! Open an issue first to discuss proposed changes.

---

### ⭐ Show your support

If you like this project, give it a **star** on [GitHub](https://github.com/<your-username>/document-analyzer-mern)! 🌟

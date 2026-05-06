# 🏢 UREC Shift Report Simulator

A professional, web-based training tool for UREC staff to practice writing shift reports. Trainees receive a randomized facility scenario, observe clues, fill out a shift report form, and get AI-powered feedback scored from 1–100.

![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white)
![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00c7b7?logo=netlify&logoColor=white)
![Gemini](https://img.shields.io/badge/AI-Gemini_2.0_Flash-4285f4?logo=google&logoColor=white)

---

## ✨ Features

- **12 Randomized Scenarios** — 4 per facility (NRFC, Hayes Field Complex, Belk Gym) across Opening, Closing, and Mid-Shift types
- **Realistic Desk Clues** — Observations that mirror real-world situations staff encounter during shifts
- **Dynamic Shift Report Form** — Mirrors actual Connect2 report structure with summary, maintenance, equipment, patron interaction, and follow-up sections
- **AI-Powered Grading** — Gemini 2.0 Flash evaluates reports on completeness, specificity, tone, action items, and form usage (scored 1–100)
- **Local Fallback Scoring** — Works offline or without an API key using a built-in heuristic scorer
- **Responsive Design** — Fully functional on phones, tablets, and laptops
- **Dark Theme** — Clean, professional UI with teal accents

## 🚀 How It Works

```
Start → Pick Name → Read Scenario → Observe Clues → Fill Report → Get AI Feedback
```

1. **Landing** — Select or type your name
2. **Scenario** — Read the randomized facility situation
3. **Desk Clues** — Review specific observations from the shift
4. **Shift Report Form** — Write your report as if you just finished the shift
5. **Results** — Receive a score (1–100), strengths, improvements, and a suggested model summary

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite 5 |
| Styling | Vanilla CSS (custom dark design system) |
| AI Grading | Google Gemini 2.0 Flash via Netlify Functions |
| Hosting | Netlify |
| Fallback | Local heuristic scoring engine |

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- (Optional) [Netlify CLI](https://docs.netlify.com/cli/get-started/) for testing serverless functions locally

### Install & Run

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/urec-shift-report-simulator.git
cd urec-shift-report-simulator

# Install dependencies
npm install

# Start dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

> **Note:** Without a Gemini API key, the app uses the built-in local scorer. Reports will still be graded — just without AI-generated feedback.

### Setting Up AI Grading (Optional)

1. Get a [Gemini API key](https://aistudio.google.com/apikey)
2. Copy `.env.example` to `.env` and add your key:
   ```
   GEMINI_API_KEY=your_key_here
   ```
3. For local testing with the serverless function, use Netlify CLI:
   ```bash
   netlify dev
   ```

## 🌐 Deployment

### Netlify (Recommended)

1. Push this repo to GitHub
2. Connect the repo in [Netlify](https://app.netlify.com/)
3. Set the environment variable `GEMINI_API_KEY` under **Site Settings → Environment Variables**
4. Deploy — Netlify auto-detects the Vite build config

Build settings are pre-configured in `netlify.toml`:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Functions directory:** `netlify/functions`

## 📁 Project Structure

```
├── src/
│   ├── App.jsx                          # Main app shell & step routing
│   ├── main.jsx                         # React entry point
│   ├── styles.css                       # Full design system (dark theme)
│   ├── components/
│   │   ├── LandingScreen.jsx            # Step 0: Name selection
│   │   ├── ScenarioCard.jsx             # Step 1: Scenario context
│   │   ├── DeskClueCard.jsx             # Step 2: Observation clues
│   │   ├── ShiftReportForm.jsx          # Step 3: Dynamic report form
│   │   └── ResultsPanel.jsx             # Step 4: Score & feedback
│   ├── data/
│   │   ├── scenarios.js                 # 12 training scenarios
│   │   └── referenceSamples.js          # Model answer references
│   └── utils/
│       └── localScoring.js              # Offline fallback scorer
├── netlify/functions/
│   └── evaluate-shift-report.js         # Gemini grading endpoint
├── netlify.toml                         # Netlify build config
├── .env.example                         # Environment variable template
├── vite.config.js                       # Vite configuration
└── package.json
```

## 📄 License

This project is built for UREC staff training purposes.

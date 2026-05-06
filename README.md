# UREC Shift Report Simulator

A web-based training tool built for University Recreation staff to practice writing shift reports. The application presents randomized facility scenarios with realistic desk clues and dynamic forms. Submissions are evaluated using a Gemini-powered scoring engine or a local fallback, providing trainees with actionable feedback.

## Features

- **Training Scenarios:** 12 unique situations across NRFC, Hayes Field Complex, and Belk Gym, covering opening, closing, and mid-shift responsibilities.
- **Dynamic Forms:** Accurately structured forms mirroring the Connect2 layout, adapting dynamically to the selected facility and shift type.
- **AI Evaluation:** Integration with Gemini 2.0 Flash via Netlify Functions to evaluate reports based on completeness, specificity, professional tone, and action items.
- **Local Fallback:** Built-in heuristic scoring ensures the application remains fully functional in offline or unauthenticated environments.

## Tech Stack

- **Frontend:** React 18, Vite
- **Styling:** Vanilla CSS with custom CSS variables
- **Backend:** Netlify Functions
- **AI Integration:** Google Gemini 2.0 Flash
- **Deployment:** Netlify

## Local Development

```bash
npm install
npm run dev
```

By default, the application will use the local heuristic scoring engine. To enable AI-powered grading locally, copy `.env.example` to `.env` and add a Gemini API key, then run using the Netlify CLI:

```bash
npx netlify dev
```

## Deployment

The application is built for continuous deployment on Netlify, utilizing Netlify Functions for the serverless backend. Build settings and function routing are configured via `netlify.toml`.

## Project Structure

```text
src/
├── components/          # React components (Forms, Cards, Screens)
├── data/                # Scenario configurations and reference samples
├── utils/               # Local scoring logic and utilities
├── App.jsx              # Main application shell and routing
├── main.jsx             # Entry point
└── styles.css           # Global design system
netlify/
└── functions/           # Serverless API endpoints
```

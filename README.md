# UREC Shift Report Simulator

The UREC Shift Report Simulator is a web-based training tool designed for University Recreation staff. It provides an interactive environment to practice writing shift reports by presenting randomized facility scenarios, realistic desk clues, and dynamic forms. Submissions are evaluated using a Gemini-powered scoring engine or a local heuristic fallback, providing trainees with actionable feedback.

## Features

- **Randomized Training Scenarios:** 12 unique situations across NRFC, Hayes Field Complex, and Belk Gym, covering opening, closing, and mid-shift responsibilities.
- **Dynamic Report Forms:** Accurately structured forms mirroring the Connect2 layout, adapting dynamically to the selected facility and shift type.
- **AI-Powered Evaluation:** Integration with Gemini 2.0 Flash via Netlify Functions to evaluate reports based on completeness, specificity, professional tone, and action items.
- **Local Fallback Engine:** Built-in heuristic scoring ensures the application remains fully functional in offline or unauthenticated environments.
- **Responsive Architecture:** Fully responsive layout designed for mobile, tablet, and desktop usage.

## Technology Stack

- **Frontend:** React 18, Vite 5
- **Styling:** Vanilla CSS with a custom CSS-variable design system
- **Serverless/API:** Netlify Functions
- **AI Integration:** Google Gemini 2.0 Flash
- **Deployment:** Netlify

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- Netlify CLI (optional, for local serverless function testing)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Amirtheshwaran/urec-shift-report-simulator.git
   cd urec-shift-report-simulator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`. By default, the application will use the local heuristic scoring engine.

### API Configuration (Optional)

To enable AI-powered grading:

1. Obtain a Gemini API key from Google AI Studio.
2. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Add your API key to the `.env` file:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
4. Run the application using the Netlify CLI to enable local function execution:
   ```bash
   npx netlify dev
   ```

## Deployment

This application is configured for continuous deployment via Netlify.

1. Connect the repository to your Netlify account.
2. Add the `GEMINI_API_KEY` to the environment variables in your Netlify site settings.
3. Deploy the application.

Build settings are pre-configured in the included `netlify.toml` file:
- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`

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

## License

This project is intended for UREC staff training and internal educational purposes.

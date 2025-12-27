SkillDecayTracker

Tagline: “Track which professional skills are fading and get data-driven guidance to upskill before it’s too late.”

Overview

SkillDecayTracker is a web application that helps professionals monitor the relevance of their skills in the job market. By analyzing trends from job postings, GitHub, and Stack Overflow, it identifies skills at risk of becoming obsolete and suggests actionable upskilling paths.

Problem Statement

Technical skills evolve rapidly, often with short half-lives (2–3 years). Professionals misinvest in low-demand skills, harming employability and career progression. There is limited tooling to provide personalized, data-driven guidance on which skills to prioritize or pivot from.

Solution

SkillDecayTracker aggregates labor market signals to produce:

Skill decay curves

Top at-risk skills

Adjacent skill recommendations

Learning paths and micro-project suggestions

It gives professionals actionable insights to upskill effectively and maintain market relevance.

Features

Skill input and baseline report

Job posting trend visualizations

Risk bands: safe, caution, high decay

Adjacent skill suggestions

Curated learning resources / micro-projects

Interactive dashboards with charts

Tech Stack

Frontend: Next.js + TailwindCSS

Backend: FastAPI (Python)

Database: Supabase (PostgreSQL + Auth)

Data Sources / APIs: GitHub API, Stack Overflow trends, job posting datasets

AI / NLP: spaCy + keyword extraction

Visualizations: Chart.js

Deployment: Vercel (frontend), Render (backend)

Installation & Running

Clone the repository:

git clone https://github.com/yourusername/SkillDecayTracker.git
cd SkillDecayTracker


Install backend dependencies:

cd backend
pip install -r requirements.txt


Install frontend dependencies:

cd ../frontend
npm install
npm run dev


Open http://localhost:3000
 to view the app.

Demo

Include a GIF or video link showing the dashboard and features:


Or watch the demo video here: Demo Video

Challenges

Limited access to real-time labor market data — solved with pre-collected datasets

Normalizing skill mentions across multiple platforms

Presenting trends clearly without overwhelming users

Ethical guidance: avoided overpromising skill half-life predictions

Future Enhancements

Auto-skill extraction from resumes/LinkedIn

Real-time job market data integration

Personalized alerts for at-risk skills

Gamification and badges for skill maintenance

Team and enterprise skill tracking

License

MIT License © 2025 [Your Name]
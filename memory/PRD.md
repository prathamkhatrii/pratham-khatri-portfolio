# PRD — Pratham Khatri Portfolio

## Original Problem Statement
Build a personal portfolio website that represents the user (Pratham Khatri), using techy backgrounds and dark colours, with an introduction page. Award-worthy (Awwwards-level) motion & craft.

## Architecture
- Frontend-only React app (no backend/DB required — contact section displays info only).
- Libraries: framer-motion (reveals/micro-interactions), lenis (smooth momentum scroll), custom canvas ParticleField (deep-black backdrop + drifting vertical light streaks + dust), lucide-react icons.
- Fonts: Unbounded (display) + JetBrains Mono (body). Palette: #050505 black + neon cyan #00F0FF.

## User Persona
CS student / Data & AI professional seeking data/ML/analytics engineering roles (2026 grad).

## Core Requirements (static)
- Dark techy aesthetic, animated background, intro hero.
- Sections: Hero, About (manifesto), Experience, Projects, Skills, Contact.
- Emphasize impact metrics ($90K, $300K+, 30%).

## Implemented (2026-06)
- Kinetic hero with masked line-by-line on-load reveal + parallax + scroll cue.
- Custom animated particle/light-streak canvas background (per user's referenced animation).
- Sticky navbar with smooth-scroll nav + mobile menu.
- About manifesto (numbered chapters 01–03).
- Experience glowing vertical timeline (3 roles).
- Projects bento cards with massive cyan impact metrics.
- Editorial marquee (DATA DRIVEN // AI FOCUSED // ...).
- Skills bento grid (6 clusters).
- Contact grid (email/phone/LinkedIn/GitHub) + footer.
- Lenis smooth scroll; prefers-reduced-motion respected.

## Backlog
- P1: Replace placeholder LinkedIn/GitHub URLs with real handles (user to provide).
- P1: Add user photo when provided.
- P2: Resume PDF download button.
- P2: Certifications section.
- P2: Working contact form (email) if desired later.

## Next Tasks
- Await user's real social links / photo.

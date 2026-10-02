# Team Boards — Project Overview

## What we're building

A collaborative project management app (a mini Trello). Users sign up, create boards, add lists (columns) and cards (tasks), drag cards between lists, invite teammates, comment on cards, and see each other's changes live without refreshing.

## Tech stack (do not change without discussion)

| Layer | Choices |
|-------|---------|
| Frontend | React + TypeScript, Vite, React Router, plain CSS or Tailwind |
| Backend | Node.js + Express + TypeScript |
| Database | PostgreSQL (local) with Prisma ORM |
| Auth | JWT + bcrypt password hashing |
| Real-time | Socket.io |
| Drag and drop | dnd-kit |
| Validation | Zod |
| Testing | Vitest + Supertest (later) |
| Later | Docker, GitHub Actions, deploy frontend to Vercel, backend + DB to Render or Railway |

## Folder structure

```
team-boards/
  client/          # React app
  server/          # Express API + Prisma
  PROJECT.md       # This file
  NOTES.md         # Learning journal
  README.md
```

## Build phases (in order)

| Phase | Focus |
|-------|--------|
| **0** | Verify setup (Node, Git, Postgres), folders, Git init, `.gitignore`, push to GitHub |
| **1** | Backend foundation: Express, Prisma + PostgreSQL, models (User, Board, List, Card), CRUD routes, Postman/Thunder Client |
| **2** | Authentication: signup, login, bcrypt, JWT, auth middleware, own-data access |
| **3** | Frontend basics: Vite + React, routing, login/signup, boards, board page, forms, API calls |
| **4** | Drag and drop (dnd-kit), persist card order, optimistic updates |
| **5** | Teamwork: invites, roles (owner/member), card details, comments |
| **6** | Real-time with Socket.io (boards as rooms) |
| **7** | Production readiness: validation, errors, tests, Docker, CI, deployment, demo account |
| **8** | Portfolio polish: README, screenshots, architecture diagram, challenges solved |

## Current phase

**Phase 0 — in progress (step 2: PostgreSQL database + connection string)**

- Done: tool check, folders, docs pushed to GitHub; `server/.env.example` added for Prisma later.
- Next: you create DB `team_boards` and copy `.env.example` → `server/.env` (step 2 hands-on); then step 3: fix PowerShell/npm + finish Phase 0 quiz.

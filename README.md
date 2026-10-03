# EcoLoop citizen app prototype

This is a dependency-free, responsive implementation of EcoLoop's citizen-facing MVP flows from the master blueprint.

## Run locally

From this folder, start the EcoLoop local server:

```powershell
npm.cmd start
```

Then open `http://localhost:3000` in a browser. The server also serves the web client and persists authenticated account data in SQLite at `data/ecoloop.sqlite`.

## Included flows

- Home dashboard with circular-impact metrics and collection summary
- Waste scan with classification result and points award
- Collection schedule and special-pickup request
- Grievance submission
- Nearby bins lookup
- Rewards redemption and profile navigation

Use Node 24 or newer. Create an account in the sign-up screen. API data persists in SQLite at `data/ecoloop.sqlite` and is isolated by account. The legacy `data/store.json` fixture is preserved but is no longer used by authenticated routes. Scan guidance, schedules, and rewards remain demonstration workflows.

See `ARCHITECTURE.md` for implemented boundaries and outstanding blueprint requirements. Run `npm.cmd test` for authentication and API integration checks.

## Local API

The dependency-free Node server exposes the first MVP resources from the blueprint:

- `GET /api/dashboard`, `GET|PUT /api/profile`, and `GET /api/bins`
- `GET|POST /api/pickups` and `GET|POST /api/grievances`
- `POST /api/scans`
- `GET /api/rewards` and `POST /api/rewards/redeem`
- `GET /api/activity` and `POST /api/reset`

Run `npm.cmd run check` to validate the client and server JavaScript.

## Development with Codex CLI

Start `codex` from this repository. `AGENTS.md` defines the development guidelines; [docs/CODEX_WORKFLOW.md](docs/CODEX_WORKFLOW.md) contains the implementation and resume prompts. [docs/DEVELOPMENT_PLAN.md](docs/DEVELOPMENT_PLAN.md) records the inspected gaps, phased work, and acceptance gates for architecture, UI/UX, auth, APIs, ORM/migrations, PostgreSQL RLS, security, caching, and CI/CD.

The guidelines and plan are preparation for implementation. Their production requirements remain pending until the implementation and verification evidence are recorded.

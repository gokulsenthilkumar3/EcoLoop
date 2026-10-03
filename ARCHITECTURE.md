# EcoLoop implementation architecture

The current runnable foundation uses a Node HTTP API, SQLite database, and responsive browser client. Node 24 or newer is required. This is an incremental foundation for the blueprint, rather than a claim that its entire roadmap is complete.

## Boundaries

- `backend/database.js`: version-one database schema for users, sessions, account state, and audit events.
- `backend/auth.js`: password hashing with scrypt, random cookie sessions, registration, login, and logout.
- `server.js`: authenticated domain API, server-controlled rewards pricing, account isolation, and public asset allowlist.
- `client.js`: authenticated UI and API mutations; successful server writes precede success messages.
- `app.js` and `styles.css`: existing citizen views and visual system.

Accounts are stored separately. Sessions expire after 24 hours and logout revokes them. The server binds to localhost. Database files and source files are excluded from static serving. Password hashes and sessions never appear in API responses.

## Remaining blueprint work

The blueprint specifies NestJS, Next.js/Flutter, PostgreSQL/PostGIS, provider-backed OTP/social authentication, admin MFA, collector and municipal portals, photo classification, notifications, and production infrastructure. These are still pending. SQLite currently stores domain state as JSON per account; normalized domain tables and PostgreSQL migrations are the next database milestone. Scan results remain a manual demo and do not classify photographs. Pickup schedules and impact conversion factors are demonstration values. Role-specific operational workflows and complainant-verified grievance closure still need implementation.

## Validation

Run `npm.cmd run check` and `npm.cmd test`. The integration test uses an isolated in-memory database and covers unauthenticated access, account registration, pickup persistence, account isolation, reward pricing, database-file exposure, and logout revocation.

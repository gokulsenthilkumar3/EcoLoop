# EcoLoop implementation plan and acceptance gates

Prepared 2026-10-03 from the local repository. This plan guides future implementation; adding this document does not implement its milestones.

## Verified starting point

The repository is a Node 24+ citizen prototype using node:http, node:sqlite, server-rendered static assets, and browser JavaScript. There are no declared npm dependencies. The draft blueprint targets a larger multi-role platform and a different production stack.

Baseline commands executed on 2026-10-03:
- npm.cmd run check: passed; syntax checks server.js, app.js, client.js.
- npm.cmd test: passed; one integration test, isolated SQLite in memory.
- Working tree was clean before development guidance was added.

The integration test covers unauthenticated dashboard access, registration, pickup persistence, two-account separation, server-priced reward rejection, database-file exclusion, and logout revocation. It does not establish browser quality, multi-role authorization, concurrency safety, RLS, production reliability, or comprehensive security.

## Evidence-based gap register

| Area | Observed implementation | Required next evidence |
| --- | --- | --- |
| Architecture | server.js combines routing, validation, domain logic, persistence, and HTTP handling | Recorded target boundaries; migrated slice with behavior preserved |
| Auth | backend/auth.js uses salted scrypt, random hashed cookie sessions, expiry and revocation | Rate limits, nonblocking password work, session lifecycle tests, recovery/provider decision, privileged MFA |
| Authorization | Citizen role assigned at registration; account lookup scoped by authenticated user | Permission matrix enforced and tested as operational roles are added |
| Persistence | backend/database.js creates users, sessions, accounts, audit; domain state is JSON per account | Normalized schema, versioned migrations, constraints and transactions |
| ORM and RLS | Direct prepared SQLite statements; no ORM or database RLS | ORM decision; PostgreSQL policies tested with restricted app role |
| API and validation | Basic required-string checks; most exceptions returned as 400 with raw error.message | Schemas, consistent contract/status codes, safe internal errors, input limits |
| Operational data | server.js has fixed bins, default profile/ward, pickup slot, reward catalog, scan result and factors | Managed reference data and explicit demo/provider boundaries |
| Rewards and scans | POST /api/scans grants fixed points without real classification or verified disposal | Defined evidence/eligibility rules; idempotent ledger; abuse and concurrency tests |
| Client state | app.js retains demo localStorage and listeners; client.js intercepts actions and overlays API state | Single authenticated state model and event path; no private demo fallback |
| Browser rendering | Template strings and innerHTML used; escaping exists in some client paths | Review every untrusted data sink; safe rendering and malicious-input browser tests |
| Request security | nosniff, frame denial, static allowlist, basic Origin comparison to HTTP Host | Configured HTTPS-aware origin policy, CSRF, CSP and abuse controls |
| UI/UX | Citizen views exist; some settings/directions are placeholder actions | Journey inventory, real form/action behavior, accessibility and responsive browser evidence |
| Cache | API JSON uses no-store; localStorage retains demo state | Defined public/static cache policy; private-state isolation and invalidation |
| Operations | PORT override and localhost binding; no tracked CI workflow found | Validated env config, runtime packaging, ports/network rules, CI and staging evidence |
| Documentation | README contains conflicting store.json/SQLite persistence statements | Correct current documentation and separate future roadmap |

These are code inspection findings, not a penetration test. XSS, concurrency, and abuse concerns need targeted reproduction/tests before claiming a specific exploit.

## Scope and architecture decisions

Keep the citizen flow operational while migrating. Deliver a modular monolith first. Introduce collectors and municipal operations as complete slices; defer IoT, ML classification, compliance exports, recycler/business portals, and mobile apps until their prerequisites and acceptance criteria are defined.

The blueprint names Next.js, NestJS, PostgreSQL/PostGIS, Redis, and Prisma Migrate/Flyway. Before installing or rewriting, record decisions for:
- Web framework, TypeScript boundaries, backend framework, and how current URLs/UI migrate.
- PostgreSQL versus the local SQLite transition, chosen ORM, and migration/import strategy.
- Local credentials versus an OIDC/provider integration, session transport, recovery, and MFA.
- Owner-only versus city/ward/org tenancy, public data boundaries, operational permissions.
- Provider choices, hosting, budgets, expected load, privacy/retention, and measurable latency/reliability targets.

Create concise ADRs in docs/decisions/ as decisions are made. Proposed choices are not implemented guarantees. PostGIS, Redis, queues, Kubernetes, and distributed services need an actual feature/load justification.

Suggested module responsibilities, adaptable to the selected framework:
configuration; auth and membership; HTTP validation/contracts; profiles; schedules/bins; pickups; grievances; rewards/ledger; audit; provider adapters; persistence; web components and API client.

## Milestone 0 - Requirements and executable baseline

Status: pending. Baseline inspected; implementation audit and full decisions still required.

- Map citizen journeys to current code and blueprint must-have requirements.
- Maintain a requirement table with ID, scope, acceptance criteria, implementation files, tests, status, and evidence.
- Create ADRs and a threat model covering assets, trust boundaries, actors, abuse cases, and mitigations.
- Fix contradictory setup documentation. Inventory configuration and data that is currently embedded in code.
- Extend baseline checks to backend files; establish isolated fixtures and reproducible setup.

Gate: clean local checkout can start the current app and run documented checks; scope, decisions, risk priorities, and acceptance criteria are recorded.

## Milestone 1 - Configuration and immediate security foundation

Status: pending.

- Centralize validated PORT, bind host, environment, database path/URL, origin, request-size, session, and rate-limit configuration.
- Add .env.example and appropriate ignore rules without committing private database files/secrets.
- Correct origin checks for configured HTTPS deployment rather than relying on HTTP plus an untrusted Host header.
- Define CSRF policy, security headers/CSP, consistent request/error handling, limits, and route/method behavior.
- Add rate limits and nonblocking password work. Ensure missing/invalid bodies settle with predictable responses.
- Remove raw internal error exposure; add redacted request IDs and operational logging.
- Gate the reset endpoint and demo rewards/scans for production; never erase local data implicitly.

Gate: tests exercise login abuse, invalid/oversized payloads, CSRF/origin denial, wrong HTTP methods, safe internal errors, file exposure, and production demo gates.

## Milestone 2 - Normalized database, ORM, and actual RLS

Status: pending.

- Select the ORM and create versioned migrations for the current citizen domain and necessary membership scope.
- Introduce relational constraints/indexes and an append-only points ledger with atomic deductions.
- Add idempotency records and safe concurrent mutation semantics.
- Implement backup/import validation for existing SQLite account JSON without deleting the originals.
- Introduce PostgreSQL and restricted app/migration roles; implement SELECT/INSERT/UPDATE/DELETE policies and transaction-local actor context.
- Define trusted/public versus owner/city/ward/org data explicitly. Fail closed on missing identity context.

Gate: fresh migration and supported upgrade succeed; import totals and ownership match; wrong-user/tenant and reassignment fail through API and database app role; concurrent/retried redemptions cannot overspend; pooled requests cannot inherit another actor.

## Milestone 3 - Authentication lifecycle and scoped operational access

Status: pending.

- Implement the chosen auth/provider strategy with verification/recovery and session expiry, rotation, revocation, and device handling.
- Require MFA for privileged operations when municipal/admin roles are introduced.
- Implement deny-by-default endpoint/service permissions and assignment boundaries.
- Audit security-relevant events without logging credentials or sensitive payloads.
- Keep self-registration limited to authorized roles; privileged membership changes require audited administrative actions.

Gate: browser/API tests cover registration/login/logout/recovery, expired and revoked sessions, role escalation attempts, city/ward/org boundaries, and privileged MFA. Missing provider configuration has an explicit unavailable state.

## Milestone 4 - Real citizen workflows and API contract

Status: pending.

- Publish versioned API schemas/OpenAPI or equivalent contracts; validate routes, payloads and responses.
- Manage profile, bins, schedules, pickup capacity, catalog and eligibility as authoritative records.
- Implement pickup request/assignment/completion transitions and grievance submission/resolution/complainant verification.
- Add rewards ledger/redemption lifecycle and retry-safe server writes.
- Define scanning as an explicitly manual workflow until a tested provider/evidence system exists. Remove fixed confidence and automatic real-world impact claims.
- Define pagination, filtering, timestamps, duplicate submissions, and upload permissions as needed.

Gate: each selected flow completes from browser to persistent data; API contract tests cover positive and negative paths; no placeholder success or client-controlled privileged values.

## Milestone 5 - UI/UX and accessibility

Status: pending.

- Consolidate app.js/client.js into one client/state/event model with safe text rendering.
- Implement a reusable visual system for typography, spacing, color, forms, navigation, feedback, and dialogs.
- Complete profile editing, account settings, schedules, bins/directions, grievance tracking, and reward states within agreed scope.
- Remove hardcoded identity and persistent private demo state. Clear account state on logout/switch.
- Add loading/empty/error/offline/session-expired states, field-level validation, retry and double-submit protection.
- Verify keyboard focus, semantic controls, screen-reader feedback, contrast and responsive layouts.

Gate: E2E journeys pass on agreed mobile/desktop viewports; stored malicious strings render safely; network failures remain honest; manual keyboard/accessibility review accompanies automated checks.

## Milestone 6 - Performance, cache, and operations

Status: pending.

- Measure baseline query/page timings and representative workloads; set budgets from expected usage.
- Add pagination/indexes and fix costly paths before adding services.
- Cache eligible public/static/reference data with documented TTL/invalidation and safe tenant keys where needed.
- If Redis is justified, define cache outage behavior and distributed abuse limits; never cache private responses globally.
- Add graceful shutdown, startup configuration checks, liveness/readiness, timeouts, structured redacted logs, metrics, backup/restore runbook and alert ownership.
- Document configurable app ports, public HTTPS edge, and private DB/cache connectivity. Do not expose backing services publicly by default.

Gate: load/cache tests meet documented budgets; deletion/permission changes invalidate appropriately; cache loss cannot bypass authorization; restart/readiness and restore are exercised.

## Milestone 7 - CI/CD and release qualification

Status: pending.

- Create reproducible installation/build/runtime packaging and environment setup.
- CI runs formatting/lint/type checks as introduced, unit and API integration tests, production database migration/RLS tests, security/secret/dependency checks, and E2E tests.
- Use minimal workflow permissions, pinned third-party actions, protected secrets and deployment environments.
- Build once and promote the verified artifact; separate migration credentials from runtime credentials.
- Prepare staging deployment, health checks, migration sequencing, rollback/roll-forward and monitoring procedures.
- Select hosting/provider settings with the user before spending or production deployment.

Gate: CI evidence and authorized staging smoke checks exist; critical findings are resolved; migration/recovery and deploy reversal are exercised; outstanding risks have explicit disposition. Local green tests alone do not complete this milestone.

## Progress and evidence log

Keep this log current after each implementation milestone. Use planned / in progress / implemented / verified / externally blocked. A milestone is verified only when its gate has evidence.

| Date | Milestone | Change | Checks/evidence | Outstanding |
| --- | --- | --- | --- | --- |
| 2026-10-03 | Preparation | Repository reviewed; development rules and CLI workflow prepared | Existing syntax check and one API integration test passed | All implementation milestones above remain pending |

Every implementation handoff must name changed files, executed commands/results, remaining risks, provider/configuration needs, and the next incomplete task.


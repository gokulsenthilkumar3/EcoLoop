# Developing EcoLoop with Codex CLI

AGENTS.md contains persistent repository development rules. DEVELOPMENT_PLAN.md contains observed gaps, implementation milestones, and acceptance gates. The blueprint describes intended product scope; ARCHITECTURE.md describes current implementation.

These documents guide work. Actual tests, database constraints/policies, CI checks, and review provide enforcement.

## Start from this repository

In PowerShell:

```powershell
Set-Location 'D:\Projects\Wasto'
codex
```

Codex is already installed on this machine. Start a new CLI session after adding/updating instruction files, and ask it to summarize the loaded instruction sources if needed.

Paste this prompt into the interactive CLI:

```text
Develop EcoLoop beyond its current citizen prototype.

Read AGENTS.md, docs/DEVELOPMENT_PLAN.md, ARCHITECTURE.md,
package.json and the relevant requirements in docs/BLUEPRINT.md.
Treat the blueprint as a draft requirement source and distinguish
planned behavior from implemented and verified behavior.

First inspect the actual code and working tree. Update the gap register
with concrete evidence. Record architecture and stack decisions with
reasons before changing frameworks, persistence, authentication or
deployment topology. Preserve the existing runnable app and local data.

Implement milestones in dependency order, starting with milestone 0
and the immediate security/configuration work in milestone 1. Continue
through coherent local implementation slices and their acceptance
checks; do not stop after producing a plan or scaffolding.

Cover system architecture, domain modeling, database normalization and
one justified ORM, versioned migrations, real PostgreSQL RLS when
PostgreSQL is introduced, authentication/session lifecycle, scoped
authorization, server validation, API contracts, transactions and
idempotency, UI/UX/accessibility, secure configuration, caching,
observability, backups, ports/network exposure, and reproducible CI/CD.

Replace hardcoded identity, operational data, fake provider results,
and silent demo fallbacks with authoritative data or explicit
unavailable/demo states. Never fabricate successful integrations.
Use environment configuration for operational settings and secrets,
database/configuration records for catalogs and schedules, and code
constants for stable enums and design tokens.

For each milestone:
1. Define the user-visible behavior and acceptance criteria.
2. Implement the relevant UI, API, authorization and persistence.
3. Run meaningful positive, negative, isolation and regression checks.
4. Review the diff and fix failures.
5. Update the requirement traceability, architecture and progress log
   with actual commands and evidence before continuing.

Use isolated test databases. Do not overwrite unrelated changes,
delete existing data, disable failing checks, commit secrets, deploy
production or provision paid services without authorization.
If a provider, product decision or external credential blocks part of
the work, document the precise blocker and continue independent tasks.

Finish with completed milestones, changed files, checks actually
passed, limitations and the next incomplete milestone.
```

This is a sustained project. If a session ends, use the progress log to resume; completion is determined by acceptance gates, not by one long response.

## Resume without restarting the project

```text
Read AGENTS.md and docs/DEVELOPMENT_PLAN.md. Inspect the current diff
and evidence log, verify completed work, and continue the first
incomplete milestone through its acceptance gate. Preserve existing
changes and update the log with tests actually run.
```

## Smaller milestone prompt

```text
Implement milestone 1 in docs/DEVELOPMENT_PLAN.md under AGENTS.md.
Inspect the current behavior first, preserve existing auth/account
isolation, add regression tests for the changed security behavior,
and update the architecture and evidence log. Complete local
implementation and verification, then report remaining blockers.
```

## Review prompt

```text
Review the current implementation against AGENTS.md and the milestone
acceptance gates. Prioritize broken flows, unauthorized data access,
unsafe rendering, migration/data-loss risks, duplicate side effects,
credential exposure and missing verification. Report concrete findings
with file/line references and reproduction or test evidence.
Distinguish confirmed failures from concerns that need validation.
```

## Check the current baseline

```powershell
npm.cmd run check
npm.cmd test
```

These currently cover syntax for three files and one API integration test.
Add the broader checks as their tooling and implementation land.

Review the diff between milestones. Keep normal permission boundaries;
bypassing the sandbox is not a development quality strategy. Production
deployment and database changes need their own tested procedures.

## Official references

- [Codex repository instructions](https://learn.chatgpt.com/docs/agent-configuration/agents-md)
- [Codex CLI](https://learn.chatgpt.com/docs/codex/cli)

AGENTS.md is discovered as project guidance. DEVELOPMENT_PLAN.md and
CODEX_WORKFLOW.md are read because the rules/prompt explicitly reference
them; arbitrary documentation is not automatically enforced as policy.


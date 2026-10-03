# ♻️ EcoLoop — Complete Master Blueprint (Detailed Edition)

**Version:** 1.0  
**Document Type:** Master PRD + Architecture + Delivery Plan  
**Owner:** Product/Founder  
**Status:** Draft for validation

---

# TABLE OF CONTENTS

1. Executive Abstract
2. Market & Competitive Analysis
3. PRD (Full)
4. Personas & User Journeys
5. Functional Requirements (Detailed)
6. Non-Functional Requirements
7. Naming & Branding
8. Design System
9. UI Specification (Screen-by-Screen)
10. UX Specification (Flows + Edge Cases)
11. Architecture (Detailed)
12. Authentication & Authorization
13. Database Design (Full Schema)
14. API Specification
15. Modules (Deep Dive)
16. Functions & Pseudocode
17. OOPS Design & Patterns
18. Features (Feature-by-Feature Spec)
19. Security & Threat Model
20. Analytics & KPIs
21. Testing Strategy
22. DevOps & Infrastructure
23. Monetization & Business Model
24. Roadmap & Delivery Plan (Sprint-Level)
25. Team, Budget & Timeline
26. Risks, Assumptions & Mitigations
27. Legal, Compliance & Privacy
28. Go-To-Market & Support
29. Appendices

---

# 1. EXECUTIVE ABSTRACT

## 1.1 What is EcoLoop?

EcoLoop is a **circular-economy operating system** for waste. It is a multi-sided platform that connects six stakeholders — citizens, waste collectors, recyclers, municipalities, businesses, and NGOs — into one real-time, data-driven ecosystem. It transforms waste from a linear "collect-and-dump" problem into a circular "track-recover-reuse" loop.

## 1.2 Why Now?

- Urban waste generation is growing faster than collection infrastructure.
- Regulations (EPR, SWM Rules 2016 in India, EU Waste Framework Directive) are forcing digitization and traceability.
- Smartphone penetration + cheap IoT + mature AI = the technical enablers finally exist.
- Citizens are increasingly willing to segregate **if** it is easy, rewarding, and transparent.

## 1.3 What Makes It Different (The Loopholes We Kill)

| Market Loophole                      | EcoLoop Answer                              |
| ------------------------------------ | ------------------------------------------- |
| Intention–Action gap                 | Gamified rewards + one-tap pickup           |
| Grievances closed without resolution | Complainant-verified closure protocol       |
| Static routes, overflowing bins      | IoT fill-level + dynamic route optimization |
| Recyclables contaminated             | AI classification at source                 |
| Hazardous waste ignored              | Dedicated e-waste & sanitary modules        |
| Privacy fear of recycling            | Privacy Shred AI                            |
| No traceability for compliance       | Blockchain-style audit ledger               |
| Fragmented stakeholders              | One unified platform, six roles             |

## 1.4 Abstract in One Paragraph

EcoLoop is a modular, AI-and-IoT-powered waste management platform delivered as a citizen mobile app, a collector app, a recycler portal, and a municipal command center. It ingests waste data from citizen scans, IoT bin sensors, GPS-tracked vehicles, and grievance reports; classifies waste using on-device and cloud AI; orchestrates collection through optimized routing; rewards citizens through a points economy; verifies resolution through citizen confirmation; and produces compliance-grade analytics for regulators. It is built as a modular monolith for MVP speed, designed from day one to decompose into microservices at scale, with security, privacy, and accessibility as first-class constraints.

---

# 2. MARKET & COMPETITIVE ANALYSIS

## 2.1 Market Size (TAM/SAM/SOM)

- **TAM:** Global waste management market ~$1.5T by 2030.
- **SAM:** Digital waste management software + services ~$40B.
- **SOM (Year 3):** 5 cities × 2M users = 10M users; ~$25M ARR potential.

## 2.2 Competitor Landscape

| Competitor           | Strength                  | Weakness (our opportunity)           |
| -------------------- | ------------------------- | ------------------------------------ |
| Recycle Coach (US)   | Good education, schedules | No IoT, no rewards, weak grievance   |
| Rubicon (US)         | Strong B2B logistics      | Not citizen-centric                  |
| Bin-e / Smart bins   | IoT hardware              | No citizen app ecosystem             |
| Local municipal apps | Official data             | Poor UX, no verification, no rewards |
| Kabadiwala apps      | Informal pickup           | No compliance, no scale              |
| EPR platforms        | Compliance                | No citizen engagement                |

## 2.3 Our Positioning

> **"The only platform that closes the loop — from citizen scan to compliance report — in one system."**

## 2.4 Differentiation Matrix

| Capability                 | EcoLoop | Typical Competitor |
| -------------------------- | ------- | ------------------ |
| AI classification          | ✅      | ❌                 |
| IoT bin integration        | ✅      | Partial            |
| Gamified rewards           | ✅      | Rare               |
| Verified grievance closure | ✅      | ❌                 |
| Reverse logistics          | ✅      | Partial            |
| Municipal compliance       | ✅      | Partial            |
| Privacy Shred              | ✅      | ❌                 |
| Multi-role ecosystem       | ✅      | ❌                 |

---

# 3. PRD (FULL)

## 3.1 Problem Statement (Expanded)

1. **Citizen side:** 70% of citizens don't know correct segregation. Disposal guidance is generic. No feedback loop or incentive. Reporting issues is tedious and often ignored.
2. **Collector side:** Routes are fixed regardless of actual fill levels. No digital task list. No way to prove work done.
3. **Recycler side:** Receives contaminated, mixed material. No traceability of source. Informal supply chain.
4. **Municipality side:** No real-time visibility. Compliance reporting is manual. Grievance SLAs are unmeasured. No data for planning.
5. **Business side:** No easy bulk pickup. ESG reporting is manual. EPR compliance is painful.
6. **Systemic:** Hazardous streams (sanitary, e-waste, medical) fall through the cracks entirely.

## 3.2 Product Vision Statement

> _"Make every gram of waste visible, valuable, and circular."_

## 3.3 Product Principles

1. **Frictionless** — any task in ≤3 taps.
2. **Rewarding** — every good action earns something.
3. **Transparent** — every status is visible to all parties.
4. **Verified** — nothing is "done" until confirmed.
5. **Inclusive** — works on low-end phones, offline, multi-language.
6. **Secure** — privacy by default, consent-first.

## 3.4 Goals & Success Metrics (OKR Format)

**Objective 1: Drive citizen adoption**

- KR1: 100K registered users in 6 months
- KR2: 40% MAU/registered
- KR3: 4.2+ app store rating

**Objective 2: Improve segregation**

- KR1: 40% reduction in mixed waste per ward
- KR2: 80% AI classification accuracy
- KR3: 60% of users scan at least once/week

**Objective 3: Operational efficiency**

- KR1: 25% route distance reduction
- KR2: 90% on-time collection
- KR3: 50% reduction in missed pickups

**Objective 4: Trust & accountability**

- KR1: 90% grievances verified-closed within 48h
- KR2: <5% reopen rate
- KR3: NPS > 40

**Objective 5: Circularity**

- KR1: 2× dry recyclables recovered
- KR2: 10K tonnes CO₂ saved/year
- KR3: 500 tonnes e-waste safely processed

## 3.5 Scope (MoSCoW)

### Must Have (MVP)

- Auth (OTP, email, social)
- Profile & addresses
- Waste category catalog
- AI waste classification (photo)
- Collection schedule (location-based)
- Special pickup request
- Grievance submission + verified closure
- Basic points/rewards
- Push notifications
- Admin web dashboard (basic)
- Collector app (basic task list)

### Should Have (V1)

- IoT bin integration
- Nearby bin map with fill levels
- Reverse logistics (recycler pickup)
- E-waste module
- Route optimization
- Municipal analytics dashboard
- Leaderboards
- Multi-language

### Could Have (V2)

- Sanitary waste module
- Privacy Shred AI
- Carbon credit tracking
- Predictive analytics (fill forecasting)
- Blockchain audit ledger
- Business/ESG portal
- Voice assistant
- AR bin finder

### Won't Have (for now)

- Hardware manufacturing (bins/sensors)
- Direct waste processing
- Physical collection fleet ownership

## 3.6 Assumptions

- Municipalities will share schedule data.
- Citizens have smartphones (or SMS fallback).
- Recyclers will partner for reverse logistics.
- IoT sensors can be retrofitted to existing bins.

## 3.7 Dependencies

- Municipal API/data access
- Payment gateway
- Maps provider (Google/Mapbox)
- SMS/OTP provider
- Cloud AI (or on-device model)
- IoT hardware partner

## 3.8 Constraints

- Budget (MVP < $150K)
- Timeline (MVP in 12 weeks)
- Team size (8 people)
- Regulatory (data localization, privacy)

---

# 4. PERSONAS & USER JOURNEYS

## 4.1 Personas (Detailed)

### Persona 1: Aarav, 28 — Urban Citizen

- **Location:** Tier-1 city apartment
- **Tech:** Android mid-range, 4G
- **Goals:** Dispose correctly, avoid fines, feel good
- **Frustrations:** Confusing rules, missed pickups, no feedback
- **Quote:** _"I want to recycle, but I never know if I'm doing it right."_
- **Needs:** Instant guidance, rewards, transparency
- **Success:** Scans item, gets answer in <5s, earns points

### Persona 2: Meena, 42 — Waste Collector

- **Location:** Works in ward 12
- **Tech:** Basic Android, low literacy
- **Goals:** Finish route, avoid complaints, get paid on time
- **Frustrations:** Unclear routes, no proof of work, abuse from residents
- **Quote:** _"I just want to know where to go next."_
- **Needs:** Simple task list, navigation, photo proof
- **Success:** Completes 100% of assigned tasks

### Persona 3: Ravi, 35 — Recycler

- **Location:** Industrial outskirts
- **Tech:** Desktop + Android
- **Goals:** Get clean material, reliable supply
- **Frustrations:** Contamination, no traceability, price volatility
- **Quote:** _"If the waste is clean, I can pay more."_
- **Needs:** Material feed, quality grading, pickup scheduling
- **Success:** Receives 10 tonnes clean PET/week

### Persona 4: Commissioner Sharma, 50 — Municipal Admin

- **Location:** City HQ
- **Tech:** Desktop, tablet
- **Goals:** Meet SWM rules, reduce complaints, look good
- **Frustrations:** No real-time data, manual reports, political pressure
- **Quote:** _"I need to know what's happening in every ward, right now."_
- **Needs:** Dashboards, SLA tracking, compliance exports
- **Success:** 90% SLA compliance visible in dashboard

### Persona 5: Priya, 30 — Business Owner (Café)

- **Location:** Commercial area
- **Tech:** Android + POS
- **Goals:** Bulk pickup, ESG reporting, avoid fines
- **Frustrations:** Irregular pickup, no invoices, no data
- **Quote:** _"I need proof that my waste is handled properly."_
- **Needs:** Scheduled bulk pickup, invoices, ESG reports
- **Success:** Zero missed pickups, monthly ESG report

### Persona 6: Super Admin — Platform Operator

- **Goals:** Platform health, user management, config
- **Needs:** Full access, audit logs, feature flags

## 4.2 User Journeys (Detailed)

### Journey A: First-Time Citizen Onboarding

1. Downloads app from Play Store.
2. Opens → sees 3-slide value carousel.
3. Taps "Get Started" → enters phone number.
4. Receives OTP → verifies.
5. Grants location permission (or enters manually).
6. Selects language.
7. Sees home screen with onboarding tooltip.
8. Taps "Scan" → takes first photo → gets result.
9. **Aha moment:** "Oh, this is easy."
10. Earns 10 welcome points.

**Drop-off risks:** OTP failure, permission denial, slow AI.
**Mitigations:** SMS fallback, manual address entry, on-device model.

### Journey B: Daily Disposal

1. User has a plastic bottle.
2. Opens app → taps Scan.
3. Camera opens → captures.
4. AI returns: "PET Plastic → Recyclable → Rinse, place in DRY bin."
5. User taps "Find nearest bin" → map opens.
6. User taps "I disposed it" → earns 5 points.
7. Weekly: points auto-summarized.

### Journey C: Missed Pickup Grievance

1. User notices bin not collected.
2. Taps "Report" → selects "Missed pickup."
3. Photo auto-attached with geo-tag.
4. Submits → ticket created (#GRV-1023).
5. Collector assigned within 2h.
6. Collector marks "Resolved" with photo.
7. User gets push: "Confirm resolution?"
8. User taps "Yes, resolved" → ticket closed.
9. If "No" → reopened with reason, escalated.

### Journey D: Collector's Day

1. Logs in at 6 AM → sees today's route.
2. Route list: 45 stops, optimized order.
3. Taps first stop → navigation opens.
4. Arrives → taps "Collected" → photo proof.
5. If bin overflowing → taps "Report overflow."
6. App auto-suggests next stop.
7. End of day → sees summary: 45/45 done.

### Journey E: Municipal Admin Review

1. Logs into web dashboard at 9 AM.
2. Sees city map with live vehicle positions.
3. Sees KPI cards: 92% collection, 87% SLA, 3 open grievances.
4. Drills into Ward 12 → sees complaint heatmap.
5. Exports compliance report (PDF/Excel).
6. Assigns additional vehicle to hotspot.

### Journey F: Recycler Pickup

1. Recycler sees "Available: 2 tonnes PET, Ward 7."
2. Accepts pickup request.
3. Schedules vehicle for tomorrow 10 AM.
4. On pickup, scans QR of bags → confirms weight & quality.
5. Payment auto-calculated and transferred.
6. Material traceability recorded.

---

# 5. FUNCTIONAL REQUIREMENTS (DETAILED)

## 5.1 Module: Authentication & Identity

| ID      | Requirement                 | Priority | Acceptance Criteria                        |
| ------- | --------------------------- | -------- | ------------------------------------------ |
| AUTH-01 | Phone OTP registration      | P0       | OTP delivered <30s, verified, user created |
| AUTH-02 | Email/password registration | P0       | Password ≥8 chars, hashed with Argon2      |
| AUTH-03 | Social login (Google/Apple) | P1       | OAuth 2.0 flow completes, account linked   |
| AUTH-04 | MFA for admins              | P0       | TOTP or SMS, enforced on login             |
| AUTH-05 | Password reset              | P0       | Email/SMS link, expires in 15 min          |
| AUTH-06 | Session management          | P0       | Access token 15 min, refresh 7 days        |
| AUTH-07 | Device management           | P1       | List/revoke devices                        |
| AUTH-08 | Account deletion            | P0       | GDPR-compliant, data purged in 30 days     |
| AUTH-09 | Role assignment             | P0       | RBAC enforced at API level                 |
| AUTH-10 | Login audit                 | P0       | All attempts logged with IP/device         |

## 5.2 Module: User & Profile

| ID     | Requirement                  | Priority |
| ------ | ---------------------------- | -------- |
| USR-01 | View/edit profile            | P0       |
| USR-02 | Manage multiple addresses    | P0       |
| USR-03 | Set notification preferences | P0       |
| USR-04 | Language selection           | P1       |
| USR-05 | Profile picture upload       | P2       |
| USR-06 | Referral code                | P2       |
| USR-07 | Household member linking     | P2       |

## 5.3 Module: Waste Intelligence (AI)

| ID    | Requirement                   | Priority | Acceptance                        |
| ----- | ----------------------------- | -------- | --------------------------------- |
| AI-01 | Photo capture & upload        | P0       | Supports JPEG/PNG, <5MB           |
| AI-02 | On-device classification      | P1       | TFLite model, <2s                 |
| AI-03 | Cloud classification fallback | P0       | <5s, 80%+ accuracy                |
| AI-04 | Multi-item detection          | P2       | Detects 2+ items per image        |
| AI-05 | Disposal instructions         | P0       | Location-aware, category-specific |
| AI-06 | Barcode/Mobius scan           | P2       | Recognizes recycling symbols      |
| AI-07 | User feedback on accuracy     | P1       | Thumbs up/down → retraining       |
| AI-08 | Offline queue                 | P1       | Stores scans, syncs later         |

## 5.4 Module: Collection & Scheduling

| ID     | Requirement                  | Priority |
| ------ | ---------------------------- | -------- |
| COL-01 | Location-based schedule      | P0       |
| COL-02 | Calendar view                | P0       |
| COL-03 | Push reminders               | P0       |
| COL-04 | Special/bulky pickup request | P0       |
| COL-05 | Time slot selection          | P1       |
| COL-06 | Recurring pickup             | P1       |
| COL-07 | Reschedule/cancel            | P0       |
| COL-08 | Live tracking of vehicle     | P1       |
| COL-09 | Photo proof of collection    | P1       |
| COL-10 | Missed pickup auto-detection | P2       |

## 5.5 Module: IoT & Smart Bins

| ID     | Requirement                   | Priority |
| ------ | ----------------------------- | -------- |
| IOT-01 | Bin registry (QR + geo)       | P1       |
| IOT-02 | Fill-level sensor integration | P1       |
| IOT-03 | Real-time map                 | P1       |
| IOT-04 | Overflow alerts               | P1       |
| IOT-05 | Battery/health monitoring     | P2       |
| IOT-06 | Predictive fill forecasting   | P2       |

## 5.6 Module: Grievance Redressal

| ID     | Requirement                  | Priority | Acceptance                     |
| ------ | ---------------------------- | -------- | ------------------------------ |
| GRV-01 | Submit with photo + geo      | P0       | Auto-captures lat/lng          |
| GRV-02 | Category selection           | P0       | 8+ categories                  |
| GRV-03 | Auto-assignment to collector | P0       | Based on ward                  |
| GRV-04 | SLA timer                    | P0       | Configurable per category      |
| GRV-05 | Status tracking              | P0       | 5 states                       |
| GRV-06 | Complainant-verified closure | P0       | Only user can close            |
| GRV-07 | Reopen with reason           | P0       | Escalates to supervisor        |
| GRV-08 | Escalation matrix            | P1       | Auto-escalate after SLA breach |
| GRV-09 | Feedback/rating              | P1       | 1–5 stars                      |
| GRV-10 | Public heatmap               | P2       | Anonymized                     |

## 5.7 Module: Gamification & Rewards

| ID     | Requirement        | Priority |
| ------ | ------------------ | -------- |
| GAM-01 | Points for actions | P0       |
| GAM-02 | Points ledger      | P0       |
| GAM-03 | Rewards catalog    | P1       |
| GAM-04 | Redemption with QR | P1       |
| GAM-05 | Leaderboards       | P1       |
| GAM-06 | Streaks & badges   | P2       |
| GAM-07 | Referral bonuses   | P2       |
| GAM-08 | Partner offers     | P2       |

## 5.8 Module: Reverse Logistics

| ID     | Requirement              | Priority |
| ------ | ------------------------ | -------- |
| REV-01 | Recycler registration    | P1       |
| REV-02 | Material listing         | P1       |
| REV-03 | Pickup scheduling        | P1       |
| REV-04 | Weight & quality capture | P1       |
| REV-05 | Transparent pricing      | P1       |
| REV-06 | Payment settlement       | P2       |
| REV-07 | Traceability chain       | P2       |

## 5.9 Module: Specialized Waste

| ID     | Requirement                | Priority |
| ------ | -------------------------- | -------- |
| SPE-01 | E-waste module             | P1       |
| SPE-02 | Sanitary waste module      | P2       |
| SPE-03 | Hazardous waste module     | P2       |
| SPE-04 | Certified recycler routing | P1       |
| SPE-05 | Manifest/tracking          | P1       |

## 5.10 Module: Privacy Shred

| ID     | Requirement                       | Priority |
| ------ | --------------------------------- | -------- |
| PRV-01 | Detect personal info on packaging | P2       |
| PRV-02 | Suggest shredding/obscuring       | P2       |
| PRV-03 | AR overlay guide                  | P2       |

## 5.11 Module: Notifications

| ID     | Requirement           | Priority |
| ------ | --------------------- | -------- |
| NOT-01 | Push notifications    | P0       |
| NOT-02 | SMS fallback          | P1       |
| NOT-03 | In-app inbox          | P0       |
| NOT-04 | Email notifications   | P1       |
| NOT-05 | Preference management | P0       |
| NOT-06 | Quiet hours           | P2       |

## 5.12 Module: Analytics & Reporting

| ID     | Requirement             | Priority |
| ------ | ----------------------- | -------- |
| ANL-01 | Real-time KPI dashboard | P0       |
| ANL-02 | Ward-wise analytics     | P1       |
| ANL-03 | Compliance reports      | P1       |
| ANL-04 | Custom date ranges      | P1       |
| ANL-05 | Export (PDF/Excel/CSV)  | P1       |
| ANL-06 | Predictive insights     | P2       |

## 5.13 Module: Admin & Municipal

| ID     | Requirement                | Priority |
| ------ | -------------------------- | -------- |
| ADM-01 | User management            | P0       |
| ADM-02 | Role management            | P0       |
| ADM-03 | Ward/zone config           | P0       |
| ADM-04 | Vehicle & route management | P1       |
| ADM-05 | Grievance oversight        | P0       |
| ADM-06 | SLA configuration          | P1       |
| ADM-07 | Audit log viewer           | P0       |
| ADM-08 | Feature flags              | P2       |

## 5.14 Module: Community & Education

| ID     | Requirement             | Priority |
| ------ | ----------------------- | -------- |
| COM-01 | Articles/videos library | P2       |
| COM-02 | Community feed          | P2       |
| COM-03 | Events/cleanup drives   | P2       |
| COM-04 | Q&A forum               | P2       |

---

# 6. NON-FUNCTIONAL REQUIREMENTS

## 6.1 Performance

| Metric                        | Target |
| ----------------------------- | ------ |
| API p95 latency               | <300ms |
| AI classification (cloud)     | <5s    |
| AI classification (on-device) | <2s    |
| App cold start                | <2s    |
| Map tile load                 | <1s    |
| Push delivery                 | <10s   |

## 6.2 Scalability

- Support 1M users, 100K DAU, 10K concurrent.
- Horizontal scaling of stateless services.
- DB read replicas + sharding by city.
- CDN for static assets.
- Kafka for async processing.

## 6.3 Availability

- 99.9% uptime (43m downtime/month).
- Multi-AZ deployment.
- Graceful degradation (offline mode).
- RTO 1h, RPO 15min.

## 6.4 Security

- See Section 19.

## 6.5 Accessibility

- WCAG 2.1 AA.
- Screen reader support.
- Color contrast ≥4.5:1.
- Font scaling.
- Voice input.

## 6.6 Localization

- English + Hindi + 2 regional (MVP).
- RTL support (future).
- Date/number/currency formats.
- Region-specific waste rules.

## 6.7 Compatibility

- Android 8+ (API 26+).
- iOS 13+.
- Web: Chrome, Safari, Firefox, Edge (last 2 versions).
- Screen sizes: 4" to 12".

## 6.8 Maintainability

- 80% test coverage.
- Modular architecture.
- API versioning.
- Documentation.

## 6.9 Observability

- Structured logging.
- Distributed tracing.
- Metrics + alerts.
- Error tracking (Sentry).

---

# 7. NAMING & BRANDING

## 7.1 Name Options & Rationale

| Name              | Meaning          | Pros                | Cons               |
| ----------------- | ---------------- | ------------------- | ------------------ |
| **EcoLoop**       | Circular economy | Memorable, positive | Common word        |
| **WasteWise**     | Smart waste      | Clear               | Generic            |
| **BinBuddy**      | Friendly helper  | Cute, approachable  | Casual             |
| **Circular**      | Circular economy | Clean               | Abstract           |
| **KachraConnect** | Local (India)    | Relatable           | Regional           |
| **ReLoop**        | Recycle loop     | Short               | Abstract           |
| **GreenGrid**     | Network          | Techy               | Not waste-specific |
| **TrashTrack**    | Tracking         | Descriptive         | Negative "trash"   |

**Recommended:** **EcoLoop** (global) with regional sub-brands.

## 7.2 Tagline Options

- _From Waste to Worth._
- _Close the Loop._
- _Waste, Worth, Repeat._
- _Smart Waste. Cleaner Cities._

## 7.3 Brand Voice

- **Friendly** — not preachy.
- **Encouraging** — reward, don't scold.
- **Clear** — no jargon.
- **Trustworthy** — transparent.

## 7.4 Logo Concept

- Circular arrow forming a leaf.
- Bin silhouette integrated.
- Green-to-blue gradient.

## 7.5 Color Palette

| Name          | Hex     | Usage            |
| ------------- | ------- | ---------------- |
| Eco Green     | #2E7D32 | Primary, CTAs    |
| Clean Blue    | #0288D1 | Secondary, links |
| Reward Amber  | #FFB300 | Points, rewards  |
| Alert Red     | #D32F2F | Errors, overflow |
| Success Green | #388E3C | Success states   |
| Neutral Dark  | #1A1A1A | Text             |
| Neutral Grey  | #757575 | Secondary text   |
| Background    | #F5F5F5 | App background   |
| Surface       | #FFFFFF | Cards            |

## 7.6 Typography

- **Primary:** Inter (UI), fallback Roboto.
- **Display:** Poppins (headers).
- **Monospace:** Roboto Mono (codes).

**Scale:**
| Style | Size | Weight | Line Height |
|---|---|---|---|
| H1 | 32 | 700 | 40 |
| H2 | 24 | 700 | 32 |
| H3 | 20 | 600 | 28 |
| Body L | 16 | 400 | 24 |
| Body M | 14 | 400 | 20 |
| Caption | 12 | 400 | 16 |
| Button | 16 | 600 | 24 |

## 7.7 Spacing System

4px base: 4, 8, 12, 16, 24, 32, 48, 64.

## 7.8 Iconography

- Rounded, 2px stroke.
- 24×24 default.
- Filled for active, outline for inactive.

## 7.9 Illustration Style

- Flat, geometric, eco-themed.
- Diverse characters.
- Reusable SVG components.

---

# 8. DESIGN SYSTEM

## 8.1 Design Tokens

```json
{
  "color": {
    "primary": "#2E7D32",
    "primaryDark": "#1B5E20",
    "secondary": "#0288D1",
    "accent": "#FFB300",
    "error": "#D32F2F",
    "success": "#388E3C",
    "bg": "#F5F5F5",
    "surface": "#FFFFFF",
    "textPrimary": "#1A1A1A",
    "textSecondary": "#757575",
    "border": "#E0E0E0"
  },
  "radius": { "sm": 4, "md": 8, "lg": 16, "xl": 24, "full": 999 },
  "spacing": { "xs": 4, "sm": 8, "md": 16, "lg": 24, "xl": 32 },
  "shadow": {
    "sm": "0 1px 2px rgba(0,0,0,0.05)",
    "md": "0 2px 8px rgba(0,0,0,0.1)",
    "lg": "0 8px 24px rgba(0,0,0,0.15)"
  },
  "font": { "family": "Inter", "base": 16 },
  "motion": { "fast": "150ms", "normal": "250ms", "slow": "400ms" }
}
```

## 8.2 Component Library

- **Buttons:** Primary, Secondary, Ghost, Danger, Icon.
- **Inputs:** Text, OTP, Phone, Dropdown, Date, Search.
- **Cards:** Waste, Bin, Reward, Grievance, KPI.
- **Chips:** Category, Status, Filter.
- **Modals:** Bottom sheet, full-screen, confirmation.
- **Navigation:** Bottom tab, drawer, breadcrumb.
- **Feedback:** Toast, snackbar, skeleton, empty state.
- **Maps:** Pin, cluster, heatmap, route line.
- **Charts:** Line, bar, donut, heatmap, gauge.

## 8.3 States for Every Component

- Default, hover, focus, active, disabled, loading, error, empty, success.

## 8.4 Dark Mode

- Background #121212, surface #1E1E1E, text #FFFFFF.
- Primary lightened to #66BB6A.

---

# 9. UI SPECIFICATION (SCREEN-BY-SCREEN)

## 9.1 Splash & Onboarding

**Splash:** Logo, tagline, 1.5s, auto-advance.  
**Onboarding (3 slides):**

1. "Scan any item, know exactly where it goes."
2. "Never miss a pickup again."
3. "Earn rewards for recycling."

**Layout:** Full-screen illustration, headline, subtext, dots, "Next/Skip."  
**Microcopy:** Warm, action-oriented.

## 9.2 Auth Screens

**Phone Entry:** Country code picker, 10-digit input, "Send OTP."  
**OTP:** 6 boxes, auto-focus, resend timer (30s), "Verify."  
**Email Login:** Email, password, "Forgot?", "Login," "Sign up."  
**Errors:** Inline, specific ("Invalid OTP. 2 attempts left.").

## 9.3 Home Screen

**Layout (top to bottom):**

1. Greeting + location chip.
2. Impact card (points, CO₂ saved, rank).
3. Quick actions (Scan, Schedule, Report, Rewards).
4. Today's schedule card.
5. Nearby bins mini-map.
6. Community highlights.
7. Bottom tab: Home, Scan (FAB), Schedule, Rewards, Profile.

**States:** Loading skeleton, empty (new user), error.

## 9.4 Scan Screen

**Layout:**

- Camera viewfinder with corner guides.
- "Point at the item" hint.
- Flash toggle, gallery picker.
- Capture button.
- Result bottom sheet:
  - Item name + category chip.
  - Recyclability badge.
  - Disposal steps (numbered).
  - "Find nearest bin."
  - "I disposed it" → earn points.
  - Thumbs up/down for accuracy.

**Edge cases:**

- No internet → on-device model.
- Low confidence → "Try again" + manual category picker.
- Multiple items → "Which item?" selector.

## 9.5 Schedule Screen

**Layout:**

- Week strip (dates).
- Today's pickup card (type, time, status).
- Calendar month view.
- "Request special pickup" button.
- Filter: waste type.

**Pickup request flow:**

1. Waste type (multi-select).
2. Address (default + change).
3. Date + time slot.
4. Notes + photo (optional).
5. Confirm → success screen with tracking ID.

## 9.6 Map / Nearby Bins

**Layout:**

- Full-screen map.
- Pins colored by fill level (green/yellow/red).
- Bottom card on tap: bin code, fill %, last updated, directions.
- Filter: recyclable, e-waste, sanitary.
- "Report overflow" button.

## 9.7 Report / Grievance

**Layout:**

- Category grid (8 icons).
- Description field.
- Photo (auto geo-tag).
- Location auto-filled + editable.
- Submit.

**Tracking screen:**

- Ticket ID, status timeline, assigned to, SLA countdown.
- "Confirm resolved" / "Not resolved" buttons.

## 9.8 Rewards

**Layout:**

- Points balance header.
- Progress to next tier.
- Rewards catalog (grid).
- "Redeem" → confirmation → QR code.
- History tab.
- Leaderboard tab (ward, city, friends).

## 9.9 Community

- Feed (posts, likes, comments).
- Articles/videos.
- Events calendar.
- Q&A.

## 9.10 Profile

- Avatar, name, tier.
- Addresses.
- Notification settings.
- Language.
- Referral code.
- Help & support.
- Logout / Delete account.

## 9.11 Collector App

- Login.
- Today's route (list + map).
- Stop detail: address, waste type, notes, "Navigate."
- Actions: "Collected" (photo), "Not available," "Overflow."
- End-of-day summary.

## 9.12 Admin Dashboard (Web)

**Layout:**

- Left nav: Dashboard, Users, Vehicles, Routes, Grievances, Bins, Reports, Settings.
- Top bar: city selector, date range, notifications, profile.
- Main: KPI cards, map, charts, tables.

**KPIs:** Collection %, SLA %, open grievances, active vehicles, tonnage, recycling rate.

---

# 10. UX SPECIFICATION

## 10.1 UX Principles

1. **3-tap rule** — any core action in ≤3 taps.
2. **Progressive disclosure** — don't overwhelm.
3. **Immediate feedback** — every action confirms.
4. **Forgiving** — undo, edit, cancel.
5. **Offline-first** — core features work offline.
6. **Inclusive** — low literacy, low bandwidth.

## 10.2 Navigation Model

- **Bottom tab (5):** Home, Schedule, Scan (center FAB), Rewards, Profile.
- **Modal flows** for scan, report, pickup request.
- **Deep links** for notifications.

## 10.3 Core Flows (Detailed)

### Flow: AI Scan

```
Home → Tap Scan → Camera → Capture → Upload/On-device
  → Loading (≤5s) → Result Sheet
  → [Find Bin | Dispose | Retry | Report wrong]
  → If Dispose: +5 points → Toast → Home
```

### Flow: Schedule Pickup

```
Schedule → + New → Waste Type → Address → Date → Slot
  → Confirm → Success (tracking ID) → Track
```

### Flow: Grievance

```
Report → Category → Photo → Auto-geo → Description
  → Submit → Ticket Created → Track
  → Collector resolves → Push to user
  → User confirms → Closed
  → If not → Reopen → Escalate
```

## 10.4 Error Handling

| Error             | Message                                          | Action       |
| ----------------- | ------------------------------------------------ | ------------ |
| No internet       | "You're offline. We'll sync when you're back."   | Retry        |
| AI failed         | "Couldn't identify. Try again or pick manually." | Retry/Manual |
| OTP failed        | "Invalid OTP. 2 attempts left."                  | Resend       |
| Payment failed    | "Payment didn't go through."                     | Retry        |
| Permission denied | "Enable location to see nearby bins."            | Settings     |

## 10.5 Empty States

- **No pickups:** "No pickups scheduled. Request one?"
- **No points:** "Start scanning to earn points!"
- **No grievances:** "All clear! Report issues here."

## 10.6 Loading States

- Skeleton screens (not spinners).
- Shimmer for cards.
- Progress bar for uploads.

## 10.7 Accessibility UX

- TalkBack/VoiceOver labels.
- Min touch target 48×48.
- Dynamic font scaling.
- High contrast mode.
- Voice input for search/report.

## 10.8 Microcopy Guidelines

- Use "you," not "user."
- Positive framing: "Great! You recycled 3 items."
- Avoid blame: "This bin is full — try another nearby."

## 10.9 Onboarding Education

- Contextual tooltips on first use.
- 30-second video in help.
- FAQ in profile.

---

# 11. ARCHITECTURE (DETAILED)

## 11.1 Architecture Principles

- **Modular monolith first**, microservices later.
- **API-first** design.
- **Event-driven** for async.
- **Stateless** services.
- **12-factor** app.
- **Domain-driven** boundaries.
- **Security by design.**

## 11.2 High-Level Architecture Diagram

```
┌──────────────────────────────────────────────────────────────┐
│                        CLIENTS                                │
│  Citizen App │ Collector App │ Recycler Portal │ Admin Web    │
└──────┬───────────────┬──────────────┬──────────────┬──────────┘
       │               │              │              │
       └───────────────┴──────┬───────┴──────────────┘
                              │
                    ┌─────────▼─────────┐
                    │   API Gateway     │
                    │ (Kong / AWS APIGW)│
                    │  - Rate limit     │
                    │  - Auth           │
                    │  - Routing        │
                    └─────────┬─────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
┌───────▼──────┐   ┌──────────▼─────────┐  ┌────────▼────────┐
│  Core API    │   │   AI Service       │  │   IoT Service   │
│ (NestJS)     │   │ (FastAPI + TF)     │  │ (MQTT + Node)   │
│ - Auth       │   │ - Classification   │  │ - Ingest        │
│ - Users      │   │ - OCR/Symbol       │  │ - Fill level    │
│ - Waste      │   │ - Privacy Shred    │  │ - Alerts        │
│ - Collection │   └──────────┬─────────┘  └────────┬────────┘
│ - Grievance  │              │                     │
│ - Rewards    │              │                     │
│ - Analytics  │              │                     │
└──────┬───────┘              │                     │
       │                      │                     │
       └──────────┬───────────┴─────────────────────┘
                  │
       ┌──────────▼───────────┐
       │   Data Layer         │
       │ - PostgreSQL+PostGIS │
       │ - Redis              │
       │ - TimescaleDB        │
       │ - ElasticSearch      │
       │ - S3/MinIO           │
       │ - Kafka              │
       └──────────────────────┘
```

## 11.3 Service Descriptions

### API Gateway

- **Role:** Single entry point.
- **Features:** Rate limiting, JWT validation, routing, request logging, CORS.
- **Tech:** Kong / AWS API Gateway / Nginx.

### Auth Service

- **Role:** Identity, tokens, RBAC.
- **Tech:** NestJS + Passport + JWT.
- **Data:** users, roles, sessions, audit_logs.

### User Service

- **Role:** Profiles, addresses, preferences.
- **Data:** users, addresses, preferences.

### Waste Service

- **Role:** Catalog, categories, disposal rules.
- **Data:** waste_categories, waste_items, disposal_rules.

### Collection Service

- **Role:** Schedules, requests, assignments, tracking.
- **Data:** schedules, requests, routes, vehicles.

### AI Service

- **Role:** Image classification, symbol detection, privacy shred.
- **Tech:** Python FastAPI + TensorFlow/PyTorch.
- **Models:** EfficientNet-B0 (classification), YOLOv8 (detection), EasyOCR (symbols).
- **Deployment:** GPU node + on-device TFLite.

### IoT Service

- **Role:** Ingest sensor data, fill levels, alerts.
- **Tech:** MQTT broker (EMQX) + Node.js consumer.
- **Data:** bins, sensors, readings (TimescaleDB).

### Grievance Service

- **Role:** Tickets, SLA, escalation, verification.
- **Data:** grievances, sla_config, escalations.

### Gamification Service

- **Role:** Points, rewards, leaderboards.
- **Data:** points_ledger, rewards, redemptions, leaderboards.

### Notification Service

- **Role:** Push, SMS, email, in-app.
- **Tech:** FCM, Twilio, SendGrid.
- **Data:** notifications, templates, preferences.

### Analytics Service

- **Role:** KPIs, reports, exports.
- **Tech:** ClickHouse / TimescaleDB + Metabase.
- **Data:** aggregated metrics.

### Payment Service

- **Role:** Rewards payout, business billing.
- **Tech:** Razorpay/Stripe.
- **Data:** transactions, invoices.

## 11.4 Data Flow Examples

### Scan Flow

```
App → API Gateway → AI Service → Model inference
  → Response → App
  → Async: log scan event → Kafka → Analytics
```

### Grievance Flow

```
App → API Gateway → Grievance Service → DB
  → Kafka event: grievance.created
  → Notification Service → push to collector
  → Analytics Service → update KPIs
```

### IoT Flow

```
Sensor → MQTT → IoT Service → TimescaleDB
  → Kafka: bin.fill.changed
  → Collection Service → route re-optimization
  → Notification Service → alert if overflow
```

## 11.5 Deployment Architecture

```
┌─────────────────────────────────────────┐
│              CDN (CloudFront)           │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│         Load Balancer (ALB)             │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│      Kubernetes Cluster (EKS/GKE)       │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐    │
│  │ API  │ │ AI   │ │ IoT  │ │Worker│    │
│  └──────┘ └──────┘ └──────┘ └──────┘    │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│  Data: RDS │ ElastiCache │ S3 │ MSK     │
└─────────────────────────────────────────┘
```

## 11.6 Scaling Strategy

- **Horizontal:** Stateless pods auto-scale on CPU/RPS.
- **DB:** Read replicas; partition by city; archive old data.
- **Cache:** Redis for hot data (schedules, bins).
- **Async:** Kafka for heavy jobs (AI, reports).
- **CDN:** Static assets, images.
- **Sharding:** By city_id for multi-city.

## 11.7 Technology Choices & Rationale

| Layer       | Choice               | Why                           |
| ----------- | -------------------- | ----------------------------- |
| Mobile      | Flutter              | One codebase, fast, good perf |
| Web         | Next.js              | SSR, SEO, React ecosystem     |
| Backend     | NestJS               | TypeScript, modular, DI       |
| AI          | Python + TF          | Best ML ecosystem             |
| DB          | PostgreSQL + PostGIS | Geo + relational              |
| Time-series | TimescaleDB          | IoT data                      |
| Cache       | Redis                | Speed                         |
| Queue       | Kafka                | Scale, replay                 |
| Search      | ElasticSearch        | Logs, analytics               |
| Cloud       | AWS                  | Mature, global                |
| CI/CD       | GitHub Actions       | Simple, integrated            |
| Containers  | Docker + K8s         | Portability                   |

---

# 12. AUTHENTICATION & AUTHORIZATION

## 12.1 Auth Architecture

- **Protocol:** OAuth 2.0 + OIDC.
- **Tokens:** JWT access (15m) + refresh (7d, rotating).
- **Storage:** Secure storage (Keychain/Keystore).
- **Transport:** HTTPS only, HSTS.

## 12.2 JWT Payload Example

```json
{
  "sub": "user_123",
  "role": "citizen",
  "org_id": "city_01",
  "ward_id": "ward_12",
  "scopes": ["read:waste", "write:grievance"],
  "iat": 1700000000,
  "exp": 1700000900,
  "jti": "uuid"
}
```

## 12.3 Auth Flows

### Phone OTP

```
1. POST /auth/otp { phone }
2. Server generates 6-digit OTP, stores hashed in Redis (TTL 5m)
3. Sends via SMS
4. POST /auth/verify { phone, otp }
5. Server validates → issues JWT + refresh
```

### Email/Password

```
1. POST /auth/register { email, password }
2. Server validates, hashes (Argon2id), creates user
3. Sends verification email
4. POST /auth/login → JWT
```

### Social

```
1. App gets provider token (Google/Apple)
2. POST /auth/social { provider, token }
3. Server verifies with provider
4. Links/creates account → JWT
```

### Refresh

```
1. POST /auth/refresh { refresh_token }
2. Server validates, rotates, issues new pair
3. Old refresh invalidated
```

### Logout

```
1. POST /auth/logout
2. Refresh token revoked
3. Access token short-lived (expires naturally)
```

## 12.4 RBAC Matrix

| Resource         | Citizen | Collector | Recycler | Municipal | Business | Super Admin |
| ---------------- | ------- | --------- | -------- | --------- | -------- | ----------- |
| Own profile      | RW      | RW        | RW       | RW        | RW       | RW          |
| Schedules        | R       | R         | —        | RW        | R        | RW          |
| Pickup request   | RW      | R         | —        | R         | RW       | RW          |
| Grievance        | RW      | RW        | —        | RW        | RW       | RW          |
| Grievance verify | RW(own) | —         | —        | R         | RW(own)  | RW          |
| Rewards          | RW      | —         | —        | R         | R        | RW          |
| Bins             | R       | R         | —        | RW        | R        | RW          |
| Routes           | —       | R         | —        | RW        | —        | RW          |
| Analytics        | R(own)  | R(own)    | R(own)   | RW        | R(own)   | RW          |
| Users            | —       | —         | —        | R(ward)   | —        | RW          |
| Config           | —       | —         | —        | R         | —        | RW          |
| Audit            | —       | —         | —        | R         | —        | RW          |

## 12.5 ABAC Policies

- Collector can only see grievances in assigned ward.
- Municipal admin can only see their city.
- Business can only see their org data.
- Citizen can only see own data + public data.

## 12.6 Session Management

- Max 5 active devices.
- Refresh token rotation.
- Revoke on password change.
- Idle timeout 30 days.
- Concurrent session limit.

## 12.7 MFA

- Required for: Municipal Admin, Super Admin.
- Optional for: Citizen, Business.
- Methods: TOTP (Google Auth), SMS.
- Recovery codes (10).

## 12.8 Account Recovery

- Email link (15m expiry).
- SMS OTP.
- Security questions (optional).
- Manual verification for admins.

## 12.9 Audit Logging

- All auth events: login, logout, failed attempts, MFA, password change, role change.
- Fields: user_id, event, IP, device, timestamp, result.
- Retention: 1 year.

---

# 13. DATABASE DESIGN (FULL SCHEMA)

## 13.1 ER Overview

```
users ──< addresses
users ──< collection_requests
users ──< grievances
users ──< points_ledger
users ──< notifications
users >── roles
collection_requests >── waste_categories
collection_requests >── vehicles
grievances >── wards
bins >── wards
bins ──< bin_readings
routes >── vehicles
rewards ──< redemptions
```

## 13.2 Tables (Detailed)

### users

| Column         | Type         | Constraints                |
| -------------- | ------------ | -------------------------- |
| id             | UUID         | PK                         |
| name           | VARCHAR(100) | NOT NULL                   |
| email          | VARCHAR(255) | UNIQUE, NULL               |
| phone          | VARCHAR(15)  | UNIQUE, NOT NULL           |
| password_hash  | VARCHAR(255) | NULL                       |
| role_id        | INT          | FK roles                   |
| org_id         | UUID         | FK orgs, NULL              |
| ward_id        | UUID         | FK wards, NULL             |
| language       | VARCHAR(5)   | DEFAULT 'en'               |
| status         | ENUM         | active, suspended, deleted |
| email_verified | BOOLEAN      | DEFAULT false              |
| phone_verified | BOOLEAN      | DEFAULT true               |
| mfa_enabled    | BOOLEAN      | DEFAULT false              |
| mfa_secret     | VARCHAR(255) | NULL                       |
| referral_code  | VARCHAR(10)  | UNIQUE                     |
| referred_by    | UUID         | FK users                   |
| created_at     | TIMESTAMP    | DEFAULT now()              |
| updated_at     | TIMESTAMP    | DEFAULT now()              |
| last_login_at  | TIMESTAMP    | NULL                       |

**Indexes:** phone, email, role_id, ward_id, referral_code.

### roles

| Column      | Type        | Constraints |
| ----------- | ----------- | ----------- |
| id          | INT         | PK          |
| name        | VARCHAR(50) | UNIQUE      |
| permissions | JSONB       |             |
| created_at  | TIMESTAMP   |             |

**Seed:** citizen, collector, recycler, municipal_admin, business, super_admin.

### orgs

| Column     | Type         | Constraints                   |
| ---------- | ------------ | ----------------------------- |
| id         | UUID         | PK                            |
| name       | VARCHAR(150) |                               |
| type       | ENUM         | municipal, business, recycler |
| city       | VARCHAR(100) |                               |
| config     | JSONB        |                               |
| created_at | TIMESTAMP    |                               |

### wards

| Column     | Type              | Constraints |
| ---------- | ----------------- | ----------- |
| id         | UUID              | PK          |
| org_id     | UUID              | FK orgs     |
| name       | VARCHAR(100)      |             |
| code       | VARCHAR(20)       |             |
| geom       | GEOMETRY(POLYGON) |             |
| population | INT               |             |
| created_at | TIMESTAMP         |             |

**Index:** GIST on geom.

### addresses

| Column     | Type            | Constraints       |
| ---------- | --------------- | ----------------- |
| id         | UUID            | PK                |
| user_id    | UUID            | FK users          |
| label      | VARCHAR(50)     | home, work, other |
| line1      | VARCHAR(255)    |                   |
| line2      | VARCHAR(255)    | NULL              |
| city       | VARCHAR(100)    |                   |
| state      | VARCHAR(100)    |                   |
| pincode    | VARCHAR(10)     |                   |
| geom       | GEOMETRY(POINT) |                   |
| is_default | BOOLEAN         | DEFAULT false     |
| created_at | TIMESTAMP       |                   |

**Index:** GIST on geom, user_id.

### waste_categories

| Column     | Type         | Constraints   |
| ---------- | ------------ | ------------- |
| id         | UUID         | PK            |
| name       | VARCHAR(100) |               |
| parent_id  | UUID         | FK self, NULL |
| recyclable | BOOLEAN      |               |
| hazardous  | BOOLEAN      |               |
| icon_url   | VARCHAR(500) |               |
| color      | VARCHAR(7)   |               |
| sort_order | INT          |               |
| created_at | TIMESTAMP    |               |

### waste_items

| Column                | Type         | Constraints         |
| --------------------- | ------------ | ------------------- |
| id                    | UUID         | PK                  |
| category_id           | UUID         | FK waste_categories |
| name                  | VARCHAR(150) |                     |
| aliases               | TEXT[]       |                     |
| image_url             | VARCHAR(500) |                     |
| disposal_instructions | TEXT         |                     |
| region_rules          | JSONB        |                     |
| created_at            | TIMESTAMP    |                     |

**Index:** GIN on aliases.

### disposal_rules

| Column       | Type        | Constraints |
| ------------ | ----------- | ----------- |
| id           | UUID        | PK          |
| category_id  | UUID        | FK          |
| region_id    | UUID        | FK          |
| instructions | TEXT        |             |
| bin_color    | VARCHAR(20) |             |
| created_at   | TIMESTAMP   |             |

### collection_schedules

| Column            | Type      | Constraints       |
| ----------------- | --------- | ----------------- |
| id                | UUID      | PK                |
| ward_id           | UUID      | FK wards          |
| waste_category_id | UUID      | FK                |
| day_of_week       | INT       | 0-6               |
| time_start        | TIME      |                   |
| time_end          | TIME      |                   |
| vehicle_id        | UUID      | FK vehicles, NULL |
| active            | BOOLEAN   | DEFAULT true      |
| created_at        | TIMESTAMP |                   |

### collection_requests

| Column            | Type         | Constraints                                                  |
| ----------------- | ------------ | ------------------------------------------------------------ |
| id                | UUID         | PK                                                           |
| user_id           | UUID         | FK users                                                     |
| address_id        | UUID         | FK addresses                                                 |
| waste_category_id | UUID         | FK                                                           |
| type              | ENUM         | regular, special, bulky, e_waste                             |
| status            | ENUM         | pending, assigned, in_progress, collected, cancelled, failed |
| scheduled_at      | TIMESTAMP    |                                                              |
| time_slot         | VARCHAR(20)  |                                                              |
| collector_id      | UUID         | FK users, NULL                                               |
| vehicle_id        | UUID         | FK vehicles, NULL                                            |
| notes             | TEXT         |                                                              |
| photo_url         | VARCHAR(500) |                                                              |
| proof_url         | VARCHAR(500) |                                                              |
| weight_kg         | DECIMAL(8,2) | NULL                                                         |
| created_at        | TIMESTAMP    |                                                              |
| updated_at        | TIMESTAMP    |                                                              |

**Indexes:** user_id, status, scheduled_at, collector_id.

### bins

| Column          | Type            | Constraints                   |
| --------------- | --------------- | ----------------------------- |
| id              | UUID            | PK                            |
| code            | VARCHAR(50)     | UNIQUE                        |
| ward_id         | UUID            | FK wards                      |
| geom            | GEOMETRY(POINT) |                               |
| capacity_l      | INT             |                               |
| fill_level      | INT             | 0-100                         |
| bin_type        | ENUM            | dry, wet, hazardous, e_waste  |
| sensor_id       | VARCHAR(100)    | NULL                          |
| last_reading_at | TIMESTAMP       |                               |
| status          | ENUM            | active, maintenance, inactive |
| created_at      | TIMESTAMP       |                               |

**Index:** GIST on geom, ward_id.

### bin_readings

| Column      | Type         | Constraints |
| ----------- | ------------ | ----------- |
| id          | BIGSERIAL    | PK          |
| bin_id      | UUID         | FK bins     |
| fill_level  | INT          |             |
| temperature | DECIMAL(5,2) | NULL        |
| battery     | INT          | NULL        |
| recorded_at | TIMESTAMP    |             |

**Hypertable on recorded_at.**

### vehicles

| Column       | Type         | Constraints                   |
| ------------ | ------------ | ----------------------------- |
| id           | UUID         | PK                            |
| org_id       | UUID         | FK orgs                       |
| plate        | VARCHAR(20)  | UNIQUE                        |
| capacity_kg  | INT          |                               |
| type         | ENUM         | truck, van, e_cart            |
| driver_id    | UUID         | FK users, NULL                |
| status       | ENUM         | active, maintenance, inactive |
| last_lat     | DECIMAL(9,6) | NULL                          |
| last_lng     | DECIMAL(9,6) | NULL                          |
| last_ping_at | TIMESTAMP    | NULL                          |

### routes

| Column            | Type         | Constraints                     |
| ----------------- | ------------ | ------------------------------- |
| id                | UUID         | PK                              |
| vehicle_id        | UUID         | FK vehicles                     |
| date              | DATE         |                                 |
| optimized_path    | JSONB        |                                 |
| total_distance_km | DECIMAL(8,2) |                                 |
| total_stops       | INT          |                                 |
| completed_stops   | INT          |                                 |
| status            | ENUM         | planned, in_progress, completed |
| created_at        | TIMESTAMP    |                                 |

### grievances

| Column        | Type            | Constraints                                                        |
| ------------- | --------------- | ------------------------------------------------------------------ |
| id            | UUID            | PK                                                                 |
| ticket_no     | VARCHAR(20)     | UNIQUE                                                             |
| user_id       | UUID            | FK users                                                           |
| category      | ENUM            | missed_pickup, overflow, illegal_dumping, odor, damaged_bin, other |
| description   | TEXT            |                                                                    |
| photo_url     | VARCHAR(500)    |                                                                    |
| geom          | GEOMETRY(POINT) |                                                                    |
| ward_id       | UUID            | FK wards                                                           |
| status        | ENUM            | open, assigned, in_progress, resolved, verified, reopened, closed  |
| assigned_to   | UUID            | FK users, NULL                                                     |
| sla_deadline  | TIMESTAMP       |                                                                    |
| resolved_at   | TIMESTAMP       | NULL                                                               |
| verified_at   | TIMESTAMP       | NULL                                                               |
| reopen_reason | TEXT            | NULL                                                               |
| rating        | INT             | NULL                                                               |
| created_at    | TIMESTAMP       |                                                                    |
| updated_at    | TIMESTAMP       |                                                                    |

**Indexes:** user_id, status, ward_id, sla_deadline.

### grievance_timeline

| Column       | Type        | Constraints   |
| ------------ | ----------- | ------------- |
| id           | UUID        | PK            |
| grievance_id | UUID        | FK grievances |
| actor_id     | UUID        | FK users      |
| action       | VARCHAR(50) |               |
| note         | TEXT        |               |
| created_at   | TIMESTAMP   |               |

### rewards

| Column      | Type         | Constraints       |
| ----------- | ------------ | ----------------- |
| id          | UUID         | PK                |
| name        | VARCHAR(150) |                   |
| description | TEXT         |                   |
| points_cost | INT          |                   |
| stock       | INT          |                   |
| image_url   | VARCHAR(500) |                   |
| partner_id  | UUID         | FK partners, NULL |
| active      | BOOLEAN      |                   |
| expires_at  | TIMESTAMP    | NULL              |

### redemptions

| Column       | Type        | Constraints                |
| ------------ | ----------- | -------------------------- |
| id           | UUID        | PK                         |
| user_id      | UUID        | FK users                   |
| reward_id    | UUID        | FK rewards                 |
| points_spent | INT         |                            |
| code         | VARCHAR(50) | UNIQUE                     |
| status       | ENUM        | pending, redeemed, expired |
| redeemed_at  | TIMESTAMP   | NULL                       |
| created_at   | TIMESTAMP   |                            |

### points_ledger

| Column        | Type      | Constraints                                             |
| ------------- | --------- | ------------------------------------------------------- |
| id            | BIGSERIAL | PK                                                      |
| user_id       | UUID      | FK users                                                |
| points        | INT       | + or -                                                  |
| type          | ENUM      | scan, disposal, referral, redemption, bonus, adjustment |
| ref_id        | UUID      | NULL                                                    |
| balance_after | INT       |                                                         |
| created_at    | TIMESTAMP |                                                         |

**Index:** user_id, created_at.

### leaderboards

| Column     | Type        | Constraints               |
| ---------- | ----------- | ------------------------- |
| id         | UUID        | PK                        |
| scope      | ENUM        | ward, city, national      |
| scope_id   | UUID        |                           |
| user_id    | UUID        | FK users                  |
| points     | INT         |                           |
| rank       | INT         |                           |
| period     | VARCHAR(20) | weekly, monthly, all_time |
| updated_at | TIMESTAMP   |                           |

### notifications

| Column     | Type         | Constraints              |
| ---------- | ------------ | ------------------------ |
| id         | UUID         | PK                       |
| user_id    | UUID         | FK users                 |
| title      | VARCHAR(200) |                          |
| body       | TEXT         |                          |
| type       | VARCHAR(50)  |                          |
| data       | JSONB        |                          |
| channel    | ENUM         | push, sms, email, in_app |
| read_at    | TIMESTAMP    | NULL                     |
| created_at | TIMESTAMP    |                          |

### notification_preferences

| Column            | Type    | Constraints  |
| ----------------- | ------- | ------------ |
| user_id           | UUID    | PK, FK users |
| push              | BOOLEAN | DEFAULT true |
| sms               | BOOLEAN | DEFAULT true |
| email             | BOOLEAN | DEFAULT true |
| quiet_hours_start | TIME    | NULL         |
| quiet_hours_end   | TIME    | NULL         |

### transactions

| Column      | Type          | Constraints                                   |
| ----------- | ------------- | --------------------------------------------- |
| id          | UUID          | PK                                            |
| user_id     | UUID          | FK users, NULL                                |
| org_id      | UUID          | FK orgs, NULL                                 |
| amount      | DECIMAL(12,2) |                                               |
| currency    | VARCHAR(3)    |                                               |
| type        | ENUM          | reward_payout, business_billing, subscription |
| status      | ENUM          | pending, success, failed, refunded            |
| gateway_ref | VARCHAR(100)  |                                               |
| created_at  | TIMESTAMP     |                                               |

### audit_logs

| Column     | Type         | Constraints    |
| ---------- | ------------ | -------------- |
| id         | BIGSERIAL    | PK             |
| user_id    | UUID         | FK users, NULL |
| action     | VARCHAR(100) |                |
| entity     | VARCHAR(50)  |                |
| entity_id  | UUID         | NULL           |
| old_value  | JSONB        | NULL           |
| new_value  | JSONB        | NULL           |
| ip         | INET         |                |
| user_agent | TEXT         |                |
| created_at | TIMESTAMP    |                |

**Index:** user_id, entity, created_at. Partition by month.

### feature_flags

| Column     | Type         | Constraints |
| ---------- | ------------ | ----------- |
| key        | VARCHAR(100) | PK          |
| enabled    | BOOLEAN      |             |
| rules      | JSONB        |             |
| updated_at | TIMESTAMP    |             |

### sla_config

| Column                 | Type        | Constraints |
| ---------------------- | ----------- | ----------- |
| id                     | UUID        | PK          |
| category               | VARCHAR(50) |             |
| org_id                 | UUID        | FK orgs     |
| hours                  | INT         |             |
| escalation_after_hours | INT         |             |
| escalate_to_role       | VARCHAR(50) |             |

## 13.3 Sample Queries

### Nearby bins within 1 km

```sql
SELECT id, code, fill_level,
  ST_Distance(geom::geography, ST_MakePoint($1,$2)::geography) AS dist
FROM bins
WHERE ST_DWithin(geom::geography, ST_MakePoint($1,$2)::geography, 1000)
  AND status = 'active'
ORDER BY dist
LIMIT 20;
```

### Ward grievance count last 30 days

```sql
SELECT ward_id, COUNT(*) AS total,
  COUNT(*) FILTER (WHERE status='verified') AS closed,
  AVG(EXTRACT(EPOCH FROM (verified_at - created_at))/3600) AS avg_hours
FROM grievances
WHERE created_at > now() - interval '30 days'
GROUP BY ward_id;
```

### User points balance

```sql
SELECT COALESCE(SUM(points),0) AS balance
FROM points_ledger WHERE user_id = $1;
```

## 13.4 Migrations Strategy

- Tool: Prisma Migrate / Flyway.
- Versioned SQL files.
- Forward-only.
- Test on staging.
- Rollback plan.

## 13.5 Backup & Retention

- Daily automated snapshots.
- 30-day retention.
- PITR (point-in-time recovery) 7 days.
- Encrypted backups.
- Quarterly restore drills.

---

# 14. API SPECIFICATION

## 14.1 Conventions

- **Base URL:** `https://api.ecoloop.app/v1`
- **Format:** JSON.
- **Auth:** `Authorization: Bearer <jwt>`
- **Pagination:** `?page=1&limit=20` → `{ data, meta: { page, limit, total } }`
- **Errors:** `{ error: { code, message, details } }`
- **Versioning:** URL path (`/v1`, `/v2`).
- **Rate limit:** 100 req/min/user, 1000/min/org.
- **Idempotency:** `Idempotency-Key` header for POST.

## 14.2 Error Codes

| HTTP | Code                | Meaning               |
| ---- | ------------------- | --------------------- |
| 400  | VALIDATION_ERROR    | Bad input             |
| 401  | UNAUTHORIZED        | Missing/invalid token |
| 403  | FORBIDDEN           | Insufficient role     |
| 404  | NOT_FOUND           | Resource missing      |
| 409  | CONFLICT            | Duplicate             |
| 422  | UNPROCESSABLE       | Business rule fail    |
| 429  | RATE_LIMITED        | Too many requests     |
| 500  | INTERNAL_ERROR      | Server error          |
| 503  | SERVICE_UNAVAILABLE | Down                  |

## 14.3 Endpoints (Full)

### Auth

| Method | Endpoint         | Body                      | Response                  |
| ------ | ---------------- | ------------------------- | ------------------------- |
| POST   | /auth/otp        | { phone }                 | { message }               |
| POST   | /auth/verify     | { phone, otp }            | { access, refresh, user } |
| POST   | /auth/register   | { email, password, name } | { user }                  |
| POST   | /auth/login      | { email, password }       | { access, refresh, user } |
| POST   | /auth/social     | { provider, token }       | { access, refresh, user } |
| POST   | /auth/refresh    | { refresh }               | { access, refresh }       |
| POST   | /auth/logout     | —                         | { message }               |
| POST   | /auth/forgot     | { email }                 | { message }               |
| POST   | /auth/reset      | { token, password }       | { message }               |
| POST   | /auth/mfa/enable | —                         | { secret, qr }            |
| POST   | /auth/mfa/verify | { code }                  | { message }               |

### Users

| Method | Endpoint                | Description    |
| ------ | ----------------------- | -------------- |
| GET    | /users/me               | Get profile    |
| PATCH  | /users/me               | Update profile |
| DELETE | /users/me               | Delete account |
| GET    | /users/me/addresses     | List addresses |
| POST   | /users/me/addresses     | Add address    |
| PATCH  | /users/me/addresses/:id | Update         |
| DELETE | /users/me/addresses/:id | Delete         |
| GET    | /users/me/preferences   | Get prefs      |
| PATCH  | /users/me/preferences   | Update prefs   |

### Waste

| Method | Endpoint                 | Description       |
| ------ | ------------------------ | ----------------- |
| GET    | /waste/categories        | List categories   |
| GET    | /waste/categories/:id    | Detail            |
| GET    | /waste/items/search?q=   | Search items      |
| POST   | /waste/classify          | Classify image    |
| POST   | /waste/classify/feedback | Accuracy feedback |

**POST /waste/classify**

```json
Request:
{
  "image": "data:image/jpeg;base64,...",
  "lat": 12.9716,
  "lng": 77.5946,
  "on_device": false
}
Response:
{
  "item": "PET Bottle",
  "category": { "id": "...", "name": "Plastic", "recyclable": true },
  "confidence": 0.94,
  "instructions": "Rinse, remove cap, place in DRY waste bin.",
  "bin_color": "blue",
  "alternatives": [
    { "item": "HDPE Bottle", "confidence": 0.03 }
  ]
}
```

### Collection

| Method | Endpoint                          | Description      |
| ------ | --------------------------------- | ---------------- |
| GET    | /collection/schedules?address_id= | Get schedule     |
| POST   | /collection/requests              | Create pickup    |
| GET    | /collection/requests              | List my requests |
| GET    | /collection/requests/:id          | Detail           |
| PATCH  | /collection/requests/:id          | Update           |
| DELETE | /collection/requests/:id          | Cancel           |
| GET    | /collection/requests/:id/track    | Live track       |

**POST /collection/requests**

```json
{
  "address_id": "uuid",
  "waste_category_ids": ["uuid1", "uuid2"],
  "type": "special",
  "scheduled_at": "2026-10-05T10:00:00Z",
  "time_slot": "10:00-12:00",
  "notes": "2 large boxes"
}
```

### Bins

| Method | Endpoint                    | Description  |
| ------ | --------------------------- | ------------ |
| GET    | /bins/nearby?lat&lng&radius | Nearby bins  |
| GET    | /bins/:id                   | Detail       |
| POST   | /bins/:id/report            | Report issue |
| GET    | /bins/:id/readings          | Historical   |

### Grievances

| Method | Endpoint                 | Description      |
| ------ | ------------------------ | ---------------- |
| POST   | /grievances              | Create           |
| GET    | /grievances              | List mine        |
| GET    | /grievances/:id          | Detail           |
| PATCH  | /grievances/:id/verify   | Confirm resolved |
| PATCH  | /grievances/:id/reopen   | Reopen           |
| POST   | /grievances/:id/feedback | Rate             |
| GET    | /grievances/:id/timeline | Timeline         |

**POST /grievances**

```json
{
  "category": "missed_pickup",
  "description": "Bin not collected since 2 days",
  "photo": "base64",
  "lat": 12.9716,
  "lng": 77.5946
}
Response:
{
  "id": "uuid",
  "ticket_no": "GRV-1023",
  "status": "open",
  "sla_deadline": "2026-10-04T10:00:00Z"
}
```

### Rewards

| Method | Endpoint                        | Description    |
| ------ | ------------------------------- | -------------- |
| GET    | /rewards                        | Catalog        |
| GET    | /rewards/balance                | Points balance |
| POST   | /rewards/redeem                 | Redeem         |
| GET    | /rewards/redemptions            | My redemptions |
| GET    | /rewards/leaderboard?scope=ward | Leaderboard    |
| GET    | /rewards/ledger                 | Points history |

### Notifications

| Method | Endpoint                   | Description |
| ------ | -------------------------- | ----------- |
| GET    | /notifications             | List        |
| PATCH  | /notifications/:id/read    | Mark read   |
| PATCH  | /notifications/read-all    | Mark all    |
| GET    | /notifications/preferences | Get prefs   |
| PATCH  | /notifications/preferences | Update      |

### Collector

| Method | Endpoint                      | Description     |
| ------ | ----------------------------- | --------------- |
| GET    | /collector/route/today        | Today's route   |
| GET    | /collector/tasks              | Task list       |
| PATCH  | /collector/tasks/:id          | Update status   |
| POST   | /collector/tasks/:id/proof    | Upload proof    |
| POST   | /collector/tasks/:id/overflow | Report overflow |
| GET    | /collector/summary            | End-of-day      |

### Admin

| Method | Endpoint                     | Description       |
| ------ | ---------------------------- | ----------------- |
| GET    | /admin/dashboard             | KPIs              |
| GET    | /admin/users                 | List users        |
| PATCH  | /admin/users/:id             | Update            |
| GET    | /admin/vehicles              | List              |
| POST   | /admin/vehicles              | Create            |
| GET    | /admin/routes                | List              |
| POST   | /admin/routes/optimize       | Optimize          |
| GET    | /admin/grievances            | List all          |
| PATCH  | /admin/grievances/:id/assign | Assign            |
| GET    | /admin/analytics             | Analytics         |
| GET    | /admin/reports/compliance    | Compliance report |
| GET    | /admin/audit-logs            | Audit             |
| GET    | /admin/feature-flags         | Flags             |
| PATCH  | /admin/feature-flags/:key    | Toggle            |

### Recycler

| Method | Endpoint                       | Description          |
| ------ | ------------------------------ | -------------------- |
| GET    | /recycler/materials            | Available materials  |
| POST   | /recycler/pickups              | Accept pickup        |
| PATCH  | /recycler/pickups/:id          | Update               |
| POST   | /recycler/pickups/:id/complete | Complete with weight |

## 14.4 Webhooks

| Event                | Payload                   |
| -------------------- | ------------------------- |
| grievance.created    | { id, category, ward_id } |
| grievance.resolved   | { id, resolved_by }       |
| collection.completed | { request_id, weight }    |
| bin.overflow         | { bin_id, fill_level }    |
| reward.redeemed      | { user_id, reward_id }    |

## 14.5 WebSocket Events

| Channel           | Events                           |
| ----------------- | -------------------------------- |
| /ws/tracking      | vehicle.position, request.status |
| /ws/bins          | bin.fill, bin.alert              |
| /ws/grievances    | grievance.update                 |
| /ws/notifications | notification.new                 |

## 14.6 OpenAPI Spec (Snippet)

```yaml
openapi: 3.0.3
info:
  title: EcoLoop API
  version: 1.0.0
paths:
  /waste/classify:
    post:
      summary: Classify waste image
      security: [{ bearerAuth: [] }]
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                image: { type: string }
                lat: { type: number }
                lng: { type: number }
      responses:
        "200":
          description: Classification result
```

---

# 15. MODULES (DEEP DIVE)

## 15.1 User & Identity Module

- **Responsibilities:** Registration, login, profile, roles, permissions.
- **Entities:** users, roles, sessions, audit_logs.
- **APIs:** /auth/_, /users/_.
- **Dependencies:** Notification (OTP), Audit.
- **Edge cases:** Duplicate phone, expired OTP, account lockout.

## 15.2 Waste Intelligence Module

- **Responsibilities:** Catalog, AI classification, disposal rules.
- **Entities:** waste_categories, waste_items, disposal_rules, scan_logs.
- **APIs:** /waste/\*.
- **Dependencies:** AI Service, Cache.
- **Edge cases:** Low confidence, unknown item, multiple items, offline.

## 15.3 Collection Module

- **Responsibilities:** Schedules, requests, assignment, tracking.
- **Entities:** schedules, requests, routes, vehicles.
- **APIs:** /collection/_, /collector/_.
- **Dependencies:** Maps, Notification, IoT.
- **Edge cases:** No collector available, address unreachable, reschedule.

## 15.4 IoT Module

- **Responsibilities:** Sensor ingestion, fill levels, alerts.
- **Entities:** bins, bin_readings, sensors.
- **APIs:** /bins/\*.
- **Dependencies:** MQTT broker, TimescaleDB.
- **Edge cases:** Sensor offline, false reading, battery low.

## 15.5 Grievance Module

- **Responsibilities:** Tickets, SLA, escalation, verification.
- **Entities:** grievances, timeline, sla_config.
- **APIs:** /grievances/\*.
- **Dependencies:** Notification, Geo, Analytics.
- **Edge cases:** Duplicate ticket, wrong ward, SLA breach, reopen.

## 15.6 Gamification Module

- **Responsibilities:** Points, rewards, leaderboards.
- **Entities:** points_ledger, rewards, redemptions, leaderboards.
- **APIs:** /rewards/\*.
- **Dependencies:** Payment, Notification.
- **Edge cases:** Fraud, expired reward, out of stock.

## 15.7 Reverse Logistics Module

- **Responsibilities:** Recycler onboarding, material listing, pickups.
- **Entities:** recyclers, materials, pickups.
- **APIs:** /recycler/\*.
- **Dependencies:** Payment, Logistics.
- **Edge cases:** Quality dispute, weight mismatch, no-show.

## 15.8 Specialized Waste Module

- **Responsibilities:** E-waste, sanitary, hazardous handling.
- **Entities:** special_requests, certified_recyclers, manifests.
- **APIs:** /special/\*.
- **Dependencies:** Compliance, Recyclers.
- **Edge cases:** Improper packaging, regulatory violation.

## 15.9 Privacy Shred Module

- **Responsibilities:** Detect personal info, suggest shredding.
- **Entities:** none (stateless).
- **APIs:** /privacy/shred.
- **Dependencies:** AI Service.
- **Edge cases:** False positive, low light, illegible.

## 15.10 Notification Module

- **Responsibilities:** Push, SMS, email, in-app.
- **Entities:** notifications, templates, preferences.
- **APIs:** /notifications/\*.
- **Dependencies:** FCM, Twilio, SendGrid.
- **Edge cases:** Token invalid, quiet hours, rate limit.

## 15.11 Analytics Module

- **Responsibilities:** KPIs, reports, exports.
- **Entities:** aggregated tables, materialized views.
- **APIs:** /admin/analytics/\*.
- **Dependencies:** ClickHouse, Metabase.
- **Edge cases:** Large date range, missing data, timezone.

## 15.12 Admin Module

- **Responsibilities:** User/role/ward/vehicle config, audit.
- **Entities:** orgs, wards, feature_flags.
- **APIs:** /admin/\*.
- **Dependencies:** All.
- **Edge cases:** Permission escalation, bulk operations.

## 15.13 Community Module

- **Responsibilities:** Feed, articles, events.
- **Entities:** posts, comments, likes, articles, events.
- **APIs:** /community/\*.
- **Dependencies:** Moderation, Notification.
- **Edge cases:** Spam, abuse, misinformation.

---

# 16. FUNCTIONS & PSEUDOCODE

## 16.1 classifyWaste

```
function classifyWaste(image, location):
  if isOnline():
    result = cloudAI.classify(image)
  else:
    result = onDeviceAI.classify(image)

  if result.confidence < 0.6:
    return { status: "low_confidence", alternatives: result.alternatives }

  rules = disposalRules.get(result.category, location.region)
  result.instructions = rules.instructions
  result.binColor = rules.binColor

  logScan(user, result)
  return result
```

## 16.2 getNearbyBins

```
function getNearbyBins(lat, lng, radius=1000):
  bins = db.query("""
    SELECT *, ST_Distance(geom, point) AS dist
    FROM bins
    WHERE ST_DWithin(geom, point, radius)
    ORDER BY dist LIMIT 50
  """)
  return bins.map(enrichWithFillLevel)
```

## 16.3 schedulePickup

```
function schedulePickup(userId, addressId, categories, date, slot):
  address = getAddress(addressId)
  if not address.belongsTo(userId): throw Forbidden

  ward = getWard(address.geom)
  if not hasCapacity(ward, date): throw NoSlot

  request = createRequest({
    userId, addressId, categories, date, slot,
    status: "pending", wardId: ward.id
  })

  assignCollector(request)
  notify(userId, "Pickup scheduled")
  emit("request.created", request)
  return request
```

## 16.4 optimizeRoute

```
function optimizeRoute(vehicleId, date, stops):
  # Use OR-Tools VRP solver
  model = VRP()
  model.addStops(stops)
  model.setVehicle(vehicleId, capacity)
  model.setObjective("minimize_distance")
  model.addConstraint("time_windows", stops.timeWindows)
  model.addConstraint("priority", stops.priority)

  solution = model.solve()
  saveRoute(vehicleId, date, solution)
  return solution
```

## 16.5 submitGrievance

```
function submitGrievance(userId, category, photo, lat, lng, desc):
  ward = findWard(lat, lng)
  sla = getSLA(category, ward.orgId)
  deadline = now() + sla.hours

  grievance = create({
    userId, category, photo, geom: (lat,lng),
    wardId: ward.id, status: "open",
    slaDeadline: deadline
  })

  collector = findNearestCollector(ward)
  assign(grievance, collector)
  notify(collector, "New grievance")
  emit("grievance.created", grievance)
  return grievance
```

## 16.6 verifyGrievance

```
function verifyGrievance(grievanceId, userId, isResolved, reason):
  g = getGrievance(grievanceId)
  if g.userId != userId: throw Forbidden
  if g.status != "resolved": throw InvalidState

  if isResolved:
    g.status = "verified"
    g.verifiedAt = now()
    awardPoints(userId, 5, "grievance_verified")
  else:
    g.status = "reopened"
    g.reopenReason = reason
    escalate(g)
    notify(g.assignedTo, "Grievance reopened")

  save(g)
  emit("grievance.updated", g)
```

## 16.7 awardPoints

```
function awardPoints(userId, points, type, refId=null):
  balance = getBalance(userId) + points
  insert("points_ledger", { userId, points, type, refId, balanceAfter: balance })
  updateLeaderboards(userId, points)
  if crossedTier(balance): notifyTierUp(userId)
  return balance
```

## 16.8 redeemReward

```
function redeemReward(userId, rewardId):
  reward = getReward(rewardId)
  if reward.stock <= 0: throw OutOfStock
  balance = getBalance(userId)
  if balance < reward.pointsCost: throw InsufficientPoints

  code = generateCode()
  redemption = create({ userId, rewardId, code, status: "pending" })
  awardPoints(userId, -reward.pointsCost, "redemption", redemption.id)
  decrementStock(rewardId)
  notify(userId, "Reward redeemed! Code: " + code)
  return redemption
```

## 16.9 generateComplianceReport

```
function generateComplianceReport(orgId, from, to):
  data = query("""
    SELECT
      ward_id,
      COUNT(*) AS total_grievances,
      COUNT(*) FILTER (WHERE status='verified') AS resolved,
      AVG(resolution_hours) AS avg_hours,
      SUM(tonnage) AS total_tonnage,
      SUM(recycled_tonnage) AS recycled
    FROM ...
    WHERE org_id = $1 AND created_at BETWEEN $2 AND $3
    GROUP BY ward_id
  """)
  pdf = renderReport(data)
  store(pdf)
  return pdfUrl
```

---

# 17. OOPS DESIGN & PATTERNS

## 17.1 Class Diagram (Core)

```
┌─────────────┐
│    User     │
├─────────────┤
│ - id        │
│ - name      │
│ - phone     │
│ - role      │
├─────────────┤
│ + login()   │
│ + logout()  │
└──────┬──────┘
       │
  ┌────┴────┬──────────┬──────────┐
  │         │          │          │
┌─▼──┐  ┌──▼───┐  ┌───▼────┐  ┌──▼─────┐
│Cit.│  │Coll. │  │Recycler│  │Admin   │
└────┘  └──────┘  └────────┘  └────────┘

┌─────────────┐     ┌──────────────┐
│ WasteItem   │────<│ WasteCategory│
├─────────────┤     ├──────────────┤
│ - id        │     │ - id         │
│ - name      │     │ - name       │
│ - category  │     │ - recyclable │
│ + classify()│     └──────────────┘
└─────────────┘

┌──────────────────┐
│ CollectionRequest│
├──────────────────┤
│ - id             │
│ - user           │
│ - address        │
│ - status         │
│ + assign()       │
│ + complete()     │
└──────────────────┘

┌─────────────┐     ┌──────────────┐
│ Grievance   │────<│ GrievanceEvent│
├─────────────┤     └──────────────┘
│ - id        │
│ - category  │
│ - status    │
│ + assign()  │
│ + resolve() │
│ + verify()  │
│ + reopen()  │
└─────────────┘
```

## 17.2 SOLID Applied

**S — Single Responsibility**

- `WasteClassifier` only classifies. `DisposalRuleProvider` only provides rules.

**O — Open/Closed**

- New waste categories added via data, not code changes.

**L — Liskov Substitution**

- `Collector` and `Recycler` both implement `PickupActor`.

**I — Interface Segregation**

- Separate `ReadableRepository` and `WritableRepository`.

**D — Dependency Inversion**

- Services depend on `INotificationService`, not `FCMService`.

## 17.3 Design Patterns

### Repository

```typescript
interface GrievanceRepository {
  findById(id: string): Promise<Grievance>;
  save(g: Grievance): Promise<void>;
  findByWard(wardId: string): Promise<Grievance[]>;
}
```

### Strategy (AI Models)

```typescript
interface ClassifierStrategy {
  classify(image: Buffer): Promise<Result>;
}
class CloudClassifier implements ClassifierStrategy { ... }
class OnDeviceClassifier implements ClassifierStrategy { ... }
```

### Factory

```typescript
class ClassifierFactory {
  static create(online: boolean): ClassifierStrategy {
    return online ? new CloudClassifier() : new OnDeviceClassifier();
  }
}
```

### Observer (Notifications)

```typescript
eventBus.on("grievance.created", (g) => {
  notificationService.notifyCollector(g);
  analyticsService.track(g);
});
```

### State (Grievance Lifecycle)

```typescript
class GrievanceState {
  assign(): GrievanceState {
    throw new Error();
  }
  resolve(): GrievanceState {
    throw new Error();
  }
  verify(): GrievanceState {
    throw new Error();
  }
}
class OpenState extends GrievanceState {
  assign() {
    return new AssignedState();
  }
}
class ResolvedState extends GrievanceState {
  verify() {
    return new VerifiedState();
  }
}
```

### Decorator (Rewards)

```typescript
class BasePoints {
  getPoints() {
    return 5;
  }
}
class DoublePoints extends BasePoints {
  getPoints() {
    return super.getPoints() * 2;
  }
}
```

### Adapter (IoT)

```typescript
interface BinSensor { read(): Reading; }
class MQTTBinSensor implements BinSensor { ... }
class HTTPBinSensor implements BinSensor { ... }
```

### Singleton (Config)

```typescript
class Config {
  private static instance: Config;
  static getInstance() { ... }
}
```

### Builder (Reports)

```typescript
const report = new ComplianceReport.Builder()
  .forOrg(orgId)
  .dateRange(from, to)
  .includeWards([...])
  .build();
```

## 17.4 DDD Bounded Contexts

- **Identity:** User, Role, Session.
- **Waste:** Category, Item, Rule.
- **Collection:** Schedule, Request, Route, Vehicle.
- **Grievance:** Ticket, Timeline, SLA.
- **Gamification:** Points, Reward, Redemption, Leaderboard.
- **Analytics:** KPI, Report.
- **IoT:** Bin, Sensor, Reading.

## 17.5 Aggregate Roots

- User (owns addresses, preferences)
- CollectionRequest (owns status transitions)
- Grievance (owns timeline)
- Bin (owns readings)

---

# 18. FEATURES (FEATURE-BY-FEATURE SPEC)

## 18.1 AI Waste Classification

**Description:** User captures photo → AI identifies item → returns category + disposal steps.

**Sub-features:**

- On-device model (offline)
- Cloud model (accuracy)
- Multi-item detection
- Symbol/barcode scan
- Confidence threshold + fallback
- Feedback loop

**Acceptance Criteria:**

- Given a clear photo of a PET bottle, returns "PET Plastic" with ≥80% confidence in <5s.
- Given an unknown item, returns "Uncertain" + manual picker.
- Works offline with on-device model.

**Edge Cases:**

- Blurry image → retry prompt.
- Multiple items → selector.
- Low light → flash suggestion.
- Non-waste image → "Not recognized."

**Metrics:** Accuracy, latency, feedback score.

## 18.2 Smart Collection Scheduling

**Description:** Location-based schedule + reminders + special pickup.

**Sub-features:**

- Auto-detect ward → schedule
- Push reminders (1h before)
- Special/bulky request
- Reschedule/cancel
- Live tracking
- Photo proof

**Acceptance:**

- User sees correct schedule for their address.
- Reminder sent 1h before.
- Special pickup scheduled within 24h.

**Edge Cases:**

- No schedule for ward → "Coming soon."
- Slot full → next available.
- Collector no-show → auto-grievance.

## 18.3 Grievance with Verified Closure

**Description:** Report issue → track → confirm resolution.

**Sub-features:**

- Photo + geo auto-capture
- 8 categories
- Auto-assignment
- SLA timer
- Escalation
- Verified closure
- Reopen
- Rating

**Acceptance:**

- Ticket created with unique number.
- Assigned within 2h.
- Resolved within SLA.
- User confirms → closed.
- Reopen → escalated.

**Edge Cases:**

- Duplicate report → merge.
- Wrong ward → reassign.
- SLA breach → auto-escalate.

**Metrics:** SLA compliance, reopen rate, CSAT.

## 18.4 IoT Bin Monitoring

**Description:** Real-time fill levels on map.

**Sub-features:**

- Sensor ingestion (MQTT)
- Fill % + last updated
- Color-coded pins
- Overflow alerts
- Predictive fill

**Acceptance:**

- Fill level updates every 15 min.
- Overflow alert at 90%.
- Map shows accurate status.

**Edge Cases:**

- Sensor offline >1h → flag stale.
- False reading → manual override.

## 18.5 Gamified Rewards

**Description:** Earn points for good actions, redeem for rewards.

**Sub-features:**

- Points for scan, disposal, referral, grievance verify
- Tiers (Bronze/Silver/Gold/Platinum)
- Leaderboards (ward/city/friends)
- Rewards catalog
- QR redemption
- Streaks & badges

**Acceptance:**

- Points credited instantly.
- Balance accurate.
- Redemption generates unique code.
- Leaderboard updates hourly.

**Edge Cases:**

- Fraud (fake scans) → anomaly detection.
- Out of stock → hide.
- Expired reward → remove.

**Metrics:** Points issued, redemption rate, engagement.

## 18.6 Reverse Logistics

**Description:** Connect recyclers with clean material.

**Sub-features:**

- Recycler onboarding
- Material listing
- Pickup scheduling
- Weight & quality capture
- Transparent pricing
- Payment settlement
- Traceability

**Acceptance:**

- Recycler sees available material.
- Pickup scheduled.
- Weight recorded.
- Payment processed.

**Edge Cases:**

- Quality dispute → mediation.
- No-show → penalty.
- Price change → renegotiate.

## 18.7 Specialized Waste (E-waste, Sanitary)

**Description:** Dedicated modules for hazardous streams.

**Sub-features:**

- E-waste: certified recycler routing, data destruction certificate
- Sanitary: discreet pickup, specialized processing
- Hazardous: manifest, compliance

**Acceptance:**

- Request routes to certified partner.
- Manifest generated.
- Certificate issued.

**Edge Cases:**

- Improper packaging → guidance.
- Regulatory violation → block.

## 18.8 Privacy Shred

**Description:** AI detects personal info on packaging, suggests shredding.

**Sub-features:**

- Detect name, address, phone, barcode
- AR overlay highlighting
- Shredding guide

**Acceptance:**

- Detects personal info with ≥70% accuracy.
- Highlights in AR.

**Edge Cases:**

- False positive → dismiss.
- Low light → retry.

## 18.9 Municipal Command Center

**Description:** Web dashboard for city admins.

**Sub-features:**

- Live map (vehicles, bins, grievances)
- KPI cards
- Ward analytics
- Route management
- Grievance oversight
- Compliance reports
- User management
- Audit logs

**Acceptance:**

- Data refreshes every 30s.
- Export works.
- Role-based access enforced.

**Edge Cases:**

- Large data → pagination.
- Timezone → configurable.

## 18.10 Business/ESG Portal

**Description:** Bulk pickup + ESG reporting for businesses.

**Sub-features:**

- Scheduled bulk pickup
- Invoices
- ESG reports
- EPR compliance
- Multi-location

**Acceptance:**

- Pickup scheduled.
- Invoice generated.
- ESG report downloadable.

## 18.11 Community & Education

**Description:** Feed, articles, events.

**Sub-features:**

- Posts, likes, comments
- Articles/videos
- Events
- Q&A
- Moderation

**Acceptance:**

- Post published.
- Moderation within 24h.
- Report abuse works.

## 18.12 Notifications

**Description:** Multi-channel notifications.

**Sub-features:**

- Push (FCM)
- SMS (Twilio)
- Email (SendGrid)
- In-app inbox
- Preferences
- Quiet hours

**Acceptance:**

- Delivered <10s.
- Respects preferences.
- Quiet hours honored.

---

# 19. SECURITY & THREAT MODEL

## 19.1 Threat Model (STRIDE)

| Threat                 | Example          | Mitigation                        |
| ---------------------- | ---------------- | --------------------------------- |
| Spoofing               | Fake login       | MFA, OTP, device binding          |
| Tampering              | Modify grievance | Signed requests, audit logs       |
| Repudiation            | Deny action      | Immutable audit logs              |
| Information disclosure | Data leak        | Encryption, RBAC, anonymization   |
| DoS                    | API flood        | Rate limiting, WAF, CDN           |
| Elevation of privilege | Role escalation  | RBAC, least privilege, validation |

## 19.2 Security Controls

### Network

- TLS 1.3 everywhere.
- WAF (AWS WAF / Cloudflare).
- DDoS protection.
- Private subnets for DB.
- VPC peering.

### Application

- Input validation (Joi/Zod).
- Output encoding.
- Parameterized queries (no raw SQL).
- CSRF tokens.
- Secure headers (Helmet).
- CORS whitelist.
- Rate limiting (per IP, per user).
- Idempotency keys.

### Authentication

- Argon2id for passwords.
- JWT with short expiry.
- Refresh token rotation.
- MFA for admins.
- Account lockout after 5 failed attempts.
- CAPTCHA on suspicious activity.

### Authorization

- RBAC + ABAC.
- Row-level security in DB.
- API-level checks.
- Principle of least privilege.

### Data

- AES-256 at rest.
- TLS in transit.
- PII encryption (column-level).
- Data minimization.
- Anonymization for analytics.
- Consent management.
- Right to erasure.

### Secrets

- AWS Secrets Manager / Vault.
- No secrets in code.
- Rotation policy.
- KMS for keys.

### Images

- Virus scan (ClamAV).
- Size limit (5MB).
- Format validation.
- Strip EXIF (except geo if needed).
- Store in private S3, serve via signed URLs.

### Audit

- Immutable logs.
- SIEM integration.
- Alerting on anomalies.
- Retention 1 year.

### Mobile

- Certificate pinning.
- Root/jailbreak detection.
- Secure storage (Keychain/Keystore).
- Obfuscation.
- Anti-tampering.

### Testing

- SAST (SonarQube).
- DAST (OWASP ZAP).
- Dependency scan (Snyk).
- Pen test annually.
- Bug bounty program.

## 19.3 Compliance

- **GDPR** (EU): consent, DSR, DPO.
- **DPDP Act** (India): consent, data principal rights.
- **SWM Rules 2016** (India): waste handling.
- **EPR** (India): producer responsibility.
- **ISO 27001** (target).
- **SOC 2** (target for B2B).

## 19.4 Incident Response

1. Detect (monitoring/alerts).
2. Triage (severity).
3. Contain (isolate).
4. Eradicate (fix).
5. Recover (restore).
6. Post-mortem (RCA).
7. Notify (regulator, users) if required.

## 19.5 Privacy by Design

- Data minimization.
- Purpose limitation.
- Storage limitation.
- Consent-first.
- Privacy policy in plain language.
- Granular permissions.
- Opt-out options.

---

# 20. ANALYTICS & KPIs

## 20.1 Citizen KPIs

- DAU/MAU
- Scans per user
- Points earned
- Redemptions
- Grievances filed
- Retention (D1, D7, D30)
- NPS

## 20.2 Operational KPIs

- Collection completion %
- On-time %
- Missed pickups
- Route distance
- Fuel saved
- Vehicle utilization
- Bin fill avg

## 20.3 Grievance KPIs

- Tickets/day
- SLA compliance
- Avg resolution time
- Reopen rate
- CSAT
- Escalation rate

## 20.4 Circularity KPIs

- Tonnage collected
- Recycling rate
- Contamination rate
- CO₂ saved
- E-waste processed
- Revenue from recyclables

## 20.5 Business KPIs

- MRR/ARR
- CAC
- LTV
- Churn
- Municipal contracts
- Recycler GMV

## 20.6 Dashboards

- **Citizen:** Impact, points, schedule.
- **Collector:** Route, tasks, summary.
- **Admin:** City KPIs, map, reports.
- **Super Admin:** Platform health, growth.

## 20.7 Events Tracked

```
scan_started, scan_completed, scan_failed,
pickup_requested, pickup_completed,
grievance_created, grievance_resolved, grievance_verified, grievance_reopened,
reward_viewed, reward_redeemed,
bin_viewed, bin_reported,
app_open, onboarding_complete, login, logout
```

## 20.8 Tools

- **Product analytics:** Mixpanel / Amplitude.
- **Crash:** Sentry / Firebase Crashlytics.
- **BI:** Metabase / Superset.
- **Logs:** ELK.
- **Metrics:** Prometheus + Grafana.

---

# 21. TESTING STRATEGY

## 21.1 Test Pyramid

- **Unit (70%):** Services, utilities, models.
- **Integration (20%):** API + DB, service interactions.
- **E2E (10%):** Critical user flows.

## 21.2 Test Types

| Type          | Tool                      | Coverage       |
| ------------- | ------------------------- | -------------- |
| Unit          | Jest, PyTest              | 80%            |
| Integration   | Supertest, Testcontainers | Critical paths |
| E2E           | Detox, Playwright         | 15 flows       |
| Load          | k6, JMeter                | 10K concurrent |
| Security      | OWASP ZAP, Snyk           | All endpoints  |
| Accessibility | Axe, Lighthouse           | All screens    |
| Usability     | UserTesting               | 20 users       |
| Regression    | CI on every PR            | Full suite     |
| UAT           | Pilot users               | Pre-launch     |

## 21.3 Critical E2E Flows

1. Onboard → scan → dispose → earn points.
2. Schedule pickup → track → complete.
3. Report grievance → resolve → verify.
4. Redeem reward.
5. Collector completes route.
6. Admin views dashboard + exports report.

## 21.4 Test Data

- Seed scripts for dev/staging.
- Synthetic users, bins, grievances.
- Anonymized production data for staging.

## 21.5 CI/CD Integration

- PR → lint + unit + integration.
- Merge → build + deploy to staging.
- Staging → E2E + smoke.
- Release → deploy to prod (blue-green).
- Rollback on failure.

## 21.6 Quality Gates

- 80% coverage.
- 0 critical vulnerabilities.
- <5% flaky tests.
- Lighthouse >90.

---

# 22. DEVOPS & INFRASTRUCTURE

## 22.1 Environments

- **Dev:** Local + shared dev.
- **Staging:** Mirror of prod.
- **Prod:** Multi-AZ.
- **Sandbox:** For partners.

## 22.2 CI/CD Pipeline

```
Code → GitHub → GitHub Actions
  → Lint → Test → Build → Docker image
  → Push to ECR → Deploy to EKS
  → Smoke test → Notify
```

## 22.3 Infrastructure as Code

- **Terraform** for AWS resources.
- **Helm** for K8s deployments.
- **Ansible** for config (if needed).

## 22.4 Monitoring

| Layer   | Tool                  |
| ------- | --------------------- |
| Metrics | Prometheus + Grafana  |
| Logs    | ELK / Loki            |
| Traces  | Jaeger / Tempo        |
| Errors  | Sentry                |
| Uptime  | Pingdom / UptimeRobot |
| APM     | New Relic / Datadog   |

## 22.5 Alerting

- PagerDuty / Opsgenie.
- Severity levels (P0–P3).
- Runbooks for each alert.

## 22.6 Backup & DR

- DB: daily snapshot, PITR 7 days.
- S3: versioning + cross-region replication.
- Config: Git.
- DR drill quarterly.
- RTO 1h, RPO 15min.

## 22.7 Cost Optimization

- Reserved instances for steady load.
- Spot for batch.
- S3 lifecycle policies.
- Right-sizing.
- Autoscaling.

## 22.8 Release Strategy

- Feature flags.
- Canary releases (5% → 25% → 100%).
- Blue-green for major.
- Rollback <5 min.

---

# 23. MONETIZATION & BUSINESS MODEL

## 23.1 Revenue Streams

1. **Municipal SaaS:** ₹5–20 per citizen/year.
2. **Business subscriptions:** ₹5K–50K/month.
3. **Recycler commission:** 2–5% of GMV.
4. **Rewards marketplace:** Partner ads/commissions.
5. **Carbon credits:** Revenue share.
6. **Data insights:** Anonymized reports (with consent).
7. **Hardware (future):** IoT sensors.

## 23.2 Pricing Tiers

| Tier      | Citizen | Business  | Municipal |
| --------- | ------- | --------- | --------- |
| Free      | Basic   | —         | —         |
| Plus      | ₹49/mo  | —         | —         |
| Business  | —       | ₹9,999/mo | —         |
| Municipal | —       | —         | Custom    |

## 23.3 Unit Economics

- CAC (citizen): ₹20.
- LTV (citizen): ₹150.
- CAC (municipal): ₹5L.
- LTV (municipal): ₹50L+.
- Payback: <12 months.

## 23.4 Partnerships

- Municipal corporations.
- Recyclers (e-waste, plastic).
- Brands (rewards partners).
- NGOs.
- CSR programs.

---

# 24. ROADMAP & DELIVERY PLAN (SPRINT-LEVEL)

## Phase 0: Discovery (Weeks 1–2)

- User interviews (20 citizens, 5 collectors, 3 admins).
- City audit.
- Competitor analysis.
- Problem validation.
- **Deliverable:** Discovery report.

## Phase 1: Design (Weeks 3–6)

- PRD finalization.
- Information architecture.
- Wireframes.
- UI design.
- Prototype.
- Usability testing.
- **Deliverable:** Figma + PRD.

## Phase 2: Architecture (Weeks 5–6)

- Tech stack finalization.
- DB schema.
- API contracts.
- Infra setup.
- **Deliverable:** Architecture doc + repo.

## Phase 3: MVP Development (Weeks 7–18)

**Sprint 1 (W7–8):** Auth, user, profile.
**Sprint 2 (W9–10):** Waste catalog, AI classification v1.
**Sprint 3 (W11–12):** Collection schedule, pickup request.
**Sprint 4 (W13–14):** Grievance + verified closure.
**Sprint 5 (W15–16):** Rewards, notifications.
**Sprint 6 (W17–18):** Admin dashboard v1, collector app.

## Phase 4: Beta (Weeks 19–22)

- Pilot in 1 ward.
- 500 users.
- Feedback collection.
- Bug fixes.
- **Deliverable:** Beta report.

## Phase 5: Launch (Weeks 23–24)

- App store submission.
- Marketing.
- Municipal training.
- Support setup.
- **Deliverable:** Public launch.

## Phase 6: V1 (Months 7–9)

- IoT integration.
- Reverse logistics.
- Route optimization.
- Municipal analytics.
- E-waste module.

## Phase 7: V2 (Months 10–12)

- Sanitary waste.
- Privacy Shred.
- Carbon credits.
- Predictive analytics.
- Multi-city expansion.

## Phase 8: Scale (Year 2)

- Microservices decomposition.
- 5+ cities.
- 1M users.
- B2B portal.
- International.

---

# 25. TEAM, BUDGET & TIMELINE

## 25.1 Team (MVP)

| Role              | Count | Responsibility                      |
| ----------------- | ----- | ----------------------------------- |
| Product Manager   | 1     | PRD, roadmap, stakeholders          |
| UX/UI Designer    | 1     | Research, design system, prototypes |
| Flutter Dev       | 2     | Mobile app                          |
| Backend Dev       | 2     | NestJS services                     |
| AI Engineer       | 1     | Classification models               |
| DevOps            | 1     | Infra, CI/CD                        |
| QA                | 1     | Testing                             |
| Municipal Liaison | 1     | Partnerships                        |

**Total:** 10 people.

## 25.2 Budget (MVP, 6 months)

| Item                        | Cost (USD)   |
| --------------------------- | ------------ |
| Salaries                    | $120,000     |
| Cloud                       | $6,000       |
| Tools (Figma, Sentry, etc.) | $3,000       |
| AI training/compute         | $5,000       |
| Marketing (pilot)           | $5,000       |
| Legal/compliance            | $5,000       |
| Contingency                 | $6,000       |
| **Total**                   | **$150,000** |

## 25.3 Timeline (Gantt Summary)

```
W1-2   Discovery
W3-6   Design
W5-6   Architecture
W7-18  MVP Dev (6 sprints)
W19-22 Beta
W23-24 Launch
M7-9   V1
M10-12 V2
Y2     Scale
```

---

# 26. RISKS, ASSUMPTIONS & MITIGATIONS

## 26.1 Risks

| Risk                    | Likelihood | Impact | Mitigation                                |
| ----------------------- | ---------- | ------ | ----------------------------------------- |
| Low citizen adoption    | High       | High   | Gamification, municipal mandate, referral |
| Municipal bureaucracy   | High       | High   | Pilot-first, champion identification      |
| AI accuracy low         | Medium     | High   | Human-in-loop, continuous training        |
| IoT cost                | Medium     | Medium | Start with QR, add sensors later          |
| Data privacy breach     | Low        | High   | Encryption, audits, pen tests             |
| Collector resistance    | Medium     | Medium | Training, incentives, simple UX           |
| Recycler quality issues | Medium     | Medium | Grading, mediation, penalties             |
| Funding gap             | Medium     | High   | Lean MVP, grants, CSR                     |
| Competition             | Medium     | Medium | Speed, differentiation, partnerships      |

## 26.2 Assumptions

- Municipalities will share data.
- Citizens will adopt if easy + rewarding.
- Recyclers want clean material.
- IoT sensors can be retrofitted.
- Cloud costs will decrease.

## 26.3 Mitigations in Detail

- **Pilot-first:** Prove in 1 ward before scaling.
- **Champion model:** Identify supportive officials.
- **Dual AI:** On-device + cloud for reliability.
- **Modular hardware:** Support multiple sensor types.
- **Privacy by design:** Minimize data, encrypt, consent.
- **Incentive design:** Points, recognition, gamification.

---

# 27. LEGAL, COMPLIANCE & PRIVACY

## 27.1 Legal Requirements

- **India:** SWM Rules 2016, EPR, DPDP Act 2023.
- **EU:** GDPR, Waste Framework Directive.
- **US:** EPA, state laws.
- **Others:** Local waste regulations.

## 27.2 Privacy Policy Essentials

- What data we collect.
- Why we collect it.
- How we use it.
- Who we share with.
- How long we keep it.
- User rights (access, delete, port).
- Contact DPO.

## 27.3 Terms of Service

- Acceptable use.
- Account responsibility.
- Rewards terms.
- Liability limits.
- Dispute resolution.

## 27.4 Data Processing Agreement (DPA)

- For municipal/business clients.
- Data ownership.
- Security obligations.
- Breach notification.
- Sub-processors.

## 27.5 Consent Management

- Granular consent at signup.
- Location, camera, notifications.
- Marketing opt-in.
- Withdrawal mechanism.

## 27.6 Data Retention

- Active accounts: indefinite.
- Deleted accounts: purged in 30 days.
- Logs: 1 year.
- Analytics: anonymized, 3 years.

## 27.7 User Rights

- Access, rectify, delete, port, object.
- Request via app or email.
- Response within 30 days.

---

# 28. GO-TO-MARKET & SUPPORT

## 28.1 GTM Strategy

- **Phase 1:** Pilot in 1 ward (500 users).
- **Phase 2:** City-wide (50K users).
- **Phase 3:** Multi-city (500K users).
- **Phase 4:** National (5M users).

## 28.2 Channels

- Municipal partnerships.
- Resident welfare associations (RWAs).
- Schools & colleges.
- Corporate CSR.
- Social media.
- Referral program.
- App store optimization.

## 28.3 Launch Activities

- Press release.
- Launch event with mayor.
- Influencer campaign.
- On-ground volunteers.
- Free rewards for first 10K users.

## 28.4 Support

- **In-app:** Help center, chatbot.
- **Email:** support@ecoloop.app.
- **Phone:** Toll-free (9–6).
- **SLA:** P0 1h, P1 4h, P2 24h.
- **Languages:** EN, HI + regional.

## 28.5 Community Management

- Moderation team.
- Response within 24h.
- Escalation matrix.

---

# 29. APPENDICES

## 29.1 Glossary

- **EPR:** Extended Producer Responsibility.
- **SWM:** Solid Waste Management.
- **MRF:** Material Recovery Facility.
- **VRP:** Vehicle Routing Problem.
- **RBAC:** Role-Based Access Control.
- **ABAC:** Attribute-Based Access Control.

## 29.2 Sample Waste Categories

- Organic (wet)
- Plastic (recyclable)
- Paper (recyclable)
- Glass (recyclable)
- Metal (recyclable)
- E-waste (hazardous)
- Sanitary (hazardous)
- Medical (hazardous)
- Construction debris
- Bulky waste

## 29.3 Sample Disposal Rules

| Item         | Category | Bin   | Instructions      |
| ------------ | -------- | ----- | ----------------- |
| PET bottle   | Plastic  | Blue  | Rinse, remove cap |
| Banana peel  | Organic  | Green | Compost           |
| Battery      | E-waste  | Red   | Tape terminals    |
| Sanitary pad | Sanitary | Red   | Wrap in paper     |
| Glass jar    | Glass    | Blue  | Rinse, no lid     |
| Newspaper    | Paper    | Blue  | Keep dry          |

## 29.4 Points Table

| Action             | Points |
| ------------------ | ------ |
| Sign up            | 10     |
| First scan         | 10     |
| Daily scan         | 5      |
| Correct disposal   | 5      |
| Referral           | 50     |
| Grievance verified | 5      |
| Weekly streak      | 20     |
| Community post     | 2      |

## 29.5 Tier System

| Tier     | Points    | Benefits                     |
| -------- | --------- | ---------------------------- |
| Bronze   | 0–500     | Basic                        |
| Silver   | 501–2000  | 10% bonus                    |
| Gold     | 2001–5000 | 20% bonus, priority pickup   |
| Platinum | 5000+     | 30% bonus, exclusive rewards |

## 29.6 Sample Compliance Report Fields

- City, ward, period.
- Total waste collected (tonnes).
- Segregated vs mixed.
- Recycling rate.
- Grievances: total, resolved, SLA %.
- E-waste processed.
- CO₂ saved.
- Recommendations.

## 29.7 Tech Stack Summary

| Layer       | Tech                 |
| ----------- | -------------------- |
| Mobile      | Flutter              |
| Web         | Next.js              |
| Backend     | NestJS               |
| AI          | Python + TensorFlow  |
| DB          | PostgreSQL + PostGIS |
| Cache       | Redis                |
| Time-series | TimescaleDB          |
| Search      | ElasticSearch        |
| Queue       | Kafka                |
| Storage     | S3                   |
| Cloud       | AWS                  |
| CI/CD       | GitHub Actions       |
| Containers  | Docker + K8s         |
| Monitoring  | Prometheus + Grafana |
| Logs        | ELK                  |
| Errors      | Sentry               |

## 29.8 Folder Structure (Backend)

```
src/
├── modules/
│   ├── auth/
│   ├── users/
│   ├── waste/
│   ├── collection/
│   ├── bins/
│   ├── grievances/
│   ├── rewards/
│   ├── notifications/
│   ├── analytics/
│   └── admin/
├── common/
│   ├── guards/
│   ├── interceptors/
│   ├── filters/
│   └── utils/
├── config/
├── database/
│   ├── migrations/
│   └── seeds/
└── main.ts
```

## 29.9 Folder Structure (Flutter)

```
lib/
├── core/
│   ├── theme/
│   ├── router/
│   ├── api/
│   └── utils/
├── features/
│   ├── auth/
│   ├── home/
│   ├── scan/
│   ├── schedule/
│   ├── map/
│   ├── grievance/
│   ├── rewards/
│   ├── profile/
│   └── community/
├── shared/
│   ├── widgets/
│   └── models/
└── main.dart
```

## 29.10 Sample Sprint Plan (Sprint 1)

**Goal:** Auth + user profile working end-to-end.

- Backend: /auth/otp, /auth/verify, /users/me.
- DB: users, roles, sessions.
- Mobile: onboarding, phone entry, OTP, profile screen.
- Tests: unit + integration.
- Demo: Register → login → see profile.

## 29.11 Acceptance Test Cases (Sample)

| ID    | Test                      | Expected                    |
| ----- | ------------------------- | --------------------------- |
| TC-01 | Register with valid phone | OTP sent                    |
| TC-02 | Verify correct OTP        | JWT issued                  |
| TC-03 | Verify wrong OTP          | Error, attempts decremented |
| TC-04 | Scan PET bottle           | Correct category            |
| TC-05 | Schedule pickup           | Request created             |
| TC-06 | Submit grievance          | Ticket created              |
| TC-07 | Verify grievance          | Status = verified           |
| TC-08 | Redeem reward             | Code generated              |
| TC-09 | Collector completes task  | Status = collected          |
| TC-10 | Admin exports report      | PDF downloaded              |

## 29.12 Sample API Response (Error)

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid phone number",
    "details": [{ "field": "phone", "issue": "must be 10 digits" }]
  }
}
```

## 29.13 Sample Notification Templates

- **Pickup reminder:** "Hi {name}, your {type} pickup is in 1 hour. Keep it ready!"
- **Grievance resolved:** "Your ticket {no} is resolved. Please confirm."
- **Points earned:** "You earned {points} points! Total: {balance}."
- **Reward redeemed:** "Your reward code: {code}. Show at partner."

## 29.14 Environment Variables (Sample)

```
DATABASE_URL=
REDIS_URL=
JWT_SECRET=
JWT_REFRESH_SECRET=
AWS_S3_BUCKET=
FCM_SERVER_KEY=
TWILIO_SID=
TWILIO_TOKEN=
SENDGRID_KEY=
GOOGLE_MAPS_KEY=
SENTRY_DSN=
```

## 29.15 Seed Data (Sample)

```json
{
  "roles": [
    "citizen",
    "collector",
    "recycler",
    "municipal_admin",
    "business",
    "super_admin"
  ],
  "categories": [
    "Organic",
    "Plastic",
    "Paper",
    "Glass",
    "Metal",
    "E-waste",
    "Sanitary",
    "Hazardous"
  ],
  "wards": ["Ward 1", "Ward 2", "Ward 3"],
  "rewards": [
    { "name": "₹50 Grocery Voucher", "points_cost": 500 },
    { "name": "Free Coffee", "points_cost": 200 },
    { "name": "Plant a Tree", "points_cost": 300 }
  ]
}
```

---

# 🎯 FINAL SUMMARY

You now have a **complete, detailed, all-in-one blueprint** for EcoLoop covering:

✅ Abstract & vision  
✅ Market analysis  
✅ Full PRD with requirements  
✅ Personas & journeys  
✅ Naming & branding  
✅ Design system  
✅ Screen-by-screen UI  
✅ UX flows & edge cases  
✅ Detailed architecture  
✅ Auth & RBAC  
✅ Full DB schema  
✅ Complete API spec  
✅ Module deep dives  
✅ Functions & pseudocode  
✅ OOPS & design patterns  
✅ Feature-by-feature specs  
✅ Security & threat model  
✅ Analytics & KPIs  
✅ Testing strategy  
✅ DevOps  
✅ Monetization  
✅ Sprint-level roadmap  
✅ Team, budget, timeline  
✅ Risks & mitigations  
✅ Legal & compliance  
✅ GTM & support  
✅ Appendices

**Next actions:**

1. Validate with 5 municipalities + 50 citizens.
2. Build Figma prototype.
3. Finalize PRD.
4. Set up repo + CI/CD.
5. Start Sprint 1.

If you want, I can now produce:

- **Figma UI kit (component-by-component spec)**
- **OpenAPI 3.0 full spec file**
- **SQL migration files**
- **Pitch deck (15 slides)**
- **Financial model (Excel)**
- **Sprint 1–6 detailed tickets (Jira format)**

Just say which one.

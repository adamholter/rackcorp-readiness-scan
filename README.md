# Sovereignty & Infrastructure Readiness Scan

An open-source lead magnet for cloud infrastructure providers. Visitors enter a public website and primary market to receive a directional report on hosting geography, browser security policies, edge/CDN signals, technology indicators, and sovereign-cloud readiness.

## What it uses

- Google DNS-over-HTTPS for public DNS resolution
- IPWho public API for network geolocation and provider context
- Direct server-side HTTP inspection for headers and technology signals
- Optional Apify Website Content Crawler enrichment when `APIFY_TOKEN` is configured

All third-party requests run on the server. No API credential is included in client JavaScript. The scanner validates every redirect hop and blocks private/internal IPv4 targets to reduce SSRF risk.

## Run locally

Requires Node.js 22.13 or later.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment

`APIFY_TOKEN` is optional. Without it, the core report still works using DNS, geolocation, HTTP headers, and lightweight HTML indicators.

## Validation

```bash
npm run build
npm run lint
```

## Branding and reuse

The code is MIT licensed. RackCorp name and official logo assets remain the property of RackCorp and are included here only for this demonstration. Replace the files in `public/` and the brand tokens in `app/globals.css` before adapting the project for another company.

## Methodology limits

This is a directional external assessment, not a penetration test, legal opinion, or compliance certification. CDN/edge IPs may not reveal the origin or data-processing location. A complete review should validate application architecture, data flows, backups, recovery objectives, and contractual processor locations.

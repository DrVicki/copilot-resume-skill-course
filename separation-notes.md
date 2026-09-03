# Proofroom and Proofwork Separation

The dual-course implementation was separated on September 3, 2026.

| Property | Purpose | Location | State |
| --- | --- | --- | --- |
| Proofwork | Microsoft Copilot résumé-tailoring micro-course | Managed Proofwork WebDev project | Résumé course only; `/interview-prep` removed and returns the normal not-found page. |
| Proofroom | Microsoft Copilot interview-preparation micro-course | `http://34.26.38.206/` | Independent Nginx deployment with its own root route, metadata, assets, browser-local state, downloads, and certificate. |

The standalone Proofroom production files live at `/var/www/proofroom/current` on the connected cloud computer. Its source archive is stored at `/home/ubuntu/proofroom-interview-course-source.tar.gz`, and the operational record is `/home/ubuntu/AGENTS.md`.

Both properties were checked with TypeScript and production builds. Desktop and mobile layouts, Proofroom progress and lesson download behavior, the Proofwork résumé-only route, and the removed `/interview-prep` path were verified after separation.

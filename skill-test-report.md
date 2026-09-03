# Evidence-Led Copilot Course Builder — Skill Test Report

**Test date:** September 3, 2026  
**Test output:** *Build a Copilot Interview Practice Lab*  
**Companion route:** `/interview-prep`  
**Creator and instructor:** Dr. Vicki Bealman

## Result

The reusable skill successfully produced a source-grounded, four-lesson Microsoft Copilot companion course inside the existing Proofwork website. The original résumé course remains available at `/` with its independent browser-local state, while the interview course stores its own learner metadata, notes, reflections, evidence, and completion progress.

| Validation area | Result | Evidence |
| --- | --- | --- |
| Course contract | Pass | Four applied lessons, 60-minute scope, one reusable interview-practice agent outcome. |
| Official grounding | Pass | Current Microsoft Learn guidance for Agent Builder, declarative instructions, and knowledge sources; Microsoft-hosted mock-interview guidance cited on-page. |
| Instructor branding | Pass | Dr. Vicki Bealman appears in the hero, instructor section, downloads, certificate, and footer. |
| Structured lessons | Pass | Interview Brief, Proof Story Bank, adaptive mock interview, and Evidence Debrief. |
| Student workspace | Pass | Editable notes, completion evidence, reflection, prompt copying, and independent lesson navigation. |
| Persistence | Pass | Student identity and lesson-one work survived navigation and page refresh in browser-local storage. |
| Progress gate | Pass | Completion advanced through 25%, 50%, 75%, and 100%; certificate unlocked only at 100%. |
| Canvas artifacts | Pass | Individual lesson file and complete four-lesson bundle generated with learner-specific filenames and privacy language. |
| Certificate | Pass | Generated with learner name, course title, completion date, instructor attribution, and course summary. |
| Responsive design | Pass | Full-page desktop and 375-pixel mobile captures reviewed. |
| Regression check | Pass | The original résumé course and its separate saved state remain intact after the shared-workspace refactor. |
| Code quality | Pass | TypeScript validation and production build completed successfully. |
| Runtime quality | Pass | No client-console errors or application request failures appeared during the final journey test. |

## Skill Improvement Discovered

Three lesson-image generations returned persistent failure placeholders, including after targeted regeneration. The website was repaired with deterministic, accessible editorial diagrams built from HTML and CSS. The reusable skill now requires rendered-asset verification and directs builders to use a deterministic CSS or SVG fallback after a replacement generation also fails. The revised skill passed its required validator after this change.

## Final Assessment

The skill is reusable for additional Microsoft Copilot professional-learning courses. Its strongest repeatable elements are the staged learning contract, structured lesson data, configurable course studio, truth and privacy boundaries, Canvas-ready artifact format, explicit completion gate, and end-to-end student-journey test. The asset fallback added during this test improves resilience without weakening the visual system.

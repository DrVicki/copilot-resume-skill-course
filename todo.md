# Course Website Implementation Checklist

- [x] Credit Dr. Vicki Bealman as creator and instructor in the hero, course details, and footer.
- [x] Create an editable Notes area for every lesson.
- [x] Include the lesson’s reusable Copilot prompt in every lesson workspace.
- [x] Add a per-lesson download that combines lesson notes, the prompt, reflection, and action assignment in a Canvas-ready text file.
- [x] Add a course-level download that combines all completed lesson submissions.
- [x] Add clear instructions for naming and uploading completed files to Canvas.
- [x] Persist lesson notes and completion progress locally in the student’s browser.
- [x] Validate per-lesson download content, prompt controls, lesson navigation, persistent note fields, and completion progress state.
- [x] Verify mobile and desktop layouts, keyboard-focusable controls, and reduced-motion styling.

## Final Validation

- [x] TypeScript validation passes.
- [x] Production build passes.
- [x] No client-console errors or failed network requests were detected during the interaction test.
- [x] Individual lesson file, complete Canvas bundle, and completion certificate downloads were generated and inspected.

## Reusable Skill Package

- [x] Define the skill trigger, supported course-building scenarios, and non-goals.
- [x] Initialize the skill with the required skill scaffolding utility.
- [x] Author a concise staged workflow covering research, course design, visual direction, web implementation, Canvas downloads, validation, and delivery.
- [x] Add reusable reference material for course architecture, Canvas-ready artifacts, and quality gates.
- [x] Add reusable templates for the lesson specification and downloadable submission format.
- [x] Remove unused scaffold examples.
- [x] Run the required skill validation and fix any reported issues.
- [x] Deliver the completed SKILL.md as an installable skill package.

## Interview-Prep Companion Course Skill Test

- [x] Load and follow the reusable skill and its applicable references and templates.
- [x] Define a four-lesson Microsoft Copilot interview-preparation course contract.
- [x] Research current official Microsoft guidance relevant to reusable agents, instructions, and knowledge sources.
- [x] Establish the companion at `/interview-prep` within the existing Proofwork project while preserving the resume course at `/`.
- [x] Create and commit to a distinct interview-studio visual direction.
- [x] Generate coordinated hero, lesson, and brand assets.
- [x] Build instructor branding, persistent notes, prompt copying, progress tracking, Canvas-ready lesson downloads, a combined bundle, and certificate completion.
- [x] Validate desktop and mobile layouts, student-state persistence, lesson navigation, downloads, and certificate unlock.
- [x] Run TypeScript and production-build checks and inspect runtime logs.
- [x] Document any reusable-skill gaps discovered during the test and refine the skill if needed.
- [x] Deliver one final companion-course checkpoint and report the skill-test outcome.

## Proofroom Standalone Separation

- [x] Audit every Proofroom route, data file, shared component dependency, style block, asset reference, and navigation link in the current Proofwork project.
- [x] Preserve the latest stable dual-course checkpoint as the migration source.
- [x] Create an independent Proofroom project with its own root route, metadata, browser state key, artifacts, design file, and course workspace.
- [x] Ensure the Proofroom site contains no Proofwork résumé-course navigation, copy, state, or downloads.
- [x] Remove the `/interview-prep` route, companion navigation, and Proofroom course data from the Proofwork application.
- [x] Verify the Proofwork site remains a complete résumé-only course with working notes, progress, downloads, and certificate.
- [x] Verify the standalone Proofroom site on desktop and mobile with working notes, progress, downloads, and certificate.
- [x] Run TypeScript, production build, runtime log, and broken-request checks for both sites.
- [x] Save the final Proofwork checkpoint and deliver the independently deployed Proofroom property with maintenance notes.

## Linked Learning Path

- [x] Add a persistent Proofroom navigation link to the Proofwork header.
- [x] Add a responsive Proofroom promotional banner to the Proofwork course.
- [x] Preserve the complete résumé-course workflow and saved student state.
- [x] Validate the reciprocal URL, mobile layout, TypeScript, build, and runtime logs.
- [x] Save and publish the updated Proofwork checkpoint.

## Independent Proofroom Task and GitHub Handoff

- [x] Review the Manus task-creation workflow and GitHub integration requirements.
- [x] Create a private GitHub repository dedicated to the standalone Proofroom source.
- [x] Commit and push the validated standalone course without build output, dependency folders, or secrets.
- [x] Create a new private Manus task that identifies Proofroom as an independent website project and includes the repository handoff context.
- [x] Finish reciprocal navigation using the independent Proofroom destination.
- [x] Validate both properties and deliver the new task and repository details.

- [x] Replace temporary Proofroom IP links with the dedicated Proofroom GitHub Pages URL after publication.

## Proofwork GitHub Pages Companion

- [x] Confirm the exact GitHub repository remote, default branch, and current Pages configuration.
- [x] Define the boundary between the public GitHub Pages companion and the live interactive Proofwork course.
- [x] Create `docs/index.html`, `docs/404.html`, `docs/.nojekyll`, and relative CSS/JavaScript assets.
- [x] Align the public curriculum with all four current Proofwork lessons and link to the live interactive course.
- [x] Add a project-local `pages:check` validation command and deployment guide.
- [x] Run the Pages validator, TypeScript check, production build, and `git diff --check`.
- [x] Commit and push the Pages package to the confirmed repository and branch.
- [x] Configure branch-based `main` → `/docs` publishing with the repository owner’s one-time settings change.
- [x] Verify the public GitHub Pages URL, relative assets, curriculum accordion, and live-course links.

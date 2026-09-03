# Proofwork GitHub Pages Deployment

The repository is [`DrVicki/copilot-resume-skill-course`](https://github.com/DrVicki/copilot-resume-skill-course) on the `main` branch. The public companion is packaged under `/docs` for workflow-free, branch-based GitHub Pages publishing.

| Setting | Value |
| --- | --- |
| Publishing mode | Deploy from a branch |
| Branch | `main` |
| Folder | `/docs` |
| Expected URL | `https://drvicki.github.io/copilot-resume-skill-course/` |
| Live interactive course | `https://copilotskill-hovqben3.manus.space` |

## One-time repository setting

Open **Settings → Pages** in the GitHub repository. Under **Build and deployment**, select **Deploy from a branch**, choose `main`, select `/docs`, and save. The connected integration can push repository content but cannot read or modify the Pages administration endpoint, so this one-time setting may require the repository owner.

## Validation

Run `pnpm pages:check` before committing. The validator confirms the required Pages files, relative local assets, live-course link, all four lesson titles, and the deployment configuration documented above.

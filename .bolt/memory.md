# Project memory

## Product intent & audience

- Employment portal ("dallah-careers"), Dallah-style. Audience: job seekers and employers.

## Brand personality & voice

- Not yet inferred from content; awaiting UI copy / brand assets review.

## Visual design & UX direction

- React frontend with a separate server component.
- References a logo and favicon from external/project storage; images may appear broken if storage paths differ after deployment.

## Decisions, constraints & rationale

- Package manager: pnpm (not npm). A stale empty placeholder lockfile was removed to avoid install conflicts.
- Deployment expects project files at the project root (`/home/project/`); the project originally arrived zipped as `dallah-careers.zip` and was extracted to root.
- Type-check and production build verified clean after extraction.

## Open questions & assumptions

- Whether externally referenced images/favicon need re-uploading to this project's storage after publish.
- Exact deployment target and runtime environment details are unconfirmed.
- Full feature scope and server endpoints not yet audited.
# Contributing to Zigbee Website

Zigbee is a student-run community led by OUTR MCA students, dedicated to fostering software development skills and innovation. By contributing to this project, you help maintain a high-quality, clean, and maintainable codebase while learning and collaborating with fellow developers. 🚀

---

> **Note:** When you start working on an issue, update the project board to `In Progress`.

---

## Branching & Commits

- For each issue, create a **new separate branch**, e.g., `2-setup-next-app`.
- **Do not commit directly to the `main` branch**.
- Always **squash commits** before merging the Pull Request (PR), use **Squash & merge** option from dropdown.
- Follow commit conventions, e.g., `Implemented hero section`. Use **past tense** for commit messages.

---

## Pull Request Workflow

- Before creating a PR, **self-review your code** and ensure all functionality is working.
- Do not remove the PR template; **update it according to the instructions**.
- Assign reviewers and **request a review** for your PR.
- **Do not merge your PR yourself**. PR must be approved by at least one reviewer.
- **GitHub is the source of truth**: discuss issues and PRs openly.

---

## Issues

- When creating issues, add **necessary labels**.
- Provide a **detailed description** for each issue you create.

---

## Code & Development Guidelines

- Install the recommended **VS Code extensions**.
- Do not bypass **Husky hooks** or force push to branches.
- Follow project **best practices** outlined in `README.md`:
  - Keep files at the **closest scope** to their usage.
  - Name components and folders **semantically**, using PascalCase where appropriate.
  - Place **API routes** inside `app/api` (Next.js convention).
  - Use **default exports** for single components and **named exports** for multiple exports.
  - Keep `useState` hooks at the top, followed by other hooks.
  - Destructure props and API responses for cleaner code.
  - Avoid unnecessary `<div>` wrappers.
  - Use **template literals**, self-closing tags, and object literals for conditional rendering.
  - Keep code **DRY** and modular.

---

## Communication

- Discuss implementation details, issues, or PRs **on GitHub**.
- Be respectful and constructive when reviewing others’ code.

---

Thank you for helping maintain a high-quality codebase! 💙

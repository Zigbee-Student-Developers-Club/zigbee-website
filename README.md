# Zigbee

Zigbee is a student-run community, led by OUTR MCA students, dedicated to fostering software development skills and innovation.

---

## Tech Stack Proposal

- **Framework:** [Next.js](https://nextjs.org)
- **Authentication & Storage:** [Appwrite](https://appwrite.io)
- **UI Library:** [shadcn/ui](https://ui.shadcn.com)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** TypeScript

---

## Getting Started

**Prerequisites:**

- Node.js v22.13
- yarn

**Steps:**

```bash
# Clone the repository
git clone git@github.com:Zigbee-Student-Developers-Club/zigbee-website.git

# Navigate into the project
cd zigbee-website

# Install dependencies
yarn install

# Run the development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-updates as you edit `src/app/page.tsx`.

---

## Project Structure / Architecture

```
src
├── app               # Next.js app directory
│   ├── page.tsx      # Root home page, URL: /
│   ├── dashboard     # Dashboard page
│   │   └── page.tsx  # URL: /dashboard
│   ├── profile       # Profile page
│   │   └── page.tsx  # URL: /profile
│   └── api           # API routes (Next.js serverless functions)
│       └── products.ts # URL: /api/products
├── components        # All React components
│   ├── commons        # Reusable components (Button, Header, Input, etc.)
│   └── PageSpecific   # Page-specific components
├── hooks             # Custom hooks
├── utils             # Utility functions used across the project
├── constants         # Project-level constants
├── translations      # Translation files (en.json, etc.)
└── lib               # Third-party library initialization or overrides
```

**Best Practices:**

- Keep files at the closest scope to their usage.
- Name components and folders semantically using PascalCase.
- Use `index.ts` or `index.tsx` in component folders to consolidate exports.
- Default export single components, use named exports for multiple exports.
- Group multiple related states inside objects; update them functionally.
- Keep `useState` hooks at the top, followed by other hooks.
- Destructure props and API responses for cleaner, maintainable code.
- Avoid unnecessary `div`s and return single components directly.
- Use template literals, self-closing tags, and object literals for conditional rendering.
- Place API routes inside `app/api` folder per Next.js conventions.
- Check this [article](https://courses.bigbinaryacademy.com/learn-react/miscellaneous/structuring-code/) for more details.

---

## Available Scripts

| Script   | Description                      |
| -------- | -------------------------------- |
| `dev`    | Runs the app in development mode |
| `build`  | Builds the app for production    |
| `start`  | Runs the production server       |
| `lint`   | Runs ESLint to check code style  |
| `format` | Formats code using Prettier      |

---

## Editor & Tooling Setup

- **VSCode Extensions:** ESLint, Prettier, Tailwind CSS IntelliSense
- **Pre-commit hooks:** Husky + lint-staged
- **EditorConfig:** Enforces consistent editor settings
- **Node Version & Package Manager:** Specified in `.nvmrc` / `.node-version` and lockfile

---

## Contributing

Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for coding standards, PR guidelines, and contribution workflow.

---

## Deployment

- Recommended platform: [Vercel](https://vercel.com) for Next.js SSR & static builds
- Refer to [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## References & Learning

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Appwrite Documentation](https://appwrite.io/docs)
- [shadcn/ui](https://ui.shadcn.com)

# Career Topologies

A comprehensive framework for understanding and developing career paths in technology organizations.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [pnpm](https://pnpm.io/) package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

```bash
pnpm build
```

### Linting

```bash
pnpm lint
```

### Preview Production Build

```bash
pnpm preview
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library built on Radix UI
- **Lucide React** - Icon library
- **pnpm** - Package manager

## Project Structure

```
├── public/              # Static assets
│   ├── favicon.ico     # App favicon
│   └── vite.svg        # Vite logo
├── src/                # Source code
│   ├── components/     # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── pages/      # Page components
│   │   └── ...         # Other components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Library code and configurations
│   ├── styles/         # Global CSS styles
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main App component
│   └── main.tsx        # Application entry point
├── .vscode/            # VS Code configuration
├── index.html          # HTML template
└── ...                 # Configuration files
```

## Contributing

Please read the contributing guidelines before making any changes to the project.

## License

This project is licensed under the MIT License.

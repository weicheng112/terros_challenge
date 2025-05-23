# TypeScript Project Starter

A simple TypeScript project with Jest testing setup.

## Project Structure

```
.
├── src/                  # Source code
│   ├── index.ts          # Main entry point
│   └── utils.ts          # Utility functions
├── tests/                # Test files
│   └── utils.test.ts     # Tests for utils.ts
├── dist/                 # Compiled JavaScript (generated)
├── node_modules/         # Dependencies (generated)
├── .eslintrc.js          # ESLint configuration
├── .gitignore            # Git ignore rules
├── jest.config.js        # Jest configuration
├── package.json          # Project metadata and scripts
├── package-lock.json     # Dependency lock file
├── README.md             # Project documentation
└── tsconfig.json         # TypeScript configuration
```

## Available Scripts

- `npm run build` - Compiles TypeScript to JavaScript
- `npm start` - Runs the compiled JavaScript
- `npm run dev` - Runs the TypeScript code directly with ts-node
- `npm run watch` - Runs the app in development mode with auto-reload
- `npm test` - Runs the tests
- `npm run test:coverage` - Runs the tests with coverage report
- `npm run lint` - Lints the code
- `npm run lint:fix` - Lints and fixes the code

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Run in development mode: `npm run dev`
4. Build for production: `npm run build`
5. Run the production build: `npm start`

## Development Workflow

1. Write your TypeScript code in the `src` directory
2. Write tests in the `tests` directory
3. Run tests with `npm test`
4. Build your project with `npm run build`
5. Run your compiled code with `npm start`

## Adding Dependencies

- Add a runtime dependency: `npm install package-name`
- Add a development dependency: `npm install --save-dev package-name`

## TypeScript Configuration

The TypeScript configuration is in `tsconfig.json`. Some key settings:

- Target: ES2016
- Module: CommonJS
- Strict type checking enabled
- ESModuleInterop enabled for better compatibility with CommonJS modules

## Testing

This project uses Jest for testing. Write your tests in the `tests` directory with the `.test.ts` extension.

Run tests with:

```bash
npm test
```

Generate a coverage report with:

```bash
npm run test:coverage
```

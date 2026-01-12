# ScriptDB

A high-performance in-memory database with JavaScript-based querying and real-time synchronization.

## Features

- 🚀 **High Performance** - In-memory database with sub-millisecond query response
- 🔌 **WebSocket Support** - Real-time synchronization with browser clients
- 💾 **Persistent Storage** - Save databases to disk with automatic snapshots
- 🔐 **Authentication** - Built-in username/password authentication
- 🔒 **HMAC Signing** - Message signing for enhanced security
- 📝 **JavaScript Querying** - Use JavaScript to query and manipulate data
- 🔧 **Cross-Platform** - Works on Windows, Linux, and macOS
- 🌐 **Browser & Node.js** - Client libraries for both environments
- 📊 **Multiple Databases** - Manage multiple isolated databases
- 🔄 **Auto-Reconnect** - Automatic reconnection with exponential backoff

## Quick Start

### Install ScriptDB Server

#### Windows

```powershell
# Using PowerShell
irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.ps1 | iex
```

#### Linux/macOS

```bash
# Using curl
curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.sh | bash
```

### Start the Server

```bash
# Start ScriptDB server (default port: 1234)
scriptdb start

# Start with custom port
scriptdb start --port 8080

# Start in foreground
scriptdb start --foreground
```

### Using the Browser Client

```javascript
import ScriptDBClient from '@scriptdb/browser-client';

// Connect to server
const client = new ScriptDBClient('scriptdb://localhost:1234', {
  secure: false  // Use wss:// for production
});

await client.connect();

// Create a database
await client.createDatabase('mydb');

// Insert data
await client.run('db.users.insert({ name: "John", age: 30 })', 'mydb');

// Query data
const users = await client.run('db.users.find({ age: { $gt: 25 } })', 'mydb');
console.log(users);
```

### Using the Node.js Client

```javascript
import ScriptDBClient from '@scriptdb/client';

// Connect to server
const client = new ScriptDBClient('scriptdb://localhost:1234');

await client.connect();

// List databases
const databases = await client.listDatabases();

// Run queries
const result = await client.run('db.users.find()', 'mydb');
```

## Documentation

Visit our [documentation website](https://d-osc.github.io/script-db/) for complete guides and API reference.

### Client Libraries

- **[@scriptdb/browser-client](https://www.npmjs.com/package/@scriptdb/browser-client)** - WebSocket client for browsers
- **[@scriptdb/client](https://www.npmjs.com/package/@scriptdb/client)** - TCP client for Node.js

### Installation

```bash
# Browser Client
npm install @scriptdb/browser-client

# Node.js Client
npm install @scriptdb/client
```

## Monorepo Structure

This repository uses a monorepo structure with multiple packages:

```
scriptdb/
├── packages/
│   ├── browser-client/    # WebSocket browser client
│   ├── client/            # TCP Node.js client
│   ├── cli/               # Command-line interface
│   ├── server/            # ScriptDB server
│   ├── storage/           # Storage layer
│   └── system-modules/    # System modules
├── apps/                  # Application examples
├── scripts/               # Installation & utility scripts
└── package.json           # Root package configuration
```

### Available Packages

- **@scriptdb/browser-client** - Browser WebSocket client
- **@scriptdb/client** - Node.js TCP client  
- **@scriptdb/server** - ScriptDB server
- **@scriptdb/cli** - Command-line tool
- **@scriptdb/storage** - Storage abstraction layer
- **@scriptdb/system-modules** - System modules

## CLI Usage

### Starting the Server

```bash
# Start server (default port: 1234)
scriptdb start

# Start with custom options
scriptdb start --port 8080

# Start in foreground mode
scriptdb start --foreground

# Stop server
scriptdb stop

# Check server status
scriptdb status
```

### Environment Variables

- `SCRIPTDB_PORT` - Server port (default: 1234)
- `SCRIPTDB_HOST` - Server host (default: 0.0.0.0)
- `SCRIPTDB_DATA_DIR` - Data directory path
- `SCRIPTDB_LOG_LEVEL` - Logging level (debug, info, warn, error)

## Client API Examples

### Browser Client

```javascript
import ScriptDBClient from '@scriptdb/browser-client';

// Create client with options
const client = new ScriptDBClient('scriptdb://localhost:1234/mydb', {
  secure: false,
  requestTimeout: 30000,
  retries: 5,
  retryDelay: 2000,
  username: 'admin',
  password: 'secret'
});

// Connect to server
await client.connect();

// Database operations
await client.createDatabase('mydb');
await client.saveDatabase('mydb');
const databases = await client.listDatabases();

// Run JavaScript queries
const result = await client.run(`
  db.users.find({ 
    status: 'active',
    age: { $gt: 18 }
  }).sort({ name: 1 })
`, 'mydb');

// Execute shell commands (if enabled)
const output = await client.executeShell('ls -la');

// Disconnect
await client.disconnect();
```

### Node.js Client

```javascript
import ScriptDBClient from '@scriptdb/client';

const client = new ScriptDBClient('scriptdb://localhost:1234');

await client.connect();

// All operations same as browser client
const result = await client.run('db.users.find()', 'mydb');

// Advanced: Auto-reconnect with queue management
const client = new ScriptDBClient('scriptdb://localhost:1234', {
  timeout: 30000,
  retries: 5,
  retryDelay: 1000,
  maxPending: 100,
  maxQueue: 1000
});
```

### Query Examples

```javascript
// Insert
await client.run(`
  db.users.insert({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    status: 'active'
  })
`, 'mydb');

// Find
const active = await client.run(`
  db.users.find({ status: 'active' })
`, 'mydb');

// Update
await client.run(`
  db.users.update(
    { name: 'John' },
    { $set: { age: 31, verified: true } }
  )
`, 'mydb');

// Delete
await client.run(`
  db.users.remove({ status: 'inactive' })
`, 'mydb');

// Aggregation
const stats = await client.run(`
  db.users.aggregate([
    { $group: { _id: '$status', count: { $sum: 1 } } }
  ])
`, 'mydb');
```

## Website Development

The documentation website is built with [Elit@3.0.9](https://www.npmjs.com/package/elit) - a lightweight reactive UI framework - and deployed to GitHub Pages.

### Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Advanced Features

### Authentication

```javascript
const client = new ScriptDBClient('scriptdb://localhost:1234', {
  username: 'admin',
  password: 'secret'
});

await client.connect();

// Or authenticate manually
await client.login('admin', 'secret');
```

### HMAC Message Signing

```javascript
const client = new ScriptDBClient('scriptdb://localhost:1234', {
  signing: {
    secret: 'your-secret-key',
    algorithm: 'sha256' // or 'sha384', 'sha512'
  }
});
```

### Token Refresh

```javascript
const client = new ScriptDBClient('scriptdb://localhost:1234', {
  tokenRefresh: async () => {
    const response = await fetch('/api/refresh-token');
    const data = await response.json();
    return {
      token: data.token,
      expiresAt: data.expiresAt
    };
  }
});
```

### Custom Logger

```javascript
const client = new ScriptDBClient('scriptdb://localhost:1234', {
  logger: {
    debug: (...args) => console.log('[DEBUG]', ...args),
    info: (...args) => console.info('[INFO]', ...args),
    warn: (...args) => console.warn('[WARN]', ...args),
    error: (...args) => console.error('[ERROR]', ...args)
  }
});
```

### Request Queue & Concurrency

```javascript
const client = new ScriptDBClient('scriptdb://localhost:1234', {
  maxPending: 100,  // Max concurrent requests
  maxQueue: 1000    // Max queued requests
});
```

## Architecture

### Protocol

ScriptDB uses a custom protocol over TCP (Node.js) and WebSocket (browser):

- **Connection URI**: `scriptdb://host:port/database`
- **WebSocket Port**: TCP port + 1 (e.g., if TCP is 1234, WebSocket is 1235)
- **Message Format**: JSON with optional HMAC signing
- **Authentication**: Username/password with token-based session

### Data Model

- **In-Memory Storage**: Fast access with sub-millisecond response times
- **JavaScript Queries**: Use JavaScript for querying and manipulating data
- **Multiple Databases**: Isolated database contexts
- **Persistent Snapshots**: Save databases to disk at any time

### Security

- **Authentication**: Username/password with session tokens
- **HMAC Signing**: Optional message signing for integrity verification
- **Secure WebSocket**: Support for wss:// encrypted connections
- **Auto-Reconnect**: Exponential backoff for reliable connections

## Technology Stack (Documentation Website)

- **Framework**: Elit 3.0.9 (Reactive UI library)
- **Styling**: Elit CSS-in-JS (`elit/css`)
- **Development**: `elit dev` - Elit dev server with HMR
- **Build Tool**: esbuild (custom build script)
- **Preview**: `elit preview` - Preview production build
- **Module System**: ES Modules with importmap (Elit via CDN)
- **Deployment**: GitHub Pages
- **Architecture**: Single-page application (SPA) with client-side routing

### Project Structure (Website)

```
script-db/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages deployment
├── public/
│   └── index.html            # HTML template
├── src/
│   ├── main.ts               # App entry point
│   ├── router.ts             # Client-side router
│   ├── styles.ts             # Elit CSS-in-JS styles
│   ├── components/
│   │   ├── Header.ts         # Header component
│   │   └── Footer.ts         # Footer component
│   └── pages/
│       ├── HomePage.ts
│       ├── InstallationPage.ts
│       ├── QuickStartPage.ts
│       ├── DocsPage.ts
│       ├── UsagePage.ts
│       ├── ScriptsPage.ts
│       └── ApiPage.ts        # API documentation
├── scripts/
│   ├── install.ps1           # Windows installer
│   ├── install.sh            # Unix installer
│   ├── uninstall.ps1         # Windows uninstaller
│   └── uninstall.sh          # Unix uninstaller
├── elit.config.mjs           # Elit configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

### How It Works

1. **Development**: `npm run dev` → `elit dev` server with HMR
2. **Build**: `npm run build` → Custom esbuild script (marks elit as external)
3. **Preview**: `npm run preview` → `elit preview` server
4. **Deployment**: GitHub Actions automatically builds and deploys on push to main

### Build Process

The custom build script ([build.js](build.js)) uses **esbuild** to:
- ✅ Bundle all application code from [src/main.js](src/main.js)
- ✅ Minify JavaScript for production
- ✅ Mark `elit` as external (loaded from CDN via importmap)
- ✅ Copy static assets (styles, scripts)
- ✅ Generate index.html with proper paths for GitHub Pages

**Why custom build?** Elit's built-in `elit build` tries to bundle Node.js modules, so we use esbuild directly with `external: ['elit']` to load Elit from CDN.

### Features

- ✨ Reactive UI with Elit 3.0.6
- 🎨 **CSS-in-JS** with Elit styles (`css` from `elit`)
- 🔄 Client-side routing (no page reloads)
- 📦 Code bundling with esbuild
- 📱 Responsive design
- ⚡ Fast loading (Elit via CDN + bundled app code)
- 🔥 HMR in development mode
- 💅 Scoped styles, no CSS files needed

## License

MIT License - see LICENSE file for details

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/d-osc/script-db.git

# Install dependencies
npm install

# Run tests
npm test

# Build packages
npm run build

# Start documentation website
npm run dev
```

## Support

- [Documentation](https://d-osc.github.io/script-db/)
- [GitHub Issues](https://github.com/d-osc/script-db/issues)
- [NPM Package (@scriptdb/browser-client)](https://www.npmjs.com/package/@scriptdb/browser-client)
- [NPM Package (@scriptdb/client)](https://www.npmjs.com/package/@scriptdb/client)

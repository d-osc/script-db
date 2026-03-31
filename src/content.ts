export const productVersion = '1.1.3';

export const externalLinks = {
  repository: 'https://github.com/d-osc/script-db',
  releases: 'https://github.com/d-osc/script-db/releases',
  cliPackage: 'https://www.npmjs.com/package/@scriptdb/cli',
  browserClient: 'https://www.npmjs.com/package/@scriptdb/browser-client',
  nodeClient: 'https://www.npmjs.com/package/@scriptdb/client',
  docsSite: 'https://d-osc.github.io/script-db/'
};

export const installCommands = {
  npmGlobal: 'npm install -g @scriptdb/cli',
  bunGlobal: 'bun add -g @scriptdb/cli',
  windowsBinary: String.raw`irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.ps1 | iex`,
  unixBinary: String.raw`curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.sh | bash`,
  windowsCustomDir: String.raw`$env:SCRIPTDB_INSTALL = "C:\Tools\scriptdb"
irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.ps1 | iex`,
  unixCustomDir: String.raw`export SCRIPTDB_INSTALL="/opt/scriptdb"
curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.sh | bash`,
  windowsVersion: String.raw`$env:SCRIPTDB_VERSION = "v1.1.3"
irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.ps1 | iex`,
  unixVersion: String.raw`export SCRIPTDB_VERSION="v1.1.3"
curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.sh | bash`,
  windowsUninstall: String.raw`irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/uninstall.ps1 | iex`,
  unixUninstall: String.raw`curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/uninstall.sh | bash`
};

export const sourceBuildCommands = String.raw`git clone https://github.com/d-osc/script-db.git
cd script-db
bun install
bun run build
npm link`;

export const serverStartCommands = String.raw`# Start the server in the foreground
scriptdb start

# Run it in the background with PM2
scriptdb start -d

# Inspect health and logs
scriptdb status
scriptdb logs

# Stop or restart when you change configuration
scriptdb stop
scriptdb restart -d`;

export const verifyCommands = String.raw`scriptdb --help
scriptdb status
scriptdb shell`;

export const browserQuickStartExample = String.raw`import BrowserClient from '@scriptdb/browser-client';

const client = new BrowserClient({
  host: 'localhost',
  port: 1234,
  username: 'admin',
  password: 'admin123',
  secure: false,
  requestTimeout: 30000
});

await client.connect();

const { databases } = await client.listDatabases();
console.log('Databases:', databases);

await client.createDatabase('my-scripts');

const result = await client.run(
  [
    "export const greet = (name: string) => 'Hello, ' + name + '!';",
    "export const jobs = ['lint', 'build', 'deploy'];"
  ].join('\n'),
  'my-scripts'
);

console.log(result);
await client.saveDatabase('my-scripts');
await client.disconnect();`;

export const nodeQuickStartExample = String.raw`import { ScriptDBClient } from '@scriptdb/client';

const client = new ScriptDBClient('scriptdb://localhost:1234/my-scripts', {
  secure: false,
  username: 'admin',
  password: 'admin123',
  requestTimeout: 30000,
  retries: 3,
  retryDelay: 1000
});

await client.connect();
await client.createDatabase('my-scripts');

const info = await client.getInfo();
console.log('Server info:', info);

const result = await client.run(
  [
    "export const answer = 2 + 2;",
    "export const tags = ['server', 'cli', 'gui'];"
  ].join('\n'),
  'my-scripts'
);

console.log(result);
await client.saveDatabase('my-scripts');
client.close();`;

export const browserConstructorExample = String.raw`const client = new BrowserClient({
  host: 'localhost',
  port: 1234,
  username: 'admin',
  password: 'admin123',
  secure: false,
  requestTimeout: 30000
});`;

export const nodeConstructorExample = String.raw`const client = new ScriptDBClient('scriptdb://localhost:1234/my-scripts', {
  secure: false,
  username: 'admin',
  password: 'admin123',
  requestTimeout: 30000,
  socketTimeout: 0,
  retries: 3,
  retryDelay: 1000,
  maxPending: 100,
  maxQueue: 1000
});`;

export const browserExecuteExample = String.raw`const response = await client.execute({
  action: 'script-code',
  data: {
    databaseName: 'my-scripts',
    code: "export const answer = 42;"
  }
});`;

export const nodeExecuteExample = String.raw`const response = await client.execute({
  action: 'script-code',
  data: {
    databaseName: 'my-scripts',
    code: "export const answer = 42;"
  }
});`;

export const authExample = String.raw`const client = new ScriptDBClient('scriptdb://localhost:1234/my-scripts', {
  secure: false,
  username: 'admin',
  password: 'change-me'
});

await client.connect();

// You can also re-authenticate explicitly.
await client.login('admin', 'change-me');`;

export const signingExample = String.raw`const client = new ScriptDBClient('scriptdb://localhost:1234/my-scripts', {
  secure: true,
  signing: {
    secret: process.env.SCRIPTDB_SIGNING_SECRET || 'replace-me',
    algorithm: 'sha256'
  }
});

await client.connect();`;

export const shellSessionExample = String.raw`scriptdb shell

> .dbs
> .create my-scripts
> .use my-scripts
> const build = ['lint', 'test', 'ship']
> build.map((step) => step.toUpperCase())`;

export const packageManagementCommands = String.raw`# Install packages into ~/.scriptdb/packages
scriptdb add lodash
scriptdb add axios express

# Install packages into the current directory
scriptdb add --local lodash

# Remove packages again
scriptdb remove lodash
scriptdb remove --local lodash`;

export const configExample = String.raw`{
  "host": "localhost",
  "port": 1234,
  "users": [
    {
      "username": "admin",
      "password": "your-password",
      "hash": false
    }
  ],
  "folder": "databases",
  "secure": false
}`;

export const directoryLayout = String.raw`# Windows
%USERPROFILE%\.scriptdb/
├── bin/
│   └── scriptdb.exe
├── config.json
├── databases/
└── packages/

# Linux/macOS
~/.scriptdb/
├── bin/
│   └── scriptdb
├── config.json
├── databases/
├── ecosystem.config.js
├── packages/
└── pm2-*.log`;

export const protocolSummary = String.raw`Connection URI: scriptdb://[username:password@]host:port/database
Node Transport: TCP on the configured ScriptDB port
Browser Transport: WebSocket proxy on port + 1
Authentication: username/password with token sessions
Security: optional TLS plus optional HMAC signing in the Node client`;

export const systemModules = [
  'create(name, code)',
  'update(name, code)',
  'remove(name)',
  'save(name, code)',
  'read(name)'
];
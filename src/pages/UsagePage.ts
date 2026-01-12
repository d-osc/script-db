import { div, h1, h2, h3, p, pre, code, ul, li, strong } from 'elit/el';
import type { VNode } from 'elit';
import { styles } from '../styleNames';

export const UsagePage = (): VNode => {
  return div(
    h1({ class: styles.pageH1 }, 'Usage'),
    p({ class: styles.pageP }, 'Learn how to use ScriptDB effectively with practical examples.'),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Server Management'),
      h3({ class: styles.pageH3 }, 'Starting ScriptDB'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '# Start the server (default port: 1234)\nscriptdb start\n\n# Start with custom port\nscriptdb start --port 8080\n\n# Start in foreground\nscriptdb start --foreground')
      ),

      h3({ class: styles.pageH3 }, 'Managing the Server'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '# Check server status\nscriptdb status\n\n# Stop the server\nscriptdb stop\n\n# Stop with force\nscriptdb stop --force')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Using the Browser Client'),
      p({ class: styles.pageP }, 'Connect to ScriptDB from your browser application:'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, `import ScriptDBClient from '@scriptdb/browser-client';

// Connect to server
const client = new ScriptDBClient('scriptdb://localhost:1234', {
  secure: false,
  requestTimeout: 30000
});

await client.connect();

// Create database
await client.createDatabase('mydb');

// Insert data
await client.run(
  'db.users.insert({ name: "John", age: 30, email: "john@example.com" })',
  'mydb'
);

// Query data
const users = await client.run(
  'db.users.find({ age: { $gt: 25 } })',
  'mydb'
);
console.log(users);

// Save database
await client.saveDatabase('mydb');`)
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Using the Node.js Client'),
      p({ class: styles.pageP }, 'Connect to ScriptDB from your Node.js application:'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, `import ScriptDBClient from '@scriptdb/client';

const client = new ScriptDBClient('scriptdb://localhost:1234');
await client.connect();

// List all databases
const databases = await client.listDatabases();
console.log('Databases:', databases);

// Run queries
const result = await client.run('db.users.find()', 'mydb');
console.log(result);`)
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Query Examples'),
      h3({ class: styles.pageH3 }, 'Basic CRUD Operations'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, `// Create/Insert
await client.run(\`
  db.users.insert({
    name: 'Alice',
    age: 28,
    status: 'active',
    created: new Date()
  })
\`, 'mydb');

// Read/Find
const activeUsers = await client.run(
  'db.users.find({ status: "active" })',
  'mydb'
);

// Update
await client.run(\`
  db.users.update(
    { name: 'Alice' },
    { $set: { age: 29, verified: true } }
  )
\`, 'mydb');

// Delete
await client.run(
  'db.users.remove({ status: "inactive" })',
  'mydb'
);`)
      ),

      h3({ class: styles.pageH3 }, 'Advanced Queries'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, `// Find with comparison operators
const result = await client.run(\`
  db.users.find({
    age: { $gt: 18, $lte: 65 },
    status: { $in: ['active', 'pending'] }
  })
\`, 'mydb');

// Sort and limit
const sorted = await client.run(\`
  db.users.find()
    .sort({ age: -1, name: 1 })
    .limit(10)
\`, 'mydb');

// Aggregation
const stats = await client.run(\`
  db.users.aggregate([
    { $group: { 
        _id: '$status', 
        count: { $sum: 1 },
        avgAge: { $avg: '$age' }
      }
    },
    { $sort: { count: -1 } }
  ])
\`, 'mydb');`)
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Common Use Cases'),
      h3({ class: styles.pageH3 }, '1. Web Application Backend'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, `// Fast in-memory database for web apps
const app = express();
const db = new ScriptDBClient('scriptdb://localhost:1234');

app.get('/users', async (req, res) => {
  const users = await db.run('db.users.find()', 'appdb');
  res.json(users);
});

app.post('/users', async (req, res) => {
  await db.run(
    \`db.users.insert(\${JSON.stringify(req.body)})\`,
    'appdb'
  );
  res.status(201).json({ success: true });
});`)
      ),

      h3({ class: styles.pageH3 }, '2. Real-Time Data Sync'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, `// Browser client with auto-reconnect
const client = new ScriptDBClient('scriptdb://localhost:1234', {
  retries: 5,
  retryDelay: 2000
});

await client.connect();

// Poll for updates
setInterval(async () => {
  const updates = await client.run(
    'db.updates.find({ processed: false })',
    'realtime-db'
  );
  
  if (updates.length > 0) {
    console.log('New updates:', updates);
    // Process updates...
  }
}, 1000);`)
      ),

      h3({ class: styles.pageH3 }, '3. Caching Layer'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, `// Use ScriptDB as a fast cache
const cache = new ScriptDBClient('scriptdb://localhost:1234');
await cache.connect();

// Set cache
await cache.run(
  \`db.cache.insert({
    key: 'user:123',
    value: userData,
    expires: Date.now() + 3600000
  })\`,
  'cache-db'
);

// Get from cache
const cached = await cache.run(
  'db.cache.findOne({ key: "user:123", expires: { $gt: Date.now() } })',
  'cache-db'
);

if (cached) {
  console.log('Cache hit:', cached.value);
} else {
  console.log('Cache miss - fetch from database');
}`)
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Authentication & Security'),
      h3({ class: styles.pageH3 }, 'Authenticated Connection'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, `const client = new ScriptDBClient('scriptdb://localhost:1234', {
  username: 'admin',
  password: 'secret123'
});

await client.connect();

// Or authenticate after connecting
await client.login('admin', 'secret123');`)
      ),

      h3({ class: styles.pageH3 }, 'HMAC Message Signing'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, `const client = new ScriptDBClient('scriptdb://localhost:1234', {
  signing: {
    secret: process.env.SIGNING_SECRET,
    algorithm: 'sha256'
  }
});

await client.connect();

// All messages will be signed with HMAC
const result = await client.run('db.data.find()', 'mydb');`)
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Best Practices'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, strong('Use Connection Pooling'), ' - Reuse client instances instead of creating new ones'),
        li({ class: styles.pageLi }, strong('Enable Auto-Reconnect'), ' - Set retries > 0 for production environments'),
        li({ class: styles.pageLi }, strong('Monitor Memory Usage'), ' - Save databases to disk periodically'),
        li({ class: styles.pageLi }, strong('Use Indexes'), ' - Create indexes on frequently queried fields'),
        li({ class: styles.pageLi }, strong('Handle Errors'), ' - Always wrap operations in try-catch blocks'),
        li({ class: styles.pageLi }, strong('Secure Connections'), ' - Use secure WebSocket (wss://) in production')
      )
    )
  );
};

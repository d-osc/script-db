import { div, h1, h2, h3, p, pre, code } from 'elit/el';
import type { VNode } from 'elit';
import { styles } from '../styleNames';

export const UsagePage = (): VNode => {
  return div(
    h1({ class: styles.pageH1 }, 'Usage'),
    p({ class: styles.pageP }, 'Learn how to use ScriptDB effectively with practical examples.'),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Basic Usage'),
      h3({ class: styles.pageH3 }, 'Starting ScriptDB'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '# Start the server\nscriptdb start\n\n# Start with custom port\nscriptdb start --port 8080\n\n# Start in foreground\nscriptdb start --foreground')
      ),

      h3({ class: styles.pageH3 }, 'Stopping ScriptDB'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '# Stop the server\nscriptdb stop\n\n# Force stop\nscriptdb stop --force')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Script Management'),
      h3({ class: styles.pageH3 }, 'Adding Scripts'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '# Add a single script\nscriptdb add my-script.sh\n\n# Add multiple scripts\nscriptdb add script1.sh script2.ps1 script3.py\n\n# Add with description\nscriptdb add backup.sh --description "Daily backup script"\n\n# Add with tags\nscriptdb add deploy.sh --tags production,deployment')
      ),

      h3({ class: styles.pageH3 }, 'Listing Scripts'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '# List all scripts\nscriptdb list\n\n# List with details\nscriptdb list --verbose\n\n# Filter by tag\nscriptdb list --tag production')
      ),

      h3({ class: styles.pageH3 }, 'Running Scripts'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '# Run a script\nscriptdb run my-script.sh\n\n# Run with arguments\nscriptdb run deploy.sh --env production\n\n# Dry run\nscriptdb run test.sh --dry-run')
      ),

      h3({ class: styles.pageH3 }, 'Removing Scripts'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '# Remove a script\nscriptdb remove my-script.sh\n\n# Remove multiple scripts\nscriptdb remove script1.sh script2.sh')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Common Use Cases'),
      h3({ class: styles.pageH3 }, '1. Backup Scripts'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '# Add backup script\nscriptdb add backup-database.sh --tags backup,daily\n\n# Schedule daily backup\nscriptdb schedule backup-database.sh --cron "0 0 * * *"\n\n# Run backup manually\nscriptdb run backup-database.sh')
      ),

      h3({ class: styles.pageH3 }, '2. Deployment Scripts'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '# Add deployment script\nscriptdb add deploy-app.sh --tags deployment,production\n\n# Run deployment\nscriptdb run deploy-app.sh --env production\n\n# View deployment history\nscriptdb history deploy-app.sh')
      )
    )
  );
};

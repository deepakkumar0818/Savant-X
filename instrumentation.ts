/**
 * Runs once when the Next.js server starts.
 * Loads .env.local so EMAIL_USER and EMAIL_PASS are available in API routes.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const path = await import('path');
    const fs = await import('fs');
    const cwd = process.cwd();
    const pathsToTry = [
      path.join(cwd, '.env.local'),
      path.join(cwd, 'savantx-website', '.env.local'),
    ];
    for (const envPath of pathsToTry) {
      try {
        if (fs.existsSync(envPath)) {
          const content = fs.readFileSync(envPath, 'utf8');
          for (const line of content.split(/\r?\n/)) {
            const trimmed = line.trim();
            if (trimmed && !trimmed.startsWith('#')) {
              const eq = trimmed.indexOf('=');
              if (eq > 0) {
                const key = trimmed.slice(0, eq).trim();
                const value = trimmed.slice(eq + 1).trim();
                if (key) process.env[key] = value;
              }
            }
          }
          break;
        }
      } catch {
        //
      }
    }
  }
}

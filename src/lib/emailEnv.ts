import path from 'path';
import fs from 'fs';

/**
 * Load EMAIL_USER and EMAIL_PASS from .env.local.
 * This file lives in src/lib/, so project root is two levels up.
 */
export function loadEmailEnv(): void {
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) return;

  const roots = [
    path.resolve(process.cwd(), '.env.local'),
    path.resolve(process.cwd(), 'savantx-website', '.env.local'),
  ];

  for (const envPath of roots) {
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
        return;
      }
    } catch {
      //
    }
  }
}

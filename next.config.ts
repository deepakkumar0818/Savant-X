import type { NextConfig } from "next";
import path from "path";
import fs from "fs";

// Load .env.local so EMAIL_* are available in API routes (try cwd and cwd/savantx-website)
function loadEnvLocal() {
  const dirs = [process.cwd(), path.join(process.cwd(), "savantx-website")];
  for (const dir of dirs) {
    const envPath = path.join(dir, ".env.local");
    try {
      if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, "utf8");
        for (const line of content.split("\n")) {
          const trimmed = line.trim();
          if (trimmed && !trimmed.startsWith("#")) {
            const eq = trimmed.indexOf("=");
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
      // try next path
    }
  }
}
loadEnvLocal();

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Expose env to server (API routes)
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  },
};

export default nextConfig;

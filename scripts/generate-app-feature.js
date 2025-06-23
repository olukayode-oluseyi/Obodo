#!/usr/bin/env node

import { existsSync, mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// Replace __dirname with this:
const __dirname = dirname(fileURLToPath(import.meta.url));

const featureName = process.argv[2];

if (!featureName) {
  console.error("❌ Please provide a feature name.");
  process.exit(1);
}

const basePath = join(__dirname, "..", "features", featureName);

const folders = [
  "components",
  "screens",
  "api",
  "hooks",
  "schemas",
  "forms",
  "types",
];

folders.forEach((folder) => {
  const fullPath = join(basePath, folder);
  if (!existsSync(fullPath)) {
    mkdirSync(fullPath, { recursive: true });
    console.log(`✅ Created: ${fullPath}`);
  }
});

const indexPath = join(basePath, "index.ts");
if (!existsSync(indexPath)) {
  writeFileSync(indexPath, `// Entry point for ${featureName} feature`);
  console.log(`✅ Created: ${indexPath}`);
}

console.log(`\n🎉 Feature "${featureName}" created successfully.`);
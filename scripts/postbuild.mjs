import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BUILD_DIR = path.join(ROOT, "dist");
const CLIENT_DIR = path.join(BUILD_DIR, "client");
const SERVER_DIR = path.join(BUILD_DIR, "server");

async function moveContents(srcDir, destDir) {
  await fs.mkdir(destDir, { recursive: true });
  const entries = await fs.readdir(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      await fs.cp(srcPath, destPath, { recursive: true });
    } else {
      await fs.rename(srcPath, destPath);
    }
  }
}

async function main() {
  if (await exists(CLIENT_DIR)) {
    await moveContents(CLIENT_DIR, BUILD_DIR);
    await fs.rm(CLIENT_DIR, { recursive: true, force: true });
  }
  if (await exists(SERVER_DIR)) {
    await fs.rm(SERVER_DIR, { recursive: true, force: true });
  }
  const files = await fs.readdir(BUILD_DIR);
  console.log(`Static portfolio site written to dist/ (${files.length} entries).`);
}

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
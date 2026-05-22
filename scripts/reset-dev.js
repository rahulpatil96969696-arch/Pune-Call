/**
 * Removes .next with retries (Windows/OneDrive often lock files).
 * Run before `npm run dev` when you see ENOENT/EBUSY cache errors.
 */
const fs = require("fs");
const path = require("path");

const projectRoot = path.join(__dirname, "..");
const nextDir = path.join(projectRoot, ".next");

function sleep(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {}
}

function removeWithRetry(dir, attempts = 8) {
  if (!fs.existsSync(dir)) {
    console.log(".next is already clean.");
    return;
  }

  for (let i = 1; i <= attempts; i++) {
    try {
      fs.rmSync(dir, { recursive: true, force: true, maxRetries: 3, retryDelay: 200 });
      console.log("Removed .next successfully.");
      return;
    } catch (err) {
      if (i === attempts) {
        console.error(
          "\nCould not delete .next. Close all terminals running `npm run dev`,",
        );
        console.error("stop Node in Task Manager, then run: npm run dev:clean\n");
        throw err;
      }
      console.warn(`Retry ${i}/${attempts}: ${err.code || err.message}`);
      sleep(400 * i);
    }
  }
}

removeWithRetry(nextDir);

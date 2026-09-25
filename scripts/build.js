import { cp, mkdir, rm } from "node:fs/promises";

// Only application assets belong in the publishable folder.
const root = new URL("../", import.meta.url);
const dist = new URL("dist/", root);
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
for (const path of ["index.html", "src", "public", "_redirects"]) {
  await cp(new URL(path, root), new URL(path, dist), { recursive: true });
}
console.log("Site estático preparado em dist/.");

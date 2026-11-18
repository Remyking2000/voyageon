import { readdirSync } from "node:fs";

export const pages = [
  "index.html",
  "experiences.html",
  "contact.html",
  "privacy-policy.html",
  ...readdirSync(new URL("../destinations/", import.meta.url))
    .filter(name => name.endsWith(".html"))
    .map(name => "destinations/" + name),
];

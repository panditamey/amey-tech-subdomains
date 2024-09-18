const fs = require("fs");
const path = require("path");
const { addSubdomain } = require("../api/cloudflare");

// Load records from JSON file
const recordsFile = path.join(__dirname, "../dns-records/records.json");
const records = JSON.parse(fs.readFileSync(recordsFile, "utf-8"));

// Process each subdomain
records.forEach(async (record) => {
  try {
    await addSubdomain(record.subdomain, record.target);
  } catch (error) {
    console.error(`Failed to add ${record.subdomain}`);
  }
});

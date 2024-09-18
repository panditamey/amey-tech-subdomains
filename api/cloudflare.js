const axios = require("axios");
require("dotenv").config();

// Cloudflare API token and zone ID from environment variables
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const CLOUDFLARE_ZONE_ID = process.env.CLOUDFLARE_ZONE_ID;

const cloudflareApi = axios.create({
  baseURL: `https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/dns_records`,
  headers: {
    Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
    "Content-Type": "application/json",
  },
});

// Function to add subdomain
async function addSubdomain(subdomain, target) {
  try {
    const response = await cloudflareApi.post("", {
      type: "CNAME", // Use 'A' record if pointing to an IP
      name: subdomain, // e.g., 'yourname.ameyp.tech'
      content: target, // e.g., 'your-github-page.github.io'
      ttl: 3600, // TTL (in seconds)
      proxied: false, // Disable Cloudflare proxy if not needed
    });

    console.log(`Subdomain ${subdomain} added successfully.`);
    return response.data;
  } catch (error) {
    console.error(
      `Error adding subdomain ${subdomain}:`,
      error.response?.data || error.message
    );
    throw error;
  }
}

module.exports = { addSubdomain };

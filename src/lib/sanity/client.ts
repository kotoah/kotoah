import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "zbtswb8v",
  dataset: "production",
  apiVersion: "2024-04-22",
  useCdn: false, // Set to true for production for faster response
});

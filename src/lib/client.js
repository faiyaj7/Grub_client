import { createClient } from "@sanity/client";

const client = createClient({
  projectId: import.meta.env.VITE_APP_SANITY_PROJECTID,
  dataset: "production",
  apiVersion: "2023-05-03", // Specify the API version if needed
  useCdn: false,
  token:
    "skaAgfo0JWfvN6ayKgrV32J5cwyxWDMSjPaFaLSBIOr9zAil5fabgYzAwuyr7ksxQzCjdGEps8si13E6v547grdFRL4AVsfhNn77EjMovxboFYjjCumUkss8irlX1kEzUWWs22ecFQ06b4I3AAmiCg6ZgQRwnibsZY8DvVFPRVBveKVu8xDc",
});

export default client;

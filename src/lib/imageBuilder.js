import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
const client = createClient({
  projectId: import.meta.env.VITE_APP_SANITY_PROJECTID,
  dataset: "production",
  apiVersion: "2023-05-03", // Specify the API version if needed
  useCdn: false,
  token:
    "skaAgfo0JWfvN6ayKgrV32J5cwyxWDMSjPaFaLSBIOr9zAil5fabgYzAwuyr7ksxQzCjdGEps8si13E6v547grdFRL4AVsfhNn77EjMovxboFYjjCumUkss8irlX1kEzUWWs22ecFQ06b4I3AAmiCg6ZgQRwnibsZY8DvVFPRVBveKVu8xDc",
});

const builder = ImageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
const urlFor = (source) => {
  return builder.image(source);
};

export default urlFor;

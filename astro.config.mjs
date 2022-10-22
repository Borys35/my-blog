import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import storyblok from "@storyblok/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    storyblok({
      accessToken: "eELUrQrafFOWYA2F43AZsAtt",
      components: {
        page: "storyblok/Page",
        feature: "storyblok/Feature",
        grid: "storyblok/Grid",
        teaser: "storyblok/Teaser",
      },
    }),
  ],
});

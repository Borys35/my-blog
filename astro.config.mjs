import { defineConfig } from "astro/config";

// https://astro.build/config
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import storyblok from "@storyblok/astro";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://borys35.github.io",
  base: "/my-blog",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    storyblok({
      accessToken: "eELUrQrafFOWYA2F43AZsAtt",
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    robotsTxt(),
    sitemap(),
  ],
});

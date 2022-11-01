import rss from "@astrojs/rss";
import { useStoryblokApi } from "@storyblok/astro";
import type { Post } from "../types";

const SITE = import.meta.env.SITE;

export const get = async () => {
  const storyblokApi = useStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories", {
    starts_with: "blog-posts/",
    version: import.meta.env.DEV ? "draft" : "published",
  });
  const stories: Post[] = data.stories;

  return rss({
    title: "Borys' Blog",
    description: "A web developer's guide",
    site: SITE,
    items: stories.map((story) => {
      return {
        title: story.content.title,
        description: story.content.description,
        link: `${SITE}/my-blog/${story.slug}/`,
        pubDate: new Date(story.published_at),
      };
    }),
  });
};

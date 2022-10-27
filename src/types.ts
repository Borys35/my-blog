export type Tag = {
  name: string;
  taggings_count: number;
};

export type Post = {
  content: {
    title: string;
    description: string;
    heroImage: {
      filename: string;
      alt: string;
    };
    content: string;
    tags: string[];
  };
  slug: string;
  full_slug: string;
  tag_list: string[];
  published_at: string;
};

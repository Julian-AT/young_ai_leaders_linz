declare module "*.mdx" {
  export const frontmatter: {
    title: string;
    date: string;
    author: string;
    excerpt: string;
    cover: string;
    coverAlt: string;
  };
}

import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";

import { PostImage } from "@/components/shared/post-image";

function MarkdownImage({ alt = "", className, ...rest }: ComponentPropsWithoutRef<"img">) {
  // Markdown images lack intrinsic dimensions; next/image cannot be used here.
  return (
    // eslint-disable-next-line @next/next/no-img-element -- no intrinsic size from markdown
    <img
      alt={alt}
      loading="lazy"
      className={className ? `my-8 w-full rounded-md ${className}` : "my-8 w-full rounded-md"}
      {...rest}
    />
  );
}

const components: MDXComponents = {
  h1: (props) => <h1 className="h1 mb-6 text-balance" {...props} />,
  h2: (props) => <h2 className="h3 mt-12 mb-4 text-balance" {...props} />,
  h3: (props) => <h3 className="h4 mt-8 mb-3 text-balance" {...props} />,
  p: (props) => <p className="body-md mb-4 max-w-[68ch]" {...props} />,
  ul: (props) => <ul className="body-md mb-4 max-w-[68ch] list-disc space-y-2 pl-5" {...props} />,
  ol: (props) => (
    <ol className="body-md mb-4 max-w-[68ch] list-decimal space-y-2 pl-5" {...props} />
  ),
  li: (props) => <li className="body-md" {...props} />,
  blockquote: (props) => (
    <blockquote className="body-md text-secondary my-6 max-w-[68ch] border-l-2 pl-4" {...props} />
  ),
  a: (props) => (
    <a className="hover:text-secondary underline underline-offset-2 transition-colors" {...props} />
  ),
  code: (props) => (
    <code className="bg-surface-secondary rounded px-1.5 py-0.5 font-mono text-[13px]" {...props} />
  ),
  pre: (props) => (
    <pre
      className="bg-surface-secondary mb-6 max-w-[68ch] overflow-x-auto rounded-md p-4 font-mono text-[13px] leading-5"
      {...props}
    />
  ),
  hr: (props) => <hr className="my-10 border-0 border-t" {...props} />,
  img: MarkdownImage,
  PostImage,
};

export function useMDXComponents(): MDXComponents {
  return components;
}

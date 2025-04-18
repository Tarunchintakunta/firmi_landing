import React, { FC, memo } from "react";
import Markdown from "markdown-to-jsx";

interface MarkDownProps {
  content: string;
}

const MarkDown: FC<MarkDownProps> = ({ content }) => (
  <Markdown
    options={{
      overrides: {
        h1: {
          props: {
            className: "text-base font-medium text-text-inverse-default mb-4",
          },
        },
        h2: {
          props: {
            className: "text-sm text-text-inverse-default font-medium my-3",
          },
        },
        h3: {
          props: {
            className: "text-base font-medium text-text-inverse-default  my-2",
          },
        },
        h4: {
          props: {
            className: "text-base font-medium text-text-inverse-default my-2",
          },
        },
        p: {
          props: {
            className: "my-4 text-sm text-text-inverse-subtle",
          },
        },
        a: {
          props: {
            className:
              "underline text-text-inverse-subtle hover:text-text-inverse-subtle/80",
          },
        },
        ul: {
          props: {
            className: "list-disc list-inside my-4 ml-4",
          },
        },
        ol: {
          props: {
            className: "list-decimal list-inside my-4 ml-4",
          },
        },
        li: {
          props: {
            className:
              "text-text-inverse-subtlest/100 text-sm font-normal leading-tight",
          },
        },
        blockquote: {
          props: {
            className: "border-l-4 border-gray-300 pl-4 italic mb-4",
          },
        },
        code: {
          props: {
            className: "text-text-inverse-subtle p-1 rounded text-sm",
            style: {
              whiteSpace: "pre-wrap",
            },
          },
        },
        pre: {
          props: {
            className:
              "bg-surface-container-default-lighter border text-white p-4 rounded",
            style: {
              overflowX: "auto",
              whiteSpace: "pre-wrap",
            },
          },
        },
      },
    }}
  >
    {content}
  </Markdown>
);

export default memo(MarkDown);

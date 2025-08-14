import React from "react";
import {
  PortableText,
  type PortableTextComponents,
  type PortableTextComponentProps,
} from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import { FaStar } from "react-icons/fa";
import ReactPlayer from "react-player";

type Props = {
  content: TypedObject | TypedObject[];
};

const BlockContent = ({ content }: Props) => {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children }: PortableTextComponentProps<any>) => (
        <Typography variant={TypeVariant.H2} component={TypeComponent.h1} bold>
          {children}
        </Typography>
      ),
      h2: ({ children }: PortableTextComponentProps<any>) => (
        <Typography variant={TypeVariant.H5} component={TypeComponent.h2} bold>
          {children}
        </Typography>
      ),
      h3: ({ children }: PortableTextComponentProps<any>) => (
        <Typography variant={TypeVariant.H3} component={TypeComponent.h3} bold>
          {children}
        </Typography>
      ),
      h4: ({ children }: PortableTextComponentProps<any>) => (
        <Typography variant={TypeVariant.H4} component={TypeComponent.h4} bold>
          {children}
        </Typography>
      ),
      normal: ({ children }: PortableTextComponentProps<any>) => (
        <Typography variant={TypeVariant.Body1} component={TypeComponent.p}>
          {children}
        </Typography>
      ),
    },
    marks: {
      em: ({ children }) => (
        <Typography
          variant={TypeVariant.Body1}
          component={TypeComponent.span}
          italic
        >
          {children}
        </Typography>
      ),
      strong: ({ children }) => (
        <Typography
          variant={TypeVariant.Body1}
          component={TypeComponent.span}
          bold
        >
          {children}
        </Typography>
      ),
    },
    list: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => (
        <ul className="grid gap-3 font-sans">{children}</ul>
      ),
      number: ({ children }) => <ol className="">{children}</ol>,
    },
    listItem: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => (
        <li className="relative gap-2 pl-6">
          <span className="text-lilac absolute top-1.25 left-0">
            <FaStar />
          </span>
          <Typography
            variant={TypeVariant.Body1}
            component={TypeComponent.span}
          >
            {children}
          </Typography>
        </li>
      ),
    },
    types: {
      youtube: ({ value }) => {
        const { url } = value;
        return (
          <ReactPlayer url={url} width="100%" style={{ margin: "1rem 0" }} />
        );
      },
    },
  };
  return <PortableText value={content} components={components} />;
};

export default BlockContent;

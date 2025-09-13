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
import { getImageDimensions } from "@sanity/asset-utils";
import config from "@/config/config";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/legacy/image";

type Props = {
  content: TypedObject | TypedObject[];
};

const BlockContent = ({ content }: Props) => {
  const InlineImageComponent = ({ value }: { value: any }) => {
    const builder = imageUrlBuilder();
    const urlFor = (source: string, quality: number) => {
      return builder
        .image(source)
        .dataset("production")
        .projectId(config.SANITY_PROJECT_ID)
        .quality(quality);
    };

    const { width, height } = getImageDimensions(value.image);
    const imageUrl = urlFor(value.image, 100).url();

    return (
      <Image
        src={imageUrl}
        width={width ? width : undefined}
        height={height ? height : undefined}
        alt={value?.altText ?? value}
        priority={true}
        objectFit="cover"
        className="mb-8 rounded-3xl"
      />
    );
  };

  const components: PortableTextComponents = {
    block: {
      h1: ({ children }: PortableTextComponentProps<any>) => (
        <Typography
          variant={TypeVariant.H2}
          component={TypeComponent.h1}
          bold
          classes="mb-2"
        >
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
        <Typography
          variant={TypeVariant.H4}
          component={TypeComponent.h4}
          bold
          classes="text-peach"
        >
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
      link: ({ value, children }) => {
        const target = !(value?.href || "").includes("safehavennursery.co.uk")
          ? "_blank"
          : undefined;
        return (
          <a
            className="text-peach font-serif font-semibold underline-offset-2 transition-all duration-200 hover:underline"
            href={value?.href}
            target={target}
            rel={target === "_blank" ? "noindex nofollow" : ""}
          >
            {children}
          </a>
        );
      },
    },
    list: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => (
        <div className="relative my-8">
          <span className="bg-peach/40 pointer-events-none absolute top-1 -left-1 z-0 block h-full w-full rounded-3xl"></span>
          <ul className="bg-cream border-peach/10 relative grid gap-3 rounded-3xl border p-8">
            {children}
          </ul>
        </div>
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
          <div className="relative my-8">
            <span className="bg-peach/40 pointer-events-none absolute top-1 -left-1 z-0 block h-full w-full rounded-3xl"></span>
            <ReactPlayer
              url={url}
              width="100%"
              className="relative z-1 overflow-hidden rounded-3xl"
            />
          </div>
        );
      },
      imageBlock: InlineImageComponent,
    },
  };
  return <PortableText value={content} components={components} />;
};

export default BlockContent;

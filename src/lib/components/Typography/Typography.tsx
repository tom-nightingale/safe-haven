import React from "react";

export enum TypeVariant {
  H1 = "text-h1",
  H2 = "text-h2",
  H3 = "text-h3",
  H4 = "text-h4",
  H5 = "text-h5",
  H6 = "text-h6",
  Body1 = "text-body-1",
  Body2 = "text-body-2",
  Banner = "text-banner",
  Button1 = "text-button-1",
  Button2 = "text-button-2",
}

export enum TypeComponent {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  p = "p",
  span = "span",
}

type Props = {
  variant?: TypeVariant;
  component?: TypeComponent;
  strikeThrough?: boolean;
  underline?: boolean;
  bold?: boolean;
  italic?: boolean;
  uppercase?: boolean;
  classes?: string;
  children: React.ReactNode;
};

const Typography = ({
  variant = TypeVariant.Body1,
  component = TypeComponent.span,
  strikeThrough = false,
  underline = false,
  bold = false,
  italic = false,
  uppercase = false,
  classes = "",
  children,
}: Props) => {
  return component === TypeComponent.h1 ? (
    <h1
      className={`${variant} ${classes} ${uppercase && "uppercase"} ${underline && "underline"} ${italic && "italic"} ${bold && "font-medium"} ${strikeThrough && "line-through"}`}
    >
      {children}
    </h1>
  ) : component === TypeComponent.h2 ? (
    <h2
      className={`${variant} ${classes} ${uppercase && "uppercase"} ${underline && "underline"} ${italic && "italic"} ${bold && "font-medium"} ${strikeThrough && "line-through"}`}
    >
      {children}
    </h2>
  ) : component === TypeComponent.h3 ? (
    <h3
      className={`${variant} ${classes} ${uppercase && "uppercase"} ${underline && "underline"} ${italic && "italic"} ${bold && "font-medium"} ${strikeThrough && "line-through"}`}
    >
      {children}
    </h3>
  ) : component === TypeComponent.h4 ? (
    <h4
      className={`${variant} ${classes} ${uppercase && "uppercase"} ${underline && "underline"} ${italic && "italic"} ${bold && "font-medium"} ${strikeThrough && "line-through"}`}
    >
      {children}
    </h4>
  ) : component === TypeComponent.h5 ? (
    <h5
      className={`${variant} ${classes} ${uppercase && "uppercase"} ${underline && "underline"} ${italic && "italic"} ${bold && "font-medium"} ${strikeThrough && "line-through"}`}
    >
      {children}
    </h5>
  ) : component === TypeComponent.h6 ? (
    <h6
      className={`${variant} ${classes} ${uppercase && "uppercase"} ${underline && "underline"} ${italic && "italic"} ${bold && "font-medium"} ${strikeThrough && "line-through"}`}
    >
      {children}
    </h6>
  ) : component === TypeComponent.p ? (
    <p
      className={`${variant} ${classes} ${uppercase && "uppercase"} ${underline && "underline"} ${italic && "italic"} ${bold && "font-medium"} ${strikeThrough && "line-through"}`}
    >
      {children}
    </p>
  ) : component === TypeComponent.span ? (
    <span
      className={`${variant} ${classes} ${uppercase && "uppercase"} ${underline && "underline"} ${italic && "italic"} ${bold && "font-medium"} ${strikeThrough && "line-through"}`}
    >
      {children}
    </span>
  ) : (
    <p
      className={`${variant} ${classes} ${uppercase && "uppercase"} ${underline && "underline"} ${italic && "italic"} ${bold && "font-medium"} ${strikeThrough && "line-through"}`}
    >
      {children}
    </p>
  );
};

export default Typography;

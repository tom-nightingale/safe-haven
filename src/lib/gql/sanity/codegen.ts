import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
  DateTime: { input: any; output: any };
  JSON: { input: any; output: any };
};

export type Banner = Document & {
  __typename?: "Banner";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  backgroundColour?: Maybe<SimplerColor>;
  /** Content of the banner */
  content?: Maybe<Scalars["String"]["output"]>;
  /** Use a dark text theme for the banner? */
  darkTextTheme?: Maybe<Scalars["Boolean"]["output"]>;
  links?: Maybe<Array<Maybe<Link>>>;
  orderRank?: Maybe<Scalars["String"]["output"]>;
};

export type BannerFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  backgroundColour?: InputMaybe<SimplerColorFilter>;
  content?: InputMaybe<StringFilter>;
  darkTextTheme?: InputMaybe<BooleanFilter>;
  orderRank?: InputMaybe<StringFilter>;
};

export type BannerSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  backgroundColour?: InputMaybe<SimplerColorSorting>;
  content?: InputMaybe<SortOrder>;
  darkTextTheme?: InputMaybe<SortOrder>;
  orderRank?: InputMaybe<SortOrder>;
};

export type Block = {
  __typename?: "Block";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  children?: Maybe<Array<Maybe<Span>>>;
  level?: Maybe<Scalars["Float"]["output"]>;
  listItem?: Maybe<Scalars["String"]["output"]>;
  style?: Maybe<Scalars["String"]["output"]>;
};

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Carousel = {
  __typename?: "Carousel";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  carouselCards?: Maybe<Array<Maybe<CarouselCard>>>;
  /** The text colour theme to use within the hero */
  colourTheme?: Maybe<Scalars["String"]["output"]>;
  /** Subtitle */
  subtitle?: Maybe<Scalars["String"]["output"]>;
  textRaw?: Maybe<Scalars["JSON"]["output"]>;
  /** Title */
  title?: Maybe<Scalars["String"]["output"]>;
};

export type CarouselCard = {
  __typename?: "CarouselCard";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Card Type */
  cardType?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<ImageBlock>;
  /** Link destination */
  linkHref?: Maybe<Scalars["String"]["output"]>;
  /** Title */
  linkText?: Maybe<Scalars["String"]["output"]>;
  /** Title */
  title?: Maybe<Scalars["String"]["output"]>;
};

export type CarouselCardFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  cardType?: InputMaybe<StringFilter>;
  image?: InputMaybe<ImageBlockFilter>;
  linkHref?: InputMaybe<StringFilter>;
  linkText?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CarouselCardSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  cardType?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageBlockSorting>;
  linkHref?: InputMaybe<SortOrder>;
  linkText?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type CarouselFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  colourTheme?: InputMaybe<StringFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CarouselOrHeroOrSpacerOrTextWithCtaOrTextWithImageOrTwoImageHeroOrVideo =
  Carousel | Hero | Spacer | TextWithCta | TextWithImage | TwoImageHero | Video;

export type CarouselSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  colourTheme?: InputMaybe<SortOrder>;
  subtitle?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Category = Document & {
  __typename?: "Category";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type CategoryFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CategoryOrPage = Category | Page;

export type CategorySlug = {
  __typename?: "CategorySlug";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type CategorySlugFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type CategorySlugSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type CategorySorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SeoSorting>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type ContentBlocks = {
  __typename?: "ContentBlocks";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  contentblocks?: Maybe<
    Array<
      Maybe<CarouselOrHeroOrSpacerOrTextWithCtaOrTextWithImageOrTwoImageHeroOrVideo>
    >
  >;
};

export type ContentBlocksFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
};

export type ContentBlocksSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type CrossDatasetReference = {
  __typename?: "CrossDatasetReference";
  _dataset?: Maybe<Scalars["String"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  _projectId?: Maybe<Scalars["String"]["output"]>;
  _ref?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  _weak?: Maybe<Scalars["Boolean"]["output"]>;
};

export type CrossDatasetReferenceFilter = {
  _dataset?: InputMaybe<StringFilter>;
  _key?: InputMaybe<StringFilter>;
  _projectId?: InputMaybe<StringFilter>;
  _ref?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _weak?: InputMaybe<BooleanFilter>;
};

export type CrossDatasetReferenceSorting = {
  _dataset?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _projectId?: InputMaybe<SortOrder>;
  _ref?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _weak?: InputMaybe<SortOrder>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["Date"]["input"]>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars["Date"]["input"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars["Date"]["input"]>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars["Date"]["input"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars["Date"]["input"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["Date"]["input"]>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A Sanity document */
export type Document = {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DocumentSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
};

export type Feedback = Document & {
  __typename?: "Feedback";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  contentRaw?: Maybe<Scalars["JSON"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type FeedbackFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  name?: InputMaybe<StringFilter>;
};

export type FeedbackSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type File = {
  __typename?: "File";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityFileAssetFilter>;
};

export type FileSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["Float"]["input"]>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Geopoint = {
  __typename?: "Geopoint";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  alt?: Maybe<Scalars["Float"]["output"]>;
  lat?: Maybe<Scalars["Float"]["output"]>;
  lng?: Maybe<Scalars["Float"]["output"]>;
};

export type GeopointFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alt?: InputMaybe<FloatFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alt?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
};

export type Global = Document & {
  __typename?: "Global";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  address?: Maybe<Scalars["String"]["output"]>;
  companyName?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  registrationNumber?: Maybe<Scalars["String"]["output"]>;
  seo?: Maybe<Seo>;
  vatNumber?: Maybe<Scalars["String"]["output"]>;
};

export type GlobalFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  address?: InputMaybe<StringFilter>;
  companyName?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  registrationNumber?: InputMaybe<StringFilter>;
  seo?: InputMaybe<SeoFilter>;
  vatNumber?: InputMaybe<StringFilter>;
};

export type GlobalSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  companyName?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  registrationNumber?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SeoSorting>;
  vatNumber?: InputMaybe<SortOrder>;
};

export type Hero = {
  __typename?: "Hero";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  /** The text colour theme to use */
  colourTheme?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<HeroImage>;
  links?: Maybe<Array<Maybe<Link>>>;
  mediaType?: Maybe<Scalars["String"]["output"]>;
  /** Subtitle */
  subtitle?: Maybe<Scalars["String"]["output"]>;
  /** Text alignment */
  textAlignment?: Maybe<Scalars["String"]["output"]>;
  textRaw?: Maybe<Scalars["JSON"]["output"]>;
  /** Title */
  title?: Maybe<Scalars["String"]["output"]>;
  video?: Maybe<File>;
};

export type HeroFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  colourTheme?: InputMaybe<StringFilter>;
  image?: InputMaybe<HeroImageFilter>;
  mediaType?: InputMaybe<StringFilter>;
  subtitle?: InputMaybe<StringFilter>;
  textAlignment?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  video?: InputMaybe<FileFilter>;
};

export type HeroImage = {
  __typename?: "HeroImage";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<Array<Maybe<ImageBlock>>>;
};

export type HeroImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
};

export type HeroImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type HeroSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  colourTheme?: InputMaybe<SortOrder>;
  image?: InputMaybe<HeroImageSorting>;
  mediaType?: InputMaybe<SortOrder>;
  subtitle?: InputMaybe<SortOrder>;
  textAlignment?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  video?: InputMaybe<FileSorting>;
};

export type HighlightColor = {
  __typename?: "HighlightColor";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type HighlightColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type HighlightColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["ID"]["input"]>;
  in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars["ID"]["input"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["ID"]["input"]>;
  nin?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export type Image = {
  __typename?: "Image";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};

export type ImageBlock = {
  __typename?: "ImageBlock";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Alt text to use for the image */
  altText?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<Image>;
};

export type ImageBlockFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  altText?: InputMaybe<StringFilter>;
  image?: InputMaybe<ImageFilter>;
};

export type ImageBlockSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageSorting>;
};

export type ImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityImageAssetFilter>;
  crop?: InputMaybe<SanityImageCropFilter>;
  hotspot?: InputMaybe<SanityImageHotspotFilter>;
};

export type ImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  crop?: InputMaybe<SanityImageCropSorting>;
  hotspot?: InputMaybe<SanityImageHotspotSorting>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Link = {
  __typename?: "Link";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  backgroundColour?: Maybe<SimplerColor>;
  /** Use a dark text theme for CTA text? */
  darkTextTheme?: Maybe<Scalars["Boolean"]["output"]>;
  /** Link destination */
  href?: Maybe<Scalars["String"]["output"]>;
  /** Label to use for the link */
  label?: Maybe<Scalars["String"]["output"]>;
  /** Should this link open in new window */
  targetBlank?: Maybe<Scalars["Boolean"]["output"]>;
};

export type LinkFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  backgroundColour?: InputMaybe<SimplerColorFilter>;
  darkTextTheme?: InputMaybe<BooleanFilter>;
  href?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  targetBlank?: InputMaybe<BooleanFilter>;
};

export type LinkSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  backgroundColour?: InputMaybe<SimplerColorSorting>;
  darkTextTheme?: InputMaybe<SortOrder>;
  href?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  targetBlank?: InputMaybe<SortOrder>;
};

export type Navigation = Document & {
  __typename?: "Navigation";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  sections?: Maybe<Array<Maybe<NavigationSection>>>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type NavigationFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  name?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type NavigationLink = {
  __typename?: "NavigationLink";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  children?: Maybe<Array<Maybe<NavigationLink>>>;
  /** Description */
  target?: Maybe<CategoryOrPage>;
  /** Override title from the target. */
  title?: Maybe<Scalars["String"]["output"]>;
};

export type NavigationLinkFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type NavigationLinkSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type NavigationSection = {
  __typename?: "NavigationSection";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  children?: Maybe<Array<Maybe<NavigationLink>>>;
  target?: Maybe<Page>;
  /** Override title from the target. */
  title?: Maybe<Scalars["String"]["output"]>;
};

export type NavigationSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  target?: InputMaybe<PageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type NavigationSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type NavigationSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Nursery = Document & {
  __typename?: "Nursery";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  contentRaw?: Maybe<Scalars["JSON"]["output"]>;
  orderRank?: Maybe<Scalars["String"]["output"]>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type NurseryFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  orderRank?: InputMaybe<StringFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export type NurserySorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  orderRank?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SeoSorting>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type Page = Document & {
  __typename?: "Page";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  contentBlocks?: Maybe<ContentBlocks>;
  orderRank?: Maybe<Scalars["String"]["output"]>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Slug>;
  subtitle?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type PageFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  contentBlocks?: InputMaybe<ContentBlocksFilter>;
  orderRank?: InputMaybe<StringFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PageSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  contentBlocks?: InputMaybe<ContentBlocksSorting>;
  orderRank?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SeoSorting>;
  slug?: InputMaybe<SlugSorting>;
  subtitle?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Post = Document & {
  __typename?: "Post";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  articleImage?: Maybe<ImageBlock>;
  /** Which category does this blog post relate to? */
  category?: Maybe<Category>;
  contentRaw?: Maybe<Scalars["JSON"]["output"]>;
  orderRank?: Maybe<Scalars["String"]["output"]>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type PostFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  articleImage?: InputMaybe<ImageBlockFilter>;
  category?: InputMaybe<CategoryFilter>;
  orderRank?: InputMaybe<StringFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PostSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  articleImage?: InputMaybe<ImageBlockSorting>;
  orderRank?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SeoSorting>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type RootQuery = {
  __typename?: "RootQuery";
  Banner?: Maybe<Banner>;
  Category?: Maybe<Category>;
  Document?: Maybe<Document>;
  Feedback?: Maybe<Feedback>;
  Global?: Maybe<Global>;
  Navigation?: Maybe<Navigation>;
  Nursery?: Maybe<Nursery>;
  Page?: Maybe<Page>;
  Post?: Maybe<Post>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  Staff?: Maybe<Staff>;
  allBanner: Array<Banner>;
  allCategory: Array<Category>;
  allDocument: Array<Document>;
  allFeedback: Array<Feedback>;
  allGlobal: Array<Global>;
  allNavigation: Array<Navigation>;
  allNursery: Array<Nursery>;
  allPage: Array<Page>;
  allPost: Array<Post>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allStaff: Array<Staff>;
};

export type RootQueryBannerArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryCategoryArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryDocumentArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryFeedbackArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryGlobalArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryNavigationArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryNurseryArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryPageArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryPostArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQuerySanityFileAssetArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQuerySanityImageAssetArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryStaffArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryAllBannerArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<BannerSorting>>;
  where?: InputMaybe<BannerFilter>;
};

export type RootQueryAllCategoryArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<CategorySorting>>;
  where?: InputMaybe<CategoryFilter>;
};

export type RootQueryAllDocumentArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<DocumentSorting>>;
  where?: InputMaybe<DocumentFilter>;
};

export type RootQueryAllFeedbackArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<FeedbackSorting>>;
  where?: InputMaybe<FeedbackFilter>;
};

export type RootQueryAllGlobalArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<GlobalSorting>>;
  where?: InputMaybe<GlobalFilter>;
};

export type RootQueryAllNavigationArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<NavigationSorting>>;
  where?: InputMaybe<NavigationFilter>;
};

export type RootQueryAllNurseryArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<NurserySorting>>;
  where?: InputMaybe<NurseryFilter>;
};

export type RootQueryAllPageArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<PageSorting>>;
  where?: InputMaybe<PageFilter>;
};

export type RootQueryAllPostArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<PostSorting>>;
  where?: InputMaybe<PostFilter>;
};

export type RootQueryAllSanityFileAssetArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SanityFileAssetSorting>>;
  where?: InputMaybe<SanityFileAssetFilter>;
};

export type RootQueryAllSanityImageAssetArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SanityImageAssetSorting>>;
  where?: InputMaybe<SanityImageAssetFilter>;
};

export type RootQueryAllStaffArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<StaffSorting>>;
  where?: InputMaybe<StaffFilter>;
};

export type SanityAssetSourceData = {
  __typename?: "SanityAssetSourceData";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars["String"]["output"]>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars["String"]["output"]>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars["String"]["output"]>;
};

export type SanityAssetSourceDataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  __typename?: "SanityFileAsset";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  altText?: Maybe<Scalars["String"]["output"]>;
  assetId?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  extension?: Maybe<Scalars["String"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  mimeType?: Maybe<Scalars["String"]["output"]>;
  originalFilename?: Maybe<Scalars["String"]["output"]>;
  path?: Maybe<Scalars["String"]["output"]>;
  sha1hash?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["Float"]["output"]>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars["String"]["output"]>;
  uploadId?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  uploadId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityFileAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  uploadId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageAsset = Document & {
  __typename?: "SanityImageAsset";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  altText?: Maybe<Scalars["String"]["output"]>;
  assetId?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  extension?: Maybe<Scalars["String"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  metadata?: Maybe<SanityImageMetadata>;
  mimeType?: Maybe<Scalars["String"]["output"]>;
  originalFilename?: Maybe<Scalars["String"]["output"]>;
  path?: Maybe<Scalars["String"]["output"]>;
  sha1hash?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["Float"]["output"]>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars["String"]["output"]>;
  uploadId?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<SanityImageMetadataFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  uploadId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityImageAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SanityImageMetadataSorting>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  uploadId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageCrop = {
  __typename?: "SanityImageCrop";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  bottom?: Maybe<Scalars["Float"]["output"]>;
  left?: Maybe<Scalars["Float"]["output"]>;
  right?: Maybe<Scalars["Float"]["output"]>;
  top?: Maybe<Scalars["Float"]["output"]>;
};

export type SanityImageCropFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  bottom?: InputMaybe<FloatFilter>;
  left?: InputMaybe<FloatFilter>;
  right?: InputMaybe<FloatFilter>;
  top?: InputMaybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  bottom?: InputMaybe<SortOrder>;
  left?: InputMaybe<SortOrder>;
  right?: InputMaybe<SortOrder>;
  top?: InputMaybe<SortOrder>;
};

export type SanityImageDimensions = {
  __typename?: "SanityImageDimensions";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  aspectRatio?: Maybe<Scalars["Float"]["output"]>;
  height?: Maybe<Scalars["Float"]["output"]>;
  width?: Maybe<Scalars["Float"]["output"]>;
};

export type SanityImageDimensionsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  aspectRatio?: InputMaybe<FloatFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  aspectRatio?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type SanityImageHotspot = {
  __typename?: "SanityImageHotspot";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  height?: Maybe<Scalars["Float"]["output"]>;
  width?: Maybe<Scalars["Float"]["output"]>;
  x?: Maybe<Scalars["Float"]["output"]>;
  y?: Maybe<Scalars["Float"]["output"]>;
};

export type SanityImageHotspotFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
  x?: InputMaybe<FloatFilter>;
  y?: InputMaybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
  x?: InputMaybe<SortOrder>;
  y?: InputMaybe<SortOrder>;
};

export type SanityImageMetadata = {
  __typename?: "SanityImageMetadata";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  blurHash?: Maybe<Scalars["String"]["output"]>;
  dimensions?: Maybe<SanityImageDimensions>;
  hasAlpha?: Maybe<Scalars["Boolean"]["output"]>;
  isOpaque?: Maybe<Scalars["Boolean"]["output"]>;
  location?: Maybe<Geopoint>;
  lqip?: Maybe<Scalars["String"]["output"]>;
  palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  blurHash?: InputMaybe<StringFilter>;
  dimensions?: InputMaybe<SanityImageDimensionsFilter>;
  hasAlpha?: InputMaybe<BooleanFilter>;
  isOpaque?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<GeopointFilter>;
  lqip?: InputMaybe<StringFilter>;
  palette?: InputMaybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  blurHash?: InputMaybe<SortOrder>;
  dimensions?: InputMaybe<SanityImageDimensionsSorting>;
  hasAlpha?: InputMaybe<SortOrder>;
  isOpaque?: InputMaybe<SortOrder>;
  location?: InputMaybe<GeopointSorting>;
  lqip?: InputMaybe<SortOrder>;
  palette?: InputMaybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
  __typename?: "SanityImagePalette";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  dominant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  muted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  __typename?: "SanityImagePaletteSwatch";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  background?: Maybe<Scalars["String"]["output"]>;
  foreground?: Maybe<Scalars["String"]["output"]>;
  population?: Maybe<Scalars["Float"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  background?: InputMaybe<StringFilter>;
  foreground?: InputMaybe<StringFilter>;
  population?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  background?: InputMaybe<SortOrder>;
  foreground?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
  /** All documents that are drafts. */
  is_draft?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** All documents referencing the given document ID. */
  references?: InputMaybe<Scalars["ID"]["input"]>;
};

export type Seo = {
  __typename?: "Seo";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  keywords?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** Description for search engines. */
  metaDesc?: Maybe<Scalars["String"]["output"]>;
  /** Title used for search engines and browsers. */
  metaTitle?: Maybe<Scalars["String"]["output"]>;
  shareGraphic?: Maybe<Image>;
};

export type SeoFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  metaDesc?: InputMaybe<StringFilter>;
  metaTitle?: InputMaybe<StringFilter>;
  shareGraphic?: InputMaybe<ImageFilter>;
};

export type SeoSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  metaDesc?: InputMaybe<SortOrder>;
  metaTitle?: InputMaybe<SortOrder>;
  shareGraphic?: InputMaybe<ImageSorting>;
};

export type SimplerColor = {
  __typename?: "SimplerColor";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type SimplerColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type SimplerColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type Slug = {
  __typename?: "Slug";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  current?: Maybe<Scalars["String"]["output"]>;
  source?: Maybe<Scalars["String"]["output"]>;
};

export type SlugFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  current?: InputMaybe<StringFilter>;
  source?: InputMaybe<StringFilter>;
};

export type SlugSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  current?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = "ASC",
  /** Sorts on the value in descending order. */
  Desc = "DESC",
}

export type Spacer = {
  __typename?: "Spacer";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Size of the spacer to be used */
  spacerSize?: Maybe<Scalars["String"]["output"]>;
};

export type SpacerFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  spacerSize?: InputMaybe<StringFilter>;
};

export type SpacerSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  spacerSize?: InputMaybe<SortOrder>;
};

export type Span = {
  __typename?: "Span";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  marks?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  text?: Maybe<Scalars["String"]["output"]>;
};

export type Staff = Document & {
  __typename?: "Staff";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  biographyRaw?: Maybe<Scalars["JSON"]["output"]>;
  jobTitle?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  nursery?: Maybe<Scalars["String"]["output"]>;
  orderRank?: Maybe<Scalars["String"]["output"]>;
  profileImage?: Maybe<ImageBlock>;
};

export type StaffFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  jobTitle?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nursery?: InputMaybe<StringFilter>;
  orderRank?: InputMaybe<StringFilter>;
  profileImage?: InputMaybe<ImageBlockFilter>;
};

export type StaffSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  jobTitle?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nursery?: InputMaybe<SortOrder>;
  orderRank?: InputMaybe<SortOrder>;
  profileImage?: InputMaybe<ImageBlockSorting>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["String"]["input"]>;
  nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type TextColor = {
  __typename?: "TextColor";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type TextColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type TextColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type TextWithCta = {
  __typename?: "TextWithCta";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  links?: Maybe<Array<Maybe<Link>>>;
  /** Text alignment */
  textAlignment?: Maybe<Scalars["String"]["output"]>;
  textRaw?: Maybe<Scalars["JSON"]["output"]>;
  /** Title */
  title?: Maybe<Scalars["String"]["output"]>;
};

export type TextWithCtaFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  textAlignment?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TextWithCtaSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  textAlignment?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type TextWithImage = {
  __typename?: "TextWithImage";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  /** The text colour theme to use */
  colourTheme?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<ImageBlock>;
  links?: Maybe<Array<Maybe<Link>>>;
  /** Text alignment */
  textAlignment?: Maybe<Scalars["String"]["output"]>;
  textRaw?: Maybe<Scalars["JSON"]["output"]>;
};

export type TextWithImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  colourTheme?: InputMaybe<StringFilter>;
  image?: InputMaybe<ImageBlockFilter>;
  textAlignment?: InputMaybe<StringFilter>;
};

export type TextWithImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  colourTheme?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageBlockSorting>;
  textAlignment?: InputMaybe<SortOrder>;
};

export type TwoImageHero = {
  __typename?: "TwoImageHero";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  blocks?: Maybe<Array<Maybe<TwoImageHeroBlock>>>;
};

export type TwoImageHeroBlock = {
  __typename?: "TwoImageHeroBlock";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<ImageBlock>;
  link?: Maybe<Link>;
  /** Title of the block */
  title?: Maybe<Scalars["String"]["output"]>;
};

export type TwoImageHeroBlockFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<ImageBlockFilter>;
  link?: InputMaybe<LinkFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TwoImageHeroBlockSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageBlockSorting>;
  link?: InputMaybe<LinkSorting>;
  title?: InputMaybe<SortOrder>;
};

export type TwoImageHeroFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
};

export type TwoImageHeroSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type Video = {
  __typename?: "Video";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  coverImage?: Maybe<Image>;
  /** Title */
  title?: Maybe<Scalars["String"]["output"]>;
  videoLg?: Maybe<File>;
  videoSm?: Maybe<File>;
};

export type VideoFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  coverImage?: InputMaybe<ImageFilter>;
  title?: InputMaybe<StringFilter>;
  videoLg?: InputMaybe<FileFilter>;
  videoSm?: InputMaybe<FileFilter>;
};

export type VideoSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  coverImage?: InputMaybe<ImageSorting>;
  title?: InputMaybe<SortOrder>;
  videoLg?: InputMaybe<FileSorting>;
  videoSm?: InputMaybe<FileSorting>;
};

export type ImageHotspotFragment = {
  __typename?: "SanityImageHotspot";
  x?: number | null | undefined;
  y?: number | null | undefined;
  width?: number | null | undefined;
  height?: number | null | undefined;
};

export type ImageCropFragment = {
  __typename?: "SanityImageCrop";
  top?: number | null | undefined;
  bottom?: number | null | undefined;
  left?: number | null | undefined;
  right?: number | null | undefined;
};

export type SeoFragmentFragment = {
  __typename?: "Seo";
  metaTitle?: string | null | undefined;
  metaDesc?: string | null | undefined;
  keywords?: Array<string | null | undefined> | null | undefined;
  shareGraphic?:
    | {
        __typename?: "Image";
        asset?:
          | {
              __typename?: "SanityImageAsset";
              url?: string | null | undefined;
              altText?: string | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type ImageAssetFragment = {
  __typename?: "SanityImageAsset";
  url?: string | null | undefined;
  altText?: string | null | undefined;
};

export type NavigationSectionFragment = {
  __typename?: "NavigationSection";
  target?:
    | {
        __typename?: "Page";
        title?: string | null | undefined;
        slug?:
          | { __typename?: "Slug"; current?: string | null | undefined }
          | null
          | undefined;
      }
    | null
    | undefined;
  children?:
    | Array<
        | {
            __typename?: "NavigationLink";
            target?:
              | {
                  __typename?: "Category";
                  title?: string | null | undefined;
                  slug?:
                    | {
                        __typename?: "Slug";
                        current?: string | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | {
                  __typename?: "Page";
                  title?: string | null | undefined;
                  slug?:
                    | {
                        __typename?: "Slug";
                        current?: string | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type GetNavigationByIdQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetNavigationByIdQuery = {
  __typename?: "RootQuery";
  Navigation?:
    | {
        __typename?: "Navigation";
        _id?: string | null | undefined;
        title?: string | null | undefined;
        sections?:
          | Array<
              | {
                  __typename?: "NavigationSection";
                  target?:
                    | {
                        __typename?: "Page";
                        title?: string | null | undefined;
                        slug?:
                          | {
                              __typename?: "Slug";
                              current?: string | null | undefined;
                            }
                          | null
                          | undefined;
                      }
                    | null
                    | undefined;
                  children?:
                    | Array<
                        | {
                            __typename?: "NavigationLink";
                            target?:
                              | {
                                  __typename?: "Category";
                                  title?: string | null | undefined;
                                  slug?:
                                    | {
                                        __typename?: "Slug";
                                        current?: string | null | undefined;
                                      }
                                    | null
                                    | undefined;
                                }
                              | {
                                  __typename?: "Page";
                                  title?: string | null | undefined;
                                  slug?:
                                    | {
                                        __typename?: "Slug";
                                        current?: string | null | undefined;
                                      }
                                    | null
                                    | undefined;
                                }
                              | null
                              | undefined;
                          }
                        | null
                        | undefined
                      >
                    | null
                    | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type GetPageBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetPageBySlugQuery = {
  __typename?: "RootQuery";
  allPage: Array<{
    __typename?: "Page";
    _type?: string | null | undefined;
    title?: string | null | undefined;
    seo?:
      | {
          __typename?: "Seo";
          metaTitle?: string | null | undefined;
          metaDesc?: string | null | undefined;
          keywords?: Array<string | null | undefined> | null | undefined;
          shareGraphic?:
            | {
                __typename?: "Image";
                asset?:
                  | {
                      __typename?: "SanityImageAsset";
                      url?: string | null | undefined;
                      altText?: string | null | undefined;
                    }
                  | null
                  | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
  }>;
};

export type GetCategoryBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetCategoryBySlugQuery = {
  __typename?: "RootQuery";
  allCategory: Array<{
    __typename?: "Category";
    _id?: string | null | undefined;
    title?: string | null | undefined;
    slug?:
      | { __typename?: "Slug"; current?: string | null | undefined }
      | null
      | undefined;
  }>;
};

export type GetAllPostsQueryVariables = Exact<{
  where?: InputMaybe<PostFilter>;
  sort?: InputMaybe<Array<PostSorting> | PostSorting>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetAllPostsQuery = {
  __typename?: "RootQuery";
  allPost: Array<{
    __typename?: "Post";
    title?: string | null | undefined;
    contentRaw?: any | null | undefined;
    _createdAt?: any | null | undefined;
    slug?:
      | { __typename?: "Slug"; current?: string | null | undefined }
      | null
      | undefined;
    category?:
      | {
          __typename?: "Category";
          title?: string | null | undefined;
          slug?:
            | { __typename?: "Slug"; current?: string | null | undefined }
            | null
            | undefined;
        }
      | null
      | undefined;
  }>;
};

export type GetPostBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetPostBySlugQuery = {
  __typename?: "RootQuery";
  allPost: Array<{
    __typename?: "Post";
    title?: string | null | undefined;
    contentRaw?: any | null | undefined;
    _createdAt?: any | null | undefined;
  }>;
};

export type GetPostsByCategoryQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetPostsByCategoryQuery = {
  __typename?: "RootQuery";
  allPost: Array<{
    __typename?: "Post";
    title?: string | null | undefined;
    category?:
      | {
          __typename?: "Category";
          title?: string | null | undefined;
          slug?:
            | { __typename?: "Slug"; current?: string | null | undefined }
            | null
            | undefined;
        }
      | null
      | undefined;
    slug?:
      | { __typename?: "Slug"; current?: string | null | undefined }
      | null
      | undefined;
  }>;
};

export type GetAllStaffQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllStaffQuery = {
  __typename?: "RootQuery";
  allStaff: Array<{
    __typename?: "Staff";
    _id?: string | null | undefined;
    _type?: string | null | undefined;
    name?: string | null | undefined;
    jobTitle?: string | null | undefined;
    biographyRaw?: any | null | undefined;
    profileImage?:
      | {
          __typename?: "ImageBlock";
          image?:
            | {
                __typename?: "Image";
                asset?:
                  | {
                      __typename?: "SanityImageAsset";
                      url?: string | null | undefined;
                      altText?: string | null | undefined;
                    }
                  | null
                  | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
  }>;
};

export const ImageHotspotFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "imageHotspot" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SanityImageHotspot" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "x" } },
          { kind: "Field", name: { kind: "Name", value: "y" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
          { kind: "Field", name: { kind: "Name", value: "height" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageHotspotFragment, unknown>;
export const ImageCropFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "imageCrop" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SanityImageCrop" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "top" } },
          { kind: "Field", name: { kind: "Name", value: "bottom" } },
          { kind: "Field", name: { kind: "Name", value: "left" } },
          { kind: "Field", name: { kind: "Name", value: "right" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageCropFragment, unknown>;
export const SeoFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "seoFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Seo" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "metaTitle" } },
          { kind: "Field", name: { kind: "Name", value: "metaDesc" } },
          { kind: "Field", name: { kind: "Name", value: "keywords" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "shareGraphic" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "asset" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "altText" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SeoFragmentFragment, unknown>;
export const ImageAssetFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "imageAsset" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SanityImageAsset" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "altText" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageAssetFragment, unknown>;
export const NavigationSectionFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NavigationSection" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "NavigationSection" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "target" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Page" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "slug" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "current" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "title" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "children" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "target" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "Page" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "current" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "Category" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "current" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NavigationSectionFragment, unknown>;
export const GetNavigationByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetNavigationById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "Navigation" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "_id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sections" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "NavigationSection" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NavigationSection" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "NavigationSection" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "target" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Page" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "slug" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "current" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "title" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "children" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "target" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "Page" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "current" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "Category" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "current" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetNavigationByIdQuery,
  GetNavigationByIdQueryVariables
>;
export const GetPageBySlugDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPageBySlug" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allPage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "current" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "slug" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "_type" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "seo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "seoFragment" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "seoFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Seo" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "metaTitle" } },
          { kind: "Field", name: { kind: "Name", value: "metaDesc" } },
          { kind: "Field", name: { kind: "Name", value: "keywords" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "shareGraphic" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "asset" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "altText" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPageBySlugQuery, GetPageBySlugQueryVariables>;
export const GetCategoryBySlugDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetCategoryBySlug" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allCategory" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "current" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "slug" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "_id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "slug" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "current" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCategoryBySlugQuery,
  GetCategoryBySlugQueryVariables
>;
export const GetAllPostsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllPosts" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "where" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "PostFilter" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "sort" } },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "PostSorting" },
              },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allPost" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "where" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "sort" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "contentRaw" } },
                { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "slug" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "current" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "category" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "slug" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "current" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllPostsQuery, GetAllPostsQueryVariables>;
export const GetPostBySlugDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPostBySlug" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allPost" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "current" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "slug" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "contentRaw" } },
                { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPostBySlugQuery, GetPostBySlugQueryVariables>;
export const GetPostsByCategoryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPostsByCategory" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allPost" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "category" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "slug" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "current" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "eq" },
                                        value: {
                                          kind: "Variable",
                                          name: { kind: "Name", value: "slug" },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "title" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "category" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "slug" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "current" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "slug" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "current" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetPostsByCategoryQuery,
  GetPostsByCategoryQueryVariables
>;
export const GetAllStaffDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllStaff" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allStaff" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "_id" } },
                { kind: "Field", name: { kind: "Name", value: "_type" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "jobTitle" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "profileImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "image" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "asset" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "imageAsset" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "biographyRaw" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "imageAsset" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SanityImageAsset" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "altText" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllStaffQuery, GetAllStaffQueryVariables>;

// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *home → boeken*
 */
export interface HomeDocumentDataBoekenItem {}

type HomeDocumentDataSlicesSlice = BoekenSlice;

/**
 * Content for home documents
 */
interface HomeDocumentData {
  /**
   * title field in *home*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: home.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * content field in *home*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * boeken field in *home*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: home.boeken[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  boeken: prismic.GroupField<Simplify<HomeDocumentDataBoekenItem>>;

  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>
  /**
   * Meta Description field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;

export type AllDocumentTypes = HomeDocument;

/**
 * Primary content in *Boeken → Items*
 */
export interface BoekenSliceDefaultItem {
  /**
   * title field in *Boeken → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: boeken.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * url field in *Boeken → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: boeken.items[].url
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  url: prismic.LinkField;

  /**
   * color field in *Boeken → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: boeken.items[].color
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  color: prismic.SelectField<
    "red" | "blue" | "green" | "yellow" | "purple" | "brown"
  >;
}

/**
 * Default variation for Boeken Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BoekenSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<BoekenSliceDefaultItem>
>;

/**
 * Slice variation for *Boeken*
 */
type BoekenSliceVariation = BoekenSliceDefault;

/**
 * Boeken Shared Slice
 *
 * - **API ID**: `boeken`
 * - **Description**: Boeken
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BoekenSlice = prismic.SharedSlice<"boeken", BoekenSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataBoekenItem,
      HomeDocumentDataSlicesSlice,
      AllDocumentTypes,
      BoekenSlice,
      BoekenSliceDefaultItem,
      BoekenSliceVariation,
      BoekenSliceDefault,
    };
  }
}

/**
 * API.Bible
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.6.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ChapterSummary } from "../models/ChapterSummary.ts";

export class Book {
  "id": string;
  "bibleId": string;
  "abbreviation": string;
  "name": string;
  "nameLong": string;
  "chapters"?: Array<ChapterSummary>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "id",
      baseName: "id",
      type: "string",
      format: "",
    },
    {
      name: "bibleId",
      baseName: "bibleId",
      type: "string",
      format: "",
    },
    {
      name: "abbreviation",
      baseName: "abbreviation",
      type: "string",
      format: "",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
      format: "",
    },
    {
      name: "nameLong",
      baseName: "nameLong",
      type: "string",
      format: "",
    },
    {
      name: "chapters",
      baseName: "chapters",
      type: "Array<ChapterSummary>",
      format: "",
    },
  ];

  static getAttributeTypeMap(): Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> {
    return Book.attributeTypeMap;
  }

  public constructor() {}
}

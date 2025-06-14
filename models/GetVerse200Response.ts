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

import { Meta } from "../models/Meta.ts";
import { Verse } from "../models/Verse.ts";
import { HttpFile } from "../http/http.ts";

export class GetVerse200Response {
  "data": Verse;
  "meta": Meta;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "data",
      baseName: "data",
      type: "Verse",
      format: "",
    },
    {
      name: "meta",
      baseName: "meta",
      type: "Meta",
      format: "",
    },
  ];

  static getAttributeTypeMap(): Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> {
    return GetVerse200Response.attributeTypeMap;
  }

  public constructor() {}
}

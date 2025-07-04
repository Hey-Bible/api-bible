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

export class AudioBibleSummary {
  "id": string;
  "name": string;
  "nameLocal": string;
  "description": string;
  "descriptionLocal": string;

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
      name: "name",
      baseName: "name",
      type: "string",
      format: "",
    },
    {
      name: "nameLocal",
      baseName: "nameLocal",
      type: "string",
      format: "",
    },
    {
      name: "description",
      baseName: "description",
      type: "string",
      format: "",
    },
    {
      name: "descriptionLocal",
      baseName: "descriptionLocal",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap(): Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> {
    return AudioBibleSummary.attributeTypeMap;
  }

  public constructor() {}
}

// Copyright 2021-2022 the Kubeapps contributors.
// SPDX-License-Identifier: Apache-2.0

// @generated by protoc-gen-es v1.2.1 with parameter "target=ts,import_extension=none"
// @generated from file kubeappsapis/plugins/kapp_controller/packages/v1alpha1/kapp_controller.proto (package kubeappsapis.plugins.kapp_controller.packages.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * KappControllerPackageRepositoryCustomDetail
 *
 * custom fields to support other carvel repository types
 * this is mirror from https://github.com/vmware-tanzu/carvel-kapp-controller/blob/develop/pkg/apis/kappctrl/v1alpha1/generated.proto
 * todo -> find a way to define those messages by referencing proto files from kapp_controller rather than duplication
 *
 * @generated from message kubeappsapis.plugins.kapp_controller.packages.v1alpha1.KappControllerPackageRepositoryCustomDetail
 */
export class KappControllerPackageRepositoryCustomDetail extends Message<KappControllerPackageRepositoryCustomDetail> {
  /**
   * @generated from field: kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryFetch fetch = 1;
   */
  fetch?: PackageRepositoryFetch;

  constructor(data?: PartialMessage<KappControllerPackageRepositoryCustomDetail>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName =
    "kubeappsapis.plugins.kapp_controller.packages.v1alpha1.KappControllerPackageRepositoryCustomDetail";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "fetch", kind: "message", T: PackageRepositoryFetch },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): KappControllerPackageRepositoryCustomDetail {
    return new KappControllerPackageRepositoryCustomDetail().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): KappControllerPackageRepositoryCustomDetail {
    return new KappControllerPackageRepositoryCustomDetail().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): KappControllerPackageRepositoryCustomDetail {
    return new KappControllerPackageRepositoryCustomDetail().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | KappControllerPackageRepositoryCustomDetail
      | PlainMessage<KappControllerPackageRepositoryCustomDetail>
      | undefined,
    b:
      | KappControllerPackageRepositoryCustomDetail
      | PlainMessage<KappControllerPackageRepositoryCustomDetail>
      | undefined,
  ): boolean {
    return proto3.util.equals(KappControllerPackageRepositoryCustomDetail, a, b);
  }
}

/**
 * @generated from message kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryFetch
 */
export class PackageRepositoryFetch extends Message<PackageRepositoryFetch> {
  /**
   * @generated from field: kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryImgpkg imgpkg_bundle = 1;
   */
  imgpkgBundle?: PackageRepositoryImgpkg;

  /**
   * @generated from field: kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryImage image = 2;
   */
  image?: PackageRepositoryImage;

  /**
   * @generated from field: kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryGit git = 3;
   */
  git?: PackageRepositoryGit;

  /**
   * @generated from field: kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryHttp http = 4;
   */
  http?: PackageRepositoryHttp;

  /**
   * @generated from field: kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryInline inline = 5;
   */
  inline?: PackageRepositoryInline;

  constructor(data?: PartialMessage<PackageRepositoryFetch>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName =
    "kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryFetch";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "imgpkg_bundle", kind: "message", T: PackageRepositoryImgpkg },
    { no: 2, name: "image", kind: "message", T: PackageRepositoryImage },
    { no: 3, name: "git", kind: "message", T: PackageRepositoryGit },
    { no: 4, name: "http", kind: "message", T: PackageRepositoryHttp },
    { no: 5, name: "inline", kind: "message", T: PackageRepositoryInline },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): PackageRepositoryFetch {
    return new PackageRepositoryFetch().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): PackageRepositoryFetch {
    return new PackageRepositoryFetch().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): PackageRepositoryFetch {
    return new PackageRepositoryFetch().fromJsonString(jsonString, options);
  }

  static equals(
    a: PackageRepositoryFetch | PlainMessage<PackageRepositoryFetch> | undefined,
    b: PackageRepositoryFetch | PlainMessage<PackageRepositoryFetch> | undefined,
  ): boolean {
    return proto3.util.equals(PackageRepositoryFetch, a, b);
  }
}

/**
 * @generated from message kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryImgpkg
 */
export class PackageRepositoryImgpkg extends Message<PackageRepositoryImgpkg> {
  /**
   * @generated from field: kubeappsapis.plugins.kapp_controller.packages.v1alpha1.VersionSelection tag_selection = 1;
   */
  tagSelection?: VersionSelection;

  constructor(data?: PartialMessage<PackageRepositoryImgpkg>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName =
    "kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryImgpkg";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tag_selection", kind: "message", T: VersionSelection },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): PackageRepositoryImgpkg {
    return new PackageRepositoryImgpkg().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): PackageRepositoryImgpkg {
    return new PackageRepositoryImgpkg().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): PackageRepositoryImgpkg {
    return new PackageRepositoryImgpkg().fromJsonString(jsonString, options);
  }

  static equals(
    a: PackageRepositoryImgpkg | PlainMessage<PackageRepositoryImgpkg> | undefined,
    b: PackageRepositoryImgpkg | PlainMessage<PackageRepositoryImgpkg> | undefined,
  ): boolean {
    return proto3.util.equals(PackageRepositoryImgpkg, a, b);
  }
}

/**
 * @generated from message kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryImage
 */
export class PackageRepositoryImage extends Message<PackageRepositoryImage> {
  /**
   * @generated from field: kubeappsapis.plugins.kapp_controller.packages.v1alpha1.VersionSelection tag_selection = 1;
   */
  tagSelection?: VersionSelection;

  /**
   * @generated from field: string sub_path = 2;
   */
  subPath = "";

  constructor(data?: PartialMessage<PackageRepositoryImage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName =
    "kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryImage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tag_selection", kind: "message", T: VersionSelection },
    { no: 2, name: "sub_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): PackageRepositoryImage {
    return new PackageRepositoryImage().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): PackageRepositoryImage {
    return new PackageRepositoryImage().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): PackageRepositoryImage {
    return new PackageRepositoryImage().fromJsonString(jsonString, options);
  }

  static equals(
    a: PackageRepositoryImage | PlainMessage<PackageRepositoryImage> | undefined,
    b: PackageRepositoryImage | PlainMessage<PackageRepositoryImage> | undefined,
  ): boolean {
    return proto3.util.equals(PackageRepositoryImage, a, b);
  }
}

/**
 * @generated from message kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryGit
 */
export class PackageRepositoryGit extends Message<PackageRepositoryGit> {
  /**
   * @generated from field: string ref = 1;
   */
  ref = "";

  /**
   * @generated from field: kubeappsapis.plugins.kapp_controller.packages.v1alpha1.VersionSelection ref_selection = 2;
   */
  refSelection?: VersionSelection;

  /**
   * @generated from field: string sub_path = 3;
   */
  subPath = "";

  /**
   * @generated from field: bool lfs_skip_smudge = 4;
   */
  lfsSkipSmudge = false;

  constructor(data?: PartialMessage<PackageRepositoryGit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName =
    "kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryGit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ref", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ref_selection", kind: "message", T: VersionSelection },
    { no: 3, name: "sub_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "lfs_skip_smudge", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PackageRepositoryGit {
    return new PackageRepositoryGit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PackageRepositoryGit {
    return new PackageRepositoryGit().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): PackageRepositoryGit {
    return new PackageRepositoryGit().fromJsonString(jsonString, options);
  }

  static equals(
    a: PackageRepositoryGit | PlainMessage<PackageRepositoryGit> | undefined,
    b: PackageRepositoryGit | PlainMessage<PackageRepositoryGit> | undefined,
  ): boolean {
    return proto3.util.equals(PackageRepositoryGit, a, b);
  }
}

/**
 * @generated from message kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryHttp
 */
export class PackageRepositoryHttp extends Message<PackageRepositoryHttp> {
  /**
   * @generated from field: string sub_path = 1;
   */
  subPath = "";

  /**
   * @generated from field: string sha256 = 2;
   */
  sha256 = "";

  constructor(data?: PartialMessage<PackageRepositoryHttp>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName =
    "kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryHttp";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sub_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "sha256", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): PackageRepositoryHttp {
    return new PackageRepositoryHttp().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PackageRepositoryHttp {
    return new PackageRepositoryHttp().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): PackageRepositoryHttp {
    return new PackageRepositoryHttp().fromJsonString(jsonString, options);
  }

  static equals(
    a: PackageRepositoryHttp | PlainMessage<PackageRepositoryHttp> | undefined,
    b: PackageRepositoryHttp | PlainMessage<PackageRepositoryHttp> | undefined,
  ): boolean {
    return proto3.util.equals(PackageRepositoryHttp, a, b);
  }
}

/**
 * @generated from message kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryInline
 */
export class PackageRepositoryInline extends Message<PackageRepositoryInline> {
  /**
   * @generated from field: map<string, string> paths = 1;
   */
  paths: { [key: string]: string } = {};

  /**
   * @generated from field: repeated kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryInline.Source paths_from = 2;
   */
  pathsFrom: PackageRepositoryInline_Source[] = [];

  constructor(data?: PartialMessage<PackageRepositoryInline>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName =
    "kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryInline";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: "paths",
      kind: "map",
      K: 9 /* ScalarType.STRING */,
      V: { kind: "scalar", T: 9 /* ScalarType.STRING */ },
    },
    {
      no: 2,
      name: "paths_from",
      kind: "message",
      T: PackageRepositoryInline_Source,
      repeated: true,
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): PackageRepositoryInline {
    return new PackageRepositoryInline().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): PackageRepositoryInline {
    return new PackageRepositoryInline().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): PackageRepositoryInline {
    return new PackageRepositoryInline().fromJsonString(jsonString, options);
  }

  static equals(
    a: PackageRepositoryInline | PlainMessage<PackageRepositoryInline> | undefined,
    b: PackageRepositoryInline | PlainMessage<PackageRepositoryInline> | undefined,
  ): boolean {
    return proto3.util.equals(PackageRepositoryInline, a, b);
  }
}

/**
 * @generated from message kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryInline.SourceRef
 */
export class PackageRepositoryInline_SourceRef extends Message<PackageRepositoryInline_SourceRef> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: string directory_path = 2;
   */
  directoryPath = "";

  constructor(data?: PartialMessage<PackageRepositoryInline_SourceRef>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName =
    "kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryInline.SourceRef";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "directory_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): PackageRepositoryInline_SourceRef {
    return new PackageRepositoryInline_SourceRef().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): PackageRepositoryInline_SourceRef {
    return new PackageRepositoryInline_SourceRef().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): PackageRepositoryInline_SourceRef {
    return new PackageRepositoryInline_SourceRef().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | PackageRepositoryInline_SourceRef
      | PlainMessage<PackageRepositoryInline_SourceRef>
      | undefined,
    b:
      | PackageRepositoryInline_SourceRef
      | PlainMessage<PackageRepositoryInline_SourceRef>
      | undefined,
  ): boolean {
    return proto3.util.equals(PackageRepositoryInline_SourceRef, a, b);
  }
}

/**
 * @generated from message kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryInline.Source
 */
export class PackageRepositoryInline_Source extends Message<PackageRepositoryInline_Source> {
  /**
   * @generated from field: kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryInline.SourceRef secret_ref = 1;
   */
  secretRef?: PackageRepositoryInline_SourceRef;

  /**
   * @generated from field: kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryInline.SourceRef config_map_ref = 2;
   */
  configMapRef?: PackageRepositoryInline_SourceRef;

  constructor(data?: PartialMessage<PackageRepositoryInline_Source>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName =
    "kubeappsapis.plugins.kapp_controller.packages.v1alpha1.PackageRepositoryInline.Source";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "secret_ref", kind: "message", T: PackageRepositoryInline_SourceRef },
    { no: 2, name: "config_map_ref", kind: "message", T: PackageRepositoryInline_SourceRef },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): PackageRepositoryInline_Source {
    return new PackageRepositoryInline_Source().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): PackageRepositoryInline_Source {
    return new PackageRepositoryInline_Source().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): PackageRepositoryInline_Source {
    return new PackageRepositoryInline_Source().fromJsonString(jsonString, options);
  }

  static equals(
    a: PackageRepositoryInline_Source | PlainMessage<PackageRepositoryInline_Source> | undefined,
    b: PackageRepositoryInline_Source | PlainMessage<PackageRepositoryInline_Source> | undefined,
  ): boolean {
    return proto3.util.equals(PackageRepositoryInline_Source, a, b);
  }
}

/**
 * @generated from message kubeappsapis.plugins.kapp_controller.packages.v1alpha1.VersionSelection
 */
export class VersionSelection extends Message<VersionSelection> {
  /**
   * @generated from field: kubeappsapis.plugins.kapp_controller.packages.v1alpha1.VersionSelectionSemver semver = 1;
   */
  semver?: VersionSelectionSemver;

  constructor(data?: PartialMessage<VersionSelection>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName =
    "kubeappsapis.plugins.kapp_controller.packages.v1alpha1.VersionSelection";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "semver", kind: "message", T: VersionSelectionSemver },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VersionSelection {
    return new VersionSelection().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VersionSelection {
    return new VersionSelection().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VersionSelection {
    return new VersionSelection().fromJsonString(jsonString, options);
  }

  static equals(
    a: VersionSelection | PlainMessage<VersionSelection> | undefined,
    b: VersionSelection | PlainMessage<VersionSelection> | undefined,
  ): boolean {
    return proto3.util.equals(VersionSelection, a, b);
  }
}

/**
 * @generated from message kubeappsapis.plugins.kapp_controller.packages.v1alpha1.VersionSelectionSemver
 */
export class VersionSelectionSemver extends Message<VersionSelectionSemver> {
  /**
   * @generated from field: string constraints = 1;
   */
  constraints = "";

  /**
   * @generated from field: kubeappsapis.plugins.kapp_controller.packages.v1alpha1.VersionSelectionSemverPrereleases prereleases = 2;
   */
  prereleases?: VersionSelectionSemverPrereleases;

  constructor(data?: PartialMessage<VersionSelectionSemver>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName =
    "kubeappsapis.plugins.kapp_controller.packages.v1alpha1.VersionSelectionSemver";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "constraints", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "prereleases", kind: "message", T: VersionSelectionSemverPrereleases },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): VersionSelectionSemver {
    return new VersionSelectionSemver().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): VersionSelectionSemver {
    return new VersionSelectionSemver().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): VersionSelectionSemver {
    return new VersionSelectionSemver().fromJsonString(jsonString, options);
  }

  static equals(
    a: VersionSelectionSemver | PlainMessage<VersionSelectionSemver> | undefined,
    b: VersionSelectionSemver | PlainMessage<VersionSelectionSemver> | undefined,
  ): boolean {
    return proto3.util.equals(VersionSelectionSemver, a, b);
  }
}

/**
 * @generated from message kubeappsapis.plugins.kapp_controller.packages.v1alpha1.VersionSelectionSemverPrereleases
 */
export class VersionSelectionSemverPrereleases extends Message<VersionSelectionSemverPrereleases> {
  /**
   * @generated from field: repeated string identifiers = 1;
   */
  identifiers: string[] = [];

  constructor(data?: PartialMessage<VersionSelectionSemverPrereleases>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName =
    "kubeappsapis.plugins.kapp_controller.packages.v1alpha1.VersionSelectionSemverPrereleases";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "identifiers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): VersionSelectionSemverPrereleases {
    return new VersionSelectionSemverPrereleases().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): VersionSelectionSemverPrereleases {
    return new VersionSelectionSemverPrereleases().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): VersionSelectionSemverPrereleases {
    return new VersionSelectionSemverPrereleases().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | VersionSelectionSemverPrereleases
      | PlainMessage<VersionSelectionSemverPrereleases>
      | undefined,
    b:
      | VersionSelectionSemverPrereleases
      | PlainMessage<VersionSelectionSemverPrereleases>
      | undefined,
  ): boolean {
    return proto3.util.equals(VersionSelectionSemverPrereleases, a, b);
  }
}

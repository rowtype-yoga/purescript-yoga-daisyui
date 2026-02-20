import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dRegex from "../Data.String.Regex/index.js";
import * as Data$dString$dRegex$dFlags from "../Data.String.Regex.Flags/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const writeForeignTitle = dictWriteForeign => ({writeImpl: x => dictWriteForeign.writeImpl(x)});
const writeForeignSchema = dictWriteForeign => ({writeImpl: x => dictWriteForeign.writeImpl(x)});
const writeForeignPattern = dictWriteForeign => ({writeImpl: x => dictWriteForeign.writeImpl(x)});
const writeForeignNullable = dictWriteForeign => ({writeImpl: x => dictWriteForeign.writeImpl(x)});
const writeForeignMinimum = dictWriteForeign => ({writeImpl: x => dictWriteForeign.writeImpl(x)});
const writeForeignMinLength = dictWriteForeign => ({writeImpl: x => dictWriteForeign.writeImpl(x)});
const writeForeignMaximum = dictWriteForeign => ({writeImpl: x => dictWriteForeign.writeImpl(x)});
const writeForeignMaxLength = dictWriteForeign => ({writeImpl: x => dictWriteForeign.writeImpl(x)});
const writeForeignLink = dictWriteForeign => ({writeImpl: x => dictWriteForeign.writeImpl(x)});
const writeForeignFormat = dictWriteForeign => ({writeImpl: x => dictWriteForeign.writeImpl(x)});
const writeForeignExample = dictWriteForeign => ({writeImpl: x => dictWriteForeign.writeImpl(x)});
const writeForeignEnum = dictWriteForeign => ({writeImpl: x => dictWriteForeign.writeImpl(x)});
const writeForeignDescription = dictWriteForeign => ({writeImpl: x => dictWriteForeign.writeImpl(x)});
const writeForeignDeprecated = dictWriteForeign => ({writeImpl: x => dictWriteForeign.writeImpl(x)});
const writeForeignDefault = dictWriteForeign => ({writeImpl: x => dictWriteForeign.writeImpl(x)});
const readForeignTitle = dictReadForeign => ({readImpl: dictReadForeign.readImpl});
const readForeignSchema = dictReadForeign => ({readImpl: dictReadForeign.readImpl});
const readForeignPattern = dictReadForeign => ({readImpl: dictReadForeign.readImpl});
const readForeignNullable = dictReadForeign => ({readImpl: dictReadForeign.readImpl});
const readForeignMinimum = dictReadForeign => ({readImpl: dictReadForeign.readImpl});
const readForeignMinLength = dictReadForeign => ({readImpl: dictReadForeign.readImpl});
const readForeignMaximum = dictReadForeign => ({readImpl: dictReadForeign.readImpl});
const readForeignMaxLength = dictReadForeign => ({readImpl: dictReadForeign.readImpl});
const readForeignLink = dictReadForeign => ({readImpl: dictReadForeign.readImpl});
const readForeignFormat = dictReadForeign => ({readImpl: dictReadForeign.readImpl});
const readForeignExample = dictReadForeign => ({readImpl: dictReadForeign.readImpl});
const readForeignEnum = dictReadForeign => ({readImpl: dictReadForeign.readImpl});
const readForeignDescription = dictReadForeign => ({readImpl: dictReadForeign.readImpl});
const readForeignDeprecated = dictReadForeign => ({readImpl: dictReadForeign.readImpl});
const readForeignDefault = dictReadForeign => ({readImpl: dictReadForeign.readImpl});
const parseParamTitle = dictParseParam => ({parseParam: s => dictParseParam.parseParam(s)});
const parseParamSchema = dictParseParam => ({parseParam: s => dictParseParam.parseParam(s)});
const parseParamPattern = dictIsSymbol => dictParseParam => (
  {
    parseParam: s => {
      const v = Data$dString$dRegex.regex(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(Data$dString$dRegex$dFlags.noFlags);
      if (v.tag === "Left") { return Data$dEither.$Either("Left", "Invalid regex pattern: " + v._1); }
      if (v.tag === "Right") {
        if (Data$dString$dRegex.test(v._1)(s)) { return dictParseParam.parseParam(s); }
        return Data$dEither.$Either("Left", "Value '" + s + "' does not match pattern: " + dictIsSymbol.reflectSymbol(Type$dProxy.Proxy));
      }
      $runtime.fail();
    }
  }
);
const parseParamNullable = dictParseParam => ({parseParam: s => dictParseParam.parseParam(s)});
const parseParamMinimum = dictReflectable => dictParseParam => (
  {
    parseParam: s => {
      const v = dictParseParam.parseParam(s);
      if (v.tag === "Left") { return Data$dEither.$Either("Left", v._1); }
      if (v.tag === "Right") {
        const minVal = dictReflectable.reflectType(Type$dProxy.Proxy);
        if (v._1 < minVal) { return Data$dEither.$Either("Left", "Value " + Data$dShow.showIntImpl(v._1) + " is less than minimum " + Data$dShow.showIntImpl(minVal)); }
        return Data$dEither.$Either("Right", v._1);
      }
      $runtime.fail();
    }
  }
);
const parseParamMinLength = dictReflectable => dictParseParam => (
  {
    parseParam: s => {
      const minLen = dictReflectable.reflectType(Type$dProxy.Proxy);
      if (Data$dString$dCodeUnits.length(s) < minLen) {
        return Data$dEither.$Either(
          "Left",
          "String length " + Data$dShow.showIntImpl(Data$dString$dCodeUnits.length(s)) + " is less than minimum " + Data$dShow.showIntImpl(minLen)
        );
      }
      return dictParseParam.parseParam(s);
    }
  }
);
const parseParamMaximum = dictReflectable => dictParseParam => (
  {
    parseParam: s => {
      const v = dictParseParam.parseParam(s);
      if (v.tag === "Left") { return Data$dEither.$Either("Left", v._1); }
      if (v.tag === "Right") {
        const maxVal = dictReflectable.reflectType(Type$dProxy.Proxy);
        if (v._1 > maxVal) { return Data$dEither.$Either("Left", "Value " + Data$dShow.showIntImpl(v._1) + " exceeds maximum " + Data$dShow.showIntImpl(maxVal)); }
        return Data$dEither.$Either("Right", v._1);
      }
      $runtime.fail();
    }
  }
);
const parseParamMaxLength = dictReflectable => dictParseParam => (
  {
    parseParam: s => {
      const maxLen = dictReflectable.reflectType(Type$dProxy.Proxy);
      if (Data$dString$dCodeUnits.length(s) > maxLen) {
        return Data$dEither.$Either("Left", "String length " + Data$dShow.showIntImpl(Data$dString$dCodeUnits.length(s)) + " exceeds maximum " + Data$dShow.showIntImpl(maxLen));
      }
      return dictParseParam.parseParam(s);
    }
  }
);
const parseParamLink = dictParseParam => ({parseParam: s => dictParseParam.parseParam(s)});
const parseParamFormat = dictParseParam => ({parseParam: s => dictParseParam.parseParam(s)});
const parseParamExample = dictParseParam => ({parseParam: s => dictParseParam.parseParam(s)});
const parseParamEnum = dictParseParam => ({parseParam: s => dictParseParam.parseParam(s)});
const parseParamDescription = dictParseParam => ({parseParam: s => dictParseParam.parseParam(s)});
const parseParamDeprecated = dictParseParam => ({parseParam: s => dictParseParam.parseParam(s)});
const parseParamDefault = dictParseParam => ({parseParam: s => dictParseParam.parseParam(s)});
const headerValueTypeTitle = dictHeaderValueType => ({headerValueType: v => dictHeaderValueType.headerValueType(Type$dProxy.Proxy)});
const headerValueTypeSchema = dictHeaderValueType => ({headerValueType: v => dictHeaderValueType.headerValueType(Type$dProxy.Proxy)});
const headerValueTypePattern = dictHeaderValueType => ({headerValueType: v => dictHeaderValueType.headerValueType(Type$dProxy.Proxy)});
const headerValueTypeNullable = dictHeaderValueType => ({headerValueType: v => dictHeaderValueType.headerValueType(Type$dProxy.Proxy)});
const headerValueTypeMinimum = dictHeaderValueType => ({headerValueType: v => dictHeaderValueType.headerValueType(Type$dProxy.Proxy)});
const headerValueTypeMinLength = dictHeaderValueType => ({headerValueType: v => dictHeaderValueType.headerValueType(Type$dProxy.Proxy)});
const headerValueTypeMaximum = dictHeaderValueType => ({headerValueType: v => dictHeaderValueType.headerValueType(Type$dProxy.Proxy)});
const headerValueTypeMaxLength = dictHeaderValueType => ({headerValueType: v => dictHeaderValueType.headerValueType(Type$dProxy.Proxy)});
const headerValueTypeLink = dictHeaderValueType => ({headerValueType: v => dictHeaderValueType.headerValueType(Type$dProxy.Proxy)});
const headerValueTypeFormat = dictHeaderValueType => ({headerValueType: v => dictHeaderValueType.headerValueType(Type$dProxy.Proxy)});
const headerValueTypeExamples = dictHeaderValueType => ({headerValueType: v => dictHeaderValueType.headerValueType(Type$dProxy.Proxy)});
const headerValueTypeExample = dictHeaderValueType => ({headerValueType: v => dictHeaderValueType.headerValueType(Type$dProxy.Proxy)});
const headerValueTypeEnum = dictHeaderValueType => ({headerValueType: v => dictHeaderValueType.headerValueType(Type$dProxy.Proxy)});
const headerValueTypeDescriptio = dictHeaderValueType => ({headerValueType: v => dictHeaderValueType.headerValueType(Type$dProxy.Proxy)});
const headerValueTypeDeprecated = dictHeaderValueType => ({headerValueType: v => dictHeaderValueType.headerValueType(Type$dProxy.Proxy)});
const headerValueTypeDefault = dictHeaderValueType => ({headerValueType: v => dictHeaderValueType.headerValueType(Type$dProxy.Proxy)});
const headerValueTitle = dictHeaderValue => ({parseHeader: s => dictHeaderValue.parseHeader(s), printHeader: x => dictHeaderValue.printHeader(x)});
const headerValueSchema = dictHeaderValue => ({parseHeader: s => dictHeaderValue.parseHeader(s), printHeader: x => dictHeaderValue.printHeader(x)});
const headerValuePattern = dictIsSymbol => dictHeaderValue => (
  {
    parseHeader: s => {
      const v = Data$dString$dRegex.regex(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(Data$dString$dRegex$dFlags.noFlags);
      if (v.tag === "Left") { return Data$dEither.$Either("Left", "Invalid regex pattern: " + v._1); }
      if (v.tag === "Right") {
        if (Data$dString$dRegex.test(v._1)(s)) { return dictHeaderValue.parseHeader(s); }
        return Data$dEither.$Either("Left", "Value '" + s + "' does not match pattern: " + dictIsSymbol.reflectSymbol(Type$dProxy.Proxy));
      }
      $runtime.fail();
    },
    printHeader: x => dictHeaderValue.printHeader(x)
  }
);
const headerValueNullable = dictHeaderValue => ({parseHeader: s => dictHeaderValue.parseHeader(s), printHeader: x => dictHeaderValue.printHeader(x)});
const headerValueMinimum = dictReflectable => dictHeaderValue => (
  {
    parseHeader: s => {
      const v = dictHeaderValue.parseHeader(s);
      if (v.tag === "Left") { return Data$dEither.$Either("Left", v._1); }
      if (v.tag === "Right") {
        const minVal = dictReflectable.reflectType(Type$dProxy.Proxy);
        if (v._1 < minVal) { return Data$dEither.$Either("Left", "Value " + Data$dShow.showIntImpl(v._1) + " is less than minimum " + Data$dShow.showIntImpl(minVal)); }
        return Data$dEither.$Either("Right", v._1);
      }
      $runtime.fail();
    },
    printHeader: x => dictHeaderValue.printHeader(x)
  }
);
const headerValueMinLength = dictReflectable => dictHeaderValue => (
  {
    parseHeader: s => {
      const minLen = dictReflectable.reflectType(Type$dProxy.Proxy);
      if (Data$dString$dCodeUnits.length(s) < minLen) {
        return Data$dEither.$Either(
          "Left",
          "String length " + Data$dShow.showIntImpl(Data$dString$dCodeUnits.length(s)) + " is less than minimum " + Data$dShow.showIntImpl(minLen)
        );
      }
      return dictHeaderValue.parseHeader(s);
    },
    printHeader: x => dictHeaderValue.printHeader(x)
  }
);
const headerValueMaximum = dictReflectable => dictHeaderValue => (
  {
    parseHeader: s => {
      const v = dictHeaderValue.parseHeader(s);
      if (v.tag === "Left") { return Data$dEither.$Either("Left", v._1); }
      if (v.tag === "Right") {
        const maxVal = dictReflectable.reflectType(Type$dProxy.Proxy);
        if (v._1 > maxVal) { return Data$dEither.$Either("Left", "Value " + Data$dShow.showIntImpl(v._1) + " exceeds maximum " + Data$dShow.showIntImpl(maxVal)); }
        return Data$dEither.$Either("Right", v._1);
      }
      $runtime.fail();
    },
    printHeader: x => dictHeaderValue.printHeader(x)
  }
);
const headerValueMaxLength = dictReflectable => dictHeaderValue => (
  {
    parseHeader: s => {
      const maxLen = dictReflectable.reflectType(Type$dProxy.Proxy);
      if (Data$dString$dCodeUnits.length(s) > maxLen) {
        return Data$dEither.$Either("Left", "String length " + Data$dShow.showIntImpl(Data$dString$dCodeUnits.length(s)) + " exceeds maximum " + Data$dShow.showIntImpl(maxLen));
      }
      return dictHeaderValue.parseHeader(s);
    },
    printHeader: x => dictHeaderValue.printHeader(x)
  }
);
const headerValueLink = dictHeaderValue => ({parseHeader: s => dictHeaderValue.parseHeader(s), printHeader: x => dictHeaderValue.printHeader(x)});
const headerValueFormat = dictHeaderValue => ({parseHeader: s => dictHeaderValue.parseHeader(s), printHeader: x => dictHeaderValue.printHeader(x)});
const headerValueExample = dictHeaderValue => ({parseHeader: s => dictHeaderValue.parseHeader(s), printHeader: x => dictHeaderValue.printHeader(x)});
const headerValueEnum = dictHeaderValue => ({parseHeader: s => dictHeaderValue.parseHeader(s), printHeader: x => dictHeaderValue.printHeader(x)});
const headerValueDescription = dictHeaderValue => ({parseHeader: s => dictHeaderValue.parseHeader(s), printHeader: x => dictHeaderValue.printHeader(x)});
const headerValueDeprecated = dictHeaderValue => ({parseHeader: s => dictHeaderValue.parseHeader(s), printHeader: x => dictHeaderValue.printHeader(x)});
const headerValueDefault = dictHeaderValue => ({parseHeader: s => dictHeaderValue.parseHeader(s), printHeader: x => dictHeaderValue.printHeader(x)});
const hasTitleTitle = dictIsSymbol => ({title: v => Data$dMaybe.$Maybe("Just", dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))});
const hasTitle = {title: v => Data$dMaybe.Nothing};
const hasPatternPattern = dictIsSymbol => ({pattern: v => Data$dMaybe.$Maybe("Just", dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))});
const hasPattern = {pattern: v => Data$dMaybe.Nothing};
const hasOperationMetadata = {
  operationMetadata: v => ({summary: Data$dMaybe.Nothing, description: Data$dMaybe.Nothing, operationId: Data$dMaybe.Nothing, tags: [], deprecated: false})
};
const hasNullableNullable = {nullable: v => true};
const hasNullable = {nullable: v => false};
const hasMinimumMinimum = dictReflectable => ({minimum: v => Data$dMaybe.$Maybe("Just", dictReflectable.reflectType(Type$dProxy.Proxy))});
const hasMinimum = {minimum: v => Data$dMaybe.Nothing};
const hasMinLengthMinLength = dictReflectable => ({minLength: v => Data$dMaybe.$Maybe("Just", dictReflectable.reflectType(Type$dProxy.Proxy))});
const hasMinLength = {minLength: v => Data$dMaybe.Nothing};
const hasMaximumMaximum = dictReflectable => ({maximum: v => Data$dMaybe.$Maybe("Just", dictReflectable.reflectType(Type$dProxy.Proxy))});
const hasMaximum = {maximum: v => Data$dMaybe.Nothing};
const hasMaxLengthMaxLength = dictReflectable => ({maxLength: v => Data$dMaybe.$Maybe("Just", dictReflectable.reflectType(Type$dProxy.Proxy))});
const hasMaxLength = {maxLength: v => Data$dMaybe.Nothing};
const hasLinks = {links: v => []};
const hasFormatFormat = dictIsSymbol => ({format: v => Data$dMaybe.$Maybe("Just", dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))});
const hasFormat = {format: v => Data$dMaybe.Nothing};
const hasExamplesExamples = {examples: v => Data$dMaybe.$Maybe("Just", Foreign$dObject.empty)};
const hasExamples = {examples: v => Data$dMaybe.Nothing};
const hasExampleExample = dictIsSymbol => ({example: v => Data$dMaybe.$Maybe("Just", dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))});
const hasExample = {example: v => Data$dMaybe.Nothing};
const hasEnum = {enum: v => Data$dMaybe.Nothing};
const hasDescriptionDescription = dictIsSymbol => ({description: v => Data$dMaybe.$Maybe("Just", dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))});
const hasDescription = {description: v => Data$dMaybe.Nothing};
const hasDeprecatedDeprecated = {deprecated: v => true};
const hasDeprecated = {deprecated: v => false};
const hasDefaultDefault = dictIsSymbol => ({default: v => Data$dMaybe.$Maybe("Just", dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))});
const hasDefault = {default: v => Data$dMaybe.Nothing};
const genericEnumValuesConstruc = dictIsSymbol => ({genericEnumValues: v => [dictIsSymbol.reflectSymbol(Type$dProxy.Proxy)]});
const title = dict => dict.title;
const hasTitleDefault = dictHasTitle => ({title: v => dictHasTitle.title(Type$dProxy.Proxy)});
const hasTitleDeprecated = dictHasTitle => ({title: v => dictHasTitle.title(Type$dProxy.Proxy)});
const hasTitleDescription = dictHasTitle => ({title: v => dictHasTitle.title(Type$dProxy.Proxy)});
const hasTitleEnum = dictHasTitle => ({title: v => dictHasTitle.title(Type$dProxy.Proxy)});
const hasTitleExample = dictHasTitle => ({title: v => dictHasTitle.title(Type$dProxy.Proxy)});
const hasTitleFormat = dictHasTitle => ({title: v => dictHasTitle.title(Type$dProxy.Proxy)});
const hasTitleMaxLength = dictHasTitle => ({title: v => dictHasTitle.title(Type$dProxy.Proxy)});
const hasTitleMaximum = dictHasTitle => ({title: v => dictHasTitle.title(Type$dProxy.Proxy)});
const hasTitleMinLength = dictHasTitle => ({title: v => dictHasTitle.title(Type$dProxy.Proxy)});
const hasTitleMinimum = dictHasTitle => ({title: v => dictHasTitle.title(Type$dProxy.Proxy)});
const hasTitleNullable = dictHasTitle => ({title: v => dictHasTitle.title(Type$dProxy.Proxy)});
const hasTitlePattern = dictHasTitle => ({title: v => dictHasTitle.title(Type$dProxy.Proxy)});
const hasTitleSchema = dictHasTitle => ({title: v => dictHasTitle.title(Type$dProxy.Proxy)});
const pattern = dict => dict.pattern;
const hasPatternDefault = dictHasPattern => ({pattern: v => dictHasPattern.pattern(Type$dProxy.Proxy)});
const hasPatternDeprecated = dictHasPattern => ({pattern: v => dictHasPattern.pattern(Type$dProxy.Proxy)});
const hasPatternDescription = dictHasPattern => ({pattern: v => dictHasPattern.pattern(Type$dProxy.Proxy)});
const hasPatternEnum = dictHasPattern => ({pattern: v => dictHasPattern.pattern(Type$dProxy.Proxy)});
const hasPatternExample = dictHasPattern => ({pattern: v => dictHasPattern.pattern(Type$dProxy.Proxy)});
const hasPatternFormat = dictHasPattern => ({pattern: v => dictHasPattern.pattern(Type$dProxy.Proxy)});
const hasPatternMaxLength = dictHasPattern => ({pattern: v => dictHasPattern.pattern(Type$dProxy.Proxy)});
const hasPatternMaximum = dictHasPattern => ({pattern: v => dictHasPattern.pattern(Type$dProxy.Proxy)});
const hasPatternMinLength = dictHasPattern => ({pattern: v => dictHasPattern.pattern(Type$dProxy.Proxy)});
const hasPatternMinimum = dictHasPattern => ({pattern: v => dictHasPattern.pattern(Type$dProxy.Proxy)});
const hasPatternNullable = dictHasPattern => ({pattern: v => dictHasPattern.pattern(Type$dProxy.Proxy)});
const hasPatternSchema = dictHasPattern => ({pattern: v => dictHasPattern.pattern(Type$dProxy.Proxy)});
const hasPatternTitle = dictHasPattern => ({pattern: v => dictHasPattern.pattern(Type$dProxy.Proxy)});
const operationMetadata = dict => dict.operationMetadata;
const nullable = dict => dict.nullable;
const hasNullableDefault = dictHasNullable => ({nullable: v => dictHasNullable.nullable(Type$dProxy.Proxy)});
const hasNullableDeprecated = dictHasNullable => ({nullable: v => dictHasNullable.nullable(Type$dProxy.Proxy)});
const hasNullableDescription = dictHasNullable => ({nullable: v => dictHasNullable.nullable(Type$dProxy.Proxy)});
const hasNullableEnum = dictHasNullable => ({nullable: v => dictHasNullable.nullable(Type$dProxy.Proxy)});
const hasNullableExample = dictHasNullable => ({nullable: v => dictHasNullable.nullable(Type$dProxy.Proxy)});
const hasNullableFormat = dictHasNullable => ({nullable: v => dictHasNullable.nullable(Type$dProxy.Proxy)});
const hasNullableMaxLength = dictHasNullable => ({nullable: v => dictHasNullable.nullable(Type$dProxy.Proxy)});
const hasNullableMaximum = dictHasNullable => ({nullable: v => dictHasNullable.nullable(Type$dProxy.Proxy)});
const hasNullableMinLength = dictHasNullable => ({nullable: v => dictHasNullable.nullable(Type$dProxy.Proxy)});
const hasNullableMinimum = dictHasNullable => ({nullable: v => dictHasNullable.nullable(Type$dProxy.Proxy)});
const hasNullablePattern = dictHasNullable => ({nullable: v => dictHasNullable.nullable(Type$dProxy.Proxy)});
const hasNullableSchema = dictHasNullable => ({nullable: v => dictHasNullable.nullable(Type$dProxy.Proxy)});
const hasNullableTitle = dictHasNullable => ({nullable: v => dictHasNullable.nullable(Type$dProxy.Proxy)});
const minimum = dict => dict.minimum;
const hasMinimumDefault = dictHasMinimum => ({minimum: v => dictHasMinimum.minimum(Type$dProxy.Proxy)});
const hasMinimumDeprecated = dictHasMinimum => ({minimum: v => dictHasMinimum.minimum(Type$dProxy.Proxy)});
const hasMinimumDescription = dictHasMinimum => ({minimum: v => dictHasMinimum.minimum(Type$dProxy.Proxy)});
const hasMinimumEnum = dictHasMinimum => ({minimum: v => dictHasMinimum.minimum(Type$dProxy.Proxy)});
const hasMinimumExample = dictHasMinimum => ({minimum: v => dictHasMinimum.minimum(Type$dProxy.Proxy)});
const hasMinimumFormat = dictHasMinimum => ({minimum: v => dictHasMinimum.minimum(Type$dProxy.Proxy)});
const hasMinimumMaxLength = dictHasMinimum => ({minimum: v => dictHasMinimum.minimum(Type$dProxy.Proxy)});
const hasMinimumMaximum = dictHasMinimum => ({minimum: v => dictHasMinimum.minimum(Type$dProxy.Proxy)});
const hasMinimumMinLength = dictHasMinimum => ({minimum: v => dictHasMinimum.minimum(Type$dProxy.Proxy)});
const hasMinimumNullable = dictHasMinimum => ({minimum: v => dictHasMinimum.minimum(Type$dProxy.Proxy)});
const hasMinimumPattern = dictHasMinimum => ({minimum: v => dictHasMinimum.minimum(Type$dProxy.Proxy)});
const hasMinimumSchema = dictHasMinimum => ({minimum: v => dictHasMinimum.minimum(Type$dProxy.Proxy)});
const hasMinimumTitle = dictHasMinimum => ({minimum: v => dictHasMinimum.minimum(Type$dProxy.Proxy)});
const minLength = dict => dict.minLength;
const hasMinLengthDefault = dictHasMinLength => ({minLength: v => dictHasMinLength.minLength(Type$dProxy.Proxy)});
const hasMinLengthDeprecated = dictHasMinLength => ({minLength: v => dictHasMinLength.minLength(Type$dProxy.Proxy)});
const hasMinLengthDescription = dictHasMinLength => ({minLength: v => dictHasMinLength.minLength(Type$dProxy.Proxy)});
const hasMinLengthEnum = dictHasMinLength => ({minLength: v => dictHasMinLength.minLength(Type$dProxy.Proxy)});
const hasMinLengthExample = dictHasMinLength => ({minLength: v => dictHasMinLength.minLength(Type$dProxy.Proxy)});
const hasMinLengthFormat = dictHasMinLength => ({minLength: v => dictHasMinLength.minLength(Type$dProxy.Proxy)});
const hasMinLengthMaxLength = dictHasMinLength => ({minLength: v => dictHasMinLength.minLength(Type$dProxy.Proxy)});
const hasMinLengthMaximum = dictHasMinLength => ({minLength: v => dictHasMinLength.minLength(Type$dProxy.Proxy)});
const hasMinLengthMinimum = dictHasMinLength => ({minLength: v => dictHasMinLength.minLength(Type$dProxy.Proxy)});
const hasMinLengthNullable = dictHasMinLength => ({minLength: v => dictHasMinLength.minLength(Type$dProxy.Proxy)});
const hasMinLengthPattern = dictHasMinLength => ({minLength: v => dictHasMinLength.minLength(Type$dProxy.Proxy)});
const hasMinLengthSchema = dictHasMinLength => ({minLength: v => dictHasMinLength.minLength(Type$dProxy.Proxy)});
const hasMinLengthTitle = dictHasMinLength => ({minLength: v => dictHasMinLength.minLength(Type$dProxy.Proxy)});
const maximum = dict => dict.maximum;
const hasMaximumDefault = dictHasMaximum => ({maximum: v => dictHasMaximum.maximum(Type$dProxy.Proxy)});
const hasMaximumDeprecated = dictHasMaximum => ({maximum: v => dictHasMaximum.maximum(Type$dProxy.Proxy)});
const hasMaximumDescription = dictHasMaximum => ({maximum: v => dictHasMaximum.maximum(Type$dProxy.Proxy)});
const hasMaximumEnum = dictHasMaximum => ({maximum: v => dictHasMaximum.maximum(Type$dProxy.Proxy)});
const hasMaximumExample = dictHasMaximum => ({maximum: v => dictHasMaximum.maximum(Type$dProxy.Proxy)});
const hasMaximumFormat = dictHasMaximum => ({maximum: v => dictHasMaximum.maximum(Type$dProxy.Proxy)});
const hasMaximumMaxLength = dictHasMaximum => ({maximum: v => dictHasMaximum.maximum(Type$dProxy.Proxy)});
const hasMaximumMinLength = dictHasMaximum => ({maximum: v => dictHasMaximum.maximum(Type$dProxy.Proxy)});
const hasMaximumMinimum = dictHasMaximum => ({maximum: v => dictHasMaximum.maximum(Type$dProxy.Proxy)});
const hasMaximumNullable = dictHasMaximum => ({maximum: v => dictHasMaximum.maximum(Type$dProxy.Proxy)});
const hasMaximumPattern = dictHasMaximum => ({maximum: v => dictHasMaximum.maximum(Type$dProxy.Proxy)});
const hasMaximumSchema = dictHasMaximum => ({maximum: v => dictHasMaximum.maximum(Type$dProxy.Proxy)});
const hasMaximumTitle = dictHasMaximum => ({maximum: v => dictHasMaximum.maximum(Type$dProxy.Proxy)});
const maxLength = dict => dict.maxLength;
const hasMaxLengthDefault = dictHasMaxLength => ({maxLength: v => dictHasMaxLength.maxLength(Type$dProxy.Proxy)});
const hasMaxLengthDeprecated = dictHasMaxLength => ({maxLength: v => dictHasMaxLength.maxLength(Type$dProxy.Proxy)});
const hasMaxLengthDescription = dictHasMaxLength => ({maxLength: v => dictHasMaxLength.maxLength(Type$dProxy.Proxy)});
const hasMaxLengthEnum = dictHasMaxLength => ({maxLength: v => dictHasMaxLength.maxLength(Type$dProxy.Proxy)});
const hasMaxLengthExample = dictHasMaxLength => ({maxLength: v => dictHasMaxLength.maxLength(Type$dProxy.Proxy)});
const hasMaxLengthFormat = dictHasMaxLength => ({maxLength: v => dictHasMaxLength.maxLength(Type$dProxy.Proxy)});
const hasMaxLengthMaximum = dictHasMaxLength => ({maxLength: v => dictHasMaxLength.maxLength(Type$dProxy.Proxy)});
const hasMaxLengthMinLength = dictHasMaxLength => ({maxLength: v => dictHasMaxLength.maxLength(Type$dProxy.Proxy)});
const hasMaxLengthMinimum = dictHasMaxLength => ({maxLength: v => dictHasMaxLength.maxLength(Type$dProxy.Proxy)});
const hasMaxLengthNullable = dictHasMaxLength => ({maxLength: v => dictHasMaxLength.maxLength(Type$dProxy.Proxy)});
const hasMaxLengthPattern = dictHasMaxLength => ({maxLength: v => dictHasMaxLength.maxLength(Type$dProxy.Proxy)});
const hasMaxLengthSchema = dictHasMaxLength => ({maxLength: v => dictHasMaxLength.maxLength(Type$dProxy.Proxy)});
const hasMaxLengthTitle = dictHasMaxLength => ({maxLength: v => dictHasMaxLength.maxLength(Type$dProxy.Proxy)});
const links = dict => dict.links;
const hasLinksDefault = dictHasLinks => ({links: v => dictHasLinks.links(Type$dProxy.Proxy)});
const hasLinksDeprecated = dictHasLinks => ({links: v => dictHasLinks.links(Type$dProxy.Proxy)});
const hasLinksDescription = dictHasLinks => ({links: v => dictHasLinks.links(Type$dProxy.Proxy)});
const hasLinksEnum = dictHasLinks => ({links: v => dictHasLinks.links(Type$dProxy.Proxy)});
const hasLinksExample = dictHasLinks => ({links: v => dictHasLinks.links(Type$dProxy.Proxy)});
const hasLinksExamples = dictHasLinks => ({links: v => dictHasLinks.links(Type$dProxy.Proxy)});
const hasLinksFormat = dictHasLinks => ({links: v => dictHasLinks.links(Type$dProxy.Proxy)});
const hasLinksLink = dictIsSymbol => dictIsSymbol1 => () => dictRenderLinkParametersRL => dictHasLinks => (
  {
    links: v => [
      {
        name: dictIsSymbol.reflectSymbol(Type$dProxy.Proxy),
        operationId: dictIsSymbol1.reflectSymbol(Type$dProxy.Proxy),
        parameters: dictRenderLinkParametersRL.renderLinkParametersRL(Type$dProxy.Proxy)
      },
      ...dictHasLinks.links(Type$dProxy.Proxy)
    ]
  }
);
const hasLinksMaxLength = dictHasLinks => ({links: v => dictHasLinks.links(Type$dProxy.Proxy)});
const hasLinksMaximum = dictHasLinks => ({links: v => dictHasLinks.links(Type$dProxy.Proxy)});
const hasLinksMinLength = dictHasLinks => ({links: v => dictHasLinks.links(Type$dProxy.Proxy)});
const hasLinksMinimum = dictHasLinks => ({links: v => dictHasLinks.links(Type$dProxy.Proxy)});
const hasLinksNullable = dictHasLinks => ({links: v => dictHasLinks.links(Type$dProxy.Proxy)});
const hasLinksPattern = dictHasLinks => ({links: v => dictHasLinks.links(Type$dProxy.Proxy)});
const hasLinksSchema = dictHasLinks => ({links: v => dictHasLinks.links(Type$dProxy.Proxy)});
const hasLinksTitle = dictHasLinks => ({links: v => dictHasLinks.links(Type$dProxy.Proxy)});
const genericEnumValues = dict => dict.genericEnumValues;
const genericEnumValuesSum = dictGenericEnumValues => dictGenericEnumValues1 => (
  {genericEnumValues: v => [...dictGenericEnumValues.genericEnumValues(Type$dProxy.Proxy), ...dictGenericEnumValues1.genericEnumValues(Type$dProxy.Proxy)]}
);
const hasEnumEnum = dictGeneric => dictGenericEnumValues => ({enum: v => Data$dMaybe.$Maybe("Just", dictGenericEnumValues.genericEnumValues(Type$dProxy.Proxy))});
const format = dict => dict.format;
const hasFormatDefault = dictHasFormat => ({format: v => dictHasFormat.format(Type$dProxy.Proxy)});
const hasFormatDeprecated = dictHasFormat => ({format: v => dictHasFormat.format(Type$dProxy.Proxy)});
const hasFormatDescription = dictHasFormat => ({format: v => dictHasFormat.format(Type$dProxy.Proxy)});
const hasFormatEnum = dictHasFormat => ({format: v => dictHasFormat.format(Type$dProxy.Proxy)});
const hasFormatExample = dictHasFormat => ({format: v => dictHasFormat.format(Type$dProxy.Proxy)});
const hasFormatMaxLength = dictHasFormat => ({format: v => dictHasFormat.format(Type$dProxy.Proxy)});
const hasFormatMaximum = dictHasFormat => ({format: v => dictHasFormat.format(Type$dProxy.Proxy)});
const hasFormatMinLength = dictHasFormat => ({format: v => dictHasFormat.format(Type$dProxy.Proxy)});
const hasFormatMinimum = dictHasFormat => ({format: v => dictHasFormat.format(Type$dProxy.Proxy)});
const hasFormatNullable = dictHasFormat => ({format: v => dictHasFormat.format(Type$dProxy.Proxy)});
const hasFormatPattern = dictHasFormat => ({format: v => dictHasFormat.format(Type$dProxy.Proxy)});
const hasFormatSchema = dictHasFormat => ({format: v => dictHasFormat.format(Type$dProxy.Proxy)});
const hasFormatTitle = dictHasFormat => ({format: v => dictHasFormat.format(Type$dProxy.Proxy)});
const examples = dict => dict.examples;
const hasExamplesDefault = dictHasExamples => ({examples: v => dictHasExamples.examples(Type$dProxy.Proxy)});
const hasExamplesDeprecated = dictHasExamples => ({examples: v => dictHasExamples.examples(Type$dProxy.Proxy)});
const hasExamplesDescription = dictHasExamples => ({examples: v => dictHasExamples.examples(Type$dProxy.Proxy)});
const hasExamplesEnum = dictHasExamples => ({examples: v => dictHasExamples.examples(Type$dProxy.Proxy)});
const hasExamplesExample = dictHasExamples => ({examples: v => dictHasExamples.examples(Type$dProxy.Proxy)});
const hasExamplesFormat = dictHasExamples => ({examples: v => dictHasExamples.examples(Type$dProxy.Proxy)});
const hasExamplesMaxLength = dictHasExamples => ({examples: v => dictHasExamples.examples(Type$dProxy.Proxy)});
const hasExamplesMaximum = dictHasExamples => ({examples: v => dictHasExamples.examples(Type$dProxy.Proxy)});
const hasExamplesMinLength = dictHasExamples => ({examples: v => dictHasExamples.examples(Type$dProxy.Proxy)});
const hasExamplesMinimum = dictHasExamples => ({examples: v => dictHasExamples.examples(Type$dProxy.Proxy)});
const hasExamplesNullable = dictHasExamples => ({examples: v => dictHasExamples.examples(Type$dProxy.Proxy)});
const hasExamplesPattern = dictHasExamples => ({examples: v => dictHasExamples.examples(Type$dProxy.Proxy)});
const hasExamplesSchema = dictHasExamples => ({examples: v => dictHasExamples.examples(Type$dProxy.Proxy)});
const hasExamplesTitle = dictHasExamples => ({examples: v => dictHasExamples.examples(Type$dProxy.Proxy)});
const example = dict => dict.example;
const hasExampleDefault = dictHasExample => ({example: v => dictHasExample.example(Type$dProxy.Proxy)});
const hasExampleDeprecated = dictHasExample => ({example: v => dictHasExample.example(Type$dProxy.Proxy)});
const hasExampleDescription = dictHasExample => ({example: v => dictHasExample.example(Type$dProxy.Proxy)});
const hasExampleEnum = dictHasExample => ({example: v => dictHasExample.example(Type$dProxy.Proxy)});
const hasExampleExamples = dictHasExample => ({example: v => dictHasExample.example(Type$dProxy.Proxy)});
const hasExampleFormat = dictHasExample => ({example: v => dictHasExample.example(Type$dProxy.Proxy)});
const hasExampleMaxLength = dictHasExample => ({example: v => dictHasExample.example(Type$dProxy.Proxy)});
const hasExampleMaximum = dictHasExample => ({example: v => dictHasExample.example(Type$dProxy.Proxy)});
const hasExampleMinLength = dictHasExample => ({example: v => dictHasExample.example(Type$dProxy.Proxy)});
const hasExampleMinimum = dictHasExample => ({example: v => dictHasExample.example(Type$dProxy.Proxy)});
const hasExampleNullable = dictHasExample => ({example: v => dictHasExample.example(Type$dProxy.Proxy)});
const hasExamplePattern = dictHasExample => ({example: v => dictHasExample.example(Type$dProxy.Proxy)});
const hasExampleSchema = dictHasExample => ({example: v => dictHasExample.example(Type$dProxy.Proxy)});
const hasExampleTitle = dictHasExample => ({example: v => dictHasExample.example(Type$dProxy.Proxy)});
const $$enum = dict => dict.enum;
const hasEnumDefault = dictHasEnum => ({enum: v => dictHasEnum.enum(Type$dProxy.Proxy)});
const hasEnumDeprecated = dictHasEnum => ({enum: v => dictHasEnum.enum(Type$dProxy.Proxy)});
const hasEnumDescription = dictHasEnum => ({enum: v => dictHasEnum.enum(Type$dProxy.Proxy)});
const hasEnumExample = dictHasEnum => ({enum: v => dictHasEnum.enum(Type$dProxy.Proxy)});
const hasEnumFormat = dictHasEnum => ({enum: v => dictHasEnum.enum(Type$dProxy.Proxy)});
const hasEnumMaxLength = dictHasEnum => ({enum: v => dictHasEnum.enum(Type$dProxy.Proxy)});
const hasEnumMaximum = dictHasEnum => ({enum: v => dictHasEnum.enum(Type$dProxy.Proxy)});
const hasEnumMinLength = dictHasEnum => ({enum: v => dictHasEnum.enum(Type$dProxy.Proxy)});
const hasEnumMinimum = dictHasEnum => ({enum: v => dictHasEnum.enum(Type$dProxy.Proxy)});
const hasEnumNullable = dictHasEnum => ({enum: v => dictHasEnum.enum(Type$dProxy.Proxy)});
const hasEnumPattern = dictHasEnum => ({enum: v => dictHasEnum.enum(Type$dProxy.Proxy)});
const hasEnumSchema = dictHasEnum => ({enum: v => dictHasEnum.enum(Type$dProxy.Proxy)});
const hasEnumTitle = dictHasEnum => ({enum: v => dictHasEnum.enum(Type$dProxy.Proxy)});
const description = dict => dict.description;
const hasDescriptionDefault = dictHasDescription => ({description: v => dictHasDescription.description(Type$dProxy.Proxy)});
const hasDescriptionDeprecated = dictHasDescription => ({description: v => dictHasDescription.description(Type$dProxy.Proxy)});
const hasDescriptionEnum = dictHasDescription => ({description: v => dictHasDescription.description(Type$dProxy.Proxy)});
const hasDescriptionExample = dictHasDescription => ({description: v => dictHasDescription.description(Type$dProxy.Proxy)});
const hasDescriptionFormat = dictHasDescription => ({description: v => dictHasDescription.description(Type$dProxy.Proxy)});
const hasDescriptionMaxLength = dictHasDescription => ({description: v => dictHasDescription.description(Type$dProxy.Proxy)});
const hasDescriptionMaximum = dictHasDescription => ({description: v => dictHasDescription.description(Type$dProxy.Proxy)});
const hasDescriptionMinLength = dictHasDescription => ({description: v => dictHasDescription.description(Type$dProxy.Proxy)});
const hasDescriptionMinimum = dictHasDescription => ({description: v => dictHasDescription.description(Type$dProxy.Proxy)});
const hasDescriptionNullable = dictHasDescription => ({description: v => dictHasDescription.description(Type$dProxy.Proxy)});
const hasDescriptionPattern = dictHasDescription => ({description: v => dictHasDescription.description(Type$dProxy.Proxy)});
const hasDescriptionSchema = dictHasDescription => ({description: v => dictHasDescription.description(Type$dProxy.Proxy)});
const hasDescriptionTitle = dictHasDescription => ({description: v => dictHasDescription.description(Type$dProxy.Proxy)});
const deprecated = dict => dict.deprecated;
const hasDeprecatedDefault = dictHasDeprecated => ({deprecated: v => dictHasDeprecated.deprecated(Type$dProxy.Proxy)});
const hasDeprecatedDescription = dictHasDeprecated => ({deprecated: v => dictHasDeprecated.deprecated(Type$dProxy.Proxy)});
const hasDeprecatedEnum = dictHasDeprecated => ({deprecated: v => dictHasDeprecated.deprecated(Type$dProxy.Proxy)});
const hasDeprecatedExample = dictHasDeprecated => ({deprecated: v => dictHasDeprecated.deprecated(Type$dProxy.Proxy)});
const hasDeprecatedFormat = dictHasDeprecated => ({deprecated: v => dictHasDeprecated.deprecated(Type$dProxy.Proxy)});
const hasDeprecatedMaxLength = dictHasDeprecated => ({deprecated: v => dictHasDeprecated.deprecated(Type$dProxy.Proxy)});
const hasDeprecatedMaximum = dictHasDeprecated => ({deprecated: v => dictHasDeprecated.deprecated(Type$dProxy.Proxy)});
const hasDeprecatedMinLength = dictHasDeprecated => ({deprecated: v => dictHasDeprecated.deprecated(Type$dProxy.Proxy)});
const hasDeprecatedMinimum = dictHasDeprecated => ({deprecated: v => dictHasDeprecated.deprecated(Type$dProxy.Proxy)});
const hasDeprecatedNullable = dictHasDeprecated => ({deprecated: v => dictHasDeprecated.deprecated(Type$dProxy.Proxy)});
const hasDeprecatedPattern = dictHasDeprecated => ({deprecated: v => dictHasDeprecated.deprecated(Type$dProxy.Proxy)});
const hasDeprecatedSchema = dictHasDeprecated => ({deprecated: v => dictHasDeprecated.deprecated(Type$dProxy.Proxy)});
const hasDeprecatedTitle = dictHasDeprecated => ({deprecated: v => dictHasDeprecated.deprecated(Type$dProxy.Proxy)});
const $$default = dict => dict.default;
const hasDefaultDeprecated = dictHasDefault => ({default: v => dictHasDefault.default(Type$dProxy.Proxy)});
const hasDefaultDescription = dictHasDefault => ({default: v => dictHasDefault.default(Type$dProxy.Proxy)});
const hasDefaultEnum = dictHasDefault => ({default: v => dictHasDefault.default(Type$dProxy.Proxy)});
const hasDefaultExample = dictHasDefault => ({default: v => dictHasDefault.default(Type$dProxy.Proxy)});
const hasDefaultFormat = dictHasDefault => ({default: v => dictHasDefault.default(Type$dProxy.Proxy)});
const hasDefaultMaxLength = dictHasDefault => ({default: v => dictHasDefault.default(Type$dProxy.Proxy)});
const hasDefaultMaximum = dictHasDefault => ({default: v => dictHasDefault.default(Type$dProxy.Proxy)});
const hasDefaultMinLength = dictHasDefault => ({default: v => dictHasDefault.default(Type$dProxy.Proxy)});
const hasDefaultMinimum = dictHasDefault => ({default: v => dictHasDefault.default(Type$dProxy.Proxy)});
const hasDefaultNullable = dictHasDefault => ({default: v => dictHasDefault.default(Type$dProxy.Proxy)});
const hasDefaultPattern = dictHasDefault => ({default: v => dictHasDefault.default(Type$dProxy.Proxy)});
const hasDefaultSchema = dictHasDefault => ({default: v => dictHasDefault.default(Type$dProxy.Proxy)});
const hasDefaultTitle = dictHasDefault => ({default: v => dictHasDefault.default(Type$dProxy.Proxy)});
export {
  $$default as default,
  deprecated,
  description,
  $$enum as enum,
  example,
  examples,
  format,
  genericEnumValues,
  genericEnumValuesConstruc,
  genericEnumValuesSum,
  hasDefault,
  hasDefaultDefault,
  hasDefaultDeprecated,
  hasDefaultDescription,
  hasDefaultEnum,
  hasDefaultExample,
  hasDefaultFormat,
  hasDefaultMaxLength,
  hasDefaultMaximum,
  hasDefaultMinLength,
  hasDefaultMinimum,
  hasDefaultNullable,
  hasDefaultPattern,
  hasDefaultSchema,
  hasDefaultTitle,
  hasDeprecated,
  hasDeprecatedDefault,
  hasDeprecatedDeprecated,
  hasDeprecatedDescription,
  hasDeprecatedEnum,
  hasDeprecatedExample,
  hasDeprecatedFormat,
  hasDeprecatedMaxLength,
  hasDeprecatedMaximum,
  hasDeprecatedMinLength,
  hasDeprecatedMinimum,
  hasDeprecatedNullable,
  hasDeprecatedPattern,
  hasDeprecatedSchema,
  hasDeprecatedTitle,
  hasDescription,
  hasDescriptionDefault,
  hasDescriptionDeprecated,
  hasDescriptionDescription,
  hasDescriptionEnum,
  hasDescriptionExample,
  hasDescriptionFormat,
  hasDescriptionMaxLength,
  hasDescriptionMaximum,
  hasDescriptionMinLength,
  hasDescriptionMinimum,
  hasDescriptionNullable,
  hasDescriptionPattern,
  hasDescriptionSchema,
  hasDescriptionTitle,
  hasEnum,
  hasEnumDefault,
  hasEnumDeprecated,
  hasEnumDescription,
  hasEnumEnum,
  hasEnumExample,
  hasEnumFormat,
  hasEnumMaxLength,
  hasEnumMaximum,
  hasEnumMinLength,
  hasEnumMinimum,
  hasEnumNullable,
  hasEnumPattern,
  hasEnumSchema,
  hasEnumTitle,
  hasExample,
  hasExampleDefault,
  hasExampleDeprecated,
  hasExampleDescription,
  hasExampleEnum,
  hasExampleExample,
  hasExampleExamples,
  hasExampleFormat,
  hasExampleMaxLength,
  hasExampleMaximum,
  hasExampleMinLength,
  hasExampleMinimum,
  hasExampleNullable,
  hasExamplePattern,
  hasExampleSchema,
  hasExampleTitle,
  hasExamples,
  hasExamplesDefault,
  hasExamplesDeprecated,
  hasExamplesDescription,
  hasExamplesEnum,
  hasExamplesExample,
  hasExamplesExamples,
  hasExamplesFormat,
  hasExamplesMaxLength,
  hasExamplesMaximum,
  hasExamplesMinLength,
  hasExamplesMinimum,
  hasExamplesNullable,
  hasExamplesPattern,
  hasExamplesSchema,
  hasExamplesTitle,
  hasFormat,
  hasFormatDefault,
  hasFormatDeprecated,
  hasFormatDescription,
  hasFormatEnum,
  hasFormatExample,
  hasFormatFormat,
  hasFormatMaxLength,
  hasFormatMaximum,
  hasFormatMinLength,
  hasFormatMinimum,
  hasFormatNullable,
  hasFormatPattern,
  hasFormatSchema,
  hasFormatTitle,
  hasLinks,
  hasLinksDefault,
  hasLinksDeprecated,
  hasLinksDescription,
  hasLinksEnum,
  hasLinksExample,
  hasLinksExamples,
  hasLinksFormat,
  hasLinksLink,
  hasLinksMaxLength,
  hasLinksMaximum,
  hasLinksMinLength,
  hasLinksMinimum,
  hasLinksNullable,
  hasLinksPattern,
  hasLinksSchema,
  hasLinksTitle,
  hasMaxLength,
  hasMaxLengthDefault,
  hasMaxLengthDeprecated,
  hasMaxLengthDescription,
  hasMaxLengthEnum,
  hasMaxLengthExample,
  hasMaxLengthFormat,
  hasMaxLengthMaxLength,
  hasMaxLengthMaximum,
  hasMaxLengthMinLength,
  hasMaxLengthMinimum,
  hasMaxLengthNullable,
  hasMaxLengthPattern,
  hasMaxLengthSchema,
  hasMaxLengthTitle,
  hasMaximum,
  hasMaximumDefault,
  hasMaximumDeprecated,
  hasMaximumDescription,
  hasMaximumEnum,
  hasMaximumExample,
  hasMaximumFormat,
  hasMaximumMaxLength,
  hasMaximumMaximum,
  hasMaximumMinLength,
  hasMaximumMinimum,
  hasMaximumNullable,
  hasMaximumPattern,
  hasMaximumSchema,
  hasMaximumTitle,
  hasMinLength,
  hasMinLengthDefault,
  hasMinLengthDeprecated,
  hasMinLengthDescription,
  hasMinLengthEnum,
  hasMinLengthExample,
  hasMinLengthFormat,
  hasMinLengthMaxLength,
  hasMinLengthMaximum,
  hasMinLengthMinLength,
  hasMinLengthMinimum,
  hasMinLengthNullable,
  hasMinLengthPattern,
  hasMinLengthSchema,
  hasMinLengthTitle,
  hasMinimum,
  hasMinimumDefault,
  hasMinimumDeprecated,
  hasMinimumDescription,
  hasMinimumEnum,
  hasMinimumExample,
  hasMinimumFormat,
  hasMinimumMaxLength,
  hasMinimumMaximum,
  hasMinimumMinLength,
  hasMinimumMinimum,
  hasMinimumNullable,
  hasMinimumPattern,
  hasMinimumSchema,
  hasMinimumTitle,
  hasNullable,
  hasNullableDefault,
  hasNullableDeprecated,
  hasNullableDescription,
  hasNullableEnum,
  hasNullableExample,
  hasNullableFormat,
  hasNullableMaxLength,
  hasNullableMaximum,
  hasNullableMinLength,
  hasNullableMinimum,
  hasNullableNullable,
  hasNullablePattern,
  hasNullableSchema,
  hasNullableTitle,
  hasOperationMetadata,
  hasPattern,
  hasPatternDefault,
  hasPatternDeprecated,
  hasPatternDescription,
  hasPatternEnum,
  hasPatternExample,
  hasPatternFormat,
  hasPatternMaxLength,
  hasPatternMaximum,
  hasPatternMinLength,
  hasPatternMinimum,
  hasPatternNullable,
  hasPatternPattern,
  hasPatternSchema,
  hasPatternTitle,
  hasTitle,
  hasTitleDefault,
  hasTitleDeprecated,
  hasTitleDescription,
  hasTitleEnum,
  hasTitleExample,
  hasTitleFormat,
  hasTitleMaxLength,
  hasTitleMaximum,
  hasTitleMinLength,
  hasTitleMinimum,
  hasTitleNullable,
  hasTitlePattern,
  hasTitleSchema,
  hasTitleTitle,
  headerValueDefault,
  headerValueDeprecated,
  headerValueDescription,
  headerValueEnum,
  headerValueExample,
  headerValueFormat,
  headerValueLink,
  headerValueMaxLength,
  headerValueMaximum,
  headerValueMinLength,
  headerValueMinimum,
  headerValueNullable,
  headerValuePattern,
  headerValueSchema,
  headerValueTitle,
  headerValueTypeDefault,
  headerValueTypeDeprecated,
  headerValueTypeDescriptio,
  headerValueTypeEnum,
  headerValueTypeExample,
  headerValueTypeExamples,
  headerValueTypeFormat,
  headerValueTypeLink,
  headerValueTypeMaxLength,
  headerValueTypeMaximum,
  headerValueTypeMinLength,
  headerValueTypeMinimum,
  headerValueTypeNullable,
  headerValueTypePattern,
  headerValueTypeSchema,
  headerValueTypeTitle,
  links,
  maxLength,
  maximum,
  minLength,
  minimum,
  nullable,
  operationMetadata,
  parseParamDefault,
  parseParamDeprecated,
  parseParamDescription,
  parseParamEnum,
  parseParamExample,
  parseParamFormat,
  parseParamLink,
  parseParamMaxLength,
  parseParamMaximum,
  parseParamMinLength,
  parseParamMinimum,
  parseParamNullable,
  parseParamPattern,
  parseParamSchema,
  parseParamTitle,
  pattern,
  readForeignDefault,
  readForeignDeprecated,
  readForeignDescription,
  readForeignEnum,
  readForeignExample,
  readForeignFormat,
  readForeignLink,
  readForeignMaxLength,
  readForeignMaximum,
  readForeignMinLength,
  readForeignMinimum,
  readForeignNullable,
  readForeignPattern,
  readForeignSchema,
  readForeignTitle,
  title,
  writeForeignDefault,
  writeForeignDeprecated,
  writeForeignDescription,
  writeForeignEnum,
  writeForeignExample,
  writeForeignFormat,
  writeForeignLink,
  writeForeignMaxLength,
  writeForeignMaximum,
  writeForeignMinLength,
  writeForeignMinimum,
  writeForeignNullable,
  writeForeignPattern,
  writeForeignSchema,
  writeForeignTitle
};

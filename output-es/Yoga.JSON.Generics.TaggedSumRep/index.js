import * as $runtime from "../runtime.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNonEmpty from "../Data.NonEmpty/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Yoga$dJSON from "../Yoga.JSON/index.js";
const bind = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.bindExceptT(Data$dIdentity.monadIdentity).bind)();
const read$p = /* #__PURE__ */ (() => Yoga$dJSON.readForeignObject(Yoga$dJSON.readForeignForeign).readImpl)();
const pure = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.applicativeExceptT(Data$dIdentity.monadIdentity).pure)();
const fromFoldable = /* #__PURE__ */ Foreign$dObject.fromFoldable(Data$dFoldable.foldableArray);
const alt = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.altExceptT(Data$dList$dTypes.semigroupNonEmptyList)(Data$dIdentity.monadIdentity).alt)();
const writeGenericTaggedSumRepN = {genericWriteForeignTaggedSumRep: v => v1 => Yoga$dJSON._undefined};
const writeGenericTaggedSumRepA = dictWriteForeign => ({genericWriteForeignTaggedSumRep: v => v1 => dictWriteForeign.writeImpl(v1)});
const readGenericTaggedSumRepCo = dictIsSymbol => (
  {
    genericReadForeignTaggedSumRep: v => f => {
      const $0 = v.typeTag;
      const name = v.toConstructorName(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy));
      return bind(read$p(f))(v1 => bind((() => {
        const $1 = Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError(Data$dNonEmpty.$NonEmpty(
          Foreign.$ForeignError("ErrorAtProperty", $0, Foreign.$ForeignError("ForeignError", "Missing type tag: " + $0)),
          Data$dList$dTypes.Nil
        ));
        const $2 = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, $0, v1);
        if ($2.tag === "Nothing") { return $1; }
        if ($2.tag === "Just") { return pure($2._1); }
        $runtime.fail();
      })())(typeFgn => bind(Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("String")(typeFgn))(typeStr => {
        if (typeStr === name) {
          const $1 = Data$dList$dTypes.functorNonEmptyList.map(Foreign.ErrorAtProperty(name));
          const $2 = pure(Data$dGeneric$dRep.NoArguments);
          if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1); }
          if ($2.tag === "Left") { return Data$dEither.$Either("Left", $1($2._1)); }
          $runtime.fail();
        }
        return Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError(Data$dNonEmpty.$NonEmpty(
          Foreign.$ForeignError("ForeignError", "Wrong type tag " + typeStr + " where " + $0 + " was expected."),
          Data$dList$dTypes.Nil
        ));
      })));
    }
  }
);
const readGenericTaggedSumRepAr = dictReadForeign => (
  {
    genericReadForeignTaggedSumRep: v => f => {
      const $0 = dictReadForeign.readImpl(f);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
      $runtime.fail();
    }
  }
);
const genericWriteForeignTaggedSumRep = dict => dict.genericWriteForeignTaggedSumRep;
const writeGenericTaggedSumRepC = dictWriteGenericTaggedSumRep => dictIsSymbol => (
  {
    genericWriteForeignTaggedSumRep: v => v1 => Foreign$dObject._mapWithKey(
      fromFoldable([
        Data$dTuple.$Tuple(v.typeTag, v.toConstructorName(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))),
        Data$dTuple.$Tuple(v.valueTag, dictWriteGenericTaggedSumRep.genericWriteForeignTaggedSumRep(v)(v1))
      ]),
      v$1 => Yoga$dJSON.writeForeignForeign.writeImpl
    )
  }
);
const writeGenericTaggedSumRepS = dictWriteGenericTaggedSumRep => dictWriteGenericTaggedSumRep1 => (
  {
    genericWriteForeignTaggedSumRep: options => v => {
      if (v.tag === "Inl") { return dictWriteGenericTaggedSumRep.genericWriteForeignTaggedSumRep(options)(v._1); }
      if (v.tag === "Inr") { return dictWriteGenericTaggedSumRep1.genericWriteForeignTaggedSumRep(options)(v._1); }
      $runtime.fail();
    }
  }
);
const genericWriteForeignTaggedSum = dictGeneric => dictWriteGenericTaggedSumRep => options => r => dictWriteGenericTaggedSumRep.genericWriteForeignTaggedSumRep(options)(dictGeneric.from(r));
const genericReadForeignTaggedSumRep = dict => dict.genericReadForeignTaggedSumRep;
const readGenericTaggedSumRepCo1 = dictReadGenericTaggedSumRep => dictIsSymbol => (
  {
    genericReadForeignTaggedSumRep: v => f => {
      const $0 = v.typeTag;
      const $1 = v.valueTag;
      const name = v.toConstructorName(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy));
      return bind(read$p(f))(v1 => bind((() => {
        const $2 = Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError(Data$dNonEmpty.$NonEmpty(
          Foreign.$ForeignError("ErrorAtProperty", $0, Foreign.$ForeignError("ForeignError", "Missing type tag: " + $0)),
          Data$dList$dTypes.Nil
        ));
        const $3 = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, $0, v1);
        if ($3.tag === "Nothing") { return $2; }
        if ($3.tag === "Just") { return pure($3._1); }
        $runtime.fail();
      })())(typeFgn => bind(Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("String")(typeFgn))(typeStr => bind((() => {
        const $2 = Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError(Data$dNonEmpty.$NonEmpty(
          Foreign.$ForeignError("ErrorAtProperty", $1, Foreign.$ForeignError("ForeignError", "Missing value tag: " + $1)),
          Data$dList$dTypes.Nil
        ));
        const $3 = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, $1, v1);
        if ($3.tag === "Nothing") { return $2; }
        if ($3.tag === "Just") { return pure($3._1); }
        $runtime.fail();
      })())(value => {
        if (typeStr === name) {
          const $2 = Data$dList$dTypes.functorNonEmptyList.map(Foreign.ErrorAtProperty(name));
          const $3 = dictReadGenericTaggedSumRep.genericReadForeignTaggedSumRep(v)(value);
          if ($3.tag === "Left") { return Data$dEither.$Either("Left", $2($3._1)); }
          if ($3.tag === "Right") { return Data$dEither.$Either("Right", $3._1); }
          $runtime.fail();
        }
        return Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError(Data$dNonEmpty.$NonEmpty(
          Foreign.$ForeignError("ForeignError", "Wrong constructor name tag " + typeStr + " where " + name + " was expected."),
          Data$dList$dTypes.Nil
        ));
      }))));
    }
  }
);
const readGenericTaggedSumRepSu = dictReadGenericTaggedSumRep => dictReadGenericTaggedSumRep1 => (
  {
    genericReadForeignTaggedSumRep: options => f => alt((() => {
      const $0 = dictReadGenericTaggedSumRep.genericReadForeignTaggedSumRep(options)(f);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dGeneric$dRep.$Sum("Inl", $0._1)); }
      $runtime.fail();
    })())((() => {
      const $0 = dictReadGenericTaggedSumRep1.genericReadForeignTaggedSumRep(options)(f);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dGeneric$dRep.$Sum("Inr", $0._1)); }
      $runtime.fail();
    })())
  }
);
const genericReadForeignTaggedSum = dictGeneric => dictReadGenericTaggedSumRep => options => f => {
  const $0 = dictReadGenericTaggedSumRep.genericReadForeignTaggedSumRep(options)(f);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", dictGeneric.to($0._1)); }
  $runtime.fail();
};
const defaultOptions = {typeTag: "type", valueTag: "value", toConstructorName: x => x};
export {
  alt,
  bind,
  defaultOptions,
  fromFoldable,
  genericReadForeignTaggedSum,
  genericReadForeignTaggedSumRep,
  genericWriteForeignTaggedSum,
  genericWriteForeignTaggedSumRep,
  pure,
  read$p,
  readGenericTaggedSumRepAr,
  readGenericTaggedSumRepCo,
  readGenericTaggedSumRepCo1,
  readGenericTaggedSumRepSu,
  writeGenericTaggedSumRepA,
  writeGenericTaggedSumRepC,
  writeGenericTaggedSumRepN,
  writeGenericTaggedSumRepS
};

import * as $runtime from "../runtime.js";
import * as Control$dApplicative from "../Control.Applicative/index.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dDateTime$dInstant from "../Data.DateTime.Instant/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dFunctorWithIndex from "../Data.FunctorWithIndex/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dJSDate from "../Data.JSDate/index.js";
import * as Data$dLazy from "../Data.Lazy/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dNonEmpty from "../Data.NonEmpty/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Foreign$dIndex from "../Foreign.Index/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as JS$dBigInt from "../JS.BigInt/index.js";
import * as Partial from "../Partial/index.js";
import * as Record$dBuilder from "../Record.Builder/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import {_parseJSON, _undefined, _unsafePrettyStringify, _unsafeStringify} from "./foreign.js";
const identity = x => x;
const bindExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.bindExceptT(Data$dIdentity.monadIdentity);
const applicativeExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.applicativeExceptT(Data$dIdentity.monadIdentity);
const typeIsSymbol = {reflectSymbol: () => "type"};
const valueIsSymbol = {reflectSymbol: () => "value"};
const toUnfoldable = /* #__PURE__ */ (() => {
  const $0 = Data$dUnfoldable.unfoldableArray.unfoldr(xs => {
    if (xs.tag === "Nil") { return Data$dMaybe.Nothing; }
    if (xs.tag === "Cons") { return Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple(xs._1, xs._2)); }
    $runtime.fail();
  });
  return x => $0((() => {
    const go = (m$p, z$p) => {
      if (m$p.tag === "Leaf") { return z$p; }
      if (m$p.tag === "Node") { return go(m$p._5, Data$dList$dTypes.$List("Cons", m$p._3, go(m$p._6, z$p))); }
      $runtime.fail();
    };
    return go(x, Data$dList$dTypes.Nil);
  })());
})();
const childrenIsSymbol = {reflectSymbol: () => "children"};
const readNull = /* #__PURE__ */ Foreign.readNull(Data$dIdentity.monadIdentity);
const toUnfoldable1 = /* #__PURE__ */ Foreign$dObject.toUnfoldable(Data$dUnfoldable.unfoldableArray);
const alt = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.altExceptT(Data$dList$dTypes.semigroupNonEmptyList)(Data$dIdentity.monadIdentity).alt)();
const readProp = /* #__PURE__ */ Foreign$dIndex.unsafeReadProp(Data$dIdentity.monadIdentity);
const throwError = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError)();
const traverse1 = /* #__PURE__ */ (() => Data$dTraversable.traversableArray.traverse(applicativeExceptT))();
const writeForeignVariantNilRow = {writeVariantImpl: v => v1 => Partial._crashWith("Attempted to write empty variant.")};
const writeForeignString = {writeImpl: Unsafe$dCoerce.unsafeCoerce};
const writeForeignNumber = {writeImpl: Unsafe$dCoerce.unsafeCoerce};
const writeForeignNonEmptyStrin = {writeImpl: Unsafe$dCoerce.unsafeCoerce};
const writeForeignInt = {writeImpl: Unsafe$dCoerce.unsafeCoerce};
const writeForeignForeign = {writeImpl: x => x};
const writeForeignFieldsNilRowR = {writeImplFields: v => v1 => identity};
const writeForeignChar = {writeImpl: Unsafe$dCoerce.unsafeCoerce};
const writeForeignBoolean = {writeImpl: Unsafe$dCoerce.unsafeCoerce};
const writeForeignBigInt = {writeImpl: Unsafe$dCoerce.unsafeCoerce};
const readForeignVariantNil = {
  readVariantImpl: v => v1 => Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError(Data$dNonEmpty.$NonEmpty(
    Foreign.$ForeignError("ForeignError", "Unable to match any variant member."),
    Data$dList$dTypes.Nil
  ))
};
const readForeignString = {readImpl: /* #__PURE__ */ Foreign.readString(Data$dIdentity.monadIdentity)};
const readForeignNumber = {readImpl: /* #__PURE__ */ Foreign.readNumber(Data$dIdentity.monadIdentity)};
const readForeignNonEmptyString = {
  readImpl: a => bindExceptT.bind(Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("String")(a))(x => {
    if (x === "") { return Data$dEither.$Either("Left", Data$dNonEmpty.$NonEmpty(Foreign.$ForeignError("ForeignError", "String must not be empty"), Data$dList$dTypes.Nil)); }
    return Data$dEither.$Either("Right", x);
  })
};
const readForeignInt = {readImpl: /* #__PURE__ */ Foreign.readInt(Data$dIdentity.monadIdentity)};
const readForeignForeign = /* #__PURE__ */ (() => ({readImpl: applicativeExceptT.pure}))();
const readForeignFieldsNilRowRo = {getFields: v => v1 => applicativeExceptT.pure(identity)};
const readForeignChar = {readImpl: /* #__PURE__ */ Foreign.readChar(Data$dIdentity.monadIdentity)};
const readForeignBoolean = {readImpl: /* #__PURE__ */ Foreign.readBoolean(Data$dIdentity.monadIdentity)};
const writeVariantImpl = dict => dict.writeVariantImpl;
const writeForeignVariant = () => dictWriteForeignVariant => ({writeImpl: variant => dictWriteForeignVariant.writeVariantImpl(Type$dProxy.Proxy)(variant)});
const writeImplFields = dict => dict.writeImplFields;
const writeForeignRecord = () => dictWriteForeignFields => ({writeImpl: rec => dictWriteForeignFields.writeImplFields(Type$dProxy.Proxy)(rec)({})});
const writeImpl = dict => dict.writeImpl;
const writeJSON = dictWriteForeign => x => _unsafeStringify(dictWriteForeign.writeImpl(x));
const writePrettyJSON = dictWriteForeign => spaces => {
  const $0 = _unsafePrettyStringify(spaces);
  return x => $0(dictWriteForeign.writeImpl(x));
};
const writeForeignArray = dictWriteForeign => {
  const writeImpl5 = dictWriteForeign.writeImpl;
  return {writeImpl: xs => Data$dFunctor.arrayMap(writeImpl5)(xs)};
};
const writeForeignDays = {writeImpl: x => x};
const writeForeignFieldsCons = dictIsSymbol => dictWriteForeign => dictWriteForeignFields => () => () => () => (
  {
    writeImplFields: v => rec => {
      const $0 = Record$dBuilder.insert()()(dictIsSymbol)(Type$dProxy.Proxy)(dictWriteForeign.writeImpl(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(rec)));
      const $1 = dictWriteForeignFields.writeImplFields(Type$dProxy.Proxy)(rec);
      return x => $0($1(x));
    }
  }
);
const writeImpl3 = /* #__PURE__ */ (() => {
  const $0 = writeForeignFieldsCons(typeIsSymbol)(writeForeignString)(writeForeignFieldsCons(valueIsSymbol)(writeForeignForeign)(writeForeignFieldsNilRowR)()()())()()();
  return rec => $0.writeImplFields(Type$dProxy.Proxy)(rec)({});
})();
const writeForeignEither = dictWriteForeign => dictWriteForeign1 => (
  {
    writeImpl: value => {
      if (value.tag === "Left") { return writeImpl3({type: "left", value: dictWriteForeign.writeImpl(value._1)}); }
      if (value.tag === "Right") { return writeImpl3({type: "right", value: dictWriteForeign1.writeImpl(value._1)}); }
      $runtime.fail();
    }
  }
);
const writeForeignHours = {writeImpl: x => x};
const writeForeignJSDate = {writeImpl: x => Data$dJSDate.dateMethodEff("toISOString", x)()};
const writeForeignDateTime = {writeImpl: x => Data$dJSDate.dateMethodEff("toISOString", Data$dJSDate.fromDateTime(x))()};
const writeForeignMap = () => dictWriteForeign => ({writeImpl: x => dictWriteForeign.writeImpl(x)});
const writeForeignMilliseconds = {writeImpl: x => x};
const writeForeignInstant = {writeImpl: x => x};
const writeForeignMinutes = {writeImpl: x => x};
const writeForeignNullable = dictWriteForeign => (
  {
    writeImpl: x => {
      const $0 = Data$dNullable.nullable(x, Data$dMaybe.Nothing, Data$dMaybe.Just);
      if ($0.tag === "Nothing") { return Data$dNullable.null; }
      if ($0.tag === "Just") { return dictWriteForeign.writeImpl($0._1); }
      $runtime.fail();
    }
  }
);
const writeForeignObject = dictWriteForeign => (
  {
    writeImpl: Foreign$dObject.mapWithKey((() => {
      const $0 = dictWriteForeign.writeImpl;
      return v => $0;
    })())
  }
);
const writeForeignMapBigInt = dictWriteForeign => (
  {
    writeImpl: (() => {
      const go = (m$p, z$p) => {
        if (m$p.tag === "Leaf") { return z$p; }
        if (m$p.tag === "Node") {
          return go(
            m$p._5,
            (() => {
              const $0 = JS$dBigInt.toString(m$p._3);
              const $1 = m$p._4;
              return Foreign$dObject.mutate($2 => () => {
                $2[$0] = $1;
                return $2;
              })(go(m$p._6, z$p));
            })()
          );
        }
        $runtime.fail();
      };
      return x => {
        const $0 = dictWriteForeign.writeImpl;
        return Foreign$dObject._mapWithKey(go(x, Foreign$dObject.empty), v => $0);
      };
    })()
  }
);
const writeForeignMapInt = dictWriteForeign => (
  {
    writeImpl: (() => {
      const go = (m$p, z$p) => {
        if (m$p.tag === "Leaf") { return z$p; }
        if (m$p.tag === "Node") {
          return go(
            m$p._5,
            (() => {
              const $0 = Data$dShow.showIntImpl(m$p._3);
              const $1 = m$p._4;
              return Foreign$dObject.mutate($2 => () => {
                $2[$0] = $1;
                return $2;
              })(go(m$p._6, z$p));
            })()
          );
        }
        $runtime.fail();
      };
      return x => {
        const $0 = dictWriteForeign.writeImpl;
        return Foreign$dObject._mapWithKey(go(x, Foreign$dObject.empty), v => $0);
      };
    })()
  }
);
const writeForeignMapString = dictWriteForeign => (
  {
    writeImpl: (() => {
      const go = (m$p, z$p) => {
        if (m$p.tag === "Leaf") { return z$p; }
        if (m$p.tag === "Node") {
          return go(
            m$p._5,
            (() => {
              const $0 = m$p._3;
              const $1 = m$p._4;
              return Foreign$dObject.mutate($2 => () => {
                $2[$0] = $1;
                return $2;
              })(go(m$p._6, z$p));
            })()
          );
        }
        $runtime.fail();
      };
      return x => {
        const $0 = dictWriteForeign.writeImpl;
        return Foreign$dObject._mapWithKey(go(x, Foreign$dObject.empty), v => $0);
      };
    })()
  }
);
const writeForeignSeconds = {writeImpl: x => x};
const writeForeignSet = dictWriteForeign => {
  const writeImpl5 = dictWriteForeign.writeImpl;
  return {writeImpl: $$set => Data$dFunctor.arrayMap(writeImpl5)(toUnfoldable($$set))};
};
const writeForeignTuple = dictWriteForeign => dictWriteForeign1 => (
  {writeImpl: v => Data$dFunctor.arrayMap(writeForeignForeign.writeImpl)([dictWriteForeign.writeImpl(v._1), dictWriteForeign1.writeImpl(v._2)])}
);
const writeForeignVariantCons = dictIsSymbol => dictWriteForeign => () => dictWriteForeignVariant => (
  {
    writeVariantImpl: v => variant => {
      const name = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
      const $0 = dictWriteForeignVariant.writeVariantImpl(Type$dProxy.Proxy);
      if (variant.type === dictIsSymbol.reflectSymbol(Type$dProxy.Proxy)) {
        const $1 = dictWriteForeign.writeImpl(variant.value);
        return Foreign$dObject._mapWithKey(
          (() => {
            const $2 = {};
            $2[name] = $1;
            return $2;
          })(),
          v$1 => writeForeignForeign.writeImpl
        );
      }
      return $0(variant);
    }
  }
);
const writeForeignNEArray = dictWriteForeign => {
  const writeImpl5 = dictWriteForeign.writeImpl;
  return {writeImpl: a => Data$dFunctor.arrayMap(writeImpl5)(a)};
};
const write = dictWriteForeign => dictWriteForeign.writeImpl;
const unsafeStringify = _unsafeStringify;
const unsafeStringToInt = x => {
  const $0 = Data$dInt.fromString(x);
  if ($0.tag === "Nothing") { return Partial._crashWith("impossible"); }
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
};
const unsafeStringToBigInt = x => {
  const $0 = JS$dBigInt.fromString(x);
  if ($0.tag === "Nothing") { return Partial._crashWith("impossible"); }
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
};
const $$undefined = _undefined;
const writeForeignMaybe = dictWriteForeign => (
  {
    writeImpl: v2 => {
      if (v2.tag === "Nothing") { return _undefined; }
      if (v2.tag === "Just") { return dictWriteForeign.writeImpl(v2._1); }
      $runtime.fail();
    }
  }
);
const writeForeignFieldsCons2 = /* #__PURE__ */ writeForeignFieldsCons(childrenIsSymbol)({
  writeImpl: v2 => {
    if (v2.tag === "Nothing") { return _undefined; }
    if (v2.tag === "Just") { return Data$dFunctor.arrayMap(writeForeignForeign.writeImpl)(v2._1); }
    $runtime.fail();
  }
});
const writeForeignTree = dictWriteForeign => {
  const $0 = writeForeignFieldsCons2(writeForeignFieldsCons(valueIsSymbol)(dictWriteForeign)(writeForeignFieldsNilRowR)()()())()()();
  return {
    writeImpl: t => {
      const tail = Data$dLazy.force(t)._2;
      return $0.writeImplFields(Type$dProxy.Proxy)({
        value: Data$dLazy.force(t)._1,
        children: tail.length === 0 ? Data$dMaybe.Nothing : Data$dMaybe.$Maybe("Just", Data$dFunctor.arrayMap(writeForeignTree(dictWriteForeign).writeImpl)(tail))
      })({});
    }
  };
};
const tupleSize = dict => dict.tupleSize;
const sequenceCombining = dictMonoid => {
  const mempty = dictMonoid.mempty;
  return dictFoldable => dictApplicative => dictFoldable.foldl(acc => elem => {
    if (acc.tag === "Left") {
      if (elem.tag === "Left") { return Data$dEither.$Either("Left", Data$dList$dTypes.semigroupNonEmptyList.append(acc._1)(elem._1)); }
      if (elem.tag === "Right") { return Data$dEither.$Either("Left", acc._1); }
      $runtime.fail();
    }
    if (acc.tag === "Right") {
      if (elem.tag === "Right") { return Data$dEither.$Either("Right", dictMonoid.Semigroup0().append(acc._1)(dictApplicative.pure(elem._1))); }
      if (elem.tag === "Left") { return Data$dEither.$Either("Left", elem._1); }
    }
    $runtime.fail();
  })(Data$dEither.$Either("Right", mempty));
};
const sequenceCombining1 = /* #__PURE__ */ sequenceCombining(Data$dMonoid.monoidArray)(Data$dFoldable.foldableArray)(Control$dApplicative.applicativeArray);
const readVariantImpl = dict => dict.readVariantImpl;
const readForeignVariant = () => dictReadForeignVariant => ({readImpl: o => dictReadForeignVariant.readVariantImpl(Type$dProxy.Proxy)(o)});
const readTupleImpl = dict => dict.readTupleImpl;
const readForeignTuple = dictReadTuple => ({readImpl: dictReadTuple.readTupleImpl(0)});
const readImpl = dict => dict.readImpl;
const readForeignDays = {
  readImpl: x => {
    const $0 = Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("Number")(x);
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
    $runtime.fail();
  }
};
const readForeignHours = {
  readImpl: x => {
    const $0 = Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("Number")(x);
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
    $runtime.fail();
  }
};
const readForeignJSDate = {
  readImpl: x => {
    const $0 = Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("String")(x);
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dJSDate.parse($0._1)()); }
    $runtime.fail();
  }
};
const readForeignDateTime = {
  readImpl: a => bindExceptT.bind(readForeignJSDate.readImpl(a))(x => {
    const $0 = Data$dJSDate.toInstant(x);
    if ($0.tag === "Just") { return Data$dEither.$Either("Right", Data$dDateTime$dInstant.toDateTime($0._1)); }
    return Data$dEither.$Either("Left", Data$dNonEmpty.$NonEmpty(Foreign.$ForeignError("ForeignError", "Invalid date time"), Data$dList$dTypes.Nil));
  })
};
const readForeignMap = () => dictReadForeign => (
  {
    readImpl: x => {
      const $0 = dictReadForeign.readImpl(x);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
      $runtime.fail();
    }
  }
);
const readForeignMaybe = dictReadForeign => (
  {
    readImpl: v1 => {
      if (Foreign.isNull(v1) || Foreign.isUndefined(v1)) { return applicativeExceptT.pure(Data$dMaybe.Nothing); }
      const $0 = dictReadForeign.readImpl(v1);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dMaybe.$Maybe("Just", $0._1)); }
      $runtime.fail();
    }
  }
);
const readForeignMilliseconds = {
  readImpl: x => {
    const $0 = Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("Number")(x);
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
    $runtime.fail();
  }
};
const readForeignInstant = {
  readImpl: f => bindExceptT.bind(readForeignMilliseconds.readImpl(f))(millis => {
    if (millis >= -8639977881600000.0 && millis <= 8639977881599999.0) { return applicativeExceptT.pure(millis); }
    return Data$dEither.$Either("Left", Data$dNonEmpty.$NonEmpty(Foreign.$ForeignError("ForeignError", "Invalid instant"), Data$dList$dTypes.Nil));
  })
};
const readForeignMinutes = {
  readImpl: x => {
    const $0 = Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("Number")(x);
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
    $runtime.fail();
  }
};
const readForeignNullable = dictReadForeign => {
  const readImpl5 = dictReadForeign.readImpl;
  return {
    readImpl: o => {
      const $0 = Data$dList$dTypes.functorNonEmptyList.map(error => {
        if (error.tag === "TypeMismatch") { return Foreign.$ForeignError("TypeMismatch", "Nullable " + error._1, error._2); }
        return error;
      });
      const $1 = bindExceptT.bind(readNull(o))(x => {
        const $1 = Data$dTraversable.traversableMaybe.traverse(applicativeExceptT)(readImpl5)(x);
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") {
          return Data$dEither.$Either(
            "Right",
            (() => {
              if ($1._1.tag === "Nothing") { return Data$dNullable.null; }
              if ($1._1.tag === "Just") { return Data$dNullable.notNull($1._1._1); }
              $runtime.fail();
            })()
          );
        }
        $runtime.fail();
      });
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $0($1._1)); }
      $runtime.fail();
    }
  };
};
const readForeignObject = dictReadForeign => (
  {
    readImpl: (() => {
      const $0 = Data$dFoldable.foldlArray(acc => v => {
        if (acc.tag === "Left") {
          if (v._2.tag === "Left") { return Data$dEither.$Either("Left", Data$dList$dTypes.semigroupNonEmptyList.append(acc._1)(v._2._1)); }
          if (v._2.tag === "Right") { return Data$dEither.$Either("Left", acc._1); }
          $runtime.fail();
        }
        if (acc.tag === "Right") {
          if (v._2.tag === "Right") {
            const $0 = v._2._1;
            return Data$dEither.$Either(
              "Right",
              Foreign$dObject.mutate($1 => () => {
                $1[v._1] = $0;
                return $1;
              })(acc._1)
            );
          }
          if (v._2.tag === "Left") { return Data$dEither.$Either("Left", v._2._1); }
        }
        $runtime.fail();
      })(Data$dEither.$Either("Right", Foreign$dObject.empty));
      const $1 = Foreign$dObject.mapWithKey(key => value => {
        const $1 = Data$dList$dTypes.functorNonEmptyList.map(Foreign.ErrorAtProperty(key));
        const $2 = dictReadForeign.readImpl(value);
        if ($2.tag === "Left") { return Data$dEither.$Either("Left", $1($2._1)); }
        if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1); }
        $runtime.fail();
      });
      return a => bindExceptT.bind(Foreign.tagOf(a) === "Object"
        ? applicativeExceptT.pure(a)
        : Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError(Data$dNonEmpty.$NonEmpty(
            Foreign.$ForeignError("TypeMismatch", "Object", Foreign.tagOf(a)),
            Data$dList$dTypes.Nil
          )))(x => $0(toUnfoldable1($1(x))));
    })()
  }
);
const readForeignMapBigInt = dictReadForeign => (
  {
    readImpl: (() => {
      const $0 = Foreign$dObject.foldableWithIndexObject.foldrWithIndex(x => Data$dMap$dInternal.insert(JS$dBigInt.ordBigInt)(unsafeStringToBigInt(x)))(Data$dMap$dInternal.Leaf);
      return x => {
        const $1 = readForeignObject(dictReadForeign).readImpl(x);
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") { return Data$dEither.$Either("Right", $0($1._1)); }
        $runtime.fail();
      };
    })()
  }
);
const readForeignMapInt = dictReadForeign => (
  {
    readImpl: (() => {
      const $0 = Foreign$dObject.foldableWithIndexObject.foldrWithIndex(x => Data$dMap$dInternal.insert(Data$dOrd.ordInt)(unsafeStringToInt(x)))(Data$dMap$dInternal.Leaf);
      return x => {
        const $1 = readForeignObject(dictReadForeign).readImpl(x);
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") { return Data$dEither.$Either("Right", $0($1._1)); }
        $runtime.fail();
      };
    })()
  }
);
const readForeignMapString = dictReadForeign => (
  {
    readImpl: x => {
      const $0 = readForeignObject(dictReadForeign).readImpl(x);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") {
        return Data$dEither.$Either(
          "Right",
          Foreign$dObject.foldableWithIndexObject.foldrWithIndex(Data$dMap$dInternal.insert(Data$dOrd.ordString))(Data$dMap$dInternal.Leaf)($0._1)
        );
      }
      $runtime.fail();
    }
  }
);
const readForeignSeconds = {
  readImpl: x => {
    const $0 = Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("Number")(x);
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
    $runtime.fail();
  }
};
const readForeignVariantCons = dictIsSymbol => dictReadForeign => {
  const readImpl5 = dictReadForeign.readImpl;
  return () => dictReadForeignVariant => (
    {
      readVariantImpl: v => o => alt(dictReadForeignVariant.readVariantImpl(Type$dProxy.Proxy)(o))((() => {
        const $0 = bindExceptT.bind(readProp(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(o))(readImpl5);
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", {type: dictIsSymbol.reflectSymbol(Type$dProxy.Proxy), value: $0._1}); }
        $runtime.fail();
      })())
    }
  );
};
const readForeignBigInt = {
  readImpl: fValue => alt((() => {
    const $0 = Foreign.readInt(Data$dIdentity.monadIdentity)(fValue);
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", JS$dBigInt.fromInt($0._1)); }
    $runtime.fail();
  })())(alt(bindExceptT.bind(Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("Number")(fValue))(num => {
    if (Data$dNumber.round(num) === num) {
      const $0 = Data$dNonEmpty.$NonEmpty(Foreign.$ForeignError("ForeignError", "Cannot convert Number " + Data$dShow.showNumberImpl(num) + " to BigInt"), Data$dList$dTypes.Nil);
      const $1 = JS$dBigInt.fromNumber(num);
      if ($1.tag === "Nothing") { return Data$dEither.$Either("Left", $0); }
      if ($1.tag === "Just") { return Data$dEither.$Either("Right", $1._1); }
      $runtime.fail();
    }
    return Data$dEither.$Either(
      "Left",
      Data$dNonEmpty.$NonEmpty(Foreign.$ForeignError("ForeignError", "Cannot convert decimal Number " + Data$dShow.showNumberImpl(num) + " to BigInt"), Data$dList$dTypes.Nil)
    );
  }))(alt(Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("BigInt")(fValue))(bindExceptT.bind(Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("String")(fValue))(bi => {
    const $0 = Data$dNonEmpty.$NonEmpty(Foreign.$ForeignError("ForeignError", "Cannot convert String " + bi + " to BigInt"), Data$dList$dTypes.Nil);
    const $1 = JS$dBigInt.fromString(bi);
    if ($1.tag === "Nothing") { return Data$dEither.$Either("Left", $0); }
    if ($1.tag === "Just") { return Data$dEither.$Either("Right", $1._1); }
    $runtime.fail();
  }))))
};
const readAtIdx = dictReadForeign => i => f => {
  const $0 = Data$dList$dTypes.functorNonEmptyList.map(Foreign.ErrorAtIndex(i));
  const $1 = dictReadForeign.readImpl(f);
  if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
  if ($1.tag === "Left") { return Data$dEither.$Either("Left", $0($1._1)); }
  $runtime.fail();
};
const readForeignArray = dictReadForeign => (
  {
    readImpl: (() => {
      const $0 = Data$dFunctorWithIndex.mapWithIndexArray(readAtIdx(dictReadForeign));
      return a => bindExceptT.bind(Foreign.readArray(Data$dIdentity.monadIdentity)(a))(x => sequenceCombining1($0(x)));
    })()
  }
);
const readForeignArray1 = /* #__PURE__ */ readForeignArray(readForeignForeign);
const readTupleHelper = dictReadForeign => dictReadForeign1 => (
  {
    readTupleImpl: n => a => bindExceptT.bind(readForeignArray1.readImpl(a))(v => {
      if (v.length === 2) {
        const $0 = Control$dMonad$dExcept$dTrans.applyExceptT(Data$dIdentity.monadIdentity);
        return $0.apply($0.Functor0().map(Data$dTuple.Tuple)(readAtIdx(dictReadForeign)(n)(v[0])))(readAtIdx(dictReadForeign1)(n + 1 | 0)(v[1]));
      }
      return throwError(Data$dNonEmpty.$NonEmpty(
        Foreign.$ForeignError("TypeMismatch", "array of length " + Data$dShow.showIntImpl(n + 2 | 0), "array of length " + Data$dShow.showIntImpl(n + v.length | 0)),
        Data$dList$dTypes.Nil
      ));
    }),
    tupleSize: v => 2
  }
);
const readForeignNonEmptyArray = dictReadForeign => (
  {
    readImpl: f => bindExceptT.bind(readForeignArray(dictReadForeign).readImpl(f))(v => {
      if (v.length > 0) { return Data$dEither.$Either("Right", v); }
      return Data$dEither.$Either("Left", Data$dNonEmpty.$NonEmpty(Foreign.$ForeignError("ForeignError", "Nonempty array expected, got empty array"), Data$dList$dTypes.Nil));
    })
  }
);
const readForeignSet = dictOrd => {
  const fromFoldable1 = Data$dFoldable.foldlArray(m => a => Data$dMap$dInternal.insert(dictOrd)(a)()(m))(Data$dMap$dInternal.Leaf);
  return dictReadForeign => (
    {
      readImpl: f => {
        const $0 = readForeignArray(dictReadForeign).readImpl(f);
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", fromFoldable1($0._1)); }
        $runtime.fail();
      }
    }
  );
};
const readTupleTupleTuple = dictReadForeign => dictReadTuple => (
  {
    readTupleImpl: n => a => bindExceptT.bind(readForeignArray1.readImpl(a))(v => {
      const v1 = Data$dArray.unconsImpl(v$1 => Data$dMaybe.Nothing, x => xs => Data$dMaybe.$Maybe("Just", {head: x, tail: xs}), v);
      if (v1.tag === "Just") {
        const $0 = Control$dMonad$dExcept$dTrans.applyExceptT(Data$dIdentity.monadIdentity);
        return $0.apply($0.Functor0().map(Data$dTuple.Tuple)(readAtIdx(dictReadForeign)(n)(v1._1.head)))(dictReadTuple.readTupleImpl(n + 1 | 0)(Data$dFunctor.arrayMap(writeForeignForeign.writeImpl)(v1._1.tail)));
      }
      return throwError(Data$dNonEmpty.$NonEmpty(
        Foreign.$ForeignError(
          "TypeMismatch",
          "array of length " + Data$dShow.showIntImpl((1 + n | 0) + dictReadTuple.tupleSize(Type$dProxy.Proxy) | 0),
          "array of length " + Data$dShow.showIntImpl(n)
        ),
        Data$dList$dTypes.Nil
      ));
    }),
    tupleSize: v => 1 + dictReadTuple.tupleSize(Type$dProxy.Proxy) | 0
  }
);
const read$p = dictReadForeign => dictReadForeign.readImpl;
const read = dictReadForeign => x => dictReadForeign.readImpl(x);
const read_ = dictReadForeign => x => {
  const $0 = dictReadForeign.readImpl(x);
  if ($0.tag === "Left") { return Data$dMaybe.Nothing; }
  if ($0.tag === "Right") { return Data$dMaybe.$Maybe("Just", $0._1); }
  $runtime.fail();
};
const read_1 = x => {
  const $0 = readForeignArray1.readImpl(x);
  if ($0.tag === "Left") { return Data$dMaybe.Nothing; }
  if ($0.tag === "Right") { return Data$dMaybe.$Maybe("Just", $0._1); }
  $runtime.fail();
};
const writeForeignTupleTuple = dictWriteForeign => dictWriteForeign1 => (
  {
    writeImpl: v => Data$dFunctor.arrayMap(writeForeignForeign.writeImpl)([
      dictWriteForeign.writeImpl(v._1),
      ...(() => {
        const $0 = read_1(dictWriteForeign1.writeImpl(v._2));
        if ($0.tag === "Nothing") { return []; }
        if ($0.tag === "Just") { return $0._1; }
        $runtime.fail();
      })()
    ])
  }
);
const parseJSON = /* #__PURE__ */ (() => {
  const $0 = Effect$dUncurried.runEffectFn1(_parseJSON);
  return x => {
    const $1 = (() => {
      const $1 = $0(x);
      return Effect$dException.catchException(x$1 => () => Data$dEither.$Either("Left", x$1))(() => {
        const a$p = $1();
        return Data$dEither.$Either("Right", a$p);
      });
    })()();
    if ($1.tag === "Left") {
      return Data$dEither.$Either("Left", Data$dNonEmpty.$NonEmpty(Foreign.$ForeignError("ForeignError", Effect$dException.message($1._1)), Data$dList$dTypes.Nil));
    }
    if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
    $runtime.fail();
  };
})();
const readJSON = dictReadForeign => {
  const $0 = dictReadForeign.readImpl;
  return x => bindExceptT.bind(parseJSON(x))($0);
};
const readJSON_ = dictReadForeign => {
  const $0 = dictReadForeign.readImpl;
  return x => {
    const $1 = bindExceptT.bind(parseJSON(x))($0);
    if ($1.tag === "Left") { return Data$dMaybe.Nothing; }
    if ($1.tag === "Right") { return Data$dMaybe.$Maybe("Just", $1._1); }
    $runtime.fail();
  };
};
const readJSON$p = dictReadForeign => {
  const $0 = dictReadForeign.readImpl;
  return a => bindExceptT.bind(parseJSON(a))($0);
};
const getFields = dict => dict.getFields;
const readForeignFieldsCons = dictIsSymbol => dictReadForeign => {
  const readImpl5 = dictReadForeign.readImpl;
  return dictReadForeignFields => () => () => (
    {
      getFields: v => obj => {
        const name = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
        const $0 = dictReadForeignFields.getFields(Type$dProxy.Proxy)(obj);
        const $1 = bindExceptT.bind(readProp(name)(obj))(readImpl5);
        if ($1.tag === "Right") {
          if ($0.tag === "Right") { return Data$dEither.$Either("Right", x => Record$dBuilder.unsafeInsert(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))($1._1)($0._1(x))); }
          if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
          $runtime.fail();
        }
        if ($1.tag === "Left") {
          if ($0.tag === "Left") {
            return Data$dEither.$Either(
              "Left",
              Data$dList$dTypes.semigroupNonEmptyList.append((() => {
                const $2 = Foreign.ErrorAtProperty(name);
                return Data$dNonEmpty.$NonEmpty($2($1._1._1), Data$dList$dTypes.listMap($2)($1._1._2));
              })())($0._1)
            );
          }
          if ($0.tag === "Right") {
            return Data$dEither.$Either(
              "Left",
              (() => {
                const $2 = Foreign.ErrorAtProperty(name);
                return Data$dNonEmpty.$NonEmpty($2($1._1._1), Data$dList$dTypes.listMap($2)($1._1._2));
              })()
            );
          }
        }
        $runtime.fail();
      }
    }
  );
};
const readForeignFieldsCons2 = /* #__PURE__ */ readForeignFieldsCons(childrenIsSymbol)(/* #__PURE__ */ readForeignMaybe(readForeignArray1));
const readForeignRecord = () => dictReadForeignFields => (
  {
    readImpl: o => {
      const $0 = dictReadForeignFields.getFields(Type$dProxy.Proxy)(o);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1({})); }
      $runtime.fail();
    }
  }
);
const readImpl4 = /* #__PURE__ */ (() => {
  const $0 = readForeignFieldsCons(typeIsSymbol)(readForeignString)(readForeignFieldsCons(valueIsSymbol)(readForeignForeign)(readForeignFieldsNilRowRo)()())()();
  return o => {
    const $1 = $0.getFields(Type$dProxy.Proxy)(o);
    if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
    if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
    $runtime.fail();
  };
})();
const readForeignEither = dictReadForeign => dictReadForeign1 => (
  {
    readImpl: f => bindExceptT.bind(readImpl4(f))(v => {
      if (v.type === "left") {
        const $0 = dictReadForeign.readImpl(v.value);
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dEither.$Either("Left", $0._1)); }
        $runtime.fail();
      }
      if (v.type === "right") {
        const $0 = dictReadForeign1.readImpl(v.value);
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dEither.$Either("Right", $0._1)); }
        $runtime.fail();
      }
      return Data$dEither.$Either("Left", Data$dNonEmpty.$NonEmpty(Foreign.$ForeignError("ForeignError", "Invalid Either tag " + v.type), Data$dList$dTypes.Nil));
    })
  }
);
const readForeignTree = dictReadForeign => {
  const $0 = readForeignFieldsCons2(readForeignFieldsCons(valueIsSymbol)(dictReadForeign)(readForeignFieldsNilRowRo)()())()();
  return {
    readImpl: f => bindExceptT.bind((() => {
      const $1 = $0.getFields(Type$dProxy.Proxy)(f);
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
      $runtime.fail();
    })())(v => {
      if (v.children.tag === "Nothing") { return applicativeExceptT.pure(Data$dLazy.defer(v$1 => Data$dTuple.$Tuple(v.value, []))); }
      if (v.children.tag === "Just") {
        const $1 = traverse1(readForeignTree(dictReadForeign).readImpl)(v.children._1);
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") {
          return Data$dEither.$Either(
            "Right",
            (() => {
              const $2 = v.value;
              const $3 = $1._1;
              return Data$dLazy.defer(v$1 => Data$dTuple.$Tuple($2, $3));
            })()
          );
        }
      }
      $runtime.fail();
    })
  };
};
export {
  alt,
  applicativeExceptT,
  bindExceptT,
  childrenIsSymbol,
  getFields,
  identity,
  parseJSON,
  read,
  read$p,
  readAtIdx,
  readForeignArray,
  readForeignArray1,
  readForeignBigInt,
  readForeignBoolean,
  readForeignChar,
  readForeignDateTime,
  readForeignDays,
  readForeignEither,
  readForeignFieldsCons,
  readForeignFieldsCons2,
  readForeignFieldsNilRowRo,
  readForeignForeign,
  readForeignHours,
  readForeignInstant,
  readForeignInt,
  readForeignJSDate,
  readForeignMap,
  readForeignMapBigInt,
  readForeignMapInt,
  readForeignMapString,
  readForeignMaybe,
  readForeignMilliseconds,
  readForeignMinutes,
  readForeignNonEmptyArray,
  readForeignNonEmptyString,
  readForeignNullable,
  readForeignNumber,
  readForeignObject,
  readForeignRecord,
  readForeignSeconds,
  readForeignSet,
  readForeignString,
  readForeignTree,
  readForeignTuple,
  readForeignVariant,
  readForeignVariantCons,
  readForeignVariantNil,
  readImpl,
  readImpl4,
  readJSON,
  readJSON$p,
  readJSON_,
  readNull,
  readProp,
  readTupleHelper,
  readTupleImpl,
  readTupleTupleTuple,
  readVariantImpl,
  read_,
  read_1,
  sequenceCombining,
  sequenceCombining1,
  throwError,
  toUnfoldable,
  toUnfoldable1,
  traverse1,
  tupleSize,
  typeIsSymbol,
  $$undefined as undefined,
  unsafeStringToBigInt,
  unsafeStringToInt,
  unsafeStringify,
  valueIsSymbol,
  write,
  writeForeignArray,
  writeForeignBigInt,
  writeForeignBoolean,
  writeForeignChar,
  writeForeignDateTime,
  writeForeignDays,
  writeForeignEither,
  writeForeignFieldsCons,
  writeForeignFieldsCons2,
  writeForeignFieldsNilRowR,
  writeForeignForeign,
  writeForeignHours,
  writeForeignInstant,
  writeForeignInt,
  writeForeignJSDate,
  writeForeignMap,
  writeForeignMapBigInt,
  writeForeignMapInt,
  writeForeignMapString,
  writeForeignMaybe,
  writeForeignMilliseconds,
  writeForeignMinutes,
  writeForeignNEArray,
  writeForeignNonEmptyStrin,
  writeForeignNullable,
  writeForeignNumber,
  writeForeignObject,
  writeForeignRecord,
  writeForeignSeconds,
  writeForeignSet,
  writeForeignString,
  writeForeignTree,
  writeForeignTuple,
  writeForeignTupleTuple,
  writeForeignVariant,
  writeForeignVariantCons,
  writeForeignVariantNilRow,
  writeImpl,
  writeImpl3,
  writeImplFields,
  writeJSON,
  writePrettyJSON,
  writeVariantImpl
};
export * from "./foreign.js";

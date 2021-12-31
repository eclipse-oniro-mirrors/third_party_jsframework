import { paramMock } from "../utils"

export function mockUtil() {
    const result = {
        printf: function (...args) {
            console.warn("util.printf interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
        getErrorString: function (...args) {
            console.warn("util.getErrorString interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
        callbackWrapper: function (...args) {
            console.warn("util.callbackWrapper interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        promiseWrapper: function (...args) {
            console.warn("util.promiseWrapper interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramObjectMock;
        },
        TextDecoder: function (...args) {
            console.warn("util.TextDecoder interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return TextDecoderMock;
        },
        TextEncoder: function (...args) {
            console.warn("util.TextEncoder interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return TextEncoderMock;
        },
        RationalNumber: function (...args) {
            console.warn("util.RationalNumber interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return RationalNumberMock;
        },
        LruBuffer: function (...args) {
            console.warn("util.Lrubuffer interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return LrubufferMock;
        },
        Scope: function (...args) {
            console.warn("util.Scope interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return ScopeMock;
        },
        Base64: function (...args) {
            console.warn("util.Base64 interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return Base64Mock;
        },
        Types: function(...args) {
            console.warn("util.Types interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return TypesMock;
        }
    }
    const TextDecoderMock = {
        encoding: '[PC preview] unknow encoding',
        fatal: '[PC preview] unknow fatal',
        ignoreBOM: '[PC preview] unknow ignoreBOM',
        decode: function (...args) {
            console.warn("TextDecoder.decode interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        }
    }
    const TextEncoderMock = {
        encoding: '[PC preview] unknow encoding',
        encode: function (...args) {
            console.warn("TextEncoder.encode interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            const arr = new Uint8Array()
            return arr;
        },
        encodeInto: function (...args) {
            console.warn("TextEncoder.encodeInto interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramObjectMock;
        }
    }
    const RationalNumberMock = {
        createRationalFromString: function (...args) {
            console.warn("RationalNumber.createRationalFromString​ interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramObjectMock;
        },
        compareTo: function (...args) {
            console.warn("RationalNumber.compareTo​ interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        equals: function (...args) {
            console.warn("RationalNumber.equals​ interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        valueOf: function (...args) {
            console.warn("RationalNumber.valueOf interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        getCommonDivisor: function (...args) {
            console.warn("RationalNumber.getCommonDivisor​ interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        getDenominator: function (...args) {
            console.warn("RationalNumber.getDenominator​ interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        getNumerator: function (...args) {
            console.warn("RationalNumber.getNumerator​ interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        isFinite: function (...args) {
            console.warn("RationalNumber.isFinite​ interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isNaN: function (...args) {
            console.warn("RationalNumber.isNaN​ interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isZero: function (...args) {
            console.warn("RationalNumber.isZero​ interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        toString: function (...args) {
            console.warn("RationalNumber.toString interface mocked in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramStringMock;
        }
    }
    const LrubufferMock = {
        length: '[PC preview] unknow length',
        updateCapacity: function (...args) {
            console.warn("Lrubuffer.updateCapacity interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
        },
        toString: function (...args) {
            console.warn("Lrubuffer.toString interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
        getCapacity: function (...args) {
            console.warn("Lrubuffer.getCapacity interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        clear: function (...args) {
            console.warn("Lrubuffer.clear interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
        },
        getCreateCount: function (...args) {
            console.warn("Lrubuffer.getCreateCount interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        getMissCount: function (...args) {
            console.warn("Lrubuffer.getMissCount interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        getRemovalCount: function (...args) {
            console.warn("Lrubuffer.getRemovalCount interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        getMatchCount: function (...args) {
            console.warn("Lrubuffer.getMatchCount interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        getPutCount: function (...args) {
            console.warn("Lrubuffer.getPutCount interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        isEmpty: function (...args) {
            console.warn("Lrubuffer.isEmpty​ interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        get: function (...args) {
            console.warn("Lrubuffer.get interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramObjectMock;
        },
        put: function (...args) {
            console.warn("Lrubuffer.put interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramObjectMock;
        },
        values: function (...args) {
            console.warn("Lrubuffer.values interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramObjectMock;
        },
        keys: function (...args) {
            console.warn("Lrubuffer.keys​ interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramObjectMock;
        },
        remove: function (...args) {
            console.warn("Lrubuffer.remove interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramObjectMock;
        },
        afterRemoval: function (...args) {
            console.warn("Lrubuffer.afterRemoval interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
        },
        contains: function (...args) {
            console.warn("Lrubuffer.contains​ interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        createDefault: function (...args) {
            console.warn("Lrubuffer.createDefault​ interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramObjectMock;
        },
        entries: function (...args) {
            console.warn("Lrubuffer.entries interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramObjectMock;
        },
        [Symbol.iterator]: function (...args) {
            console.warn("Lrubuffer.[Symbol.iterator] interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramObjectMock;
        }
    }
    const ScopeMock = {
        toString: function (...args) {
            console.warn("Scope.toString interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
        intersect: function (...args) {
            console.warn("Scope.intersect interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramScopeMock;
        },
        intersect: function (...args) {
            console.warn("Scope.intersect interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramScopeMock;
        },
        getUpper: function (...args) {
            console.warn("Scope.getUpper interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramScopeTypeMock;
        },
        getLower: function (...args) {
            console.warn("Scope.getLower interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramScopeTypeMock;
        },
        expand: function (...args) {
            console.warn("Scope.expand interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramScopeMock;
        },
        expand: function (...args) {
            console.warn("Scope.expand interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramScopeMock;
        },
        expand: function (...args) {
            console.warn("Scope.expand interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramScopeMock;
        },
        contains: function (...args) {
            console.warn("Scope.contains interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        contains: function (...args) {
            console.warn("Scope.contains interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        clamp: function (...args) {
            console.warn("Scope.clamp interface mockecd in the Previewer. How this interface works on the Previewer" +
                "may be different from that on a real device.")
            return paramMock.paramScopeTypeMock;
        }
    }
    const Base64Mock = {
        encodeSync: function (...args) {
            console.warn("Base64.encodeSync interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            const arr = new Uint8Array()
            return arr;
        },
        encodeToStringSync: function (...args) {
            console.warn("Base64.encodeToStringSync interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
        decodeSync: function (...args) {
            console.warn("Base64.decodeSync interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            const arr = new Uint8Array()
            return arr;
        },
        encode: function (...args) {
            console.warn("Base64.encode interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            const arr = new Uint8Array()
            return new Promise((resolve, reject) => {
                resolve(arr);
            })
        },
        encodeToString: function (...args) {
            console.warn("Base64.encodeToString interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return new Promise((resolve, reject) => {
                resolve(paramMock.paramStringMock);
            })
        },
        decode: function (...args) {
            console.warn("Base64.decode interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            const arr = new Uint8Array()
            return new Promise((resolve, reject) => {
                resolve(arr);
            })
        }
    }
    const TypesMock = {
        isAnyArrayBuffer: function(...args) {
            console.warn("Types.isAnyArrayBuffer interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isArrayBufferView: function(...args) {
            console.warn("Types.isArrayBufferView interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isArgumentsObject: function(...args) {
            console.warn("Types.isArgumentsObject interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isArrayBuffer: function(...args) {
            console.warn("Types.isArrayBuffer interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isAsyncFunction: function(...args) {
            console.warn("Types.isAsyncFunction interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isBigInt64Array: function(...args) {
            console.warn("Types.isBigInt64Array interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isBigUint64Array: function(...args) {
            console.warn("Types.isBigUint64Array interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isBooleanObject: function(...args) {
            console.warn("Types.isBooleanObject interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isBoxedPrimitive: function(...args) {
            console.warn("Types.isBoxedPrimitive interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isDataView: function(...args) {
            console.warn("Types.isDataView interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isDate: function(...args) {
            console.warn("Types.isDate interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isExternal: function(...args) {
            console.warn("Types.isExternal interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isFloat32Array: function(...args) {
            console.warn("Types.isFloat32Array interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isFloat64Array: function(...args) {
            console.warn("Types.isFloat64Array interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isGeneratorFunction: function(...args) {
            console.warn("Types.isGeneratorFunction interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isGeneratorObject: function(...args) {
            console.warn("Types.isGeneratorObject interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isInt8Array: function(...args) {
            console.warn("Types.isInt8Array interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isInt16Array: function(...args) {
            console.warn("Types.isInt16Array interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isInt32Array: function(...args) {
            console.warn("Types.isInt32Array interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isMap: function(...args) {
            console.warn("Types.isMap interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isMapIterator: function(...args) {
            console.warn("Types.isMapIterator interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isModuleNamespaceObject: function(...args) {
            console.warn("Types.isModuleNamespaceObject interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isNativeError: function(...args) {
            console.warn("Types.isNativeError interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isNumberObject: function(...args) {
            console.warn("Types.isNumberObject interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isPromise: function(...args) {
            console.warn("Types.isPromise interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isProxy: function(...args) {
            console.warn("Types.isProxy interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isRegExp: function(...args) {
            console.warn("Types.isRegExp interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isSet: function(...args) {
            console.warn("Types.isSet interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isSetIterator: function(...args) {
            console.warn("Types.isSetIterator interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isSharedArrayBuffer: function(...args) {
            console.warn("Types.isSharedArrayBuffer interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isStringObject: function(...args) {
            console.warn("Types.isStringObject interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isSymbolObject: function(...args) {
            console.warn("Types.isSymbolObject interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isTypedArray: function(...args) {
            console.warn("Types.isTypedArray interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isUint8Array: function(...args) {
            console.warn("Types.isUint8Array interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isUint8ClampedArray: function(...args) {
            console.warn("Types.isUint8ClampedArray interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isUint16Array: function(...args) {
            console.warn("Types.isUint16Array interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isUint32Array: function(...args) {
            console.warn("Types.isUint32Array interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isWeakMap: function(...args) {
            console.warn("Types.isWeakMap interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        isWeakSet: function(...args) {
            console.warn("Types.isWeakSet interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        }
    }
    return result;
}
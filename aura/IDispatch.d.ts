import {IUnknown} from "./IUnknown";

/**
 * https://en.wikipedia.org/wiki/IDispatch
 */
export interface IDispatch extends IUnknown{
    GetTypeInfoCount(),
    GetTypeInfo()
    GetIDsOfNames(),
    Invoke()
}

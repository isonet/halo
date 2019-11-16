import {IAuraRgbKey} from "./IAuraRgbKey";
import {IDispatch} from "./IDispatch";
import {IUnknown} from "./IUnknown";

/**
 * The collection interface of IAuraRgbKey.
 * Interface ID: {81C61F82-4DA0-4081-BDDE-108E1FCDDA7F}
 */
export interface IAuraRgbKeyCollection extends IDispatch {
    /**
     * The enumerator used by scripting languages such as Visual Basic and C#.
     */
    _NewEnum: IUnknown,
    /**
     * Number of IAuraRgbKey in this collection.
     */
    Count: number,
    /**
     * Array of IAuraRgbKey.
     */
    Item: Array<IAuraRgbKey>
}

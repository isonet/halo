import {IAuraRgbLight} from "./IAuraRgbLight";
import {IDispatch} from "./IDispatch";
import {IUnknown} from "./IUnknown";

/**
 * The collection interface of IAuraRgbLight.
 * Interface ID: {003065BC-B562-454E-ADCB-A9B70042D486}
 */
export interface IAuraRgbLightCollection extends IDispatch {
    /**
     * The enumerator used by scripting languages such as Visual Basic and C#.
     */
    _NewEnum: IUnknown,
    /**
     * Number of IAuraRgbLight in this collection.
     */
    Count: number,
    /**
     * Array of IAuraRgbLight.
     */
    Item: Array<IAuraRgbLight>
}

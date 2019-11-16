import {IAuraSyncDevice} from "./IAuraSyncDevice";
import {IDispatch} from "./IDispatch";
import {IUnknown} from "./IUnknown";

/**
 * The collection interface of IAuraSyncDevice.
 * Interface ID: {87FC56AB-99CA-4FD3-B561-2EEDD719DA57}
 */
export interface IAuraSyncDeviceCollection extends IDispatch {
    /**
     * The enumerator used by scripting languages such as Visual Basic and C#.
     */
    _NewEnum: IUnknown,
    /**
     * Number of IAuraSyncDevice in this collection.
     */
    Count: number,
    /**
     * Array of IAuraSyncDevice.
     */
    Item: Array<IAuraSyncDevice>
}

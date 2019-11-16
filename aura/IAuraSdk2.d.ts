import {IAuraSdk} from "./IAuraSdk";

/**
 * The updated Aura SDK interface which provides method to release control.
 * This interface inherits IAuraSdk and provides all methods that IAuraSdk provides. As a result, if you need to use release control explicitly, you can just use IAuraSdk2 instead of IAuraSdk.
 * This interface has been provided since version 1.02.01.
 * Interface ID: {EE69DBAE-33FF-4E45-B378-01797A59852D}
 */
interface IAuraSdk2 extends IAuraSdk {
    /**
     * Explicitly release control of all Aura devices. The LED effects of all Aura devices will be set to default effect.
     */
    ReleaseControl()
}


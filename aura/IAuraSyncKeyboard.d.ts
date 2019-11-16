import {IAuraSyncDevice} from "./IAuraSyncDevice";
import {IAuraRgbLight} from "./IAuraRgbLight";

/**
 * Interface to keyboard devices which supports Aura protocols.
 * For AURA Keyboard devices, sometimes you might want to specify the LED by Key Name or Scan Code.
 * In these cases, you can query the IAuraSyncKeyboard interface from IAuraSyncDevice interface.
 * Then you can use the properties / methods provided by IAuraSyncKeyboard to obtain the pointer of IAuraRgbLight of the key specified.
 * For example:
 * IAuraSyncDevice* pDevice;
 * // ..
 * // Get pDevice from some where...
 * // ..
 * IAuraSyncKeyboard* pKb;
 * HRESULT hr = pDevice->QueryInterface( __uuidof(IAuraSyncKeyboard), (void**)&pKb);
 * if(SUCCEEDED(hr))
 * {
 *    IAuraRgbLight* pLight;
 *    pKb->get_Key(scancode, &pLight);
 *    // ..
 *    // Do something with the light of the key...
 *   // ..
 *   pLight->Release();
 *   pKb->Release();
 * }
 * pDevice->Release();
 *
 * This interface inherits IAuraSyncDevice, so all properties & methods in IAuraSyncDevice are still available from this interface.
 * Interface ID: {87B03DD6-59E6-44F5-8772-56A7494F9900}
 */
export interface IAuraSyncKeyboard extends IAuraSyncDevice {
    /**
     * An array of pointers to IAuraRgbLight.
     * The index of this array is the Key Code of each IAuraRgbLight. As a result, you can get corresponding IAuraRgbLight via the Key Code.
     * All Key Codes which AURA SDK supports are listed in Appendix A.
     */
    Key: Array<IAuraRgbLight>,
    /**
     * A collection of all keys.
     * An IAuraRgbKeyCollection that contains all IAuraRgbKey's which are available on this IAuraSyncKeyboard device.
     * You can get key code and (X,Y) coordinate of each key via its IAuraRgbKey interface.
     */
    Keys: Array<IAuraRgbLight>,
}

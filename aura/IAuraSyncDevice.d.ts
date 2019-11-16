import {IAuraRgbLightCollection} from "./IAuraRgbLightCollection";

/**
 * Interface to devices which supports Aura protocols.
 * Interface ID: {6A30D789-F5DA-4F26-BF09-6DFB9DEDF91E}
 */
export interface IAuraSyncDevice {
    /**
     * Apply LED settings in IAuraSyncDevice::Lights to physical devices.
     */
    Apply (),
    /**
     * The collection of all LED's of this device.
     * All LED's are listed as a 1D array in IAuraRgbLightCollection::Item. If the LED's form a matrix layout (such as keyboards), the 2D matrix are stored in row-major in IAuraRgbLightCollection::Item.
     * If you want to control the LED of a specific key on keyboard devices via Key Name(or Scan Code, more precisely), you can do that via IAuraSyncKeyboard interface.
     */
    Lights: Array<IAuraRgbLightCollection>,
    /**
     * Type ID of this device.
     * The meaning of each type ID is identical to the ones used in IAuraSdk::Enumerate().
     */
    Type: number,
    /**
     * Name of this device in human-readable string.
     */
    Name: string,
    /**
     * Number of columns of each row of LED's.
     */
    Width: number,
    /**
     * Number of rows of each row of LED's.
     */
    Height: number
}

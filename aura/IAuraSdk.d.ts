/**
 * Interface to COM Class AuraSdk.
 * Interface ID: {3CED2297-27BD-492C-9934-D1D153B0FAC1}
 */
import {IAuraSyncDeviceCollection} from "./IAuraSyncDeviceCollection";

export interface IAuraSdk {
    /**
     * Enumerate supported devices.
     * @param devType The type ID of devices that should be enumerated.
     */
    Enumerate(devType: DeviceType): IAuraSyncDeviceCollection,

    /**
     * Aquire LED control. This method should be called once before all further AURA SDK operations.
     * Note that since version 1.02.01, the LED control will be released implicitly if the application is shut down properly.
     * If you need to release control before closing the application, please use IAuraSdk2 instead of IAuraSdk and call IAuraSdk2::ReleaseControl() to release.
     */
    SwitchMode()
}

/**
 * Supported type ID's
 */
export enum DeviceType {
    All = 0x00000000,
    Motherboard = 0x00010000,
    MotherboardLEDStrip = 0x00011000,
    AllInOnePC = 0x00012000,
    VGA = 0x00020000,
    Display = 0x00030000,
    Headset = 0x00040000,
    Microphone = 0x00050000,
    ExternalHDD = 0x00060000,
    ExternalBDDrive = 0x00061000,
    DRAM = 0x00070000,
    Keyboard = 0x00080000,
    NotebookKeyboard = 0x00081000,
    NotebookKeyboard4ZoneType = 0x00081001,
    Mouse = 0x00090000,
    Chassis = 0x000B0000,
    Projector = 0x000C0000
}


import {IAuraRgbLight} from "./IAuraRgbLight";

/**
 * Interface to LED's on keyboard devices.
 * This interface extends IAuraRgbLight interface with keyboard-only properties.
 * Since it inherits IAuraRgbLight, all properties in IAuraRgbLight can still be accessed via this interface.
 * Interface ID: {95E6C828-6DE4-441E-873A-C44AE850F3A2}
 */
export interface IAuraRgbKey extends IAuraRgbLight{
    /**
     * Key Code of this key.
     * Full list of Key Codes can be found below.
     */
    Code: number,
    /**
     * The column value of this key's location in IAuraSyncDevice::Lights.
     */
    X: number,
    /**
     * The row value of this key's location in IAuraSyncDevice::Lights.
     */
    Y: number
}


/**
 * Key Name	Key Code	Note
 ROG_KEY_ESCAPE	0x0001
 ROG_KEY_1	0x0002
 ROG_KEY_2	0x0003
 ROG_KEY_3	0x0004
 ROG_KEY_4	0x0005
 ROG_KEY_5	0x0006
 ROG_KEY_6	0x0007
 ROG_KEY_7	0x0008
 ROG_KEY_8	0x0009
 ROG_KEY_9	0x000A
 ROG_KEY_0	0x000B
 ROG_KEY_MINUS	0x000C	- on main keyboard
 ROG_KEY_EQUALS	0x000D
 ROG_KEY_BACK	0x000E	backspace
 ROG_KEY_TAB	0x000F
 ROG_KEY_Q	0x0010
 ROG_KEY_W	0x0011
 ROG_KEY_E	0x0012
 ROG_KEY_R	0x0013
 ROG_KEY_T	0x0014
 ROG_KEY_Y	0x0015
 ROG_KEY_U	0x0016
 ROG_KEY_I	0x0017
 ROG_KEY_O	0x0018
 ROG_KEY_P	0x0019
 ROG_KEY_LBRACKET	0x001A
 ROG_KEY_RBRACKET	0x001B
 ROG_KEY_RETURN	0x001C	Enter on main keyboard
 ROG_KEY_LCONTROL	0x001D
 ROG_KEY_A	0x001E
 ROG_KEY_S	0x001F
 ROG_KEY_D	0x0020
 ROG_KEY_F	0x0021
 ROG_KEY_G	0x0022
 ROG_KEY_H	0x0023
 ROG_KEY_J	0x0024
 ROG_KEY_K	0x0025
 ROG_KEY_L	0x0026
 ROG_KEY_SEMICOLON	0x0027
 ROG_KEY_APOSTROPHE	0x0028
 ROG_KEY_GRAVE	0x0029	Accent grave
 ROG_KEY_LSHIFT	0x002A
 ROG_KEY_BACKSLASH	0x002B
 ROG_KEY_Z	0x002C
 ROG_KEY_X	0x002D
 ROG_KEY_C	0x002E
 ROG_KEY_V	0x002F
 ROG_KEY_B	0x0030
 ROG_KEY_N	0x0031
 ROG_KEY_M	0x0032
 ROG_KEY_COMMA	0x0033
 ROG_KEY_PERIOD	0x0034	. on main keyboard
 ROG_KEY_SLASH	0x0035	/ on main keyboard
 ROG_KEY_RSHIFT	0x0036
 ROG_KEY_MULTIPLY	0x0037	* on numeric keypad
 ROG_KEY_LMENU	0x0038	Left Alt
 ROG_KEY_SPACE	0x0039
 ROG_KEY_CAPITAL	0x003A
 ROG_KEY_F1	0x003B
 ROG_KEY_F2	0x003C
 ROG_KEY_F3	0x003D
 ROG_KEY_F4	0x003E
 ROG_KEY_F5	0x003F
 ROG_KEY_F6	0x0040
 ROG_KEY_F7	0x0041
 ROG_KEY_F8	0x0042
 ROG_KEY_F9	0x0043
 ROG_KEY_F10	0x0044
 ROG_KEY_NUMLOCK	0x0045
 ROG_KEY_SCROLL	0x0046	Scroll Lock
 ROG_KEY_NUMPAD7	0x0047
 ROG_KEY_NUMPAD8	0x0048
 ROG_KEY_NUMPAD9	0x0049
 ROG_KEY_SUBTRACT	0x004A	- on numeric keypad
 ROG_KEY_NUMPAD4	0x004B
 ROG_KEY_NUMPAD5	0x004C
 ROG_KEY_NUMPAD6	0x004D
 ROG_KEY_ADD	0x004E	+ on numeric keypad
 ROG_KEY_NUMPAD1	0x004F
 ROG_KEY_NUMPAD2	0x0050
 ROG_KEY_NUMPAD3	0x0051
 ROG_KEY_NUMPAD0	0x0052
 ROG_KEY_DECIMAL	0x0053	. on numeric keypad
 ROG_KEY_F11	0x0057
 ROG_KEY_F12	0x0058
 ROG_KEY_NUMPADENTER	0x009C	Enter on numeric keypad
 ROG_KEY_RCONTROL	0x009D
 ROG_KEY_DIVIDE	0x00B5	/ on numeric keypad
 ROG_KEY_SYSRQ	0x00B7
 ROG_KEY_RMENU	0x00B8	Right Alt
 ROG_KEY_PAUSE	0x00C5	Pause
 ROG_KEY_HOME	0x00C7	Home on arrow keypad
 ROG_KEY_UP	0x00C8	Up on arrow keypad
 ROG_KEY_PRIOR	0x00C9	PgUp on arrow keypad
 ROG_KEY_LEFT	0x00CB	Left on arrow keypad
 ROG_KEY_RIGHT	0x00CD	Right on arrow keypad
 ROG_KEY_END	0x00CF	End on arrow keypad
 ROG_KEY_DOWN	0x00D0	Down on arrow keypad
 ROG_KEY_NEXT	0x00D1	PgDn on arrow keypad
 ROG_KEY_INSERT	0x00D2	Insert on arrow keypad
 ROG_KEY_DELETE	0x00D3	Delete on arrow keypad
 ROG_KEY_LWIN	0x00DB	Left Windows key
 ROG_KEY_APPS	0x00DD	AppMenu key
 ROG_KEY_FN	0x0100	Function key

 */

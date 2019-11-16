/**
 * Interface to RGB lights/LED's.
 * Interface ID: {9AF6260E-4311-417D-B3EF-B85A34CF3244}
 */
export interface IAuraRgbLight {
    /**
     * The Red color value of this RGB LED.
     */
    Red: number,
    /**
     * The Green color value of this RGB LED.
     */
    Green: number,
    /**
     * The Blue color value of this RGB LED.
     */
    Blue: number,
    /**
     * Name of this RGB light in human-readable string.
     */
    Name: string,
    /**
     * The color value of this RGB LED.
     * Bit 0~7: The Red color value (0~255)
     * Bit 8~15: The Green color value (0~255)
     * Bit 16~23: The Blue color value (0~255)
     * Bit 24~31: Not used and reserved.
     */
    Color: number
}

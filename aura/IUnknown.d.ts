/**
 * https://en.wikipedia.org/wiki/IUnknown
 */
export interface IUnknown {
    QueryInterface(riid: any),
    AddRef(): number,
    Release(): number
}

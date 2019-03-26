interface IDateRange {
    from: Date;
    to: Date;
}
/**
 * Generates random dates based on a range
 *
 * @param { IDateRange } range
 */
export declare function randomDate(range?: IDateRange): Date;
export {};

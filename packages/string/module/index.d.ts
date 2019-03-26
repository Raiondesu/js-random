interface IStringOptions {
    length?: number;
    seed?: string;
    filter?: RegExp;
}
/**
 * Generates random string
 *
 * @param optionsOrLength string's length or object-style options
 * @param seed (optional) a string to be used as a seed for the new random string
 * @param filter to filter the resulting string by
 */
export declare function randomString(optionsOrLength?: number | IStringOptions, seed?: string, filter?: RegExp): string;
export {};

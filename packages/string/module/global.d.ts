declare global {
    interface StringConstructor {
        random: typeof import('./index').randomString;
    }
}
export {};

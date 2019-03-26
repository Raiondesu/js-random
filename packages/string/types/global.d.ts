declare global {
    interface StringConstructor {
        random: typeof import('./index').default;
    }
}
export {};

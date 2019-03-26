declare global {
    interface NumberConstructor {
        random: typeof import('./index').default;
    }
}
export {};

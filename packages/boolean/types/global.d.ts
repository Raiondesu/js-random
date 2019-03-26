declare global {
    interface BooleanConstructor {
        random: typeof import('./index').default;
    }
}
export {};

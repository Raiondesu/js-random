declare global {
    interface BooleanConstructor {
        random: typeof import('./index').randomBoolean;
    }
}
export {};

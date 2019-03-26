declare global {
    interface DateConstructor {
        random: typeof import('./index').default;
    }
}
export {};

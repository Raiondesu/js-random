declare global {
    interface DateConstructor {
        random: typeof import('./index').randomDate;
    }
}
export {};

declare global {
    interface NumberConstructor {
        random: typeof import('./index').randomNumber;
    }
}
export {};

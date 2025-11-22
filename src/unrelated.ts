declare global {
    interface SymbolConstructor {
        readonly metadata: unique symbol;
    }
}
// @ts-ignore
Symbol.metadata ??= Symbol.for("Symbol.metadata");
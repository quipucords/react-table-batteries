/**
 * Identifier for a feature of the table. State concerns are separated by feature.
 */
export const TABLE_FEATURES = ['filter', 'sort', 'pagination', 'selection', 'expansion', 'activeItem'];
// TODO can we simplify by going the other direction? Explicitly put the whole batteries object type here,
// then pick from it for other places that need properties and partials from it.
// perhaps assert that the full object and its combined parts are equal with a type equality guard
// (see https://stackoverflow.com/a/73461648/22769581 for an example)
//# sourceMappingURL=types.js.map
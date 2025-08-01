import React from 'react';
import { TableFeature } from './types';
import { MergedArgs } from './type-utils';
/**
 * Works around problems caused by event propagation when handling a clickable element that contains other clickable elements.
 * - Used internally by useTablePropHelpers for the active item feature, but is generic and could be used outside tables.
 * - When a click event happens within a row, checks if there is a clickable element in between the target node and the row element.
 *   (For example: checkboxes, buttons or links).
 * - Prevents triggering the row click behavior when inner clickable elements or their children are clicked.
 */
export declare const handlePropagatedRowClick: <E extends React.KeyboardEvent | React.MouseEvent>(event: E | undefined, onRowClick: (event: E) => void) => void;
export declare const objectKeys: <T extends object>(obj: T) => (keyof T)[];
export declare const parseMaybeNumericString: (numOrStr: string | undefined | null) => string | number | null;
/**
 * mergeArgs takes two objects which may or may not include feature sub-objects
 * (any two pieces of the partially-constructed TableBatteries object)
 * and combines them, deeply merging the properties in the feature objects.
 * This is used in hooks to combine args, state and derived state to construct the batteries object.
 * @see MergedArgs
 */
export declare const mergeArgs: <A extends Partial<Record<TableFeature, object>>, B extends Partial<Record<TableFeature, object>>, TIncludedFeatures extends TableFeature = TableFeature>(a: A, b: B) => MergedArgs<A, B, TIncludedFeatures>;
//# sourceMappingURL=utils.d.ts.map
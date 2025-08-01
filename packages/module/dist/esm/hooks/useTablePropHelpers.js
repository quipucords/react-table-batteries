import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { useFilterPropHelpers } from './filtering';
import { useSortPropHelpers } from './sorting';
import { usePaginationPropHelpers } from './pagination';
import { useSelectionPropHelpers } from './selection';
import { useExpansionPropHelpers } from './expansion';
import { useActiveItemPropHelpers } from './active-item';
import { handlePropagatedRowClick, mergeArgs, objectKeys } from '../utils';
import { useTableComponents } from './useTableComponents';
/**
 * Returns derived state and prop helpers for all features. Used to make rendering the table components easier.
 * - Takes "source of truth" state and table-level derived state (derived either on the server or in useClientTableDerivedState)
 *   along with API data and additional args.
 * - Also triggers side-effects for some features to prevent invalid state.
 * - If you aren't using server-side filtering/sorting/pagination, call this via the shorthand hook useClientTableBatteries.
 * - If you are using server-side filtering/sorting/pagination, call this last after calling useTableState and fetching your API data.
 * @see useClientTableBatteries
 * @see useTableState
 * @see useClientTableDerivedState
 */
export const useTablePropHelpers = (args) => {
    var _a, _b;
    // Note: To avoid repetition, not all args are destructured here since the entire
    //       args object is passed to other other helpers which require other parts of it.
    //       For future additions, inspect `args` to see if it has anything more you need.
    const { forceNumRenderedColumns, columnNames, hasActionsColumn = false, variant } = args;
    const columnKeys = objectKeys(columnNames);
    // Some table controls rely on extra columns inserted before or after the ones included in columnNames.
    // We need to account for those when dealing with props based on column index and colSpan.
    let numColumnsBeforeData = 0;
    let numColumnsAfterData = 0;
    if (args.selection.isEnabled) {
        numColumnsBeforeData++;
    }
    if (args.expansion.isEnabled && args.expansion.variant === 'single') {
        numColumnsBeforeData++;
    }
    if (hasActionsColumn) {
        numColumnsAfterData++;
    }
    const numRenderedColumns = forceNumRenderedColumns || columnKeys.length + numColumnsBeforeData + numColumnsAfterData;
    const { filterPropsForToolbar, propsForFilterToolbar } = useFilterPropHelpers(args);
    const { getSortThProps } = useSortPropHelpers(Object.assign(Object.assign({}, args), { columnKeys }));
    const { paginationProps, paginationToolbarItemProps } = usePaginationPropHelpers(args);
    const { selectionDerivedState, toolbarBulkSelectorProps, getSelectCheckboxTdProps } = useSelectionPropHelpers(Object.assign(Object.assign({}, args), { paginationProps }));
    const { expansionDerivedState, getSingleExpandButtonTdProps, getCompoundExpandTdProps, getExpandedContentTdProps } = useExpansionPropHelpers(Object.assign(Object.assign({}, args), { columnKeys, numRenderedColumns }));
    const { activeItemDerivedState, getActiveItemTrProps } = useActiveItemPropHelpers(args);
    const toolbarProps = Object.assign({ className: variant === 'compact' ? spacing.pt_0 : '' }, (((_a = args.filter) === null || _a === void 0 ? void 0 : _a.isEnabled) && filterPropsForToolbar));
    const tableProps = {
        variant,
        isExpandable: (_b = args.expansion) === null || _b === void 0 ? void 0 : _b.isEnabled
    };
    const getThProps = ({ columnKey }) => {
        var _a;
        return (Object.assign(Object.assign({}, (((_a = args.sort) === null || _a === void 0 ? void 0 : _a.isEnabled) && getSortThProps({ columnKey: columnKey }))), { children: columnNames[columnKey] }));
    };
    const getTrProps = ({ item, onRowClick }) => {
        var _a;
        if (!item) {
            return {};
        }
        const activeItemTrProps = getActiveItemTrProps({ item });
        return Object.assign(Object.assign({}, (((_a = args.activeItem) === null || _a === void 0 ? void 0 : _a.isEnabled) && activeItemTrProps)), { onRowClick: (event) => handlePropagatedRowClick(event, () => {
                var _a;
                (_a = activeItemTrProps.onRowClick) === null || _a === void 0 ? void 0 : _a.call(activeItemTrProps, event);
                onRowClick === null || onRowClick === void 0 ? void 0 : onRowClick(event);
            }) });
    };
    const getTdProps = (getTdPropsArgs) => {
        var _a, _b;
        const { columnKey } = getTdPropsArgs;
        return Object.assign({ dataLabel: columnNames[columnKey] }, (((_a = args.expansion) === null || _a === void 0 ? void 0 : _a.isEnabled) &&
            ((_b = args.expansion) === null || _b === void 0 ? void 0 : _b.variant) === 'compound' &&
            getTdPropsArgs.isCompoundExpandToggle &&
            getCompoundExpandTdProps({
                columnKey,
                item: getTdPropsArgs.item,
                rowIndex: getTdPropsArgs.rowIndex
            })));
    };
    const batteriesWithoutComponents = Object.assign(Object.assign({}, mergeArgs(args, {
        selection: selectionDerivedState,
        expansion: expansionDerivedState,
        activeItem: activeItemDerivedState
    })), { numColumnsBeforeData,
        numColumnsAfterData,
        numRenderedColumns, propHelpers: {
            toolbarProps,
            tableProps,
            getThProps,
            getTrProps,
            getTdProps,
            filterToolbarProps: propsForFilterToolbar,
            paginationProps,
            paginationToolbarItemProps,
            toolbarBulkSelectorProps,
            getSelectCheckboxTdProps,
            getSingleExpandButtonTdProps,
            getExpandedContentTdProps
        } });
    return Object.assign(Object.assign({}, batteriesWithoutComponents), { components: useTableComponents(batteriesWithoutComponents) });
};
//# sourceMappingURL=useTablePropHelpers.js.map
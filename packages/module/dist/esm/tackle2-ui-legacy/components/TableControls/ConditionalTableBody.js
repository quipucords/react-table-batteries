import React from 'react';
import { Bullseye, Spinner } from '@patternfly/react-core';
import { Tbody, Tr, Td } from '@patternfly/react-table';
import { StateError } from './StateError';
import { StateNoData } from './StateNoData';
export const ConditionalTableBody = ({ numRenderedColumns, isLoading = false, isError = false, isNoData = false, errorEmptyState = null, noDataEmptyState = null, children }) => (React.createElement(React.Fragment, null, isLoading ? (React.createElement(Tbody, null,
    React.createElement(Tr, null,
        React.createElement(Td, { colSpan: numRenderedColumns },
            React.createElement(Bullseye, null,
                React.createElement(Spinner, { size: "xl" })))))) : isError ? (React.createElement(Tbody, { "aria-label": "Table error" },
    React.createElement(Tr, null,
        React.createElement(Td, { colSpan: numRenderedColumns },
            React.createElement(Bullseye, null, errorEmptyState || React.createElement(StateError, null)))))) : isNoData ? (React.createElement(Tbody, { "aria-label": "Table error" },
    React.createElement(Tr, null,
        React.createElement(Td, { colSpan: numRenderedColumns },
            React.createElement(Bullseye, null, noDataEmptyState || React.createElement(StateNoData, null)))))) : (children)));
//# sourceMappingURL=ConditionalTableBody.js.map
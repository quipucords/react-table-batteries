import React from 'react';
import { EmptyState, EmptyStateBody, EmptyStateIcon, EmptyStateVariant, Title } from '@patternfly/react-core';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';
export const NoDataEmptyState = ({ title, description }) => (React.createElement(EmptyState, { variant: EmptyStateVariant.sm },
    React.createElement(EmptyStateIcon, { icon: CubesIcon }),
    React.createElement(Title, { headingLevel: "h2", size: "lg" }, title),
    description && React.createElement(EmptyStateBody, null, description)));
//# sourceMappingURL=NoDataEmptyState.js.map
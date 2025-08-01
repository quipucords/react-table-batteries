import React from 'react';
import { EmptyState, EmptyStateIcon, EmptyStateVariant, Title, EmptyStateBody } from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import { global_danger_color_200 as globalDangerColor200 } from '@patternfly/react-tokens';
export const StateError = () => (React.createElement(EmptyState, { variant: EmptyStateVariant.sm },
    React.createElement(EmptyStateIcon, { icon: ExclamationCircleIcon, color: globalDangerColor200.value }),
    React.createElement(Title, { headingLevel: "h2", size: "lg" }, "Unable to connect"),
    React.createElement(EmptyStateBody, null, "There was an error retrieving data. Check your connection and try again.")));
//# sourceMappingURL=StateError.js.map
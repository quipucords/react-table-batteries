import { __rest } from "tslib";
import React from 'react';
import { Button } from '@patternfly/react-core';
export const ExtendedButton = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const [currentVariantIndex, setCurrentVariantIndex] = React.useState(0);
    const buttonVariants = ['primary', 'secondary', 'tertiary'];
    const handleClick = () => {
        setCurrentVariantIndex((previousVariantIndex) => (previousVariantIndex + 1) % buttonVariants.length);
    };
    return (React.createElement(Button, Object.assign({ onClick: handleClick, variant: buttonVariants[currentVariantIndex] }, props), children));
};
//# sourceMappingURL=ExtendedButton.js.map
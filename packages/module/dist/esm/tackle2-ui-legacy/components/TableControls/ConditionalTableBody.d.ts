import React from 'react';
export interface ConditionalTableBodyProps {
    numRenderedColumns: number;
    isLoading?: boolean;
    isError?: boolean;
    isNoData?: boolean;
    errorEmptyState?: React.ReactNode;
    noDataEmptyState?: React.ReactNode;
    children: React.ReactNode;
}
export declare const ConditionalTableBody: React.FC<ConditionalTableBodyProps>;
//# sourceMappingURL=ConditionalTableBody.d.ts.map
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BdTablePagination} from './BdTablePagination';

describe('<BdTablePagination />', () => {
    test('it should mount', () => {
        render(<BdTablePagination />);

        const bdIconChip = screen.getByTestId('BdTablePagination');

        expect(bdIconChip).toBeInTheDocument();
    });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BdAbortIcon} from './BdAbortIcon';

describe('<BdAbortIcon />', () => {
    test('it should mount', () => {
        render(<BdAbortIcon />);

        const bdIconChip = screen.getByTestId('BdAbortIcon');

        expect(bdIconChip).toBeInTheDocument();
    });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BdInProgressIcon} from './BdInProgressIcon';

describe('<BdInProgressIcon />', () => {
    test('it should mount', () => {
        render(<BdInProgressIcon />);

        const bdIconChip = screen.getByTestId('BdInProgressIcon');

        expect(bdIconChip).toBeInTheDocument();
    });
});

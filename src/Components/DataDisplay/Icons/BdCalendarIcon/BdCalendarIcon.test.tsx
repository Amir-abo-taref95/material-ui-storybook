import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BdCalendarIcon} from './BdCalendarIcon';

describe('<BdCalendarIcon />', () => {
    test('it should mount', () => {
        render(<BdCalendarIcon />);

        const bdIconChip = screen.getByTestId('BdCalendarIcon');

        expect(bdIconChip).toBeInTheDocument();
    });
});

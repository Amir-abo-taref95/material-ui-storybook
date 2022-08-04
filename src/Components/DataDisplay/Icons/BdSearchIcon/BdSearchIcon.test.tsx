import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BdSearchIcon} from './BdSearchIcon';

describe('<BdSearchIcon />', () => {
    test('it should mount', () => {
        render(<BdSearchIcon />);

        const bdIconChip = screen.getByTestId('BdSearchIcon');

        expect(bdIconChip).toBeInTheDocument();
    });
});

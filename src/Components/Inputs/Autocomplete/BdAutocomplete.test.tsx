import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BdAutocomplete} from './BdAutocomplete';

describe('<BdAutocomplete />', () => {
    test('it should mount', () => {
        // render(<BdAutocomplete />);

        const bdIconChip = screen.getByTestId('BdAutocomplete');

        expect(bdIconChip).toBeInTheDocument();
    });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BdCaretIcon} from './BdCaretIcon';

describe('<BdCaretIcon />', () => {
    test('it should mount', () => {
        render(<BdCaretIcon />);

        const bdIconChip = screen.getByTestId('BdCaretIcon');

        expect(bdIconChip).toBeInTheDocument();
    });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BdArrowIcon} from './BdArrowIcon';

describe('<BdArrowIcon />', () => {
    test('it should mount', () => {
        render(<BdArrowIcon />);

        const bdIconChip = screen.getByTestId('BdArrowIcon');

        expect(bdIconChip).toBeInTheDocument();
    });
});

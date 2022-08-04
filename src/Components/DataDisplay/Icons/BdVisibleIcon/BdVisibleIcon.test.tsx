import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BdVisibleIcon} from './BdVisibleIcon';

describe('<BdVisibleIcon />', () => {
    test('it should mount', () => {
        render(<BdVisibleIcon />);

        const bdIconChip = screen.getByTestId('BdVisibleIcon');

        expect(bdIconChip).toBeInTheDocument();
    });
});

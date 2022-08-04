import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BdNotVisibleIcon} from './BdNotVisibleIcon';

describe('<BdNotVisibleIcon />', () => {
    test('it should mount', () => {
        render(<BdNotVisibleIcon />);

        const bdIconChip = screen.getByTestId('BdNotVisibleIcon');

        expect(bdIconChip).toBeInTheDocument();
    });
});

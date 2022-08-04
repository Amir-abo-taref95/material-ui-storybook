import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BdBaseIcon} from './BdBaseIcon';

describe('<BdBaseIcon />', () => {
    test('it should mount', () => {
        render(<BdBaseIcon />);

        const bdIconChip = screen.getByTestId('BdBaseIcon');

        expect(bdIconChip).toBeInTheDocument();
    });
});

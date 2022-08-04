import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BdWaitingIcon} from './BdWaitingIcon';

describe('<BdWaitingIcon />', () => {
    test('it should mount', () => {
        render(<BdWaitingIcon />);

        const bdIconChip = screen.getByTestId('BdConfimedIcon');

        expect(bdIconChip).toBeInTheDocument();
    });
});

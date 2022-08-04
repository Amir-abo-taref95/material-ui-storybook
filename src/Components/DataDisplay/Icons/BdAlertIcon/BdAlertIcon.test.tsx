import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BdAlertIcon} from './BdAlertIcon';

describe('<BdAlertIcon />', () => {
    test('it should mount', () => {
        render(<BdAlertIcon />);

        const bdIconChip = screen.getByTestId('BdAlertIcon');

        expect(bdIconChip).toBeInTheDocument();
    });
});

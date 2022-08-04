import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BdMenuItem} from './BdMenuItem';

describe('<BdMenuItem />', () => {
    test('it should mount', () => {
        render(<BdMenuItem />);

        const bdIconChip = screen.getByTestId('BdMenuItem');

        expect(bdIconChip).toBeInTheDocument();
    });
});

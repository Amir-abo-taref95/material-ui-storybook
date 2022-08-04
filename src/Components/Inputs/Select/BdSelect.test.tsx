import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BdSelect} from './BdSelect';

describe('<BdSelect />', () => {
    test('it should mount', () => {
        render(<BdSelect items={[{
            value: 10,
            text: 10
        },{
            value: 16,
            text: 16
        },{
            value: 20,
            text: 20
        },{
            value: 24,
            text: 24
        },{
            value: '*',
            text: "הכל"
        }]}/>);

        const bdIconChip = screen.getByTestId('BdSelect');

        expect(bdIconChip).toBeInTheDocument();
    });
});

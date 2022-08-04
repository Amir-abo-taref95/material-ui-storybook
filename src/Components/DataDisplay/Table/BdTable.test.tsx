import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BdTable } from './BdTable';
import { DfuData } from './Mocks/DfuData';
import { DfuHeaders } from './Mocks/DfuHeaders';

describe('<DecisionsFollowupTable />', () => {
  test('it should mount', () => {
    render(<BdTable tableData={DfuData} headers={DfuHeaders} />);

    const bdIconChip = screen.getByTestId('DecisionsFollowupTable');

    expect(bdIconChip).toBeInTheDocument();
  });
});

/* eslint-disable */
import { BdTable } from './BdTable';
import { DfuData } from './Mocks/DfuData';
import { DfuHeaders } from './Mocks/DfuHeaders';

export default {
  title: 'Data Display/Table',
};

export const Default = () => (
  <BdTable tableData={DfuData} headers={DfuHeaders} />
);

Default.story = {
  name: 'Decisions Followup',
};

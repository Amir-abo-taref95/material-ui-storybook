import { BdTableFilter } from './BdTableFilter';

export interface BdTableHeader {
  Key: string;
  Text: string;
  Order: number;
  Filter: BdTableFilter | null;
}

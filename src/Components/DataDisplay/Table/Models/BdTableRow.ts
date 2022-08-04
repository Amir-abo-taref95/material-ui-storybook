export interface BdTableRow {
  CommitteeName: string;
  MeetingDate: string;
  TopicName: string;
  TopicTypeName: string;
  TopicCategoryName: string;
  UsersInCharge: { UserId: number; FullName: string }[];
  DisplayStatusInCommittee: boolean;
  DisplayStatusInBoard: boolean;
  DecisionStatus: string;
  Color: string;
  DecisionId: number;
}

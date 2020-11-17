export interface ContactListItem {
  Id: number;
  name: string;
  jobStatus: 0 | 1;
  account: string;
  tel: string;
  accountActivate: 0 | 1;
  entryTime: string;
  role: 0 | 1;
  houseNumber: number;
  mermberNumber: number;
  outerTime: string;
}

export interface TableListParams {
  sorter?: string;
  status?: string;
  name?: string;
  desc?: string;
  key?: number;
  pageSize?: number;
  currentPage?: number;
}

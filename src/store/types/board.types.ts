export interface BoardById {
  id: string;
  name: string;
  statuses: {
    id: string;
    name: string;
    cards: {
      description: string;
      id: string;
      title: string;
      order: number;
      statusId: string;
    }[];
  }[];
}

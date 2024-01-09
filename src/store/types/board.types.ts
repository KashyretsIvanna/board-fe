export interface BoardById {
  id: string;
  name: string;
  categories: {
    id: string;
    name: string;
    cards: {
      description: string;
      id: string;
      title: string;
      order: number;
      categoryId: string;
    }[];
  }[];
}

export interface Message {
  message: string;
}

export interface BaseEntity {
  id: string | null;
}

export interface Widget extends BaseEntity {
  title: string;
  description: string;
}
export interface Todo {
  id?: number;
  name: string;
  complete?: boolean;
  isLoading?: boolean;
}

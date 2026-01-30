import { http } from "@shared/api/http";

export interface BookDto {
  id: number;
  title: string;
  author: string;
}

export const getBooks = async () => {
  const response = await http.get<BookDto[]>("/books");
  return response.data;
};

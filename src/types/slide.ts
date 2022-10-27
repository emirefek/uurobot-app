import { image } from "./image";

type slide = {
  id: number;
  attributes: {
    title: string;
    content: string;
    image: image;
  };
};

export type slidesResponse = {
  data: slide[];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
};

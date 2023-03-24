export interface Film{
  _id: number;
  title: string;
  image: string;
  description: string;
  director: string;
  cast: string; // array di stringhe per effettuare una ricerca per attori 
  date: string;
  published: boolean;
}

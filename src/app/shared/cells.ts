export interface ICell {
  id: number;
  idHotel: number;
  name: string;
  cost: number;
  available: string;
}

export let cells: ICell[] = [
  {
    id: 1,
    idHotel: 1,
    name: 'Lite Cell',
    cost: 10,
    available: 1
  },
  {
    id: 2,
    idHotel: 1,
    name: 'Smart Cell',
    cost: 15,
    available: 0
  },
  {
    id: 3,
    idHotel: 1,
    name: 'Hard Cell',
    cost: 30,
    available: 0
  },
  {
    id: 4,
    idHotel: 1,
    name: 'Wide Cell',
    cost: 25,
    available: 2
  },
  {
    id: 1,
    idHotel: 2,
    name: 'Wide Cell',
    cost: 25,
    available: 0
  },
  {
    id: 1,
    idHotel: 3,
    name: 'Wide Cell',
    cost: 25,
    available: 0
  },
  {
    id: 2,
    idHotel: 3,
    name: 'Smart Cell',
    cost: 20,
    available: 3
  }
];

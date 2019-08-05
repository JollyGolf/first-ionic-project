export interface ICell {
  id: number;
  idHotel: number;
  name: string;
  cost: number;
  available: boolean;
}

export let cells: ICell[] = [
  {
    id: 1,
    idHotel: 1,
    name: 'Lite Cell',
    cost: 10,
    available: true
  },
  {
    id: 2,
    idHotel: 1,
    name: 'Smart Cell',
    cost: 15,
    available: true
  },
  {
    id: 3,
    idHotel: 1,
    name: 'Hard Cell',
    cost: 30,
    available: true
  },
  {
    id: 4,
    idHotel: 1,
    name: 'Wide Cell',
    cost: 25,
    available: false
  },
  {
    id: 1,
    idHotel: 2,
    name: 'Wide Cell',
    cost: 25,
    available: true
  },
  {
    id: 1,
    idHotel: 3,
    name: 'Wide Cell',
    cost: 25,
    available: true
  },
  {
    id: 2,
    idHotel: 3,
    name: 'Smart Cell',
    cost: 20,
    available: false
  }
];

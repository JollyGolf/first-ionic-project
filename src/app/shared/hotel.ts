export interface IHotel {
  id: number;
  name: string;
  description: string;
}

let ReactHotel: IHotel = {
  id: 1,
  name: 'React Hotel',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}

let AngularHotel: IHotel = {
  id: 2,
  name: 'Angular Hotel',
  description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}

let NativeHotel: IHotel = {
  id: 3,
  name: 'Native Hotel',
  description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

export let hotels: IHotel[] = [ReactHotel, AngularHotel, NativeHotel];
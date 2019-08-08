import gql from 'graphql-tag';

export const Cells = gql`
  query {
    cells {
      id
      name
      hotel{
        id
      }
    }
  }
`;

export const Hotels = gql`
  query {
    hotels{
      id
      name
      description
    }
  }
`;

export const Users = gql`
  query {
    users{
      id
      name
      password
    }
  }
`;

export const getHotelById = gql`
  query hotelById($id: ID!) {
    hotel(id: $id){
      id
      name
      cells {
        id
        name
      } 
    }
  }
`;

export const getCellById = gql`
  query cellById($id: ID!){
    cell(id: $id){
      id
      name
      number
      cost
      hotel{ id }
      user{ id }
    }
  }
`;

export const getUserById = gql`
  query userById($id: ID!) {
    user(id: $id){ 
      purse 
    }
  }
`;

export const updateUserMutation = gql`
  mutation userMutation($id: ID!, $purse: Int!){
    updateUser(id: $id, purse: $purse){
      id
    }
  }
`;

export const updateCellMutation = gql`
  mutation cellMutation($id: ID!, $available: ID!) {
    updateCell(id: $id, available: $available){ 
      id 
    } 
  }
`;


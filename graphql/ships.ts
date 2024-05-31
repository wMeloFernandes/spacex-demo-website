import gql from "graphql-tag";

const ships = gql`
  query Ships($input: ShipsInput!) {
    ships(input: $input) {
    id
    class
    name
    }
  }
`;

const query = { ships };
const mutations = {};
const Ships = { query, mutations };
export { Ships };

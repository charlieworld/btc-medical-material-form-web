import { graphql } from '@apollo/react-hoc';
import { gql } from "apollo-boost";

const query = graphql(gql`
  {
    admins {
      id
      name
      data {
        remark
      }
      created_at
    }
  }
`);

export default query;
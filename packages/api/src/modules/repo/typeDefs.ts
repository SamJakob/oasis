import { gql } from "apollo-server-micro";

export default gql`
  type Repo {
    id: ID!
    full_name: String!
    github_owner: String!
    github_name: String!
    github_url: String!
    githubID: ID!
    added_by: User!

    desc: String
    issues: Int
    language: String
    stars: Int
  }

  type Query {
    allRepos: [Repo]
    getRepo(full_name: String!): Repo!
  }
`;

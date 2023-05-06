const {gql} = require('apollo-server');

const typeDefs = gql`

type Query {
  "Query to get tracks array for the homepagede grid"
  tracksForHome: [Track!]!
  track(id: ID!): Track

}

"A track is a group of Modules that teaches about a specific topic."
type Track {
  id: ID!
  "The track's title"
  title: String!
  "The track's main author"
  author: Author!
  "The track's illustration to display in track card or track page detail"
  thumbnail: String
  "the track's approximate length in minutes"
  length: Int
  "The number of modules this track contains"
  modulesCount: Int
  "The Track's complete description, can be in in markdown format"
  description: String
  "number of times a track has been viewed"
  numberOfViews: Int
  "The track's complete array of Modules"
  modules: [Module!]!
}

"A Module is a single unit of teaching. Multiple Modules compose a Track"
type Module{
  id: ID!

  "The Module's title"
  title: String!

  "The Module's length in minutes"
  length: Int
}

"Author of a complete Track"
type Author {
  id: ID!
  "The author's first and last name"
  name: String!
  photo: String
}
`


module.exports = typeDefs;

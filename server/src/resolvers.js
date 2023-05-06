const resolvers = {
    Query:{
        // returns array of tracks that will be used to populate
        // the homepage grid of our web client
        tracksForHome:(_, __, { dataSources })=>{
            return dataSources.trackAPI.getTracksForHome();
        },
        //get a single track by ID, for track page
        track:(_, { id }, { dataSources })=>{
            return dataSources.trackAPI.getTrack(id)
        }
    },

    Track:{
        author:({ authorId }, _, { dataSources })=>{
            return dataSources.trackAPI.getAuthor(authorId);
        },
        modules:({id}, _, {dataSources})=>{
            return dataSources.trackAPI.getTrackModules(id);
        }
    }
}

module.exports = resolvers;
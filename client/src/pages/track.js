import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import TrackDetail from "../components/track-detail";
import { useParams } from "react-router-dom";


const GET_TRACK = gql`
    query GetTrack($trackId: ID!) {
        track(id: $trackId) {
        id
        title
        modules {
            id
            title
            length
        }
        author {
            id
            name
            photo
        }
        thumbnail
        length
        modulesCount
        description
        numberOfViews
        }
    }
`

const Track = () => {    
    //https://www.apollographql.com/tutorials/lift-off-part3/07-building-the-track-page
    //thi s trackId comes from route
    const { trackId } = useParams()
    const {loading, error, data} = useQuery(GET_TRACK, {
        variables: { trackId }
    });
    return <Layout>
        <QueryResult error={error} loading={loading} data={data}>
            <TrackDetail track={data?.track} />
        </QueryResult>
    </Layout>

}

export default Track;
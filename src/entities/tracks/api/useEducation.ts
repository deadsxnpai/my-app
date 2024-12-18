import { gql, useQuery } from "@apollo/client"

const GET_TRACKS = gql(`
query GetTracks($i:TrackListInput!) {
  esTrackList(input: $i){
    items {
    is_active
    is_visible
    max_participants
    track_id
    is_signed
    name
    sign_count
    file
    data
    disciplines{
      discipline_id
      name
    }
    }
  }
}
`)

export const useGetTracks = (i: any) => useQuery(GET_TRACKS, { variables: { i, }, })
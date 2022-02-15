import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://react-music-playlist-db.herokuapp.com/v1/graphql'
})

export default client;
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: `https://api-us-east-1.graphcms.com/v2/cl2ev5kpl04hx01z6421c4f6a/master`,
	cache: new InMemoryCache(),
});

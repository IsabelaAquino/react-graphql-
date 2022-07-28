async function getUsersGraphQL(text) {
    const BASE_URL = process.env.GRAPHQL_API_BASE_URL

    const response = await fetch('http://localhost:4000', {
      method: 'GET',
      body: JSON.stringify({
        query: text,
      }),
    });
  
    return await response.json();
}
export default getUsersGraphQL;
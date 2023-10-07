export async function GET(request) {

    // Handle GET requests for /api/users
    // Retrive users from the database or any data source

    //localhost:3000/api/users

    const users = [
        { id: 1, name: 'John'},
        { id: 2, name: 'Jane'},
        { id: 3, name: 'Bob'}
    ];

    // Send the users as a response 

    return new Response(JOSN.stringify(users));
}
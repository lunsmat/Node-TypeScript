<h1>Node with typescript</h1>
<p>My first time using node with TypeScript</p>
<hr />
<p>With you want to see how works it's simple. This basic application has the function of create users and get users.</p>

<p>The app has two routes, one get route and one post route.</p>

# Post Route
<p>This route has the can be acess by base_url/users and the function of this route is create users. The route reviece a JSON as data:</p>

```json
{
	"email": "user@email.com",
	"firstName": "UserFirstName",
	"lastName": "UserLastName"
}
```
<p>A user is created and his information is store at Mongo Database</p>

# Get Route
<p>This route has the can be acess by base_url/users and the function of this route is list users. The route response with a array of a objects JSON,like this:</p>

```json
{
    "_id": "user_id",
	"email": "user@email.com",
	"firstName": "UserFirstName",
	"lastName": "UserLastName",
    "createdAt": "",
    "updatedAt": "",
    "__v": 0
}
```
<p>A user is created and his information is store at Mongo Database</p>
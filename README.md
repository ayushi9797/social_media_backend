# Operations Tasks

| METHOD            | ENDPOINT                         | DESCRIPTION                                                                                                             | STATUS CODE |
| ----------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------- |
| POST              | /api/register                    | This endpoint should allow users to register. Hash the password on store.                                               | 201         |
| POST              | /api/login                       | This endpoint should allow users to login. Return JWT token on successful login.                                        | 201         |
| GET               | /api/users                       | This endpoint should return a list of all registered users.                                                             | 200         |
| GET               | /api/users/:id/friends           | This endpoint should return a list of all friends of a specific user identified by its ID.                              | 200         |
| POST              | /api/users/:id/friends           | This endpoint should allow the user to send a friend request to another user identified by its ID.                      |
| (Protected Route) | 201                              |
| PUT / PATCH       | /api/users/:id/friends/:friendId | This endpoint should allow users to accept or reject friend requests sent to them by another user identified by its ID. |
| (Protected Route) | 204                              |
| GET               | /api/posts                       | This endpoint should return a list of all posts.                                                                        | 200         |
| POST              | /api/posts                       | This endpoint should allow the user to create a new post.                                                               |
| (Protected Route) | 201                              |
| PUT / PATCH       | /api/posts/:id                   | This endpoint should allow users to update the text or image of a specific post identified by its ID.                   |
| (Protected Route) | 204                              |
| DELETE            | /api/posts/:id                   | This endpoint should allow users to delete a specific post identified by its ID.                                        |
| (Protected Route) | 202                              |
| POST              | /api/posts/:id/like              | This endpoint should allow users to like a specific post identified by its ID.                                          |
| (Protected Route) | 201                              |
| POST              | /api/posts/:id/comment           | This endpoint should allow users to comment on a specific post identified by its ID.                                    |
| (Protected Route) | 201                              |
| GET               | /api/posts/:id                   | This endpoint should return the details of a specific post identified by its ID.                                        | 200         |

# User Model Schema

```
{
  "name": "Ayushi",
  "email": "Ayushi12@gmail.com",
  "password": "1234",
  "dob": 03-12-2001,
  "bio": "I love dancing",
  "posts": [],
  "friends": [],
  "friendRequests": []
}

```
# all users get -> lists
- user 1

```Response
{
  "message": "User successfully registered",
  "user": {
    "name": "ayu",
    "email": "ayu@gmail.com",
    "password": "$2b$07$UOAC0TPsvWxdek37BBiM7uDWLo4sDCVScX7TrRADeliTI.5Y6F/W2",
    "dob": "2001-03-11T18:30:00.000Z",
    "posts": [],
    "friends": [],
    "friendRequests": [],
    "_id": "647edf8a9bfd1f876529d0cb",
    "__v": 0
  }
}



```

- user 2

````
{
      "_id": "647edf1d2cda64e4daefe421",
      "name": "Ayushi",
      "email": "Ayushi12@gmail.com",
      "password": "$2b$07$7rhwDQ/p0xDmM1pkGdpsn.VAiP4d8ACunu7tpDnx97XZvKx.vWcRa",
      "dob": "2001-03-11T18:30:00.000Z",
      "posts": [],
      "friends": [],
      "friendRequests": [],
      "__v": 0
    }

    ```

            # User Register API

` http://localhost:8080/register`

# user login details

````

{
"name": "ayu",
"email": "ayu@gmail.com",
"password": "1234",
"dob":" 03-12-2001",
"bio": "I love singing",
"posts": [],
"friends": [],
"friendRequests": []
}

```

Response of login

```

{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ3ZWRmOGE5YmZkMWY4NzY1MjlkMGNiIiwiaWF0IjoxNjg2MDM3NTE2LCJleHAiOjE2ODY2NDIzMTZ9.ap-phh6LgUWYC4xAAwIKgUvomNBPQRyxgfKrh3SF0UM",
"message": " users successfully login",
"user": {
"\_id": "647edf8a9bfd1f876529d0cb",
"name": "ayu",
"email": "ayu@gmail.com",
"password": "$2b$07$UOAC0TPsvWxdek37BBiM7uDWLo4sDCVScX7TrRADeliTI.5Y6F/W2",
"dob": "2001-03-11T18:30:00.000Z",
"posts": [],
"friends": [],
"friendRequests": [],
"\_\_v": 0
}
}

# User Login API



` http://localhost:8080/login`


# This endpoint should allow the user to send a friend request to another user identified by its ID.
(Protected Route)

``` http://localhost:8080/users/647edf8a9bfd1f876529d0cb/friends```
```` {
  "userid": "647edf1d2cda64e4daefe421"
}
````

# This endpoint should return a list of all friends of a specific user identified by its ID.

```http://localhost:8080/users/647edf8a9bfd1f876529d0cb/friends```

# This endpoint should allow users to accept or reject friend requests sent to them by another user identified by its ID.
(Protected Route)

``` http://localhost:8080/users/647edf8a9bfd1f876529d0cb/friends```

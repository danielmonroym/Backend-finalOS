# Backend-finalOS

* Cloning the repo

```bash
$ git clone https://github.com/danielmonroym/Backend-finalOS.git
```

* Installing dependencies

```bash
$ cd users
$ npm install
$ cd ..

$ cd gateway
$ npm install
$ cd ..
```

* Running scripts

| Action                    | Usage          |
| ------------------------- | -------------- |
| Starting development mode | `npm start`    |


# Docker

* Building an image

```bash
$ docker-compose build
```

* Running a container

```bash
$ docker-compose up
```

* Stopping a container

```bash
$ docker-compose down
```

# Rest API

### Users Service

| Method | Endpoint        | Description                |
| ------ | --------------- | -------------------------- |
| GET    | /api/users      | Retrieves a list of users  |
| POST   | /api/users      | Creates a user             |
| GET    | /api/users/:id | Obtains user by id          |
| PUT    | /api/users/:id | Updates user                |
| DELETE | /api/users/:id | Deletes user                |

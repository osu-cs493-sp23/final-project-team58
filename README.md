# Tarpaulin API

https://docs.google.com/document/d/1A-i0wsm3nTcKpkzOjcajy1OpDV1ZXcUPYJeo1vJ9tjQ/edit

## Setup
* run `npm i` to install dependencies
* run `npm run dev` to develop
* run `npm start` to view

* run following command to setup mysql server in Docker container
```bash
docker  run -d --name tarpaulin-server `
-p "3306:3306" `
-e "MYSQL_RANDOM_ROOT_PASSWORD=yes" `
-e "MYSQL_DATABASE=tarpaulin" `
-e "MYSQL_USER=team58" `
-e "MYSQL_PASSWORD=58" `
mysql
```

* setting up redis server in Docker
```bash
docker run -d --name redis-server -p "6379:6379" redis:latest
```

* When the database server is running in Docker, use `docker exec -it tarpaulin-server /bin/bash` to enter bash
    * run `mysql -u team58 -p tarpaulin` to access the database

* A Redis server must be setup to receive requests on port 6379. Run the following command to automatically setup and run a docker container containing a Redis server:
```bash
docker run -d --name redis-server -p "6379:6379" redis:latest
```
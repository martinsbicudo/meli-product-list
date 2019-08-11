docker-compose -f conf/docker/docker-compose.yml stop

docker-compose -f conf/docker/docker-compose.yml build

docker-compose -f conf/docker/docker-compose.yml up -d

docker-compose -f conf/docker/docker-compose.yml start

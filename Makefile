up:
	docker-compose up -d

down:
	docker-compose down

downup:
	make down
	make up
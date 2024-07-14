# Установка переменных
COMPOSE=docker-compose
DOCKER=docker

# Сборка и запуск контейнеров
up:
	$(COMPOSE) up --build

# Остановка контейнеров
down:
	$(COMPOSE) down

# Перезапуск контейнеров
restart: down up

# Запуск контейнера в интерактивном режиме
shell:
	$(COMPOSE) run app sh

# Удаление всех контейнеров, сетей и томов, созданных Docker Compose
clean:
	$(COMPOSE) down -v

# Просмотр логов
logs:
	$(COMPOSE) logs -f

# Установка зависимостей
install:
	$(COMPOSE) run app npm install

# Сборка образа
build:
	$(COMPOSE) build

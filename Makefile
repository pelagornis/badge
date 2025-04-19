# Docker Image
IMAGE_NAME = nginx-badge-redirect
CONTAINER_NAME = nginx-badge-container
PORT = 8081

# Docker Image Build
build:
	@echo "Building Docker image: $(IMAGE_NAME)"
	docker build -t $(IMAGE_NAME) .

# Docker Container Run
run:
	@echo "Running Docker container: $(CONTAINER_NAME)"
	docker run -d -p $(PORT):8081 --name $(CONTAINER_NAME) $(IMAGE_NAME)

# Docker Container Stop
stop:
	@echo "Stopping Docker container: $(CONTAINER_NAME)"
	docker stop $(CONTAINER_NAME)

# Docker Container Stop
rm:
	@echo "Removing Docker container: $(CONTAINER_NAME)"
	docker rm $(CONTAINER_NAME)

# Docker Image Delete
rmi:
	@echo "Removing Docker image: $(IMAGE_NAME)"
	docker rmi $(IMAGE_NAME)

# Docker Checking Status
status:
	@echo "Checking Docker container status"
	docker ps -a

# Docker Log
logs:
	@echo "Fetching Docker container logs"
	docker logs $(CONTAINER_NAME)

# Docker Start Compose (Optional)
compose-up:
	@echo "Starting Docker Compose services"
	docker-compose up -d

# Docker Stop Compose (Optional)
compose-down:
	@echo "Stopping Docker Compose services"
	docker-compose down

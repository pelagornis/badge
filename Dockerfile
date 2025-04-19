# Nginx Official Image
From Nginx:latest

# Nginx setting file copy to container
COPY nginx.conf /etc/nginx/nginx.conf

# open 8081 port
EXPOSE 8081

# Running Nginx
CMD ["nginx", "-g", "daemon off;"]

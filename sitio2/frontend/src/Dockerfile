FROM nginx:alpine

# Copy static files to Nginx serve directory
COPY src/ /usr/share/nginx/html/

# Add CORS configuration for Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
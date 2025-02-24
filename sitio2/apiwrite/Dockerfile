FROM php:8.0-apache

RUN docker-php-ext-install pdo pdo_mysql
RUN a2enmod rewrite headers

# Apache configuration to listen on port 8080
RUN sed -i 's/Listen 80/Listen 8080/g' /etc/apache2/ports.conf
RUN sed -i 's/<VirtualHost *:80>/\<VirtualHost *:8080>/g' /etc/apache2/sites-available/000-default.conf

# Apache configuration for CORS
RUN echo '\
<VirtualHost *:8080>\n\
    DocumentRoot /var/www/html\n\
    Header set Access-Control-Allow-Origin "*"\n\
</VirtualHost>\n\
' > /etc/apache2/sites-available/000-default.conf

COPY src/ /var/www/html/
RUN chown -R www-data:www-data /var/www/html/

EXPOSE 8080
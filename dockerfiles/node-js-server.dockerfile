FROM node:16

WORKDIR /var/www/html

COPY --chown=www-data:www-data . /var/www/html/

RUN apt-get install collectd

USER www-data

CMD node app/index.js

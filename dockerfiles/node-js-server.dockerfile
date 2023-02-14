FROM node:16

WORKDIR /var/www/html

COPY --chown=www-data:www-data ./app /var/www/html/

RUN apt-get update -y
RUN apt-get install collectd -y
RUN apt-get clean --dry-run

COPY ./conf/collectd.conf /etc/collectd/collectd.conf

RUN service collectd start

USER www-data

CMD node index.js

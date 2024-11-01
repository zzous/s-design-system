FROM nginx:1.23-alpine3.17

COPY default.conf /etc/nginx/conf.d/default.conf

RUN mkdir /strato-documentation

COPY . /usr/share/nginx/html

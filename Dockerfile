FROM nginx:1.23-alpine3.17

WORKDIR /app
COPY default.conf /etc/nginx/conf.d/default.conf

COPY storybook-static /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

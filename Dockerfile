#build stage
FROM nginx:1.15.2-alpine

COPY ./deploy /var/www

COPY ./deploy/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENV NODE_ENV="stage"

ENTRYPOINT ["nginx", "-g", "daemon off;"]

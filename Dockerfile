FROM node:16-alpine3.14

WORKDIR /var/www

COPY ./ /var/www/

RUN apk update && \
    apk add yarn && \
    yarn global add pm2 && \
    yarn install

EXPOSE 3000
ENV HOST 0.0.0.0

CMD ["pm2-runtime", "start", ".output/server/index.mjs"]
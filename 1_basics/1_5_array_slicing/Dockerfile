FROM node:20.9.0-alpine3.18
WORKDIR /etc/koans
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
COPY $PWD/entrypoint.sh /usr/local/bin

ENTRYPOINT ["/bin/sh", "/usr/local/bin/entrypoint.sh"]
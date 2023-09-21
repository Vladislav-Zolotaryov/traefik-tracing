FROM node:20

WORKDIR /usr/src/app
COPY index.js index.js

EXPOSE 80
CMD [ "node", "index.js" ]
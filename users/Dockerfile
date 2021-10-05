FROM node:14

WORKDIR /usr/src/app

VOLUME [ "/usr/src/app" ]

RUN npm i -g nodemon


EXPOSE 3000

CMD [ "nodemon", "-L", "src/index.js"]
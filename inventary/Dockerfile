FROM node:14

WORKDIR /usr/src/app

VOLUME [ "/usr/src/app" ]

RUN npm i -g nodemon


EXPOSE 4000

CMD [ "nodemon", "-L", "src/index.js"]
# This dockerfile is created for Betting Service deployment

# build environment
FROM node:12 as builder

ENV BASEDIR=/usr/src/app

WORKDIR $BASEDIR/
COPY . .

RUN npm install && npm install pm2 -g

EXPOSE 3002
CMD [ "pm2-runtime", "ecosystem.config.js"]


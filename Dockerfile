FROM node:17-bullseye

# setup
RUN mkdir -p /usr/src/website
WORKDIR /usr/src/website

RUN apt update && apt upgrade
RUN apt install git

COPY . /usr/src/website
RUN npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["npm", "start"]

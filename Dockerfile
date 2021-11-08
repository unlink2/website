FROM node:17-bullseye

# setup
RUN mkdir -p /usr/src/website
WORKDIR /usr/src/website

RUN apt update -y && apt upgrade -y
RUN apt install -y git

COPY . /usr/src/website
# RUN npm update -g
# RUN npm install --global yarn
RUN yarn install
RUN yarn run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["yarn", "run", "start"]

#This is a sample Image 
FROM node:16-bullseye-slim

RUN apt-get update && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*
 
EXPOSE 4000

RUN mkdir /app && chown -R node:node /app
WORKDIR /app

USER node

COPY --chown=node:node package*.json .
RUN npm ci && npm cache clean --force

COPY --chown=node:node . . 

CMD ["node", "index.js"]

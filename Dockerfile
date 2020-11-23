FROM node:13

COPY node_modules /app/node_modules
COPY build /app/build
COPY public /app/public
COPY app.js /app/
COPY package.json /app/
COPY package-lock.json /app/

WORKDIR /app

ENV NODE_ENV production
ENV PORT 80

EXPOSE 80

CMD node /app/app.js
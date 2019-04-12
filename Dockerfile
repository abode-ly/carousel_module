FROM mhart/alpine-node:8.15.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build
RUN npm run seed
EXPOSE 3001
CMD npm start
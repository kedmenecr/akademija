FROM node:10-alpine
RUN mkdir -p /src/app
WORKDIR /src/app
COPY package.json /src/app/package.json
RUN npm install 
COPY . /src/app
EXPOSE 9091 9092
CMD ["npm", "start"]

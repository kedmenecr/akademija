FROM node:10-alpine
RUN mkdir -p /src/app
WORKDIR /src/app
COPY package.json /src/app/package.json
RUN npm install 
COPY . /src/app
EXPOSE 9097
CMD ["npm", "start"]
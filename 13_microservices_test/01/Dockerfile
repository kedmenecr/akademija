FROM node:10-alpine
RUN mkdir -p /src/app
WORKDIR /src/app
RUN npm install 
COPY . /src/app
EXPOSE 9001
CMD ["npm", "start"]

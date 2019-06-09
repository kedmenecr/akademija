FROM node:10-alpine
RUN mkdir -p /src/app
WORKDIR /src/app
RUN npm install 
COPY . /src/app
EXPOSE 9005
CMD ["npm", "start"]
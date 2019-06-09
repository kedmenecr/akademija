FROM node:10-alpine
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install 
EXPOSE 9005
CMD ["npm", "start"]
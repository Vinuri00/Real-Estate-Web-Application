FROM node:21.6.2

WORKDIR /app/server

COPY package*.json ./

RUN yarn

COPY . .

ENV MONGO_URI=mongodb+srv://vinuri:vinuri123@real-estate.gjterqs.mongodb.net/
ENV JWT_SECRET=f4f63f770f634650bed4785f3cbbee7366b4de0ce81cded4b648090e5a18dbef

EXPOSE 3000

CMD [ "yarn", "start" ]
# Inkwell

## Express React SQL Full CRUD App

## What is Inkwell

Inkwell is an application for social networking your thoughts for yourself and others. To teach, learn, and express.

Come with questions, leave with answers. All data being self regulated, be ready to take recommendations lightly. When using this to express stories and ideas, be open to praise and criticism alike.
Your thoughts move from the tip of your Pen, into the Inkwell.

- Write stories
- Give advice
- Critique others (Respectfully)
- Create, edit or delete your postings and interactions with others.

##Techstack
_Application_:

- React front-end
- Express + Node.js back-end
- SQL PgAdmin Database

### Setup

First, you'll need a Postgres database to connect to. Follow instructions here to setup the database and save credentials for the next step.

Next create a `.env` file inside of `backend`. It will need to contain the following environment variables (change the values for the database to match what you defined in the previous step)

```
PORT=5000
DB_USERNAME=inkwell_User
DB_PASSWORD=password
DB_DATABASE=inkwell
```

Next `cd` into `backend` and run `npm install` to install dependencies for the API.

Next, `cd` into `frontend`, and run `npm install` to install dependencies for the React app.

Finally, in separate terminals, run `npm start` in each folder so that the API and React app are running at the same time.

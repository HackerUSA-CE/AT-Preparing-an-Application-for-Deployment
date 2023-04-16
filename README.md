# [The Inkwell](http://mp3inkwell-env.eba-pfyiqrvn.us-east-1.elasticbeanstalk.com/#home)

## Description

Inkwell is an application for social networking your thoughts for yourself and others. To teach, learn, and express.

Come with questions, leave with answers. All data being self regulated, be ready to take recommendations and feedback. Be open to praise and criticism alike.

Your thoughts move from the tip of your Pen into the Inkwell!

## Features
- Write stories
- Give and received advice
- Create, edit, or delete your postings and interactions with others.
    - Account setup required to interact with user community

## Technologies

- _Front-end:_ [React](https://react.dev/) with [React Bootstrap](https://react-bootstrap.github.io/)
- _Back-end:_ [Express](https://expressjs.com/) + [Node.js](https://nodejs.org/en)
- _Database:_ [PostgresSQL](https://www.postgresql.org/docs/)
- _Deployment:_ [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) 

## Technical information

### Steps for running application

1. Create Postgres database locally 
    - Follow instructions [here](https://www.postgresql.org/docs/current/tutorial-install.html) to setup the database 
    - Save credentials for subsequent steps

2. Create `.env` file inside of `backend` folder with the following variables (should
match database specifications from previous step): 

```
PORT=5000
DB_USERNAME=inkwell_User
DB_PASSWORD=password
DB_DATABASE=inkwell
```

3. Launch terminal and navigate to `backend` directory, then run `npm install`. This will install required App dependencies listed in `package.json`.

4. Navigate to `frontend` folder and similarly run `npm install` to load front-end 
dependencies.

5. In separate terminals, navigate to `backend` and `frontend` then run `npm start`.

6. Application should launch.

### Steps for deployment

1. Create a build of the front-end, making sure the production version runs.

2. Create a zip of the back-end contents, while making sure to only include the files 
and not the parent folder.
    - `package.json` needs to exist at the root of the project, not nested in a folder.
    - `Seeders`, `node_modules`, and `.env` do not need to be included in the zip.
    - In its current form, zip file should only include: `config`, `controllers`, 
    `index.js`, `migrations`, `models`, `package-lock.json`, `package.json`, and 
    `public`.

3. Once zipped, navigate to _AWS Services - Elastic Beanstalk_. See [Documentation](https://docs.aws.amazon.com/elastic-beanstalk/index.html) for 
technical instruction on how to create and launch application.

### Issues
- Post button on `New Comment` causes the deployed version to crash.
- Log-out button works locally but renders JSON in deployed version.
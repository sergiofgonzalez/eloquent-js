# 01 &mdash; Hello, ExpressJS for JavaScript in the Browser
> introduces the template project that will be used for the JavaScript in the browser examples and exercises

## Description

### About the Server
Although not strictly necessary for the initial examples, I have decided to use an ExpressJS program to serve the HTML examples.

The configuration of the ExpressJS server is minimal with only a handful of features enabled &mdash; no view engines, no custom middleware or custom pages for errors.

The port on which the server is running is identified by the environment variable `$PORT`, the configuration property `server:port` or `5000` as a fallback.

The server uses the following snippet to serve the static files such as images, CSS files and JavaScript files that will be used in the examples.

```javascript
app.use(express.static(path.join(__dirname, process.env['PUBLIC_STATIC_RESOURCES_PATH'] || 'public')));
```

This means that the directory relative (to `index.js` location) identified by either the *environment variable/configuration property* `PUBLIC_STATIC_RESOURCES_PATH` (or `public` by default) will host the static files to serve.

As a result, you will be able to access the bomb image using `http://localhost:5000/images/bomb.png` (assuming the server is configured in port 5000).

### About the Static Files
The `public` folder is preconfigured with a bunch of directories to hold the different types of resources needed (at least for the basic examples):
```
|-- public/           
|---- fonts/
|---- images/
|---- javascript/
|---- stylesheets/
|---- .eslintrc.yml
|---- favicon.ico
|---- index.html
```
### About the Configuration
This project uses [dotenv](https://www.npmjs.com/package/dotenv) for handling the configuration properties through an `.env` file.
As this file does not contain any sensitive information, it has been committed to the repository.

| NOTE: |
| :---  |
| You might want to consider adding `.env` to your `.gitignore` file so that sensitive config properties are not committed to your repo. |
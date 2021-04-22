# DevConnector

[Live Demo](https://dry-garden-00409.herokuapp.com/)

A Social media platform to connect software developers to each other from all over the world 

Made using MERN stack (MongoDB, Express, React, Node)

## Installation

Use [npm](https://nodejs.org/en/) to install and start server from root folder.

```bash
npm run packages
```

Obtain github client id and access token [here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)

 --- edit line 294 in routes/api/profile.js as follows :
```bash
Authorization: `token GITHUB-SECRET-KEY-HERE`
```
## Usage
From the root directory, enter bash command :
```bash
npm run dev
```

## Credits
Based on [Udemy project](https://www.udemy.com/course/mern-stack-front-to-back/) by Brad Traversy

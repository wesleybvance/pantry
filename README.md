# Pantry 
[![Netlify Status](https://api.netlify.com/api/v1/badges/b416b12a-bb9b-4e49-a52b-84fcfb996780/deploy-status)](https://app.netlify.com/sites/pantrie/deploys)
[Live Demo of Pantry](https://pantrie.netlify.app/)

## Topics
- [Overview](#pantry-overview)
- [Video Walkthrough](#video-walkthrough-of-pantry)
- [MVP Features for Pantry](#mvp-features-for-pantry)
- [ERD & Wireframe](#erd--wireframe)
- [Clone/Install the Project Instructions](#clone/install-the-project-instructions)
- [Learn More about Next.js](#learn-more-about-Next.js)
- [Contributors](#contributors)
- [Tech and Frameworks Used](#tech-and-frameworks-used)
- [API Reference](#api-reference)
___
## Pantry Overview
- The ideal user for Pantry is someone who likes to cook meals, especially those strapped for time or resources. 
- Users can keep track of the ingredients they have in their pantry by entering them into Pantry, and always have a real time view of what they have, and how much.
- Users can find recipes that match the ingredients they currently have, and dynamically update the amount of an ingredient they have in their pantry based on the recipes they make.

___
## Video Walkthrough of Pantry
- link

___
## MVP Features for Pantry
- User signs in with Google Auth
- Users can see public recipes that other users have created, as well as private recipes that they have created
- Users can add ingredients to their pantry via an external API 
- Users can see on a recipe page whether they have an ingredient/enough of an ingredient to make a recipe
___
## ERD & Wireframe

___
## Clone/Install the Project Instructions
1. Create a Firebase project and set up authentication.
1. Create a `.env` file at the root of the project
1. Copy/Paste the contents of the `.env.sample` file to your newly created `.env` file.
1. Copy over all of your Firebase values into the `.env` file.
1. Create/Import sample data to project directory and Realtime Database
1. Open the `package.json` file and change the `name` property to the name of your application, and `author` to  your name.
1. From your command line, be in the root directory and run `npm install` OR `npm i` for short.
1. Next, run `npm run prepare`. This command sets up husky to track eslint errors on commit that will make your deploy fail on Netlify.
1. To start your application, run `npm run dev`.
1. Open [http://localhost:3000](http://localhost:3000) with your browser.
1. Deploy on Netlify: Netlify will automatically detect your project and prepopulate the settings, but should something go wrong and it does not, here are the commands:
- Build Command: `npm run build`
- Publish directory: `.next`
1. Any Enviromental variables you are using in your `.env` file should be added to Netlify. Go to Site settings > Build & deploy > Environment > Environment variables and the keys and values there.
1. In Firebase under Authentication select sign in methods, scroll to Authorized domains. Add your Netlify URL.
        
## Learn More about Next.js
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Contributors
- [Wesley Vance](https://github.com/wesleybvance)

### Tech and Frameworks Used
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)


### API Reference
![Firebase Realtime Database and Firestore Cloud Storage](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![Spoonacular API](https://spoonacular.com/food-api)

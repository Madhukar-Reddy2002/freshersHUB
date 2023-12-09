# FRESHERS HUB

This is a web application that allows users to create a profile, list their skills, and connect with other users based on complementary skills.

## Overview

- Users can register for an account by providing a username, email, password, and list of skills
- Once registered, users can log in to access their profile
- A user's profile displays their info, skills, and average rating from reviews
- Users can view a list of all other registered profiles and their skills
- Users can leave a review for another user, rating their skills 1-5 stars
- The app calculates an average review rating for each user

## Tools & Technologies

- Node.js and Express for the server backend
- MongoDB and Mongoose for the database 
- EJS for templating the views
- Passport for authentication and sessions
- CSS for styling and UI

## Features

### Registration

- Users enter username, email, password, skills on a registration form
- Form data is validated and sanitized
- User info is saved to MongoDB database
- Password is hashed before storing for security
- #PREVIEW
- ![image](https://github.com/Madhukar-Reddy2002/freshersHUB/assets/104265607/5232cea6-28ad-4da7-b2f4-f19573ed1cc7)


### Login 

- Users enter username and password on login form
- Credentials are compared to database for validation 
- User session is created using Passport and cookies
- #PREVIEW:
- ![image](https://github.com/Madhukar-Reddy2002/freshersHUB/assets/104265607/06f14466-438c-4601-beef-7cc04adfde66)


### Profile

- `/profile` route shows logged in user's info and skills
- Skills are split from string into an array and displayed
- Average rating is calculated from review ratings
- #preview;
- ![image](https://github.com/Madhukar-Reddy2002/freshersHUB/assets/104265607/0023c287-1a38-4c74-9c37-ea0c76dfb9d6)


### All Profiles 

- `/allprofiles` route queries database for all users
- Profile data like skills is displayed for each user
- Links to leave a review for other users
- #PREVIEW:
- ![image](https://github.com/Madhukar-Reddy2002/freshersHUB/assets/104265607/59b52f4c-4dfd-4706-982c-6b331aa08406)


### Reviews

- Users can navigate to `/addreview/:userId`  to leave a review 
- Review form takes rating, text, and user to review
- Review is saved to database linked to reviewer and reviewee  
- Average rating is recalculated when new reviews are added
- PREVIEW:
- ![image](https://github.com/Madhukar-Reddy2002/freshersHUB/assets/104265607/aaa52b2b-9804-4411-84c4-123c15ac0d7c)

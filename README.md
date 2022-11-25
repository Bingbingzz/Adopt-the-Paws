# Adopt-the-Paws

Authors: Guoao Wei, Annabelle Sun and Ce Zhao

Deployment URL by Render: <https://cat-adoption.onrender.com>

## Setup instruction (develop)

### Backend

1. Enter backend folder, install dependencies

   ```bash
   cd backend
   npm install
   ```

2. Create a `.env` file which includes the following content. You can specify a different `PORT` if needed.

   ```
   pawsURI = "mongodb+srv://paws:paws123@cluster0.0jp4jbd.mongodb.net/cluster0?retryWrites=true&w=majority"
   port = 5000
   ```
   
3. Start the backend
   ```bash
   nodemon ./bin/www
   ```

### Frontend

1. Enter frontend app folder, install dependencies
   
   ```bash
   cd frontend/adopt-the-paws
   npm install
   ```

2. Create a `.env` file which includes the following content. You can specify a different `PORT` if needed.

   ```
   port=10000
   ```  

   In the `"proxy"` field in `package.json`, make sure the proxy URL port matches the backend's port (`5000` in our case)

   ```json
   "proxy": "http://localhost:5000",
   ```

3. Start the React app
   
   ```bash
   npm start
   ```

## Project outline

Adopt the Paws is an online platform that helps homeless cats find new homes. The platform can be used by shelters and cat seekers and provides features including posting and finding adoptable cats, reporting lost cats, checking cats' profile, etc. 

## User stories

As someone who wants to adopt cats:

- I want to look for available cats based on my preferences, e.g. breed, color, age, location
- I want to have a list of preferred cats.

As a shelter staff/administrator:

- I want to help abandoned cats to find adopters by posting their information to public
- I want analyze data related to the shelter, for example, how many cats are adopted/sheltered every month, for better management and decision-making.

As someone whose cat is missing:

- I want to report my cat to lost & found and see if anyone can find it and report it to the shelter

## Tech Specifications

This project would be a web application implemented using the MERN stack. GitHub is used for version control and task management. Miro is used for designing and prototyping.

## Competitor research

- [petfinder](https://www.petfinder.com/)
- [BCSPCA](https://spca.bc.ca/?_ga=2.136427058.341548409.1668364166-2024482319.1667501076)

Both websites above allow users to browse pets needed to be adopted, and we added the statistics page for the shelter and admin to faciliate their decision making process.

## Timeline

Total time: Nov 21 - Dec 11 (3 weeks)

Week 1 (Nov 21 - Nov 27): front end design and implementation, CSS styling

Week 2 (Nov 28 - Dec 4): front-end testing, backend implementation 

Week 3 (Dec 4 - Dec 11): testing, documentation, demo

## Pages

### Homepage

- Navigation Bar (all pages)
  - Adoption | Statistics | Lost and Found | animals near my location | Contact us
- right corner button, log in/register entries, 
- Adoption as homepage
- Footer (all pages): copyright, contact us, a donation to charity

### Adoption page

- (User) Available animals, user location, recommend animals based on location, searching, filtering
- (Admin) edit, delete, add animals
- Side Bar: 
  - Adoption: Filter by breed, age, size, gender, good with, coat length, colour, care & behavior, days on petfinder, shelter or 
  - rescue, Search by pet name

![mainpage](img/mainpage.jpg)

### Statistics page

- Show plots reflecting the statistics of the shelter, such as cats’ input & output based on month and location, breed/age distribution (based on [ChartJS](https://www.chartjs.org/docs/latest/)).

![mainpage](img/statistic_page.jpg)

### Lost & found page

- Lost and found page would be something like this:	<https://www.pawboost.com/lost-found-pets/vancouver-british-columbia-v6x/all-lost-found-stray-pets/page-1>
- Side Bar
  - Lost /found color, breed, female/ male, size/weight
- Log in/Register page
  - Google OAuth
- Profile page
  - Pet Page like <https://www.petfinder.com/dog/pikachu-pikachu-and-stanley-58788419/bc/vancouver/snookies-society-on97/>
  - User profile page

![mainpage](img/lost_and_found.jpg)
![mainpage](img/user_profile.jpg)
![mainpage](img/pet_profile.jpg)




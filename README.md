# JobToday ⚡

## Your ultimate easy to use ToDo App

### Built with 💚Vite + 💙React JS

This is a React based frontend project.

## Features

- CRUD operations
- Axios promise-based http client(XMLHttpRequests)
- React Router for routing the pages.
- Global state management (Redux)
- Recharts for beautiful bar charts area charts, etc..
- Daisy UI Components, Tailwind CSS for styling.

For more information on the above mentioned modules check the package.json file for dependencies. Some Dependencies with their URLs are also mentioned at the bottom of the Readme.md file.

Thank you for checking this repo.

### Reference:

- Udemy Course: [click here](https://www.udemy.com/share/101uUA3@YUODKTrZCO0tVdBtYdIuAt04GIiuUGDEILV-9EKBf4xOvhIrUm1URnnMudYTABaSMw==/)

### Tailwind CSS configuration

tailwind.config.js

- Container config
- Added daisyUI plugin
- Added Dark mode

### React (with Vite) the src folder:

- **assets**
- **components**
- **features**
- **pages**
- **utils**
- App.jsx
- index.css
- main.jsx
- store.jsx

### src folder in detail:

- App.jsx
- index.css
- main.jsx
- store.jsx:

  > All the reducers are configured here in the store.jsx file make the states to be available globally in the app.

- **assets**

  - **images**

    > In this "images" folder all the images that are required for the project are stored.

- **components**

  - **alljobs**

    - Jobs.jsx
    - JobsContainer.jsx
    - PaginationContainer.jsx
    - SearchContainer.jsx

  - **dashboard**

    - PageContent.jsx
    - PageTitle.jsx

  - **forms**

    - FormField.jsx
    - FormSelect.jsx

  - **navbar**

    - **sidenav**

      - SideNavbar.jsx
      - sidenavlinks.jsx

    - Navbar.jsx
    - navlinks.jsx

  - **stats**

    - **charts**

      - AreaChart.jsx
      - BarChart.jsx

    - ChartsContainer.jsx
    - StatCard.jsx
    - StatContainer.jsx

- **features**

  - **alljobs**

    - alljobsSlice.jsx

  - **job**

    - jobSlice.jsx
    - jobThunk.jsx

  - **theme**

    - themeSlice.jsx

  - **user**

    - userSlice.jsx
    - userThunk.jsx

- **pages**

  - **dashboard**

    - Addjobs.jsx
    - Alljobs.jsx
    - DashboardMain.jsx
    - Profile.jsx
    - Stats.jsx

  - Errorpage.jsx
  - Homepage.jsx
  - Protectedpage.jsx
  - Registerpage.jsx

- **utils**

  - authHeader.jsx
  - axios.jsx
  - localStorage.jsx

### Dependencies

Installed dependencies to help build this project

- moment js: For date & time formatting. (https://momentjs.com/)

- axios: To help with http requests and responses. (https://axios-http.com/docs/intro)

- react icons: Icons for designing the UI. (https://react-icons.github.io/react-icons/)

- react redux: Global state management in the react web app. (https://react-redux.js.org/)

- react router: Helps with the routing for the single page application. (https://reactrouter.com/en/main)

- react toastify: Helps with creating beautiful toast messages in react app. (https://fkhadra.github.io/react-toastify/introduction)

- recharts: To create charts like barchart, piechart, areachart,..etc. (https://recharts.org/en-US/)

- daisy UI: For components to be used in react. (https://daisyui.com/components/)

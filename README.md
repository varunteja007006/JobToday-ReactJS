Tailwind CSS configuration

tailwind.config.js

- Container config
- Added daisyUI plugin
- Added Dark mode

React (with Vite)
In the src folder:

- assets
- components
- features
- pages
- utils
  -- App.jsx
  -- index.css
  -- main.jsx
  -- store.jsx

src folder in detail:

- - App.jsx
- - index.css
- - main.jsx
- - store.jsx:

- assets

  - images

- components

  - alljobs
    -- Jobs.jsx
    -- JobsContainer.jsx
    -- PaginationContainer.jsx
    -- SearchContainer.jsx

  - dashboard
    -- PageContent.jsx
    -- PageTitle.jsx

  - forms
    -- FormField.jsx
    -- FormSelect.jsx

  - navbar

    - sidenav
      -- SideNavbar.jsx
      -- sidenavlinks.jsx

    -- Navbar.jsx
    -- navlinks.jsx

  - stats
    - charts
      -- AreaChart.jsx
      -- BarChart.jsx
      -- ChartsContainer.jsx
      -- StatCard.jsx
      -- StatContainer.jsx

- features

  - alljobs
    -- alljobsSlice.jsx

  - job
    -- jobSlice.jsx
    -- jobThunk.jsx

  - theme
    -- themeSlice.jsx

  - user
    -- userSlice.jsx
    -- userThunk.jsx

- pages

  - dashboard
    -- Addjobs.jsx
    -- Alljobs.jsx
    -- DashboardMain.jsx
    -- Profile.jsx
    -- Stats.jsx

  -- Errorpage.jsx
  -- Homepage.jsx
  -- Protectedpage.jsx
  -- Registerpage.jsx

- utils
  -- authHeader.jsx
  -- axios.jsx
  -- localStorage.jsx

### Dependencies

Installed dependencies to help build this project

- moment js (https://momentjs.com/)
  For date & time formatting.

- axios (https://axios-http.com/docs/intro)
  To help with http requests and responses.

- react icons(https://react-icons.github.io/react-icons/)
  Icons for designing the UI

- react redux (https://react-redux.js.org/)
  Global state management in the react web app.

- react router (https://reactrouter.com/en/main)
  Helps with the routing for the single page application.

- react toastify (https://fkhadra.github.io/react-toastify/introduction)
  Helps with creating beautiful toast messages in react app.

- recharts (https://recharts.org/en-US/)
  To create charts like barchart, piechart, areachart,..etc.

- daisy UI
  For components to be used in react.

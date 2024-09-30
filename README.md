# Sake Spots 🍶

Explore Sake locations in Japan

![Sake](https://github.com/user-attachments/assets/4f7773f9-9cf3-4772-8910-8b93a0ee0896)

Welcome to my **[Sake Spots](https://alinumbercrunch.github.io/react-sake/)** web page! This project aims to provide a comprehensive list of sake bars and restaurants in Tokyo. Below is a summary of the recent activities and features implemented in the project.

## Recent Activities

### Search Functionality

- **Implemented a Search Bar**: Added a search bar component that allows users to search for sake bars and restaurants by name.
- **Data Fetching**: The search bar fetches data from a static JSON file hosted on GitHub Gist.
- **Filtering Results**: The search bar filters the fetched data based on the user's search input and displays the filtered results.
- **State Management**: Utilized React's `useState` and `useEffect` hooks to manage the state of the fetched data and the search results.

### Components

- **App Component**: The main component that holds the state for the list of restaurants and passes the `setRestaurants` function to the `Navbar` component.
- **Navbar Component**: Contains the search bar and passes the `setRestaurants` function to the `Searchbar` component.
- **Searchbar Component**: Fetches data, filters results based on the search term, and updates the parent component's state with the filtered results.

- ## Technologies Used

- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat-square) **React**: For building the user interface.
- ![Ruby on Rails](https://img.shields.io/badge/-Ruby%20on%20Rails-CC0000?logo=ruby-on-rails&logoColor=white&style=flat-square) **Ruby on Rails**: For the backend API.
- ![Ruby](https://img.shields.io/badge/-Ruby-CC342D?logo=ruby&logoColor=white&style=flat-square) **Ruby**: The programming language used with Rails.
- ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?logo=postgresql&logoColor=white&style=flat-square) **PostgreSQL**: For the database management system.
- ![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white&style=flat-square) **GitHub**: For hosting the static JSON file and project repository.
- ![CSS](https://img.shields.io/badge/-CSS-1572B6?logo=css3&logoColor=white&style=flat-square) **CSS**: For styling the components and layout.

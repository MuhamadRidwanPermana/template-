# AdminDashboard
A Responsive Admin Dashboard with Auto Layout using React, Vite, Tailwind and Yarn Package


This project is a responsive admin dashboard with auto layout, built using React, Tailwind, and Vite. The dashboard aims to provide an intuitive user interface for managing and visualizing data.

Prerequisites



Yarn

Installation

Clone the repository: git clone https://github.com/Mhiracul/AdminDashboard 

Install dependencies: yarn install

Start the development server: yarn dev or npm run dev

Features

Responsive layout that adapts to different screen sizes

Auto layout that adjusts the content based on the available space

Sidebar menu that supports nested items and icons



Data visualization with progress bar



Usage

To use the admin dashboard, simply open the URL in your web browser and log in with your credentials. The dashboard supports multiple user roles, each with different permissions and access levels. You can navigate between different pages and sections using the sidebar menu, and view data visualizations in the dashboard.



Technologies Used

React

Tailwind

Vite

Challenges

During the development of this project, i faced some challenges with the progress bar component. Specifically, i wanted to make it easy to change the progress bar color and width when reusing the component in different parts of the application. We experimented with various approaches, including props and context, but found that they were not flexible enough for our needs.

After some research and experimentation, i decided to use props to define the progress bar color and width. This approach allowed me to easily change the color and width of the progress bar from anywhere in the application, without having to modify the component

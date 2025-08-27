# React Demo App – Technical Interview Task

## Overview
This is a simple React web application demonstrating functional components, Hooks, Context API, API integration, and responsive UI design. The app allows users to log in, view a list of users, and see detailed information for each user.

## Features
1. **Login Page**
   - Phone number input with validation
   - Mock login logic (accepts +254712345678 and any other valid country number)
   - Error messages for invalid input
   - Persists login using localStorage

2. **Main Page**
   - List of users from [JSONPlaceholder API](https://...publicApi....)
   - Search bar filters users dynamically
   - Clicking a user navigates to Detail Page

3. **Detail Page**
   - Displays detailed info for selected user (email, phone, website, company)
   - Back button to Main Page
   - Loading spinner while fetching data
   - Responsive layout consistent with Main Page

## Tech Stack
- React (functional components, Hooks)
- React Router v6
- Context API for login state
- Tailwind CSS & Material UI
- Axios for API requests
- Jest & React Testing Library for unit testing

## Installation
1. Clone the repo:
   ```bash
    git clone <your-repo-url>
2. Navigate to project folder:
   cd react-demo-app
3. Run the app:
   npm run dev

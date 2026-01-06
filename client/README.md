# IP Address Tracker

A responsive IP Address Tracker application built with React and Leaflet.  
This project is based on the Frontend Mentor IP Address Tracker challenge.

## Live Demo

Live Site: <https://project-react-development1.netlify.app/>  
GitHub Repository: <https://github.com/TheBAnalystSN/react-ip-address-tracker.git>

---

## Overview

This application allows users to:

- View their current IP address and location on initial load
- Search for any IP address or domain
- See location data displayed on an interactive map
- Experience a fully responsive layout across desktop and mobile devices

The UI closely follows the Frontend Mentor design specifications.

---

## Built With

- React (JavaScript)
- Vite
- Leaflet / React-Leaflet
- CSS (no frameworks)
- IP Geolocation API (ipapi)

---

## Features

- Dynamic IP lookup
- Interactive Leaflet map
- Custom map marker
- Responsive design
- Error handling for invalid input
- Clean component-based architecture

---

## Installation & Local Setup

1. Clone the repository

```bash
git clone <https://github.com/TheBAnalystSN/react-ip-address-tracker.git>

```bash 
cd react-ip-address-tracker/client

```bash
npm install

```bash
npm run dev

The app will run at: 

> client@0.0.0 dev
> vite


  VITE v7.3.0  ready in 2431 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

## Deployment

This project is deployed using Netlify

Steps used: 

1. Build the project:

```bash
npm run build

2. Upload the dist/ folder to Netlify

3. Configure:

-Build command: npm run build
-Publish directory: dist

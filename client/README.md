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

## Resources

The following resources were used during the development of this project:

Frontend Mentor – Project design files, requirements, and assets
https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0

React Documentation – Core React concepts, hooks, and component structure
https://react.dev/

Vite Documentation – Project setup and build configuration
https://vitejs.dev/

Leaflet & React-Leaflet Documentation – Interactive map implementation
https://leafletjs.com/

https://react-leaflet.js.org/

IPAPI – Public IP geolocation API used to retrieve IP address data
https://ipapi.co/

MDN Web Docs – Reference for HTML, CSS, and JavaScript syntax and behavior
https://developer.mozilla.org/

OpenStreetMap – Map tile provider used with Leaflet
https://www.openstreetmap.org/
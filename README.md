# Next.js Shopping Cart App

## Table of Contents

- [Introduction](#Introduction)
- [Features](#Feactures)
- [Getting Started](#Getting-Started)
- [Folder Structure](#Folder-Structure)
- [Dependencies](#Dependencies)

## Introduction

Welcome to the Next.js Shopping Cart App! This web application is built using Next.js, React, and TypeScript,Tailwind css to provide users with an interactive and seamless shopping experience. The app allows users to browse a variety of products, add them to their cart, adjust quantities, and proceed to checkout.

## Features

- Product Browsing:

Explore a diverse range of products presented in a grid layout.
Click on individual products for more details.
Shopping Cart:

- Add products to the shopping cart.
  Adjust product quantities directly from the cart.
  Remove products from the cart.
  View the total amount of items and their prices in the cart.
- Responsive Design:

Enjoy a responsive user interface that adapts to different screen sizes and devices.

- Toaster Notifications:

Receive toaster notifications for successful actions such as adding/removing products.

- Clear Cart:

Clear the entire cart in a single click.

## Getting Started

Prerequisites
Make sure you have Node.js installed on your machine.

Installation
Clone the repository:

```bash
git clone https://github.com/your-username/nextjs-shopping-cart-app.git
```

Change into the project directory:

```bash
cd nextjs-shopping-cart-app
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open your browser and visit http://localhost:3000 to view the app.

## Project Structure

The project is organized as follows:

- **src/:** Contains the source code.
  - **app/:** Application-specific components and logic.
    - **components/:** Reusable UI components.
    - **hooks/:** Custom React hooks.
    - **providers/:** Context providers.
    - **pages/:** Next.js pages.
    - **utils/:** Utility functions.
- **public/:** Static assets.
- **styles/:** Global styles and CSS modules.
- **next.config.js:** Next.js configuration file.
- **tsconfig.json:** TypeScript configuration file.

## Dependencies

`Next.js`: React framework for building web applications.

`React`: JavaScript library for building user interfaces.

`React Icons`: Icon library for React.

`React Hot Toast`: Toast notifications for React applications.

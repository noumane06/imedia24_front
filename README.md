# Imedia24 coding challenge FRONT

# Technologies

this app was developed using : 

- ReactJs : front-end JavaScript library for building user interfaces based on UI components .
- Redux : for managing global states through out the project .
- Redux-saga : for managing side-effects .
- Jest & React Testing Library : for unit tests examples done in the project .
- PokiApi : As our mock api for fetching pokemons data .

# Project hierarchy

The whole project was developped using typescript . 

## Assets

that’s where all the media , icons and images will go 

## Hooks

Any custom hooks created (used to offload logic for UI components)

## Components

Components that are being used throughout the project 

## Constants

Any constants that are being used globally throughout the project

## E2E

where our end to end tests will go 

## Services

All services used for making api calls

## Store

Where our global redux and sagas logics will go 

## Styles

Global Css or Sass style used in the project

## Types

Our project types 

# How to run the app

We will need first to install all dependencies used in the project 

Clone the project repo first , and navigate to the project .

Assuming that you have [Node 12 LTS](https://nodejs.org/en/download/) or greater installed, you can use npm to install node modules 

```bash
$npm i 
```

then you can run the project locally with : 

```bash
$npm start
```

Now the project is available at : **localhost:3000.**

## Testing

To test a certain file (eg: PokimonCard.test.tsx) , we can simply run :

```bash
$npm test PokimonCard.test.tsx
```

For the end to end testing , it was done using cypress . To run cypress , run the command :

```bash
$npm run cypress:open
```

# Preview of the app

![Untitled](Imedia24%20coding%20challenge%20FRONT%201f9f2e662c6f477688653ad3e512b255/Untitled.png)

![Untitled](Imedia24%20coding%20challenge%20FRONT%201f9f2e662c6f477688653ad3e512b255/Untitled%201.png)

![Untitled](Imedia24%20coding%20challenge%20FRONT%201f9f2e662c6f477688653ad3e512b255/Untitled%202.png)
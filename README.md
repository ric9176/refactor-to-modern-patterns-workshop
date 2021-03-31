# Getting Started 

Clone the repo and run `yarn`. If you have any install issues check your version of Node and update to the latest stable version (easiest way is using nvm).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Folder structure and exercises

In the `src` folder you'll find an example folder and exercise 1 and 2. Don't forget to reference the example when completing the exercises 😉

## Exercise 1

Refactor the `src/excercise1/RandomImage.jsx` using the useState and useEffect Hooks.

Tip: The fetchRandomImage function image for now should only be executed on the first render. So when you reload you see a new image.

## Exercise 2

### pt 1

1. Refactor the `FunctionalComponent.jsx` component to implement the useRandomImage hook and display the image using the Image component (it taks an src prop 😉)

2. Update the useRandomImage hook so that it also returns a function we can call to refetch the image and pass that to the onClick of a Button

### pt 2

1. Create and export a new component in `useRandomImage` that implements the render props pattern.

Refactor the `ClassComponentRenderProps.jsx` component to implement the useRandomImage hook making use of your render props component export that work in a class.

2. Create and export a new function in `useRandomImage` that implements the HOC pattern.

Refactor the `ClassComponentHOC.js` component to implement the useRandomImage hook making use of your HOC component export that work in a class.

## API reference

These exercises use the Rick and Morty api for the images: https://rickandmortyapi.com/documentation/#rest
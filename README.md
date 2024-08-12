#### Summary of changes/fixes - 12/08/2024

Hi guys, I've made quite a lot of changes to the original code, as well as fixed the bugs and added functionality as per instructions. I've included a few new NPM packages, so you will need to run 'npm install' before booting it up. It should run fine after that using 'npm start'. I'll list the changes below, just in case you require a reference, although I am aware that if you wish to go forward, I'll need to explain everything over a call. All the tasks have been completed as per instructions, and I'll list everything additional below.

## Folder Structure
I've reorganized the folder structure to be more in line with common practices - adding components, context, hooks, and styles. This is just general organization, which I find helps in being able to locate what you need.

## Refactoring Products component
I noticed that you were using a class component for <Products />, so I've refactored it to be a function component. This will improve reusability and readability. I also noticed that it was the only class component in the codebase. The only lifecycle method used was componentDidMount, so I replaced that with an effect that has a dependency list, achieving the same functionality.

## Fetching data
I separated the logic behind fetching data from the API into a reusable custom hook that takes a URL parameter. Separating this logic future-proofs the project and makes it easier to make additional API calls. I've also saved the response in Session Storage to prevent unnecessary repeat calls. The data returned is public and not sensitive, and it also allows us to reload the browser on the new ProductDetails page and enter IDs to be taken to the relevant page. This was handy for debugging.

## State
I've used the Context API to manage this, as the only state needing to persist across routes is productsInCart. This allows us to view cart details on the checkout page. I explored Redux, but since we have minimal state to manage, we don't require a centralized store, nor do we need any middleware. I contemplated using session storage to allow data retention on reloads, as it currently clears the cart. However, this solution would have been quite messy and seemed a bit out of scope for this project.

## Performance
I've utilized memoization in ProductCard, Cart, and Products for both functions and components. This is to prevent unnecessary re-renders of components and to help React avoid redeclaring functions on render. Additionally, using session storage for the API data will prevent unnecessary fetch requests.

## Routing
I've sorted the routing bug by reintroducing BrowserRouter to the App.js file. I've also added two new routes for products/:id and error. The error route is taken when an incorrect ID is entered for the new product details page, e.g., /products/219283. I'll go over the products/:id route in the next section.

## Product Details Page
This is the new page as per the requirements - it loads product data determined by a slug returned by the API (the ID). So once the data has loaded, /products/21 will load the cucumber page, etc. I achieved this by setting the route mentioned previously, then sending through parsed data from state determined by ID. Regarding the styling, I used Material-UI as the library was already present in the repo, and I didn't see the need to introduce anything new. I know you guys have bought a license too. It contains all the information you'd expect, but I also hooked up user reviews using the MUI Avatar and Rating components. I also used the date-fns library to format the date. I've been using it for years, and it's pretty solid.

## Testing
I added unit tests for the utility functions in /utils/, which should be an accurate representation of how I test. Sadly, I ran out of time as I've been away all weekend. I really wanted to add a more comprehensive suite - usually, in the development process, I'm pretty militant about this.

## Git
I spoke to Chris about this, but it appeared that I didn't have access to push a new branch to your remote repo. I also tried forking but ran into the same issue, so I'm pushing this to my GitHub so you can check it out. You'll be able to clone and run the project. However, if you need further access, please let me know. I also pushed the unchanged project first, so you can see the diff.

## Fin

Thanks guys, please let me know if you need anything additional, and if you wish to catch up for a call to go further into it.

# Provide Interview Tests

#### Please note that this code uses Node 14

Please clone or fork this repository, complete the tasks in your cloned repository and then once completed share it with us.

In your cloned repository, from the project directory, run:

#### `npm start`

This action will open up our test application in your web browser. (Be warned - the application is in a broken state, and your task will be to fix it.)

This README contains a series of tasks which involve fixing bugs and adding features to this application.
Please complete these tasks in their given order, and commit the solutions to each task as individual commits. You are advised to refer to the task number in your commit message.

Once completed, please share your cloned repository with us.

Best of luck!

## Overview of the Application

This application is a basic E-Commerce interface created with create-react-app. 

The application enables a user to browse products and add them to a basket.

Once the products have been added to the basket, the user can checkout their shopping basket and view the total cost of their order.

- `/products` - Shows a list of available products to a user.
- `/checkout` - Displays the user's shopping basket items, the total order value, and allows the user to place the order.

## Tasks

### Task 1 - Fix the Routing

The routes described above are currently not functional. If you run `npm start`, an error will be presented due to the inability to navigate routes such as `/products`. Your task is to debug and rectify this issue.

### Task 2 - React State Management

On the `/products` route, a list of products should be displayed.

Each product should have an 'Add to basket' option that can be clicked to add the product to the shopping basket.
The current shopping basket items and their total price should be visible at the top of the page.

A checkout button should be available to proceed to the `/checkout` page.

However, there exists an issue — once the application navigates to the `/checkout` page, the shopping basket gets emptied and the user is left with nothing to order.

These items need to persist across all pages (including `/checkout`) to ensure that the user does not lose the items in their basket when the pages change.

Use your knowledge of React state management to resolve this issue. Consider options such as the Context API, Redux, etc.

We would like you to be abe to discuss your reasoning behind your chosen solution.

Additionally, please implement a confirmation message to notify users when their order gets successfully placed.
(Note: The order doesn't need to be saved; this is merely a dummy confirmation.)

### Task 3 - Making Improvements

You may have noticed that when you click 'Add to basket' multiple times for a product, its entries get duplicated in the shopping cart.

Please resolve this issue by increasing the quantity of the product rather than adding a new entry whenever it is added to the basket multiple times.

### Task 4 - Component Creation

By now, you should have a working E-Commerce system! Users can browse products and confirm their orders using the now functional shopping basket.

However, the product's details are not comprehensive.

We would like you to add a new route `product/{id}` to display detailed information about the product.

Users should be able to click a 'View Detail' button on each product listed on the `/products` page.

For more information, have a look at the API being used to list the products; this will give you an idea of the information available for display on the product detail page.

### Task 5 - Feature Implementation

Each product returned from the API has a 'discount' property, which is currently not being utilised in the application.

Please add a new feature to the `Cart` component, which calculates a new 'Total price' using the products discount value.

This updated total should be shown next to the original total and reflect the total price after applying discounts.
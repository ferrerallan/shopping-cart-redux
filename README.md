
# React Redux Shopping Cart

## Description

This project is a simple React application that demonstrates the use of Redux for state management. The application is a basic shopping cart implementation where users can add, remove, and update items. The project is designed to provide a practical example of integrating Redux with React to manage application state effectively.

The main components of this project include:
- A **Header** component with a cart overview.
- A **Shopping Cart** component to display items and handle their removal.
- A **Form** component to add items to the cart.
- A **Redux store** managing the state of the cart.

This project serves as a learning tool for developers who are new to Redux or want to see an example of its integration in a React project.

## Requirements

- Node.js 14 or higher
- npm or yarn
- TypeScript (used in the Redux store setup)

## Mode of Use

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-redux-shopping-cart.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-redux-shopping-cart
   ```

3. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Key Features

1. **Add Items to Cart**:
   - Use the provided form to add products with name, price, and quantity.
   - Items are added to the Redux store, and the cart updates dynamically.

2. **Remove Items from Cart**:
   - Items can be removed from the cart by clicking the "Remove" button.

3. **Update Item Quantity**:
   - (Optional extension) Modify quantities directly in the cart with Redux handling the updates.

4. **Redux Store**:
   - The cart state is managed using Redux Toolkit, with actions for adding, removing, and updating items.

## Folder Structure

- **components/**:
  - `Header.tsx`: Displays the store name and shopping cart overview.
  - `ShoppingCart.tsx`: Manages the display and removal of cart items.

- **pages/**:
  - `Form.tsx`: A form to add items to the cart.

- **store/**:
  - `cartSlice.ts`: Contains the Redux slice for cart management.
  - `index.ts`: Sets up the Redux store.

- **App.tsx**:
  - Combines the components and renders the main application view.

## How It Works

1. The `cartSlice` in Redux defines actions and reducers to handle cart operations like adding and removing items.
2. The `ShoppingCart` component uses `useSelector` to retrieve the current cart state and `useDispatch` to invoke actions.
3. The `Form` component dispatches an `addItem` action with user-input data.
4. All components are wrapped with the Redux `Provider` to enable global state management.

## Example Usage

- Add a new item:
  1. Enter the product name, price, and quantity in the form.
  2. Click the "Add to Cart" button.
  3. See the cart update dynamically with the new item.

- Remove an item:
  1. Click "Remove" next to an item in the cart.
  2. The item will be removed from the list.

## License

This project is licensed under the MIT License. Feel free to use and modify it for your own projects.

# InventoryManagement

This project is a fully functional **Inventory Management Application** built using **React.js**, **Material-UI** for styling, **Redux** for state management, and **React Query** for API data fetching. The application includes dynamic widgets, a product management system (edit, disable, delete), and a role-based view switcher between admin and user views.

---

## **Features**

1. **Role-Based Navigation:**
   - Toggle between Admin and User views using a visually appealing toggle button.
   - Different functionalities for Admin and User roles.

2. **Admin Functionalities:**
   - View all products in a table with their details (Name, Price, Quantity, Category).
   - Edit product details via a modal.
   - Disable products (dimmed in the list).
   - Delete products from the list.

3. **User Functionalities:**
   - View products in a read-only format.

4. **Dynamic Widgets:**
   - Display widgets at the top of the page for metrics such as total products, total disabled products, etc.

5. **API Integration:**
   - Fetch products dynamically using `React Query`.

6. **Responsive Design:**
   - Designed with Material-UI components for a seamless user experience on all devices.

---

## **Technologies Used**

- **Frontend Framework:** React.js
- **State Management:** Redux Toolkit
- **API Handling:** React Query
- **UI Components:** Material-UI
- **Build Tool:** Create React App
- **Deployment:** Vercel/Netlify

---

## **Getting Started**

Follow the instructions below to run the application locally.

### **Prerequisites**

Ensure you have the following installed on your system:
- **Node.js** (v14 or above)
- **npm** or **yarn**

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/shabbir148/InventoryManagement.git
   cd inventory-management-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### **Running the Application Locally**

1. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### **Building for Production**

1. Build the app:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Serve the production build locally:
   ```bash
   npx serve -s build
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

---

## **Folder Structure**

```
src/
|-- components/
|   |-- Navigation.js       # Role toggle and header
|   |-- AdminView.js        # Admin functionality
|   |-- UserView.js         # User functionality
|   |-- EditProductModal.js # Modal for editing products
|   |-- Widgets.js          # Top widgets for metrics
|-- feature/
|   |-- productsSlice.js    # Redux slice for product state management
|-- services/
|   |-- fetchProduct.js     # API functions to fetch products
|-- App.js                  # Main entry point
|-- index.js                # React entry point
```



## **Key Commands**

- **Start Development Server:**
  ```bash
  npm start
  ```

- **Build for Production:**
  ```bash
  npm run build
  ```

- **Run Tests:**
  ```bash
  npm test
  ```

---

## **Deployment**

1. **Vercel Deployment:**
   - Push your code to GitHub.
   - Import the repository into https://inventory-management-git-master-shabbir-sidhpurwalas-projects.vercel.app
   - Deploy directly.


---

## **Contributing**

Feel free to fork this repository and submit pull requests for improvements or new features.



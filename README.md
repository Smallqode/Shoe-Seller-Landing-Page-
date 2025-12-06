# 🥿 Shoe Store -- React Product Filter App

A modern, responsive React-based shoe store UI that allows users to
filter products by **search**, **category**, **brand**, **color**, and
**price**.\
Built with React components, custom CSS, and real product data stored
locally.

🎉 **Live Demo:**\
https://smallqode.github.io/Shoe-Seller-Landing-Page-/

------------------------------------------------------------------------

## 📌 Features

### 🔍 Product Search

Users can search products by name with real-time filtering.

### 🎛️ Advanced Filtering

-   **Category filter:** sneakers, flats, sandals, heels\
-   **Brand filter:** Nike, Adidas, Puma, Vans\
-   **Color filter:** Black, Blue, Green, White\
-   **Price filter:** (if provided in your Price component)

### 🧩 Modular Components

-   `Nav` -- search bar + icons\
-   `Sidebar` -- all filters\
-   `Recommended` -- brand filter buttons\
-   `Products` -- grid of all product cards\
-   Reusable components: `Buttons`, `Card`, `Input`

### 📦 Local Database

Product list stored in `/db/data.js` for easy modification.

### 🎨 Responsive UI

Clean layout using custom CSS, flexbox, media rules, and modern styling.

------------------------------------------------------------------------

## 🗂️ Project Structure

    src/
    │ App.jsx
    │ index.jsx
    │ index.css
    │
    ├── Components/
    │   ├── Buttons.jsx
    │   ├── Card.jsx
    │   └── Input.jsx
    │
    ├── Navigation/
    │   └── Nav.jsx
    │
    ├── Products/
    │   ├── Products.jsx
    │   └── Products.css
    │
    ├── Recommended/
    │   ├── Recommended.jsx
    │   └── Recommended.css
    │
    ├── Sidebar/
    │   ├── Sidebar.jsx
    │   ├── Sidebar.css
    │   ├── Category/
    │   │   ├── Category.jsx
    │   │   └── Category.css
    │   ├── Colors/
    │   │   ├── Colors.jsx
    │   │   └── Colors.css
    │   └── Price/
    │       ├── Price.jsx
    │       └── Price.css
    │
    └── db/
        └── data.js

------------------------------------------------------------------------

## 🚀 Getting Started

### 1️⃣ Clone the repository

``` bash
git clone https://github.com/smallqode/Shoe-Seller-Landing-Page-.git
```

### 2️⃣ Install dependencies

``` bash
npm install
```

### 3️⃣ Run the development server

``` bash
npm run dev
```

### 4️⃣ Build for production

``` bash
npm run build
```

------------------------------------------------------------------------

## 🧠 How Filtering Works

### 🔹 Search Filtering

``` js
const filteredItems = products.filter(product =>
  product.title.toLowerCase().includes(query.toLowerCase())
);
```

### 🔹 Category / Brand / Color Filtering

``` js
filteredProducts = filteredProducts.filter(({ category, color, company }) =>
  category === selected || color === selected || company === selected
);
```

### 🔹 Combined Filtering

``` js
function filteredData(products, selected, query) {
  let filteredProducts = products;

  if (query) filteredProducts = filteredItems;

  if (selected) {
    filteredProducts = filteredProducts.filter(
      ({ category, color, company, newPrice, title }) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected
    );
  }
}
```

------------------------------------------------------------------------

## 📸 Screenshots (Add Your Images)

    ![Screenshot 1](./assets/screenshot1.png)
    ![Screenshot 2](./assets/screenshot2.png)

------------------------------------------------------------------------

## 💡 Future Improvements

-   Add cart functionality\
-   Add wishlist storage using localStorage\
-   Add animations with Framer Motion\
-   Add backend for real product management\
-   Make sidebar collapsible on mobile

------------------------------------------------------------------------

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.\
Feel free to fork this repo and submit a PR.

------------------------------------------------------------------------

## 📄 License

This project is an open source.

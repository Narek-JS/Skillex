# Skillex: Dynamic Product Filtering System

A feature-complete, performant, and responsive product catalog filtering application built with React.js. This project implements a multi-criteria, real-time filtering and sorting system that provides instant user feedback, demonstrating a modern front-end development workflow from AI-powered design to deployment.

[![Deploy with Vercel](https://vercel.com/button)](https://skillex-private.vercel.app/)

---

### 🔗 Important Links

- **Live Demo:** [https://task-skillex.vercel.app](https://task-skillex.vercel.app)
- **UI/UX Design Prototype (Uizard):** [https://app.uizard.io/p/d1f7c71d/overview](https://app.uizard.io/p/d1f7c71d/overview)

---

### ✨ Features

- **Multi-Criteria Filtering:** Filter products simultaneously by category, brand, price range (with a slider), and star rating.
- **Real-Time Updates:** The product grid updates instantly as filter selections are made, without page reloads.
- **Product Sorting:** Sort the filtered products by different criteria such as popularity and price.
- **Session Persistence:** User's selected filters and sort preferences are saved to `localStorage`, so they are retained on page refresh.
- **Performance Optimized:** Filtering logic is optimized using the `useMemo` hook, and input is debounced to prevent unnecessary re-renders.
- **User Feedback:** Includes a loading spinner during data fetching and a clear "No products found" message for empty states.
- **Comprehensive Testing:** The project includes a robust suite of unit and component tests to ensure reliability.
- **Responsive Design:** The layout is fully responsive and provides a seamless experience on both desktop and mobile devices.

---

### 🛠️ Technology Stack

- **Framework:** React.js
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Design:** Uizard
- **Testing:** Vitest & React Testing Library
- **Deployment:** Vercel

---

### 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

#### Prerequisites

- Node.js (v18 or higher recommended)
- npm or a compatible package manager

#### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/Narek-JS/skillex-private.git](https://github.com/Narek-JS/skillex-private.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd skillex-private
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```

#### Running the Development Server

To start the local development server, run the following command:

```sh
npm run dev
```

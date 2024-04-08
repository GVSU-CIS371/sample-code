# Random Users Vue 3 + TypeScript + Router Example

Welcome to the sample code for random users application using Vue 3, TypeScript, and Router.

## Getting Started

These instructions will guide you through setting up the project locally for development and testing purposes.

### Prerequisites

Before you begin, ensure you have a Node.js environment set up. You have two options:

1. **Docker Container**: For a containerized development environment, refer to our detailed setup instructions in the class slides.
2. **Direct Install**: Install Node.js directly from the [official website](https://nodejs.org/).

### Installation

To get started, clone this repository to your local machine and install the required dependencies using:

```bash
npm install
```

### Running the Development Server

Launch the local development server to see the application in action:

```bash
npx ts-node src/main.ts
```

## Contributing

Contributions to improve the London Fog example are welcome! Feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## You also can follow the following steps to set up a new Vue.js project with TypeScript and Vue Router using Vite:

- Initialize the Project:

  - Navigate to your workspace directory:

    ```bash
    cd path-to-your-workspace
    ```

  - Create a new Vite project:

    - Using npm:
      - For npm version 6.x:
      ```bash
      npm create vite@latest my-app --template vue-ts
      ```
      - For npm version 7.x or later:
      ```bash
      npm create vite@latest my-app -- --template vue-ts
      ```
    - Using yarn:

      ```bash
      yarn create vite my-app --template vue-ts
      ```

- Install vue-router

  Navigate to your project folder and install vue-router version 4:

  ```bash
  cd my-app
  npm install --save vue-router@4
  ```

  or if using yarn:

  ```bash
  yarn add vue-router@4
  ```

- Project Setup and Development:
- Run Vue App

  - First, install the required dependencies:

    ```bash
    npm install
    ```

    or using yarn:

    ```bash
    yarn
    ```

  - Start the development server. This will host your app locally and auto-refresh when changes are made:

    ```bash
    npm run dev
    ```

    or with yarn:

    ```bash
    yarn dev
    ```

  - Building for Production:

    - Compile and minify your app for production:

      ```bash
      npm run build
      ```

      or with yarn:

      ```bash
      yarn build
      ```

    - To preview the production build locally:

      ```bash
      npm run preview
      ```

      or with yarn:

      ```bash
      yarn preview
      ```

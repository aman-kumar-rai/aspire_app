# Aspire App

## Libraries and tools used
1. ***vite***: Vite provides development server and build support. It internally uses esbuild and rollup for these respectively.

2. ***vitest***: Testing framework providing test runner and asssertion support.

Tests written are not full proof. Coverage is not as desired.

3. ***react testing library***: Component testing framework. It isn't a single library, but a few libraries that helps render a component in a headless browser and run tests on it.

Tests are written for page components which are fairly basic.

4. ***react-slick***: Provides a simple and configurable API to create carousels.

5. ***radix-ui***: Provides highly accessible components that are highly customizable.

6. ***faker***: Exposes API to create fake business data.

7. ***react-router-dom***: Provides client side routing solution for the web.

## Scripts used
1. ***dev***: Comes preconfigured with vite. It starts a development server and uses ES modules, and esbuild for bundling.

2. ***build***: Comes preconfigured with vite. Creates a production build. Vite uses rollup as module bundler for this.

3. ***lint***: Comes preconfigured with vite.Runs eslint and reports linting error on the console.

4. ***preview***: Comes preconfigured with vite. Builds the project and runs a local server to imitate production environment.

5. ***test***: Uses vitest as the test runner and runs tests for files that are either present eitehr in **\__tests\__** folder, or have an extension of **.test.(js|jsx|ts|tsx)**.

## How to see the app in action

### 1. Local setup
1. Clone the git repo.
2. Install the dependencies by running ***npm install***.
3. Run a local dev server by running ***npm run dev***. This will start a web server on port *5173*.

### 2. Accessing the hosted version
Use [this link](https://fanciful-pithivier-fb61c7.netlify.app/) to use the hosted version of the app.
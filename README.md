# Calculator

Simple calculator application built with **React** and **Node.js**

## Getting started

### Prerequesites

First you have to create a **config.env** file in the **server** folder where you have to specify the following:

- PORT
- NODE_ENV

**Example:**

```
PORT=5000
NODE_ENV=development
```

After that specify the **proxy** in the **package.json** file in the **client** folder. Make sure to use the same port that you specified previously in the **config.env** file.

### Installation

```
# Install dependencies for server
npm install

# Install dependencies for client
cd client
npm install
```

### Usage

```
# Run the client & server
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client
```

## Author

Mark Domahidi

## Q. What is nextjs?
- Nextjs is a React framework for building web applications

### React
- When builing alone in react js, it is not feasible to create a fully- featured application for production ready.
- React is a library for building user interfaces and it is only responsible for the view layer of an application.

- As a developer you need to make decisions about other features such as routing, data fetching and more

### Next Js
- Its uses React for building user interfaces
and also provides additional features that enable you to build production-ready applications

- This features includes, routing, optimized rendering, data fetching, bunding, compiling, and more

- You don't need to install additional packages as next js provides everything you need

- Opitions and conventions should be followed to implement these features

## Q. Why learn Next js?

- Next js simplifies the process of building a web application for production

1. Routing
2. API routes
3. Rendering
4. Data fetching
5. Styling
6. Optimization
7. Dev and prod build system

# Prerequisites
- HTML, CSS, JavaScript fundamentals
- ES6 + features
- React fundamentals

# Before We Start
## React Server Components (RSC)

- React Server Components is a new architecture introduced by the React team in version 18 which was quickly embraced by NEXT.js

- The architecture introduces a new way of creating React compoenents, splitting them into two types:
   - Server components
   - Client Components

## React Server Components contd

### Server Components
- In next js all components are server components by default
- They have ability to run task like reading files or fetching data from a database
- However, they don't have the abiity to use hooks or handle users interactions

### Client Components
- To create a Client Components, It's necessary to add "use client" at the top of the components file

- Client components can't perform taks like reading files, but they have the ability to use hooks and manage interactions

## React Server Components and Routing

- We'll explore examples where we use server components thar
 await certain actions to finilize before rendering content on the screen

- We'll also see examples where we use client components to leverage hooks from the routing module

# Routing

- Next js has a file-system based routing mechanism
- URL paths that users can access in the browser are defined by files and folders in your codebase

## Routing Conventions

- All routes must be placed inside the app folder
- Every file that corresponds to a path must be named page.js or page.jsx
- Every file corresponds to a path segment in the browser URL






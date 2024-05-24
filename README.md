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

- Nested folder structure
  - app
    - blog
      - first
        - page.tsx
      - second
        - page.tsx
    - about
    - profile
    - page.tsx
    - layout.tsx

### Dynamic Routes

- A Dynamic Segment can be created by wrapping a folder's name in square brackets: [folderName]. For example, [id] or [slug].
- Dynamic Segments are passed as the params prop to layout, page, route, and generateMetadata functions.

### Dynamic Nested Routes

- app
  - products
    - [productId]
      - page.tsx
      - reviews
        - [reviewsId]
          - page.tsx
      - [productName]
        - page.tsx
  - page.tsx
  - layout.tsx

## Private Folders

- A private folder indicates that it is a private implementation details and should not be considered by the routing system

- The folder and all its subfolders are excluded from routing
- Prefix the folder name with an underscore

### Private Folders contd.

- For separating UI logic from routing logic
- For consistently organizing ineternal files across a projects
- For sorting and grouping files in code editors
- And finally, for avoiding potential naming conflicts with future Next.js file conventions
- If you to include an underscore in URL segments, you can prefix the folder name with "%5F," which is the URL-encoded from of an underscore

## Route Group Layout

### Route Group uses:
- To organize your project in a manner that doesn't affect the URL
- To selectively apply a layout to certain segments while leaving others unchanged

## Routing Metadata
- Ensuring proper search engine optimization (SEO) is crucial for increasing visibility and attracting users
- Next.js introduced the Metadata API which allows you to define metadata for each page
- Metadata ensures accurate and relevent information is displayed when your pages are shared or indexed

### Configuring Metadata
- Export a static metadata Object
- Export a dynamic generate Metadata function

### Metadata rules
- Both  layout.tsx and page.tsx files acn export metadata  is read in order, from the root level down to the final page level
- When there's metadata in multiple places for the same route, they get compbined, but page metadata will replace layout metadata if they have the same properties

### Title Metadata 
- The title field's primary purpose is to define the document title 
- It can be either a string or an object

## Special Files
- page.tsx
- layout.tsx
- template.tsx
- not-found.tsx
- loading.tsx
- error.tsx

## Parallel Routes
- Parallel routes are an advanced routing mechanism that allow for the simultaneous rendering of multiple pages within the same layout.


### Dashboard - (Scenario 1)
- User analytics
- Revenue metrics
- Notifications

### Parallel Routes contd.
- Parallel routes in Next.js are defined using a feature known as slots
- Slots help structure our content in a modular fashion
- To defined a slot, we use the `@folder` naming convention
- Each slot is then passed as a prop to its corresponding `layout.tsx` file.

- app
  - dashboard
     - @notification
        - page.tsx
     - @revenue
        - page.tsx
     - @users
        - page.tsx

### Parallel Routes Benefits
- A clear benefit of parallel routes is their  ability to split a single layout into various slots, making the code more manageable
- Independent routes handling
- Sub-navigation

### Independent Route Handling
- Each slot of your layout, such as user analytics or revenue metrics, can have its own loading and error states
- This granular control is particularly beneficial in scenarios where different sections of the page laod at varying speeds or encouter unique errors

### Sub-navigation if routes
- Each slot of your dahsboard can essentilly function as mini-application complete with it's own navigation and state mamanagement
- This is especailly useful in a complex application such as our dashbaord where different sections serve distict purposes.

## Unmatched Routes

### default.tsx
- The `default.tsx` file in Next.js serves as a fallback to render content when the framework cannot retrive a slot's active state from the current URL

- You have complete freedom to defined the UI for unmatched routes: you can either mirror the content found in page.tx or craft am entirely custom view

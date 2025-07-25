# Discuss App

This is a discussion app where people can talk about different topics. You can create new topics, write posts, comment on posts, and reply to comments. It's a full-stack application.

## Features

  * **Make Topics:** You can create new discussion topics.
  * **Write Posts:** You can write new posts inside topics.
  * **Comment:** You can add comments to posts.
  * **Reply:** You can reply to other people's comments.
  * **Search:** Find posts by searching.
  * **Dark and Light Theme:** Choose how the app looks (dark or light colors).
  * **Works on Mobile:** The app looks good on small phone screens. It has a special menu for mobile.
  * **Login with GitHub:** You need to log in using your GitHub account to use the app.

## Technology Used

This app is built with:

  * **Next.js:** A popular tool to build web apps.
  * **Shadcn UI:** A design system to make the app look nice.
  * **Auth.js:** Used for easy login with GitHub.
  * **Prisma:** A modern tool to work with databases.
  * **SQLite:** A simple and light database used for storing data.

# Preview
It look like this.
## Home Page
### Dark Theme
![Homepage Screenshot](images/home-dark.png)


### Light Theme
![Homepage Screenshot](images/home-light.png)

---

## Create Topic
![topic-create Screenshot](images/create-topic.png)

---

## Post on Topic
![Show topic posts Screenshot](images/topic-posts.png)

---

## Create Post 
![post-create Screenshot](images/create-post.png)

---
## View Post
![Show post Screenshot](images/view-post.png)

---
## Comment and Reply
![Comment and reply Screenshot](images/comment-reply.png)

---

## Mobile View

![Home Screenshot](images/mobile-1.png)



# How to Set Up (For Developers)

If you want to run this project on your computer:

1.  **Clone the project:**

    ```bash
    git clone https://github.com/cyxabima/topic-discussion-next-app
    cd topic-discussion-next-app
    ```

2.  **Install things:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**
    You need to create a file named `.env.local` in the main folder. Inside this file, you will put special keys for GitHub login and for the database.

    ```
    GITHUB_ID=your_github_client_id
    GITHUB_SECRET=your_github_client_secret
    AUTH_SECRET=a_very_secret_random_string

    DATABASE_URL="file:./dev.db"
    ```

      * `GITHUB_ID` and `GITHUB_SECRET`: Get these from your GitHub OAuth App settings.
      * `AUTH_SECRET`: Make a long, random string for this. You can search online for "random string generator" to get one.
      * `DATABASE_URL`: For SQLite, this line points to your database file (`dev.db` will be created in your project folder).

4.  **Set up the database (Prisma):**
    First, you need to tell Prisma to create the database file and tables.

    ```bash
    npx prisma migrate dev --name init
    ```

    This command creates the `dev.db` file and sets up the database tables based on your Prisma schema.

5.  **Run the app:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    The app will open in your web browser at `http://localhost:3000`.

-----

## Project Structure

```
.
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── prisma
│   ├── dev.db
│   ├── migrations
│   │   ├── 20250717082555_model_created
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── project-structure.txt
├── public
├── README.md
├── src
│   ├── actions
│   │   ├── create-comment.ts
│   │   ├── create-post.ts
│   │   ├── create-topic.ts
│   │   ├── search.ts
│   │   ├── sign-in.ts
│   │   └── sign-out.ts
│   ├── app
│   │   ├── api
│   │   │   └── auth
│   │   │       └── [...nextauth]
│   │   │           └── route.ts
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── search
│   │   │   └── page.tsx
│   │   └── topics
│   │       └── [slug]
│   │           ├── page.tsx
│   │           └── posts
│   │               ├── new
│   │               │   └── page.tsx
│   │               └── [postId]
│   │                   └── page.tsx
│   ├── auth.ts
│   ├── components
│   │   ├── auth-component.tsx
│   │   ├── comments
│   │   │   ├── comment-create-form.tsx
│   │   │   ├── comment-show.tsx
│   │   │   └── comments-list.tsx
│   │   ├── mobile-navbar.tsx
│   │   ├── navbar.tsx
│   │   ├── posts
│   │   │   ├── post-create-form.tsx
│   │   │   ├── post-detail-skeleton.tsx
│   │   │   ├── post-list.tsx
│   │   │   └── post-show.tsx
│   │   ├── search.tsx
│   │   ├── topic
│   │   │   └── topic-create-form.tsx
│   │   ├── topic-component.tsx
│   │   └── ui
│   │       ├── avatar.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── hover-card.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── popover.tsx
│   │       ├── scroll-area.tsx
│   │       ├── separator.tsx
│   │       ├── skeleton.tsx
│   │       └── textarea.tsx
│   ├── generated
│   │   └── prisma
│   │       ├── client.d.ts
│   │       ├── client.js
│   │       ├── default.d.ts
│   │       ├── default.js
│   │       ├── edge.d.ts
│   │       ├── edge.js
│   │       ├── index-browser.js
│   │       ├── index.d.ts
│   │       ├── index.js
│   │       ├── libquery_engine-debian-openssl-3.0.x.so.node
│   │       ├── package.json
│   │       ├── runtime
│   │       │   ├── edge-esm.js
│   │       │   ├── edge.js
│   │       │   ├── index-browser.d.ts
│   │       │   ├── index-browser.js
│   │       │   ├── library.d.ts
│   │       │   ├── library.js
│   │       │   ├── react-native.js
│   │       │   ├── wasm-compiler-edge.js
│   │       │   └── wasm-engine-edge.js
│   │       ├── schema.prisma
│   │       ├── wasm.d.ts
│   │       └── wasm.js
│   └── lib
│       ├── index.ts
│       ├── query
│       │   ├── comment.ts
│       │   ├── post.ts
│       │   └── topic.ts
│       └── utils.ts
└── tsconfig.json

27 directories, 84 files
```

---

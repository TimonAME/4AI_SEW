# Vuejs-Installation

## Init

```
npm create vue@latest

cd <your-project-name>
npm install
npm run dev
```

## Build

```
npm run build
```

# Tailwind-Installation

## Install Tailwind CSS

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Add the Tailwind directives to your CSS

Add the @tailwind directives for each of Tailwind’s layers to your ./src/tailwind.css file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## In main.js

```
import './assets/tailwind.css'
```

## In tailwind.config.js

```
  content: [
   "./index.html",
   "./src/**/*.{vue,js,ts,jsx,tsx}",
 ],
```

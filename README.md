# Getting started

[Guide](https://www.youtube.com/watch?v=5VBdyfGhs7A)
[Source](https://joyofcode.xyz/sveltekit-project-structure)

1. create empty npm project:

   ```
   $ echo -e "{\"type\":\"module\",\"scripts\":{\"dev\":\"vite dev\",\"build\":\"vite build\",\"preview\":\"vite preview\"}}" > package.json
   ```

   We are using Vite for development, so we add some simple scripts.

1. Install Node dependencies for development:

   ```
   $ npm install -D svelte @sveltejs/kit @sveltejs/adapter-auto vite
   ```

   We need vite because sveltekit is a vite plugin.

   We use adapter-static for static site generation. adapter-auto is an option for other backends.

1. Create vite configuration:

   ```
   echo -e "import {sveltekit} from \"@sveltejs/kit/vite\"\n\n/** @type {import('vite').UserConfig} */\nconst config={plugins:[sveltekit()]}\n\nexport default config" > vite.config.js
   ```

   This enables the sveltekit plugin in Vite.

1. Create Svelte configuration:

   ```
   echo -e "import adapter from '@sveltejs/adapter-static'\nimport {vitePreprocess} from '@sveltejs/kit/vite'\n\n/** @type {import('@sveltejs/kit).config} */\nconst config={preprocess:vitePreprocess(),kit: {adapter:adapter()}}\n\nexport default config" > svelte.config.js
   ```

   Preprocessor - transforms .svelte files before sending to compiler. Vite handles Typescript, SCSS, etc.

   Adapters - adapt Sveltekit to a deployment target. Cloudflare, Netlify, Vercel, NodeJS, ... all work.

1. Create HTML template:

   ```
   mkdir src

   echo '<head>%sveltekit.head%</head><body>%sveltekit.body%</body>' > src/app.html

   ```

   Sveltekit expects an HTML template - this is the absolute bare minimum (though we can certainly do better)

1. Create initial route:

   ```
   mkdir src/routes
   echo -e "<h1>Hello, World"'!'"</h1>" > src/routes/+page.svelte
   ```

   +page is a special route for the initial page of the site

# axtro

> [!warning]
> No over**react**ions allowed here! Svelte is always welcomed.

Using Astro and htmx together on Deno (until my builds fail). I'll have my cake and eat too.

## Captains Log

### Adding htmx

1. install htmx

   ```shell
   deno add npm:htmx.org@2.0.4
   ```

2. Include htmx library to the main layout ([`./astro/src/layouts/Layout.astro`](./astro/src/layouts/Layout.astro))

   > I'd like to add this to `head` in the future. It doesn't feel right in the `body`.

   ```html
    <script>
      import 'htmx.org'
    </script>
   ```

3. Run and be free.

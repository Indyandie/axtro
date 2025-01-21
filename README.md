# axtro

> [!warning]
> No over**react**ions allowed here! Svelte is always welcomed.

Using Astro and htmx together on Deno (until my builds fail). I'll have my cake and eat too.

## To Do

- [ ] Add Astro API [endpoints](https://docs.astro.build/en/guides/endpoints/#server-endpoints-api-routes)
  - RESTful CRUD
  - [ ] `GET`
  - [ ] `POST`
  - [ ] `PUT`
  - [ ] `PATCH`
  - [ ] `DELETE`
- [ ] htmx
  - [ ] `hx-post`
  - [ ] `hx-put`
  - [ ] `hx-patch`
  - [ ] `hx-delete`
- [ ] Database
  - [ ] SQLite

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
     import "htmx.org";
   </script>
   ```

3. Run and be free.

### HTML Fragments

Simple `hx-get` can be paired with HTML fragments.

Example ([`html-fragment.html`](./astro/src/pages/html-fragment.html))

```html
<article>
  <h2>Test</h2>
  <p>This is an html fragment.</p>
  <a href="/">home</a>
</article>
```

> [!note]
> Astro will pop a `<!DOCTYPE html>` to the `HTML` file. I'm not sure if this is a problem but there is a work around.

#### Page Partials

> [!NOTE]
> Astro gains an additional heart :heart: container for supporting this. The future is looking bright.

The folks at astro provide great support via [page partials](https://docs.astro.build/en/basics/astro-pages/#page-partials).

## Resources

- Astro
  - [Data Fetch](https://docs.astro.build/en/guides/data-fetching/)
  - [Call Endpoints (server)](https://docs.astro.build/en/recipes/call-endpoints/)
  - [Database](https://docs.astro.build/en/guides/astro-db/)
    - [DB Guide](https://docs.astro.build/en/guides/astro-db/)

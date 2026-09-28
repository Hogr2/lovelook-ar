<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the storefront's editable store settings in `src/config.ts` and its six prototype products in `src/data/products.ts` so visual components stay presentation-only.
- Keep product details as a client-side dialog on the single scrolling home page, matching the requested front-end-only prototype without additional routes or persistence.

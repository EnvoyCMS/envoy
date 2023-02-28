# Envoy CMS

[![Lint Root Files](https://github.com/domwebber/envoy/actions/workflows/lint-root.yml/badge.svg)](https://github.com/domwebber/envoy/actions/workflows/lint-root.yml)
[![Lint Source Code](https://github.com/domwebber/envoy/actions/workflows/lint-source-code.yml/badge.svg)](https://github.com/domwebber/envoy/actions/workflows/lint-source-code.yml)

A code-first, developer-friendly, open source content management system built
on open-source software, open-standards and best practice for customisability,
extendability and maintainability.

**Works with all major
[static site generators][source-jamstack-static-site-generators]
and client applications.**

## Key Features of Envoy CMS

- Whitepaper Content Management System
- Code-first structural approach
- No arbitrary errors to fix - nothing like: \
  ```bash
  [14:22:59] ERROR (xxx): 1: Collection "page" > Field "layout" > "value" does
  not match any of the allowed types
  ```

## Comparison

Envoy CMS builds on ideas from other content management systems, yet, without
intending to further convolute the CMS sphere this CMS addresses different but
similar problems.

When considering a Content Management System, you should consider the options
available, of which there are many - a good place to start off your comparison
efforts is Netlify's Jamstack website detailing some options in regards to
[headless content management systems][source-jamstack-headless-cms].

> See our [comparisons](./docs/comparison/).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.

Please make sure to update tests as appropriate.

### File Signatures

Where possible, files should include the following signature at the top:

```typescript
/**
 * Envoy CMS.
 *
 * @since     1.0.0
 * @module    Envoy
 * @copyright 2023 Dom Webber, Relucent Ltd & Contributors
 * @author    Dom Webber <dom.webber@hotmail.com> (https://github.com/domwebber)
 * @author    Relucent Ltd <hello@relucent.dev> (https://relucent.dev)
 * @author    Contributors (https://github.com/envoy/graphs/contributors)
 * @see       {@link https://github.com/domwebber/envoy}
 */
```

```css
/*! Envoy CMS | (c) 2023 Dom Webber, Relucent Ltd & Contributors
| https://github.com/domwebber/envoy */
```

```bash
# Envoy CMS.
# (c) 2023 Dom Webber, Relucent Ltd & Contributors
# https://github.com/domwebber/envoy
```

## License

MIT License &copy; 2023 Dom Webber, Relucent Ltd & Contributors

### Contact

*This project is supported by [Relucent][licensing-relucent] - started as a
personal project by [Dom Webber][licensing-domwebber].*

**Relucent Ltd**: [https://relucent.dev][licensing-relucent] <<hello@relucent.dev>>

**Project Manager**: [Dom Webber][licensing-domwebber] <<dom.webber@hotmail.com>>

> See [Acknowledgements](ACKNOWLEDGEMENTS.md)

<!-- References: -->
<!-- Ownership, Licensing & Copyright: -->
[licensing-relucent]: https://relucent.dev "Relucent's Website"
[licensing-domwebber]: https://github.com/domwebber "Dom Webber's GitHub Profile"

<!-- Sources: -->
[source-jamstack-headless-cms]: https://jamstack.org/headless-cms/ "Jamstack Headless CMS'"
[source-jamstack-static-site-generators]: https://jamstack.org/generators/ "Jamstack Static Site Generators"

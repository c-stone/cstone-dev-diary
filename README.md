# CMS JS Frontend Base

## Description

This project is a base template for frontend projects using [HubSpot's JS building blocks](https://github.hubspot.com/cms-js-building-block-examples/). Projects are built and deployed using [Vite](https://vitejs.dev/).

### Basic Features

- Supports SASS/SCSS
  - Note from Vite:
    > Because Vite targets modern browsers only, it is recommended to use native CSS variables with PostCSS plugins that implement [CSSWG drafts](https://github.com/w3c/csswg-drafts) (e.g. [postcss-nesting](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting)) and author plain, future-standards-compliant CSS.
- Supports [TailwindCSS](https://tailwindcss.com/docs/utility-first)
- `@hubspot/cms-dev-server`
  - > a package that allows users to start an Express + Vite dev server enabling an auto-reloading local development workflow that is nearly identical to your deployed components. The cms-dev-server also enables rendering local versions of your components on live CMS pages to aid in development.
  - Includes a [Storybook integration](https://github.hubspot.com/cms-js-building-block-examples/reference/cms-dev-server.html#storybook)
  - [Documentation](https://github.hubspot.com/cms-js-building-block-examples/reference/cms-dev-server.html)
- JS modules and JS partials can depend on public third-party NPM dependencies
- [Module Fields](https://github.hubspot.com/cms-js-building-block-examples/reference/js-modules.html#module-fields) expressed as JSX
- GraphQL

## Core Concepts

- Modules built with React rather than HTML/HubL
  - HubL values can be passed to React components
  ```handlebars
  {% module "contact_profile"
  path="@projects/contact-profile-project/contact-profile-app/components/modules/ContactProfile",
  firstName="{{contact.firstname}}", lastName="{{contact.lastname}}", email="{{contact.email}}"
  %}
  ```

````

```jsx
export const Component = (props) => {
  return (
    <div>
      <span>{props.hublParameters.firstName}</span>
      <span>{props.hublParameters.lastName}</span>
      <span>{props.hublParameters.email}</span>
    </div>
  );
};
````

- Building fields with JSX

```jsx
import {
  ModuleField,
  TextField,
  FieldGroup,
  BooleanField,
} from '@hubspot/cms-components/fields';

export const fields = (
  <ModuleField>
    <TextField
      name="example_field"
      label="Example Text Field"
      default="Placeholder text"
    />

    <FieldGroup name="group_of_fields" label="Field Group">
      <BooleanField
        name="child_boolean_field"
        label="Child Boolean Field"
        default={true}
      />
      <TextField
        name="child_text_field"
        label="Child Text Field"
        default="Child Field"
      />
    </FieldGroup>
  </ModuleField>
);
```

Using in your module:

```jsx
export const Component = ({ fieldValues }) => {
  return (
    <ul>
      <li>{fieldValues.example_field}</li>
      <li>{fieldValues.group_of_fields.child_text_field}</li>
    </ul>
  );
};
```

## Prerequisites

- Node.js (version 16.0.0 or higher)
- HubSpot CLI

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install all dependencies.

## Available Scripts

In the project directory, you can run:

### `npm start`

Starts the development server for the JavaScript package within the project.

### `npm run postinstall`

Runs the post-install script which is necessary after installing the packages.

### `npm run lint:js`

Lints JavaScript and JSX files in the project for any coding issues.

### `npm run prettier`

Checks all files in the project with Prettier for any formatting issues.

### `npm run watch:hubl`

Watches for changes in the HubL theme folder and synchronizes them with the HubSpot CMS.

### `npm run upload:hubl`

Uploads the HubL theme folder to the HubSpot CMS.

### `npm run deploy`

Deploys the project to the HubSpot CMS.

## Styling

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

## License

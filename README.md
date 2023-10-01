[![Netlify Status](https://api.netlify.com/api/v1/badges/c18c4bec-76a9-4df4-af59-e7e904d7f1fa/deploy-status)](https://app.netlify.com/sites/multistepforms-react/deploys)

# Multi-step forms

## Description

- Sets up a reusable workflow for multi-step forms.
- Two insurance purchase forms have been implemented using this workflow / template.

### Designer Insurance

This multi-step form collects the following set of data from the user. All fields are required.

```js
{
    firstName: string,
    lastName: string,
    email: string,
    age: string
}
```

### Developer Insurance

This multi-step form collects the following set of data from the user. All fields are required.

```js
{
    email: string,
    age: string
}
```

_Before submitting the form, a summary page is displayed to the user with the information they filled in._

## Folder structure

- **`Home` page** – renders a list of all the available forms.

Inside the `multi-step-forms` feature directory:

- **`Confirmation` page** – displays the "Thank you" message after a form has been submitted.
- **`useForm` hook** – a reusable hook to manage the state required to implement a multi-step form.
- **`forms` directory** – files for each multi-step form to render the steps. Uses the `useForm` hook for state.
- **`steps` directory** – files for each form step eg. `Age`, `Name`, `Email`. A step file can be imported and used by multiple forms.
- **`summaries` directory** – contains all form summary pages.

*There is a barrel file `index` in each directory you can import from.*

## Instructions

### How to run this repo

- Install all dependencies with `yarn`.
- Run `yarn dev` to start the server.
- Visit [http://localhost:5173/](http://localhost:5173/) to view the app.

### How to run integration tests

An integration test has been written for each multi-step form flow.

Run `yarn test` to run all tests.

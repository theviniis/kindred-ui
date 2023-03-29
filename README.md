# Using Kindred UI Design System

1 - Log in to npm:

### `yarn login` or `npm login`

2 - Install the package:

### `yarn add @kindred-ui` or `npm i @kindred-ui`

3 - Import a component:

### `import { x } from '@kindred-ui';`

# Working on this project

1 - Clone the project

2 - Create a branch from 'develop'

3 - Run: yarn && yarn run storybook

### Note:

_If for some reason you're having some trouble using `npm install && npm run storybook`, I would advise you to use yarn._

4 - Create/edit components

5 - Make a pull request to 'develop'

### Version increment will be based on the commit messages from the latest release

- If the string "BREAKING CHANGE", "major" or the Attention pattern `"refactor!: icon package changed"` is found anywhere in any of the commit messages or descriptions the major version will be incremented.
- If a commit message begins with the string "feat" or includes "minor" then the minor version will be increased. `"feat: new API"` and `"feature: new API"`, for instance.
- All other changes will increment the patch version.

:)

# Tools used:

[Storybook](https://www.chromatic.com/library?appId=60b02eaf2c7d0a0039d0e827)

[Chromatic](https://www.chromatic.com/builds?appId=60b02eaf2c7d0a0039d0e827)

[TSDX](https://tsdx.io/)

[Typescript](https://www.typescriptlang.org/)

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

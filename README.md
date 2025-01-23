# Installing Cypress


## Getting started
Cypress is a next generation front end testing tool built for the modern web. We address the key pain points teams face when testing modern applications and maintaining test suites.

- NodeJs

## Installation 
``` 
- npm install cypress --save-dev
- npx cypress open

- Add package.json
{
  "scripts": {
    "cy:open": "cypress open"
  }
}
- npm run cy:open 
```

## Running and debugging tests
```
- ENV=stg npx playwright test --ui  
- npx playwright test --project=chromium --headed tests/login   
- npx playwright test --headed     
```

## Allure report
```
npm install @playwright/test allure-playwright --save-dev
npm install allure-commandline --save-dev


import { defineConfig, devices } from '@playwright/test';
import allure from 'allure-playwright';

export default defineConfig({
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  reporter: [
    ['allure-playwright'],
    ['dot'], // optional: just to show results in the terminal as well
  ],
  outputDir: 'test-results',
  use: {
    screenshot: 'only-on-failure', // optional: save screenshots only on failure
  },
});


- npx allure generate test-results --clean
- npx allure open allure-report

```

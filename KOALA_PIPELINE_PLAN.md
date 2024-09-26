# Devops plan

Research steps needed
    Husky
    Precommit hooks
    Docker dev
    Docker prod
    Gthub actions
    Testing

Make flowchart

## Pre-commit hook:

- Navigate to `\<repo name>\.git\hooks` 🐨
- Remove `.sample` from pre-commit file `pre-commit.sample` 🐨
- Or create pre-commit file `pre-commit` 🐨
- Add the following script: 🐨

`
    #!/bin/bash

    # Prevent direct commits to the main branch
    if [ "$(git rev-parse --abbrev-ref HEAD)" = "main" ]; then
        echo "Direct commits to main are not allowed. Please use feature branches." >&2
        exit 1
    fi
`

- Save the file 🐨
- Close the file in editor 🐨
- Make it executable via terminal (bash) `chmod +x pre-commit` 🐨
- Test
    - Push changes to this branch 🐨
    - Merge to main 🐨
    - Test a commit 🐨


# Husky

` git commit --no-verify -m "<>" `

## Husky and linting 🐨

- install Husky `npm install --save-dev husky` 🐨
- `npx husky init` makes a script and updates script in package.json to create a pre-commit hook 🐨
- work out how to run linting `npm run lint` 🐨
- add `npm run lint` to husky hook file 🐨
- try commit 🐨
- Change the code to give you a warning/error 
- Use git log to see if the commit completed or was stopped
- make the linter more strict, change the npm script for linting so even warnings are not allowed

## prettier 🐨

- Install prettier as a dev dependency🐨
    `npx prettier --write` 
- Create an npm script to run prettier 🐨
    `"prettier": "npx prettier --write"`
- Test that it works 🐨
    `npm run prettier`
- Test you can make it angry 
- Add to husky pre-commit hook 🐨
- test again 🐨

## jest

- Create a component for the h2's that takes a title prop 🍸
  - Create a components folder 🍸
  - Create a Title component 🍸
- Test component works 🍸
- install jest
- look into and install react testing library
- create an npm test script
- write a basic test for the title component
- Test the test
  - Write component to fail
  - Test it fails
- Add test script to husky pre-commit hook
- Test the hook works
- make sure failing test stops commit

## Hackathon plan

### Objectives

- When you put in a "Pull Request" (PR) from a feature branch into the main branch there should be a Github Action that automatically runs things like linting, formatting, testing and auditing.
- You should not be able to merge a PR into main unless the steps in the Github Action (lint, format etc etc) all pass.
- You should not be able to push/merge commits directly to the main branch, everything should have to go through the PR process.
- When you merge the feature branch into the main branch this should trigger an automated workflow in Render. Render should watch for changes in your main branch, when it sees a change it will pull the code, run the Docker production build and then deploy the Next.js site. You should be able to see your Next.js app live on the internet.

### Steps

- Create a Github action
  - Create .github folder with a workflows sub folder 🐨
  - Create a yaml file (.yml) for a simple action 🐨
  - Write simple github action to echo something on pr merge into the main branch 🐨
  - Commit to main 🐨
  - Test its working!
    - Make changes on feature branch 🐨
    - Commit 🐨
    - Push to feature branch 
    - Create pull request🍸
    - Merge PR🍸
    - Should echo leo quote🍸

- docker build and docker run in a Github Action 🍸🍸
  - rename ymlfile🍸
  - install docker step🍸
  - docker build step🍸
  - docker run step `docker run --rm image_name_here npm run lint && npm run format` 🍸
    - with lint🍸
    - with format🍸
  - Test🍸
- Prevent merge if errors in checks🍸🍸

  - Set up ruleset in github to prevent merging🍸
  - make problems and test🍸
  - fix problems and test again🍸

- Set up CD pipeline
  - create prod dockerfile
  - create render webservice
    - linked to our repe
    - checking for changes
    - deploy
    - test
  - make to change to code and see if it deploys the change



CI/CD Pipeline:
Local Machine: Development branch, precommit check hooks, Commit Code, push
GitHub: Pull Request, github action checks, Merge devbranch to main
Production: Render deploy triggered, 

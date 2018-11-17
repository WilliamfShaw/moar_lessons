# Git Flow Practice

Each team should nominate a Git Czar.

## Setup

#### Git Czar

###### on GitHub
- Create a new repository on GitHub for the `suite_app`
- Add all of your teammates as collaborators

###### Locally
- Copy the `suite_app` folder into a location **outside** of our class
  repository and initialize a new repository.
- Add the origin remote for the GitHub repository and push your initial commit
  to GitHub.
- Create a development branch and push it to GitHub

## The Initial Commit

- Submit a pull request to merge the development branch into master, and make
  sure not to delete the branch
- After successful merge have all of your teammates clone the suite_app
  repository

###### Happy Path

Have two group members work on the following features off of `development`

* `header-comment` - add a comment at the very top that says "Fibonacci"
* `conclusion` - add a console.log() at the very bottom that says "Fin"

Each member should submit a pull request for their features, and the czar should
merge the changes. This should all happen swimmingly. After the changes have
been merged all members should pull the changes made to master into their master
branch.

###### Less Happy Path

Have two people work on the following features off of `development`

* `semantics` - replace `x`, `y`, `next`, and `n` with `num1`, `num2`, `nextNum`, and `totalNum`
* `better-logs` - replace `console.log(next)` with `console.log('Fib ' + i + ': ' + next)`

Have the members submit pull requests for these features, and the czar merge
these changes.

**MERGE CONFLICT**

Let's reconcile our commit differences!

Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# Team Git Flow

## Learning Objectives

* Explain what a branch is in a git repository
* Use the 'git flow' model for collaborative software development

## Outline

* So far, in any git repository we have worked with. We have only worked on one
  "branch"
* What is a branch? A branch of a git repository is simply a divergence of commit
  history into multiple paths
* This is useful when, for example, you have an experimental feature that you
  want to work on, but are not yet sure whether it should be part of the "MAIN"
  codebase just yet. Creating a branch will allow you to work on this feature
  and take it for a spin, and gives you the flexibility to either "Merge" your
  feature back into the "MAIN" codebase, or to simply discard, or ignore, your
  work

```
At commit 3, a new branch is created called "suite-feature", and commits
4, 5, and 6 are made on this branch. Meanwhile, work continues on "master",
namely, commits 7 and 8.

                                 * master
  (1) -- (2) -- (3) -- (7) -- (8)
                 \                    * suite-feature
                  \-- (4) -- (5) -- (6)

```

```
If the suite feature is not-so-suite, it can be ignored, and work can continue
on master as usual.

                                                        * master
  (1) -- (2) -- (3) -- (7) -- (8) --- (10) -- (11) -- (12)
                 \
                  \-- (4) -- (5) -- (6)
                                     * suite-feature

```

```
If the suite feature is awesome, it can be merged back into the master branch.

                                          * master
  (1) -- (2) -- (3) -- (7) -- (8) --- (9)  <= Commit 9 is a "merge commit". It
                 \                    /        merges two branches together.
                  \-- (4) -- (5) -- (6)
                                     * suite-feature

```

**Wait a minute, when git merges the two branches together, does that overwrite
the work that happend on the master branch *after* commit 3? In other words,
what happens to the work in commits 7 and 8?**

Git is smart enough to NOT ERASE anyone's changes. **Let that sink in**. Git
will intelligently take the changes from commits 4, 5, 6, and the changes from
commits 7, 8, and combine all of them together!

**Is git always smart enough to do that?**

No! Sometimes, the changes from the two branches affect the same lines of code
in the same file. However, in this situation, git will not accidentally erase
someone's work. It will alert the user to the fact that there is a "MERGE
CONFLICT", and allow the user to resolve the merge conflict in a way that makes
sense for the codebase.

> At this point in time, http://nvie.com/posts/a-successful-git-branching-model/

Discuss the workflow stated in this article.

* Master branch for deployment
* Development branch for feature aggregation
* Feature branches for work
* Pull requests to integrate features
* Git czar for pull requests
* Merge conflict resolution

```
  master ---------- master ------------ master ------------ master ----------
                                                              /
  dev ------------- dev --------------- dev --------------- dev -------------
   \                / \                 /
    feature --------   feature2---------
```

### Doing time

* Split up into groups of 3 or 4.
* Nominate a git czar
* Czar, create a repo for `suite_app`
* Czar, create a development branch off of master
* Add everyone as collaborators
* Everyone clones

**Happy path**

Have two people work on the following features off of `development`

* `header-comment` - add a comment at the very top that says "Fibonacci"
* `conclusion` - add a console.log() at the very bottom that says "Fin"

Have the members submit pull requests for these features, and the czar merge
these changes. Beautiful.

Have everyone sit together when the czar then merges development into master.

After the merge, everyone should pull all branches.

**Unhappy path**

Have two people work on the following features off of `development`

* `semantics` - replace `x`, `y`, `next`, and `n` with `num1`, `num2`, `nextNum`, and `totalNum`
* `better-logs` - replace `console.log(next)` with `console.log('Fib ' + i + ': ' + next)`

Have the members submit pull requests for these features, and the czar merge
these changes. MERGE CONFLICT!

Walk everyone through the resolution of this conflict. Remember to emphasize that
neither person's work alone is correct, and that both people's changes have to
be intelligently reconciled. <-- reconciled, best word ever.

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?

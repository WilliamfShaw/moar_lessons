# TESTING

1. What are the differences between TDD and BDD?

1. What is Mocha?  What is Chai?  What is the relationship between them?


# Instance v. Class

1. What is an instance method?  What is a class method?  


# Validations

1. What is the 'born' attribute being validated for?
```
    born: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: { msg: 'Please enter a valid date' },
        isBefore: new Date()
      }
    }
```
1. Why do we validate models?

# HOLDOVERS

1. Explain the purpose of Routers in Backbone.

1. What is jQuery?  Describe pro's and con's compared to using Vanilla JS.

1. What is the purpose of methods such as .then() (Express Servers) or .done() (AJAX requests)?

1. 'If a feature does not address a specific User Story, then it should not be implemented'. Explain.

1. Whiteboard a Javascript Constructor of Library Books.  Library Books have attributes to track their author, title, if they are checked out (boolean), and a due date (is null when not checked out/3 weeks later if checked out).  Library Books have behaviors that check them out, check them in, and return their overdue status (returns true if book is checked out and past the due date/ false otherwise).

# Projects

1. Describe a specific technical difficulty you faced while working on your project.  How did you solve this problem?

1. Reflecting back on your most recent project, what is one specific technical change that you would make to it? (New technology, rewriting/refactoring of code, choice of API, etc.)

1. What were some aspects of your project that were harder to implement than you expected?  What were some aspects of your project that were easier to implement than you expected?

1. Considering your most recent project, what aspect of it was most comfortable for you to implement?  Why?

1. What are some challenges you faced using external data sources?  What work-arounds did you use to overcome these challenges?

1. When met with a problem that you are not initially able to solve, what is your process for finding possible solutions?

1. Given a large dataset currently living in your database, would you rather perform the filtering of it on the server-side or the client-side of your application?  Please explain your choice and weight the pros and cons of it. 

1. In your most recent project, describe the technical achievement you are most proud of.

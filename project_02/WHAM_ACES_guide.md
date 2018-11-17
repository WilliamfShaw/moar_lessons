# The WHAMco ACES Guide to Writing Good Code

### A -> Arid

__D__ on't __R__ epeat __Y__ ourself! To keep your code DRY abstract areas of repeated code into methods.

### C -> Commented

- Use comments to clarify code whose function is not obvious
- Use comments to indicate discrete sections of code
- Use comments to indicate areas of code that need further attention
- Use comments sparingly
  - Avoid over-commenting
  - Your code should be written in such a fashion that it explains itself.

### E -> Easy-to-Read
- Lines of code should not extend beyond 80 characters to maintain readability.
- Mainting proper indentation and whitespace throughout your code.
  - Always indent 1 tab (2 spaces) when nesting lines of code.
  - Single line of whitespace between function definitions
- Name variables semantically for the data they represent
- Use camelCase for variables and instances
- Use CapitalCamel for constructors

### S -> Small
- Functions should be small and concise
  - No more than 10-15 lines of code for each method
  - Functions should have one, clearly defined behavior that is readily apparent
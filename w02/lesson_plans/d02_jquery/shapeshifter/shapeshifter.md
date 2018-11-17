#Shapeshifter

## Circles, Squares, and Sheens

Define three function that will:

- Retrieve the number the user has input
- Retrieve the color that the user has input

Based on the input values, your function should create that number of shapes, with the provided color, and append them to the appropriate container.


i.e. If the function `makeCircles` is called, and the input boxes hold the values: 3 and indianred, then the shape container for circles should contain three indianred circles.

For things, you should create a circle with a background that changes depending on whether the user inputs `sheen or cage`. Default to `sheen`.

After the function is called the input values should be reset.

**Does jQuery have a nifty method for getting/setting form input values?**


### Bonus

###### `1`
- If a color is not provided for circles, default to `firebrick`
- If a color is not provided for squares, default to `darkslategrey`
- If neither sheen nor cage is provided (empty input) default to `sheen`

###### `2`
- If the user enters 'random', then a random color should be selected for each shape that you add

###### `3`
- Create a function `clearShapes` that accepts a single argument, the type of shape that should be cleared, and will clear the appropriate container of all of the shapes
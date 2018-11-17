# Week 13 - Funtime Night Work

# Build a CSS color picker.

Given the HTML provided, utilize javascript to do the following:

### Step 1
Track the mouse's movement over the canvas section. As the mouse moves, it should change the color of the section's background. To achieve this use the `offsetX` and `offsetY` properties of the event object. Why not `pageX/pageY`? [See here](http://www.google.com)

Use these two values to set the color using `hsl`. To simplify things, keep saturation set to 100%, and use the x and y values to change the hue and luminence properties. A valid hsl color string looks like this: `hsl(234, 100%, 32%)`. What is hsl you say? [See here](http://www.google.com)


### Step 2

When the canvas section is clicked it should display the following in the readout section:

- display the current HSL value
- display the current RGB value
- display the current HEX value
- display a swatch set to that color

### Resources

[Color Conversions](http://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/) - provided here is a tutorial on color conversion, you can use this guide as pseudocode to perform the conversion from `HSL to RGB` or `RGB to HSL`

[Javascript Number constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) - Might be helpful *wink wink*

### Bonus

Keep track of the 3 most recently chosen color swatches. If a swatch is clicked, it should display the color values for that swatch.

#### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Color Picker, Bro</title>
	<link href='http://fonts.googleapis.com/css?family=Raleway:700,300' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="style.css">
	<script src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
	<script type="text/javascript" src='colorPicker.js'></script>
</head>
<body>

	<div id='container'>
		<h1>Color Picker, bro</h1>
		<section id='canvas'></section>
		<section id='readout'>
			<p>HSL: <span id='hsl'></span></p>
			<p>RGB: <span id='rgb'></span></p>
			<p>HEX: <span id='hex'></span></p>
			<section id='swatch'></section>
		</section>
	</div>

</body>
</html>
```

#### CSS
```css
body {
	background: url(http://subtlepatterns.com/patterns/subtle_white_mini_waves.png);
}
#container {
	margin: 0 auto;
	width: 800px;
	height: inherit;
	text-align: center;
	font-family: Raleway;
	font-weight: 300;
}
#canvas {
	margin: 0 auto;
	border: 5px solid black;
	box-sizing: border-box;
	height: 360px;
	width: 360px;
}
#readout {
	background: rgba(117,117,117, .2);
	margin: 20px auto;
	height: 200px;
	width: 360px;
	border: 1px #333 solid;
	box-sizing: border-box;
	border-radius: 20px;
}
#swatch {
	margin: 0 auto;
	height: 75px;
	width: 95%;
	border-radius: 20px;
}
p, span {
	letter-spacing: 1px;
}
p {
	font-weight: 700;
}

span {
	font-weight: 300;
}
```

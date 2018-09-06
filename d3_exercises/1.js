dataset = ["Apple", "Orange", "Grape", "Banana"]

d3.select('body')
	.append('h1')
	.text("Hello, world")
	.style('color', 'green');


d3.select('body')
	.append("h3")
	.style('margin', '20px')
	.style('color', 'brown')
	.text("Some of the fruits in the basket are: ")
	.append('ul')
	.selectAll('li')
	.data(dataset)
	.enter()
	.append('li')
	.style('color', 'brown')
	.style('font-weight', '600')
	.text(function(value) { return value; });
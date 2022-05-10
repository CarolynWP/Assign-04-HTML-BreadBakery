"use strict"

function happySlices() {
	//variables 
	let slice = parseInt(document.getElementById("size").value);
	let toppings = parseInt(document.getElementById("toppings").value);
	const TAX = .13

	if (slice == 1){
		const SLICE = 4;
	}

	else if (slice == 2){
		const SLICE = 7
	}

	else {
		const SLICE = 10
	}

	
	if (toppings = "butter"){
		const TOPPING = .50
	}

	else if (toppings = "avocado"){
		const TOPPING = 2
	}

	else if (toppings = "jam"){
		const TOPPING = .75
	}

	else if (toppings = "sprinkles"){
		const TOPPING = 1.25
	}

	else {
		const TOPPING = "3.50"
	}

	
	if (document.getElementById('yes').checked == true){
		const WATER = 1
	}
		
	else {
		const WATER = 0
	}

		let subTotal = SLICE + TOPPING + WATER
		let tax = subTotal * TAX
		let total = subTotal + TAX
	document.getElementById("order").innerHTML = "Your order will be " + total.toFixed(2) + " dollars!"
}
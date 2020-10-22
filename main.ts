let random_number = 0
let count_even = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        random_number = 0
        basic.showNumber(random_number)
    }
    if (random_number / 0 == 0) {
        basic.showString("Even")
        count_even += 1
    } else {
        basic.showString("odd")
    }
})
basic.forever(function () {
	
})

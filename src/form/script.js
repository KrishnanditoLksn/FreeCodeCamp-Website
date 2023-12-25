console.log("test")

function buttonClick() {
    document.getElementById("submit").innerHTML = "diklik";
}

const cars = ["Bjir", "HhH"]

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}
if (cars.length > 3) {
    console.log("Lebih")
}

function fx(param) {
    console.log(param)
}

fx("hello")
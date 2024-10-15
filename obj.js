const obj = {
  name: "Adrian",
  meet: function() {
    console.log(this.name)
  }

}

// console.log(obj.name)

obj.yearsOld = 25;

// console.log(obj.name)

// obj = {}

const arr = [1, 2, 3, 4]

arr.push(5);

// arr = [6, 7, 8]

obj.meet();
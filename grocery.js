let body = document.getElementById("data");
// let ul = document.createElement("ul");
// let li1 = document.createElement("li");
// let li2 = document.createElement("li");
// let li3 = document.createElement("li");
// let li4 = document.createElement("li");
// let li5 = document.createElement("li");
// ul.append(li1, li2, li3, li4, li5);

// console.log(ul);

// let text1 = document.createTextNode("Apple");
// let text2 = document.createTextNode("Banana");
// let text3 = document.createTextNode("Cherry");
// let text4 = document.createTextNode("Dates");
// let text5 = document.createTextNode("Elderberry"); 

// li1.append(text1);
// li2.append(text2);
// li3.append(text3);
// li4.append(text4);
// li5.append(text5);

// body.append(ul);
// console.log(ul);
// body.append(ul);
// ul.className="divClass"
// ul.setAttribute("id", "tag")


// ul.style.color = "black"
// ul.style.fontSize = "20px"
// ul.style.backgroundColor = "red"
// // ul.style.cssText="color:teal;"
// ul.style.cssText=`color:teal;`

let fruits = ["Apple", "Banana", "Cherry", "Dates", "Elderberry"];

let ul = document.createElement("ul");
fruits.map((i) => {
    let li = document.createElement("li")
    let tN= document.createTextNode(i)
    li.append(tN)
    ul.append(li)
})

body.append(ul)

// // const main_body = document.querySelectorAll(".main_body");
// // console.log(main_body);


// // main_body.textContent = "Anmol";
// // console.log(main_body.textContent)


// //ChangeText using J/S:
// const main_body = document.getElementById("main_body");

// main_body.innerHTML = "Anmol";
// console.log(main_body.innerHTML);


// //The End..

// // * Giving style:

// const image = document.querySelector("div.right_side a.Images");

// main_body.style.backgroundColor = "red";
// main_body.style.textDecoration = "green";


// // get & setAttributes
// const below_txt = document.querySelector(".below_txt a");
// below_txt.getAttribute("href");
// below_txt.setAttribute("href","htttps/www.amazon.com");
// console.log(below_txt);


// // const list_txt = document.getElementsByClassName("list_txt")
// // console.log(list_txt);


// const li = document.getElementsByTagName("a");

// // for(let i=0;i<li.length;i++)
// // {
// //     console.log(li[i]);

// //     let Items = li[i];

// //     Items.style.backgroundColor="white";
// //     Items.style.fontSize="50px"
// //     Items.style.color="green";
// //     // Items.style.fontStyle="none"
// // }

// // above code by using for of loop:

// for (elements of li) {
//     console.log(elements);
//     elements.style.backgroundColor='blue'
// }


const header = document.querySelector(".right_side");
console.log(header); // Always use Queryselector..

// iwant to check how many parent of the header is present.
console.log(header.parentElement);
console.log(header.childNodes);

console.log(header.lastChild);

const main_body = document.querySelector(".main_body");
console.log(main_body.classList);
console.log(main_body.className);



// want add class using javascript: 
/*eske liye apke pass use div ka naam hona chaiye jis div ke ander lagana h. same aise hi remove class ka bhi lagega*/
main_body.classList.add("bg_back");
main_body.classList.remove("bg_back");

//suppose apko check karna h ki class exist karti h then we use. it return true or false.

const ans = main_body.classList.contains("bg_back");
console.log(ans)




const ex = document.querySelector(".below_txt");
console.log(ex);
// i want class name:

console.log(ex.className);
console.log(ex.classList);


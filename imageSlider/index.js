let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

let ar = [
    "https://images.unsplash.com/photo-1498511225742-7831d53e64b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwcmVwbGFjZW1lbnR8ZW58MHx8MHx0ZWFsfA%3D%3D&auto=format&fit=crop&w=500&q=60",

    "https://images.unsplash.com/photo-1514519334989-3d5c8b1a9f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2t5JTIwcmVwbGFjZW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    
    "https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2t5JTIwcmVwbGFjZW1lbnR8ZW58MHx8MHx3aGl0ZXw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1508020963102-c6c723be5764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHJlcGxhY2VtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1483116531522-4c4e525f504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNreSUyMHJlcGxhY2VtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

    "https://images.unsplash.com/photo-1661881781570-0f4cb16e97aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",

    "https://images.unsplash.com/photo-1661831870991-570c7172edfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",

    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",


];

let i = 0;

document.getElementById("frame").src = ar[0];

nextBtn.addEventListener("click" , function(){

    i++;
    if(i>ar.length-1)
    {
        i=0;
    }
    document.getElementById("frame").src=ar[i];
});

prevBtn.addEventListener("click", function(){
    i--;
    if(i<0)
    {
        i = ar.length-1;
    }
    document.getElementById("frame").src = ar[i];
})
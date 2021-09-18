const reviews = [
    {
        id: 1,
        img: 'user-1.jpg',
        name: 'adeniji kazeem',
        profession: 'Graphics designer',
        details: 'amet, consectetur elit. Laboriosam doloribus nobis sequi voluptate velit accusamus excepturi, quas eaque dolores non nulla libero doloremque aspernatur saepe.'
    },
    {
        id: 2,
        img: 'user-4.jpg',
        name: 'sara jones',
        profession: 'teaching',
        details: 'consectetur adipisicing elit. Laboriosam doloribus nobis sequi voluptate velit accusamus excepturi, quas eaque dolores non nulla libero doloremque aspernatur saepe.'
    },
    {
        id: 3,
        img: 'user-3.jpg',
        name: 'brad traversy',
        profession: 'manager',
        details: 'excepturi adipisicing elit. Laboriosam doloribus nobis sequi voluptate velit accusamus excepturi, quas eaque dolores non nulla libero doloremque aspernatur saepe.'
    },
    {
        id: 4,
        img: 'user-5.jpg',
        name: 'lati adelanwa',
        profession: 'carpentery',
        details: 'lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam doloribus nobis sequi voluptate velit accusamus excepturi, quas eaque dolores non nulla libero doloremque aspernatur saepe.'
    },
];

let image = document.querySelector('img');
let name = document.querySelector('h4');
let job = document.querySelector('.profession');
let details = document.querySelector('.details');
let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');
let randomBtn = document.querySelector('.random_btn');

// console.log(reviews[0].img)


let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    showReview(currentItem);
   
    
})

function showReview(){
    const item = reviews[currentItem]
    // const item = reviews[person];
    image.src = item.img;
    name.textContent = item.name;
    job.textContent = item.profession;
    details.textContent = item.details;

}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0
    }
    showReview()
    // showReview(currentItem);
 
})

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showReview()
    // showReview(currentItem)
 
})

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random()*reviews.length)
    showReview()
})
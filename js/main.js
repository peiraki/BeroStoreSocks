
// heartImg.src = imgSrc;

// for (let i = 0; i < 32; i++) {
//     newsBlock.innerHTML += `
//     <div class="hotProduct">
//         <h3>Product ${i+1} Name</h3>
//         <div class="producImgBox">
//             <img src="https://media.kohlsimg.com/is/image/kohls/3990930_Gray_Cinderella?wid=500&hei=500&op_sharpen=1" alt="">
//             <div class="sale">Sale</div>
//         </div>
//         <div class="categoriName">
//             <img class="tShirtImg" src="imgs/icons/tshirt.png" alt="">
//             <span>ტანსაცმელი</span>
//         </div>            
//         <p>სადაც არ უნდა გათხარო მაინც უნდა გათხარო</p>
//         <hr>
//         <div class="priceAndFallow">
//             <div class="price">100$</div>
//             <div class="facAndBasket">
//                 <img class="favHeart" src="imgs/icons/heart1.png" alt="">
//                 <img class="addInBasket" src="imgs/icons/Basket.png" alt="">
//             </div>
//         </div>    
//         </div>
//     ` 
// }


let socksCount = 67;
let socksCountPerPage = 16;
let sockStartFrom = 1;


let pageSelectorCount = 1;

if(pageSelectorCount){
    if(pageSelectorCount === 1 ){
        sockStartFrom = 1;
        socksCountPerPage = 16;
    }else if (pageSelectorCount === 2){
        sockStartFrom = 17;
        socksCountPerPage = 32;
    }else if (pageSelectorCount === 3){
        sockStartFrom = 33;
        socksCountPerPage = 48;
    }
    else if (pageSelectorCount === 4){
        sockStartFrom = 49;
        socksCountPerPage = 64;
    }
    else if (pageSelectorCount === 5){
        sockStartFrom = 65;
        socksCountPerPage = 67;
    }
    socksBlock.innerHTML = ``;
    for (let i = sockStartFrom; i <= socksCountPerPage; i++) {
        socksBlock.innerHTML += `
        <div class="hotProduct">
            <h3 class="sockName">წინდა N${i} </h3>
            <img class="sockImage" src="imgs/socks/${i}-min.jpg" alt="cartoon socks">
            <div class="categoriName">
                    <img class="categoryIcon" src="imgs/icons/sock.png" alt="">
                    <span>წინდა</span>
            </div>  
            <p class="sockDesc"><span class="redText">აქცია - </span> შეიძინეთ 3 ნებისმიერი წინდა 2-ის ფასად 
             <img class="favHeart" src="imgs/icons/heart.png" alt="heart icon">
            </p>  
            <div class="priceAndFallow">
                <div class="price">6 ლარი</div>
                <div class="avalableText">
                    ხელმისაწვდომია
                </div>
            </div>            
       </div>    
        
        </div>
        
            `
    }
    let allSockImage = document.querySelectorAll('.sockImage');
    let screenHeight = window.innerHeight;
    allSockImage.forEach(image => {
        console.log(window.scrollY)
        
        image.addEventListener('click', ()=> {
            zoomedImage.style.top = window.scrollY + (screenHeight/2) + "px";
            document.querySelector('.zoomedImage').classList.remove('none')
            document.querySelector('.zoomedImage img').src = image.src;
            console.log(image.src)
        })
        
    });
    function closeZoomedImage() {
        document.querySelector('.zoomedImage').classList.add('none')

    }
}

let allPageNumb = document.querySelectorAll('.pageSelector li')
if(document.querySelector('.redText')){
    console.log('heloo madafa   qa')
    document.querySelector('.redText').classList.remove('redText');
}
function selectPage(number){
    allPageNumb.forEach(element => {
        element.classList.remove('redText')
    });
        number.classList.add('redText')

    number = Number(number.innerHTML);
    pageSelectorCount = number
    console.log(number)
    
    window.scrollTo(0,0);

    if(pageSelectorCount){
        if(pageSelectorCount === 1 ){
            sockStartFrom = 1;
            socksCountPerPage = 16;
        }else if (pageSelectorCount === 2){
            sockStartFrom = 17;
            socksCountPerPage = 32;
        }else if (pageSelectorCount === 3){
            sockStartFrom = 33;
            socksCountPerPage = 48;
        }
        else if (pageSelectorCount === 4){
            sockStartFrom = 49;
            socksCountPerPage = 65;
        }
        else if (pageSelectorCount === 5){
            sockStartFrom = 65;
            socksCountPerPage = 67;
        }
        socksBlock.innerHTML = ``;
        for (let i = sockStartFrom; i <= socksCountPerPage; i++) {
            socksBlock.innerHTML += `
            <div class="hotProduct">
                <h3 class="sockName">წინდა N${i} </h3>
                <img class="sockImage" src="imgs/socks/${i}-min.jpg" alt="cartoon socks">
                <div class="categoriName">
                        <img class="categoryIcon" src="imgs/icons/sock.png" alt="">
                        <span>წინდა</span>
                </div>  
                <p class="sockDesc"><span class="redText">აქცია - </span> შეიძინეთ 3 ნებისმიერი წინდა 2-ის ფასად 
                 <img class="favHeart" src="imgs/icons/heart.png" alt="heart icon">
                </p>  
                <div class="priceAndFallow">
                    <div class="price">6 ლარი</div>
                    <div class="avalableText">
                        ხელმისაწვდომია
                    </div>
                </div>            
           </div>    
            
            </div>
            
                `
        }


    }
    let allSockImage = document.querySelectorAll('.sockImage');
    let screenHeight = window.innerHeight;
    allSockImage.forEach(image => {
        console.log(window.scrollY)
        
        image.addEventListener('click', ()=> {
            zoomedImage.style.top = window.scrollY + (screenHeight/2) + "px";
            document.querySelector('.zoomedImage').classList.remove('none')
            document.querySelector('.zoomedImage img').src = image.src;
            console.log(image.src)
        })
        
    });
function closeZoomedImage() {
    document.querySelector('.zoomedImage').classList.add('none')

}

}



// let favHeart = document.querySelectorAll('.favHeart');

// favHeart.forEach(heartImg => {
//     heartImg.addEventListener('click', ()=> {
        
//         heartImg.src = "imgs/icons/heart.png";
        
//     })
    
// });
// let orderCountNumber = 0;

// let addInBasketBtn = document.querySelectorAll('.addInBasket');

// addInBasketBtn.forEach(basketPlus => {
//     basketPlus.addEventListener('click', ()=> {
//         if(basketPlus.classList.contains('redBasket')){
//             orderCount.innerText = Number(orderCount.innerText) - 1;
//             basketPlus.classList.remove('redBasket') 

//         }else {
//             orderCount.innerText = Number(orderCount.innerText)+ 1;
//             basketPlus.classList.add('redBasket') 

//         }
    
    
//        //    if()
//     })
    
// });

// singIn.addEventListener('click', ()=>{
//     singIn.classList.add('hide')
//     singUp.classList.add('hide')
//     singedInBlock.classList.remove('hide')
// })
// singUp.addEventListener('click', ()=>{
//     singIn.classList.add('hide')
//     singUp.classList.add('hide')
//     singedInBlock.classList.remove('hide')
// })

// if (window.scrollY) {
//     console.log('sakdjaskdaskldjaslkdjaslkdas')
// }








// window.addEventListener('scroll', function(){
    
//     if(this.scrollY >= 300){
        
//         headerPanel.classList.add('height0')
//         header.classList.add('maxHeight80', 'alignCenter')
//         logoImg.style.width = '100px';
//         nav.classList.add('transformY_20px')
//     }else {
//         headerPanel.classList.remove('height0')
//         header.classList.remove('maxHeight80','alignCenter')
//         logoImg.style.width = '150px';
//         nav.classList.remove('transformY_20px')
//     }
// })






// slider

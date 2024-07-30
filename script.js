const cards = document.querySelectorAll('.card');
const h2Array= document.querySelectorAll('h2');

const card = document.querySelector('.active')
// card.style.width = '80vw';
h2Array[0].style.opacity = '1';

cards.forEach( (item ,idx) => {
    item.addEventListener( 'click' ,()=>{
        remove();
        item.classList.add('active');
        h2Array[idx].style.opacity = '1'
    })
})

function remove(){
    cards.forEach ( (item , idx)=> {
        item.classList.remove('active');
        h2Array[idx].style.opacity = '0';
    });
}






// cards.forEach( (card , idx) => {
//     card.addEventListener ( 'click' , function() {
        
//         cards.forEach((c , idx2) => {
//             if( idx === idx2){
//                 c.style.width = '80vw';
//                 h2Array[idx2].style.opacity = '1';
//             }else{
//                 c.style.width = '6vw';
//                 h2Array[idx2].style.opacity = '0';
//             }
//         })
//     })
// })




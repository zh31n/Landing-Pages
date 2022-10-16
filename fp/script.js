// let accors = document.querySelectorAll('.quess').forEach( (el) => {
//     el.addEventListener('click',() =>{
//         let content = el.nextElementSibling;
//         console.log(content);

//         if(content.style.display){
//             document.querySelectorAll('.acc-1').forEach((el) => el.style.display = 'flex')
//         } else {
//             document.querySelectorAll('.acc-1').forEach((el) => el.style.display = 'flex')
//             content.style.display = content.scrollHeight + 'px';
//         }
//     });
// });

let accors = document.querySelectorAll('.quess').forEach( (el) => {
    el.addEventListener('click',() =>{
        let content = el.nextElementSibling;
        console.log(content);

        if(content.style.maxHeight){
            document.querySelectorAll('.acc-1').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.acc-1').forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
})
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}



var MainImg = document.getElementById("MainImg");
            var smallimg = document.getElementsByClassName("small-img");

            smallimg[0].onclick = function() {
                MainImg.src = smallimg[0].src;
            } 
            smallimg[1].onclick = function() {
                MainImg.src = smallimg[1].src;
            } 
            smallimg[2].onclick = function() {
                MainImg.src = smallimg[2].src;
            } 
            smallimg[3].onclick = function() {
                MainImg.src = smallimg[3].src;
            }


            let carts = document.querySelectorAll('.add-cart');
            
            // let products = [
            //     {
            //         name:
            //         tag:
            //         price:
            //         inCart:
            //     },
            //     {
            //         name:
            //         tag:
            //         price:
            //         inCart:
            //     },
            //     {
            //         name:
            //         tag:
            //         price:
            //         inCart:
            //     },
            //     {
            //         name:
            //         tag:
            //         price:
            //         inCart:
            //     },
            //     {
            //         name:
            //         tag:
            //         price:
            //         inCart:
            //     },
            //     {
            //         name:
            //         tag:
            //         price:
            //         inCart:
            //     },
            //     {
            //         name:
            //         tag:
            //         price:
            //         inCart:
            //     },
            //     {
            //         name:
            //         tag:
            //         price:
            //         inCart:
            //     },
            //     {
            //         name:
            //         tag:
            //         price:
            //         inCart:
            //     },
            //     {
            //         name:
            //         tag:
            //         price:
            //         inCart:
            //     },
            //     {
            //         name:
            //         tag:
            //         price:
            //         inCart:
            //     },
            //     {
            //         name:
            //         tag:
            //         price:
            //         inCart:
            //     },
            //     {
            //         name:
            //         tag:
            //         price:
            //         inCart:
            //     },
            //     {
            //         name:
            //         tag:
            //         price:
            //         inCart:
            //     },
            //     {
            //         name:
            //         tag:
            //         price:
            //         inCart:
            //     },
            //     {
            //         name:
            //         tag:
            //         price:
            //         inCart:
            //     },

            // ]

            for (let i=0; i < carts.length; i++) {
                carts[i].addEventListener('click', () => {
                    cartNumbers();
                })
            }

            function onLoadCartNumbers() {
                let productNumbers = localStorage.getItem('cartNumbers');
                
                if(productNumbers) {

                }
            }
            
            function cartNumbers() {
                let productNumbers = localStorage.getItem('cartNumbers');


                productNumbers = parseInt(productNumbers);

                if( productNumbers ) {
                    localStorage.setItem('cartNumbers', productNumbers + 1);
                    // document.querySelector('').textContent = productNumbers + 1;
                } else {
                    localStorage.setItem('cartNumbers', 1);
                    // document.querySelector('').textContent = 1;
                }
            }

            onLoadCartNumbers();
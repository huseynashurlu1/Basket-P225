function CountBasket(){
    let basket = JSON.parse(localStorage.getItem('basket'));
    let count = basket.length;
    document.getElementById('count_prod').innerHTML = count
  }

  
function BasketDiv() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    
    if(basket.length == 0) {
        document.getElementById('alert-box').classList.remove('d-none')
        document.getElementById('buttons').style.display = 'none'
    }
    else{
        document.getElementById('alert-box').classList.add('d-none')
        document.getElementById('buttons').style.display = 'flex'
        let box = "";

        for(let product of basket) {
            box += `
                <div class="col-lg-8 mt-5">
                <div class="basket-box">
                <div class="row align-items-center">
                    <div class="col-lg-2">
                        <div class="img">
                            <img src="${product.Src}" alt="">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="prod-details">
                            <h5>${product.Name}</h5>
                            <h6>${product.Count}</h6>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <h5>${product.Price}</h5>
                    </div>
                    <div class="col-lg-2 text-end">
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                </div>
            </div>
                </div>
            `

            document.getElementById('list').innerHTML = box;
        }
    }
}

BasketDiv();
CountBasket();


let clear_btn = document.getElementById('clear')
clear_btn.addEventListener('click',function(){
    localStorage.setItem('basket',JSON.stringify([]));
    location.reload();
})


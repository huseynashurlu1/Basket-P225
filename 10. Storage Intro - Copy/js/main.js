if(localStorage.getItem('basket') == null) {
  localStorage.setItem('basket',JSON.stringify([]));
};


function AddBasketBtn() {
  let btns = document.querySelectorAll('.add-cart');

  for(let btn of btns) {
    btn.addEventListener('click',function(e){
      e.preventDefault();
      let basket = JSON.parse(localStorage.getItem('basket'));
      let data_id = e.target.parentElement.parentElement.getAttribute('data-id');
      let prod_name = e.target.previousElementSibling.previousElementSibling.innerText;
      let prod_price = e.target.previousElementSibling.innerText;
      let prod_img = e.target.parentElement.previousElementSibling.getAttribute('src');
      
      let existProd = basket.find(p => p.Id == data_id);

      if(existProd == undefined) {
        basket.push({
          Id: data_id,
          Name: prod_name,
          Price: prod_price,
          Src: prod_img,
          Count: 1
        })
      }
      else{
        existProd.Count += 1;
      }

      localStorage.setItem('basket',JSON.stringify(basket));
      CountBasket();
    })
  }
}

AddBasketBtn();


function CountBasket(){
  let basket = JSON.parse(localStorage.getItem('basket'));
  let count = basket.length;
  document.getElementById('count_prod').innerHTML = count
}

CountBasket();


document.getElementById('refresh').addEventListener('click',function(){
  document.body.style.opacity = '0'
  setTimeout(() => {
    document.body.style.opacity = '1'
  }, 1000);
})
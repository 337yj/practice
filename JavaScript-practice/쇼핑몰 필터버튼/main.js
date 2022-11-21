var products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];



products.forEach((a) => {
  const temp = document.querySelector(".row").insertAdjacentHTML(
    "beforeend", 
    `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${a.title}</h5>
        <p>가격 : ${a.price}</p>
      </div>`
      );
});



(function() {
  var httpRequest;
  document.getElementById("more").addEventListener('click', makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if(!httpRequest) {
      alert('XMLHTTP 인스턴스를 만들 수가 없어요 ㅠㅠ');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'https://codingapple1.github.io/js/more1.json');
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        products.forEach((a) => {
            const temp = document.querySelector(".row").insertAdjacentHTML(
            "beforeend",
            `<div class="col-sm-4">
                <img src="https://via.placeholder.com/600" class="w-100">
                <h5>${a.title}</h5>
                <p>가격 : ${a.price}</p>
              </div>`
              );
        });
      } else {
        alert('request에 뭔가 문제가 있어요.');
      }
    }
  }
})();



document.querySelector('#titleFilter').addEventListener('click', function(){
    products.sort((a,b) => {  
      const A = a.title.toUpperCase();
      const B = b.title.toUpperCase();
      
      if(A < B) return 1;
      if(A > B) return -1;
      if(A === B) return 0;})

    document.querySelector('.row').innerHTML = ''
    
    products.forEach((a) => {
    const temp = document.querySelector(".row").insertAdjacentHTML(
      "beforeend", 
      `<div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100">
          <h5>${a.title}</h5>
          <p>가격 : ${a.price}</p>
        </div>`
        );
    })
})



document.querySelector('#priceFilter').addEventListener('click', function(){
  let newProduct = products.filter(function(a){return a.price <= 60000})
  
  document.querySelector('.row').innerHTML = '';
  
  newProduct.forEach((a) => {
    const temp = document.querySelector(".row").insertAdjacentHTML(
      "beforeend", 
      `<div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100">
          <h5>${a.title}</h5>
          <p>가격 : ${a.price}</p>
        </div>`
        );
  })
})



document.querySelector('#price').addEventListener('click', function(){
    products.sort((a,b) => {return a.price - b.price})
    
    document.querySelector('.row').innerHTML = ''
    
    products.forEach((a) => {
    const temp = document.querySelector(".row").insertAdjacentHTML(
      "beforeend", 
      `<div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100">
          <h5>${a.title}</h5>
          <p>가격 : ${a.price}</p>
        </div>`
        );
    });
});

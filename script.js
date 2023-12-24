
var body = document.getElementById("body");
// 1 instance from main one 
 var ajax = new XMLHttpRequest
//  2. open 
ajax.open("GET" , "https://fakestoreapi.com/products")
// 3 . just send a request
ajax.send()
// 4 . function

ajax.onreadystatechange = function(){

    if(ajax.readyState == 4){
        var data = JSON.parse(ajax.response)
        var res = "" 
        for( var i = 0 ; i<data.length ; i++){
            res += `  <section class="pro">
            <div class="container">
                <div class="row">
                    <div class="pro-img">
                        <img src="${data[i].image}" alt="">
                    </div>
                    <div class="pro-content">
                        <h3 id="title" onclick="showDetails(${i})"> <a href="details.html?index=${i}">${data[i].title}</a> </h3>
                        <ul>
                            <li id="price"><i class="fa-solid fa-tag"></i></i> $${data[i].price}</li>
                            <li><i class="fa-brands fa-shopify"></i>${data[i].description}
                              </li>
                            <li class ="cat"><i  class="fa-solid fa-list"></i>${data[i].category}  </li>
                            <li><i class="fa-solid fa-star"></i> ${data[i].rating.rate}  </li>

                        </ul>
                    </div>
                </div>
            </div> 
        </section>`
        }
        body.innerHTML = res




    }
}



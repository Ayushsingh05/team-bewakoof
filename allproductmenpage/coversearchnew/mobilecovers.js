import navbar from "../pcomponents/nav.js"
import footer from "../pcomponents/foot.js"
document.getElementById("onlynav").innerHTML=navbar();
document.getElementById("container-footer").innerHTML=footer();


let isLogined = localStorage.getItem("isLogined") || false;
    if (isLogined) {
        document.getElementById("showDetails").innerHTML = `<i class="fa-solid fa-user"></i>`;
        document.getElementById("userDetails").style.display = "block";
        document.getElementById("userName").innerText = `hi, ${localStorage.getItem("userName")}`
    } else {
        document.getElementById("showDetails").innerHTML = "Login";
        document.getElementById("userDetails").style.display = "none";
    }
    let userName = localStorage.getItem("userName");
    document.getElementById("userName").innerHTML = `Hi, ${userName}`;
    document.getElementById("toggleBtn").addEventListener("click", showNavbar);
    let flagForNavbar = true;
    function showNavbar() {
        if (flagForNavbar) {
            document.getElementById("sideNavbar").style.display = "none";
            flagForNavbar = false;
        } else {
            document.getElementById("sideNavbar").style.display = "block";
            document.getElementById("spectsPic").style.display = "none";
            document.getElementById("toggleBtn").style.display = "none";
            flagForNavbar = true;
        }
    }


const displaywish=()=>{
    let wishArr=JSON.parse(localStorage.getItem("wishes"))||[];
    if(wishArr.length>0){
      document.getElementById("showwishimage").innerHTML=`<i class="fa-solid fa-heart"></i>`;
  }
  else{
      document.getElementById("showwishimage").innerHTML=`<i class="fa-regular fa-heart"></i>`;
  }
  }
  let wishArr=JSON.parse(localStorage.getItem("wishes"))||[];
  displaywish();
  const displycar = ()=>{
      let cartArr=JSON.parse(localStorage.getItem("cart_products"))||[];  
      console.log(cartArr.length)
   if(cartArr.length>0){
      document.getElementById("showcartnumber").style.display="block";
      console.log(cartArr.length)
      document.getElementById("showcartnumber").innerText=cartArr.length;
  }
  else{
      console.log(cartArr.length)
      document.getElementById("showcartnumber").style.display="none";
  }
  }
  let cartArr=JSON.parse(localStorage.getItem("cart_products"))||[];
  displycar()

  document.getElementById("selectB").addEventListener("change", ()=>{
    let searchModel =document.getElementById("selectB").value;
    if(searchModel==="apple"){
        let model=document.getElementById("selectM");
        model.innerHTML=`<option value="Model">Select Model</option>
        <option value="Iphone 7">Iphone 7</option>
        <option value="Iphone X">Iphone XR</option>
        <option value="Iphone XS">Iphone XS</option>
        <option value="Iphone 11">Iphone 11</option>
        <option value="Iphone 11 Pro">Iphone 11 Pro</option>
        <option value="Iphone 11 Pro Max">Iphone 11 Pro Max</option>`
    }
   else if(searchModel==="samsung"){
        let model=document.getElementById("selectM");
        model.innerHTML=`<option value="Model">Select Model</option>
        <option value="Samsung Galaxy A50">Samsung Galaxy A50</option>
        <option value="Samsung Galaxy M30s">Samsung Galaxy M30s</option>
        <option value="Samsung Galaxy A30">Samsung Galaxy A30</option>
        <option value="Samsung Galaxy A51">Samsung Galaxy A51</option>
        <option value="Samsung Galaxy M31">Samsung Galaxy M31</option>
        <option value="Samsung Galaxy Note 10 lite">Samsung Galaxy Note 10 lite</option>
`
    }
    else if(searchModel==="Vivo"){
        let model=document.getElementById("selectM");
        model.innerHTML=`<option value="Model">Select Model</option>
        <option value="Vivo V5s">Vivo V5s</option>
        <option value="Vivo V5">Vivo V5</option>
        <option value="Vivo V17">Vivo V17</option>
        <option value="Vivo v19">Vivo v19</option>
        <option value="Vivo V20">Vivo V20</option>
`
    }
    else if(searchModel==="huawei"){
        let model=document.getElementById("selectM");
        model.innerHTML=`<option value="Model">Select Model</option>
        <option value="huawei p30">huawei p30</option>
        <option value="huawei p40">huawei p40</option>
        `
    }
    else if(searchModel==="oneplus"){
        let model=document.getElementById("selectM");
        model.innerHTML=`<option value="Model">Select Model</option>
        <option value="Oneplus 6">Oneplus 6</option>
        <option value="Oneplus 6T">Oneplus 6T</option>
        <option value="Oneplus 7">Oneplus 7</option>
        <option value="Oneplus 7 Pro">Oneplus 7 Pro</option>
        <option value="Oneplus Nord">Oneplus Nord</option>
        <option value="Oneplus 8 Pro">Oneplus 8 Pro</option>`
    }
    else if(searchModel==="realme"){
        let model=document.getElementById("selectM");
        model.innerHTML=`<option value="Model">Select Model</option>
        <option value="Realme 8 Pro">Realme 8 Pro</option>
        <option value="Realme GT Neo 3">Realme GT Neo 3</option>
        <option value="Realme 9 5G">Realme 9 5G</option>
        <option value="Realme Narzo 50I">Realme Narzo 50I</option>
        <option value="Realme 9 Pro Plus">Realme 9 Pro Plus</option>
        <option value="Realme Narzo 50I Plus">Realme Narzo 50I Plus</option>`
    }
})
document.getElementById("search").addEventListener("click",()=>{
    let searchbrand =document.getElementById("selectB").value;
    let searchmodel =document.getElementById("selectM").value;

localStorage.setItem("search_cover",searchbrand);
localStorage.setItem("search_covermodel",searchmodel);
location.href="../phoneCoverPagenew/cover.html";
})


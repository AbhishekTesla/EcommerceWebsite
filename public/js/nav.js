const creatNav = ()=>{
    let nav=document.querySelector('.navbar');
    nav.innerHTML=`
    <div class="nav">
    <img src="https://img.freepik.com/free-vector/feminine-business-logo-template-fashion-branding-design-black-white-vector_53876-156446.jpg?w=740"
        class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
            <input type="text" name="" class="search-box" placeholder="Search your cloths products" id="">
            <button class="search-btn">Search</button>
            <a href="/signup" target="__blank"><img src="https://cdn-icons-png.flaticon.com/512/848/848043.png" height="40px" alt=""></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png" height="40px" alt=""></a>
        </div>
    </div>
</div>
<hr>
<ul class="links-container">


    <li class="link-item"><a href="#" class="link">Home</a></li>
    <li class="link-item"><a href="#" class="link">Women</a></li>
    <li class="link-item"><a href="#" class="link">Men</a></li>
    <li class="link-item"><a href="#" class="link">Kids</a></li>
    <li class="link-item"><a href="#" class="link">Accessories</a></li>
</ul>
    
    `;
}

creatNav();
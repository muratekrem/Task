(async function () {
    const STORAGE_KEY = "carousel_products";
    const FAVORITES_KEY = "carousel_favorites";
    const DATA_URL = "https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json";
  
    const headerWrapper = document.createElement("div");
    headerWrapper.innerHTML = `
      <div class="top-blue-bar">
        <div class="top-banner-text">Seçili Mobilyalarda Ücretsiz Montaj Hizmeti!</div>
        <div class="top-links">
          <a href="#"><img src="https://cdn05.e-bebek.com/media/c/yardim-logo.png" width="16" /> <div class="font-pop" > YARDIM</div> </a>
          <a href="#"><img src="https://cdn05.e-bebek.com/media/c/iletisim-logo.png" width="16" /> <div class="font-pop" >İLETİŞİM </div></a>
        </div>
      </div>
      <div class="middle-area">
      <div class="middle-box">
      <div class="main-header">
        <div class="main-inside">
         <div class="left-group">
          
           <img src="https://cdn05.e-bebek.com/y.ebebek/9973673459742.svg" class="logo" />
          
         </div>
         <div class="search-section">
          
         	
           <input type="text"  placeholder="Ürün, kategori veya marka arayın"  />
         </div>
         <div class="right-icons">
            <span class="icon btn-box">❤️</span>
            <span class="icon btn-box">👤 Giriş Yap / Üye Ol</span>
            <span class="icon btn-box">🛒 Sepetim</span>
</div>

        </div>
        
      </div>
      <div class="menu-bar">
      <div class="menu-inside">
        <div class="menu-left">
             <span>Kategoriler <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ViUL6od9D_pH97Dt4-0NAamtdkqbUGvjRE1PKzhgxqzXSQoFzFuPHoLTjKL58rSBBWA&usqp=CAU" width="12" style="margin-left: 4px;" /></span>
             <span>Keşfet <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ViUL6od9D_pH97Dt4-0NAamtdkqbUGvjRE1PKzhgxqzXSQoFzFuPHoLTjKL58rSBBWA&usqp=CAU" width="12" style="margin-left: 4px;" /></span>
            <span>Hediye <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ViUL6od9D_pH97Dt4-0NAamtdkqbUGvjRE1PKzhgxqzXSQoFzFuPHoLTjKL58rSBBWA&usqp=CAU" width="12" style="margin-left: 4px;" /></span>
            <span class="blue">İnternete Özel Ürünler</span>
            <span class="orange">Kampanyalar</span>
             <span class="orange">Outlet</span>
        </div>
        <div class="menu-right">
          <span><img src="https://cdn-icons-png.flaticon.com/512/34/34627.png" width="14" /> SİPARİŞİM NEREDE</span>
          <span><img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" width="14" /> EN YAKIN EBEBEK</span>
        </div>
      </div>
      </div>
      </div>
      </div>
    `;
  
    const headerStyle = document.createElement("style");
    headerStyle.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,400&display=swap');

      body { margin: 0; }
  
      .font-pop{
      font-size:11px;
      }
      .top-blue-bar {
        background: #0096db;
        color: white;
        font-size: 16px;
        padding: 18px 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }
      .top-banner-text {
        font-weight: bold;
        font-size: 18px;
        text-align: center;
      }
      .top-links {
        position: absolute;
        padding-right:230px;
        
        right: 50px;
        display: flex;
        margin-right:12px;
        gap: 20px;
        font-size: 17px;
        align-items: center;
      }
      .top-links a {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 4px;
      }
        .middle-area{
        display:grid;
        align-items:center;
        margin-top:12px;
        }
  
      .middle-area {
      
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
  .middle-box {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.main-header,
.menu-bar {
  width: 100%;
}

.main-inside,
.menu-inside {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 32px;
}

      .left-group {
        display: flex;
        align-items:center;  
      }
      .brand-name {
        font-size: 23px;
        font-weight: 600;
        color: #007BFF;
      }
      .logo {
        height: 32px;
      }
      .search-section {
        
        display: flex;
        width: 50%;
       
      }
      
.search-section input {
  width: 100%;
  max-width: 1000px;
  padding: 14px 24px; 
  border-radius: 24px;
  border: 1px solid #ccc;
  background: #f2f9ff;
  font-size: 15px;
}


.btn-box {
  background: #f2f9ff;
  padding: 15px 24px;
  border-radius: 40px;
  border: 1px solid #d6eaff;
  color: #007bff;
  font-weight: 500;
  font-family: Poppins, cursive;
  font-size: 11.52px;
}

      .right-icons {
        display: flex;
        gap: 14px;
        font-size: 17px;
        align-items: center;
        justify-content: flex-start;
      }
      .icon {
        cursor: pointer;
        white-space: nowrap;
      }
  
      .menu-bar {
        width:100%
      }
      .menu-inside{
        display: flex;
        justify-content: space-between;
        
      }
      .menu-left {
        margin-right: 90px;
        }
      .menu-left span {
        margin-right: 30px;
        font-size: 20px;
        color: #555; 
        opacity: 0.9;
        }
      .menu-left span:hover {
        
      }
      .menu-left .blue {
        color: #5b9bd5;
      }
      .menu-left .orange {
        color: #f4a261;
      }
      .menu-right span {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 13px;
        color: #666;
        cursor: pointer;
        margin-left: 16px;
      }
      .menu-right img {
        filter: grayscale(1);
      }
  
      @media (max-width: 768px) {
        
        .search-section input {
          width: 100%;
          max-width: none;
        }
        .right-icons {
          justify-content: center;
          flex-wrap: wrap;
          margin-right: 30px;
        }
        .top-blue-bar {
          flex-direction: column;
          gap: 8px;
        }
      }
    `;
    document.head.appendChild(headerStyle);
    document.body.prepend(headerWrapper);
  
    const banner = document.createElement("div");
    banner.innerHTML = `
      <div class="custom-banner">
        <div class="main-banner">
          <div class="banner-text">
            <h2>Tüm <strong>baby plus</strong> Termoslarda</h2>
            <h1 style="color: red;">NET %40 İndirim!</h1>
            <button class="banner-btn">Ürünleri İncele</button>
          </div>
          <div class="banner-images">
            <img src="https://cdn03.e-bebek.com/mnresize/300/300/media/p/termos1.jpg" alt="Termos" />
            <img src="https://cdn03.e-bebek.com/mnresize/300/300/media/p/termos2.jpg" alt="Termos" />
          </div>
        </div>
        <div class="banner-thumbnails">
          <div class="thumb"></div>
          <div class="thumb"></div>
          <div class="thumb"></div>
          <div class="thumb"></div>
          <div class="thumb"></div>
        </div>
      </div>
    `;
    const bannerStyle = document.createElement("style");
    bannerStyle.textContent = `
      .custom-banner {
        background: linear-gradient(to bottom, #f85a9b, #f49cbc);
        width:100%;
        padding: 24px 16px;
        border-radius: 8px;
        margin: 20px auto;
        
        
      }
      .main-banner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }
      .banner-text h2 {
        color: white;
        margin: 0;
      }
      .banner-text h1 {
        margin: 8px 0;
      }
      .banner-btn {
        background: #e91e63;
        border: none;
        color: white;
        padding: 10px 18px;
        font-weight: bold;
        border-radius: 20px;
        cursor: pointer;
        margin-top: 12px;
      }
      .banner-images img {
        height: 120px;
        margin-left: 12px;
        border-radius: 8px;
        background: white;
      }
      .banner-thumbnails {
        margin-top: 16px;
        display: flex;
        gap: 8px;
        justify-content: center;
      }
      .banner-thumbnails .thumb {
        width: 40px;
        height: 24px;
        background: #fff4f7;
        border-radius: 4px;
      }
      @media (max-width: 600px) {
        .main-banner {
          flex-direction: column;
          text-align: center;
        }
        .banner-images {
          margin-top: 16px;
        }
      }
    `;
    document.head.appendChild(bannerStyle);
    document.body.appendChild(banner);
  
    let products = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  
    if (!products) {
      try {
        const res = await fetch(DATA_URL);
        products = await res.json();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
      } catch (e) {
        console.error("Veri çekilemedi:", e);
        return;
      }
    }
  
    const style = document.createElement("style");
    style.textContent = `
      * { box-sizing: border-box; }
      .carousel-container {
        margin: 20px auto;
        padding: 0 16px;
        max-width: 1200px;
      }
      .carousel-title {
        font-size: 24px;
        margin-bottom: 12px;
        font-weight: bold;
      }
      .carousel {
        display: flex;
        overflow-x: auto;
        gap: 16px;
        scroll-behavior: smooth;
      }
      .carousel::-webkit-scrollbar {
        height: 6px;
      }
      .carousel::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 3px;
      }
      .product-card {
        min-width: 220px;
        background: white;
        border: 1px solid #eee;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        flex-shrink: 0;
        transition: transform 0.2s ease;
      }
      .product-card:hover {
        transform: scale(1.02);
      }
      .product-card img {
        width: 100%;
        height: 220px;
        object-fit: contain;
        background: #fafafa;
      }
      .product-info {
        padding: 12px;
        font-size: 14px;
      }
      .brand {
        font-weight: bold;
        color: #333;
      }
      .name {
        color: #555;
        margin: 4px 0 8px 0;
      }
      .price-section {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .price {
        color: #ff6600;
        font-weight: bold;
      }
      .original-price {
        text-decoration: line-through;
        color: gray;
        font-size: 13px;
      }
      .discount {
        background: #ff6600;
        color: white;
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 12px;
      }
      .heart {
        position: absolute;
        top: 8px;
        right: 10px;
        font-size: 20px;
        cursor: pointer;
        color: #ccc;
      }
      .heart.filled {
        color: orange;
      }
    `;
    document.head.appendChild(style);
  
    const container = document.createElement("div");
    container.className = "carousel-container";
    container.innerHTML = `<div class="carousel-title">Beğenebileceğinizi düşündüklerimiz</div><div class="carousel"></div>`;
    document.body.appendChild(container);
    const carousel = container.querySelector(".carousel");
  
    products.forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";
      const isFav = favorites.includes(p.id);
      const discount = p.original_price > p.price ? Math.round(100 * (p.original_price - p.price) / p.original_price) : 0;
      card.innerHTML = `
        <span class="heart ${isFav ? "filled" : ""}">&#10084;</span>
        <a href="${p.url}" target="_blank">
          <img src="${p.img}" alt="${p.name}" />
        </a>
        <div class="product-info">
          <div class="brand">${p.brand}</div>
          <div class="name">${p.name}</div>
          <div class="price-section">
            <span class="price">${p.price.toFixed(2)}₺</span>
            ${p.original_price > p.price ? `
              <span class="original-price">${p.original_price.toFixed(2)}₺</span>
              <span class="discount">-${discount}%</span>
            ` : ''}
          </div>
        </div>
      `;
      card.querySelector(".heart").addEventListener("click", () => {
        card.querySelector(".heart").classList.toggle("filled");
        const favs = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
        const index = favs.indexOf(p.id);
        if (card.querySelector(".heart").classList.contains("filled")) {
          if (index === -1) favs.push(p.id);
        } else {
          if (index > -1) favs.splice(index, 1);
        }
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
      });
      carousel.appendChild(card);
    });
  })();
  
(async function () {
    const STORAGE_KEY = "carousel_products";
    const FAVORITES_KEY = "carousel_favorites";
    const DATA_URL = "https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json";
  
    // === HEADER HTML ===
    const headerWrapper = document.createElement("div");
    headerWrapper.innerHTML = `
      <div class="top-blue-bar">
        <div class="top-banner-text">Seçili Mobilyalarda Ücretsiz Montaj Hizmeti!</div>
        <div class="top-links">
          <a href="#"><img src="https://cdn05.e-bebek.com/media/c/yardim-logo.png" width="16" /> Yardım</a>
          <a href="#"><img src="https://cdn05.e-bebek.com/media/c/iletisim-logo.png" width="16" /> İletişim</a>
        </div>
      </div>
      <div class="main-header">
      
        <div class="left-group">
         <span class="brand-name">ebebek</span>
          <img src="https://play-lh.googleusercontent.com/3bm3KABk8qI5hq_D0feMfd09tCaJ4ojKC9f3EUnd5TWBCHLT956hBCowpsKA6b0Bm3w=w240-h480-rw" class="logo" />
          
        </div>
        <div class="search-section">
          <input type="text" placeholder="Ürün, kategori veya marka arayın" />
        </div>
        <div class="right-icons">
          <span class="icon">❤️</span>
          <span class="icon">👤 Hesabım</span>
          <span class="icon">🛒 Sepetim</span>
        </div>
        
      </div>
      <div class="menu-bar">
        <div class="menu-left">
          <span>Kategoriler</span>
          <span>Keşfet</span>
          <span>Hediye</span>
          <span class="blue">İnternete Özel Ürünler</span>
          <span class="orange">Kampanyalar</span>
          <span class="orange">Outlet</span>
        </div>
        <div class="menu-right">
          <span><img src="https://cdn-icons-png.flaticon.com/512/34/34627.png" width="14" /> SİPARİŞİM NEREDE</span>
          <span><img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" width="14" /> EN YAKIN EBEBEK</span>
        </div>
      </div>
    `;
  
    // === HEADER CSS ===
    const headerStyle = document.createElement("style");
    headerStyle.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap');
      body { margin: 0; font-family: 'Nunito', sans-serif; }
  
      .top-blue-bar {
        background: #0096db;
        color: white;
        font-size: 16px;
        padding: 10px 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }
      .top-banner-text {
        font-weight: bold;
        font-size: 20px;
        text-align: center;
      }
      .top-links {
        position: absolute;
        right: 50px;
        display: flex;
        gap: 20px;
        font-size: 13px;
        align-items: center;
      }
      .top-links a {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 4px;
      }
  
      .main-header {
        display: flex;
        justify-content: space-evenly;
        margin-top: 20px;
        padding: 10px 32px;
        gap: 16px;
      }
        .top-bar{
            display: flex;
            justify-content: center;
        }
      .left-group {
        display: flex;
        align-items: space-between;
        
        gap: 6px;
      }
      .brand-name {
        font-size: 20px;
        font-weight: 600;
        color: #333;
      }
      .logo {
        height: 32px;
      }
      .search-section {
        
        display: flex;
        width: 30%;
       
      }
      .search-section input {
        width: 100%;
        max-width: 600px;
        padding: 10px 18px;
        border-radius: 24px;
        border: 1px solid #ccc;
        background: #f2f9ff;
        font-size: 14px;
      }
      .right-icons {
        display: flex;
        gap: 14px;
        font-size: 14px;
        align-items: center;
        justify-content: flex-start;
      }
      .icon {
        cursor: pointer;
        white-space: nowrap;
      }
  
      .menu-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 32px;
        font-size: 14px;
        font-weight: 500;
        background: white;
        border-bottom: 1px solid #eee;
        flex-wrap: wrap;
      }
      .menu-left span {
        margin-right: 20px;
        cursor: pointer;
        padding: 6px 4px;
      }
      .menu-left span:hover {
        border-bottom: 2px solid #0096db;
      }
      .menu-left .blue {
        color: #007BFF;
      }
      .menu-left .orange {
        color: #ff9900;
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
  
    // === BANNER ALANI ===
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
        padding: 24px 16px;
        border-radius: 8px;
        margin: 20px auto;
        font-family: Arial, sans-serif;
        max-width: 1200px;
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
  
    // === VERİYİ YÜKLE
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
  
    // === CAROUSEL STİLLERİ ===
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
  
    // === CAROUSEL ===
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
  
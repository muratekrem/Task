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
        <div class="banner-categories">
          <span data-index="0" class="active">ANNELER GÜNÜ</span>
          <span data-index="1">PERŞEMBEDEN PAZARA</span>
          <span data-index="2">GECE FIRSATI</span>
          <span data-index="3">OYUNCAK ŞÖLENİ</span>
          <span data-index="4">ÇEK KAMPANYASI</span>
          <span data-index="5">ARAÇ GEREÇ</span>
          <span data-index="6">BEBEK MODASI</span>
          <span data-index="7">BEZ&MENDİL</span>
          <span data-index="8">BANYO BAKIM</span>
          <span data-index="9">KAMPANYALAR</span>
          <span data-index="10">DUYURU</span>
        </div>
        <div class="main-banner">
          <div class="main-page">
            <img class="main-img" src="https://cdn05.e-bebek.com/media/c/anneler-gunune-ozel-tum-philips-avent-beslenme-gereclerinde-sepette-net-30-indirim-d.jpg" width="1170px" />
          </div>
        </div>
        <div class="thumbnail-wrapper">
          <button class="arrow-btn left-arrow">
            <img src="https://cdn-icons-png.flaticon.com/512/271/271220.png" width="16" />
          </button>
          <div class="banner-thumbnails">
            <img class="thumb-img active-thumb" src="https://cdn05.e-bebek.com/media/c/anneler-gunune-ozel-tum-philips-avent-beslenme-gereclerinde-sepette-net-30-indirim-d.jpg" />
            <img class="thumb-img" src="https://cdn05.e-bebek.com/media/c/anneler-gunune-ozel-tum-oioi-beslenme-gereclerinde-net-30-indirim-dd.jpg" />
            <img class="thumb-img" src="https://cdn05.e-bebek.com/media/c/-anneler-gunune-ozel-tum-baby-plus-termoslarda-net-40-indirim-d.jpg" />
            <img class="thumb-img" src="https://cdn05.e-bebek.com/media/c/anneler-gunune-ozel-tum-emzirme-urunlerinde-sepette-net-30-indirim-d.jpg" />
            <img class="thumb-img" src="https://cdn05.e-bebek.com/media/c/anneler-gunune-ozel-tum-hamile-giyim-ve-ic-giyim-urunlerinde-2-urune-sepette-net-50-indirim-d.jpg" />
            <img class="thumb-img" src="https://cdn05.e-bebek.com/media/c/anneler-gunu-film-yonlendirme-d.jpg" />
            <img class="thumb-img" src="https://cdn05.e-bebek.com/media/c/anneler-gunune-ozel-sevgi-dolu-kombinler-d.jpg" />
          </div>
          <button class="arrow-btn right-arrow">
            <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" width="16" />
          </button>
        </div>
      </div>
    `;
    
    const styleSlider = document.createElement("style");
    styleSlider.textContent = `
      .custom-banner {
        width: 100%;
        background: #EA4079;
        padding: 12px 14px;
        
        margin: 20px auto;
        font-family: 'Poppins', cursive;
      }
    
      .banner-categories {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 12px;
        font-size: 14px;
        font-weight: 500;
        color: white;
        margin-bottom: 10px;
        padding-bottom: 5px;
        
      }
    
      .banner-categories span {
        cursor: pointer;
        transition: all 0.2s ease;
        padding: 12px 30px;
        border-radius: 30px;
      }
    
      .banner-categories span.active {
        background: white;
        color: orange;
      }
    
      .main-banner {
        display: flex;
        justify-content: center;
      }
    
      .main-img {
        border-radius: 40px;
      }
    
      .thumbnail-wrapper {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
      }
    
      .arrow-btn {
        background: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 0.2s;
      }
    
      .arrow-btn:hover {
        transform: scale(1.05);
      }
    
      .banner-thumbnails {
        display: flex;
        gap: 12px;
      }
    
      .thumb-img {
        width: 130px;
        height: auto;
        border-radius: 5px;
        object-fit: cover;
        cursor: pointer;
        transition: transform 0.2s, border 0.2s;
        border: 2px solid transparent;
      }
    
      .thumb-img.active-thumb {
        transform: scale(1.1);
        border: 2px solid white;
      }
    
      @media (max-width: 600px) {
        .main-banner {
          flex-direction: column;
          text-align: center;
        }
      }
    `;
    document.head.appendChild(styleSlider);
    document.body.appendChild(banner);
    
    const thumbImgs = document.querySelectorAll(".thumb-img");
    const mainImg = document.querySelector(".main-img");
    const categorySpans = document.querySelectorAll(".banner-categories span");
    
    thumbImgs.forEach((thumb, index) => {
      thumb.addEventListener("click", () => {
        thumbImgs.forEach(t => t.classList.remove("active-thumb"));
        thumb.classList.add("active-thumb");
        mainImg.src = thumb.src;
      });
    });
    
    categorySpans.forEach(span => {
      span.addEventListener("click", () => {
        categorySpans.forEach(s => s.classList.remove("active"));
        span.classList.add("active");

      });
    });
    
  
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
      
        let currentIndex = 0;
      
        const container = document.createElement("div");
container.className = "carousel-section-wrapper";
container.innerHTML = `

  <button class="carousel-nav left">&#10094;</button>
  <div class="general-carousel">
    <div class="carousel-header">
      <h2>Beğenebileceğinizi düşündüklerimiz</h2>
    </div>
    <div class="carousel-box">
      <div class="carousel" id="carousel-box-inner"></div>
    </div>
  </div>
  <button class="carousel-nav right">&#10095;</button>
`;
document.body.appendChild(container);

        
      
        const carousel = document.getElementById("carousel-box-inner");
      
        function renderCarousel() {
          carousel.innerHTML = "";
          const visibleProducts = products.slice(currentIndex, currentIndex + 5);
      
          visibleProducts.forEach(p => {
            const card = document.createElement("div");
            card.className = "product-card";
            const isFav = favorites.includes(p.id);
            const discount = p.original_price > p.price
              ? Math.round(100 * (p.original_price - p.price) / p.original_price)
              : 0;
      
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
                  ${discount > 0 ? `
                    <span class="original-price">${p.original_price.toFixed(2)}₺</span>
                    <span class="discount">-${discount}%</span>
                  ` : ""}
                </div>
              </div>
              <button class="add-to-cart-btn">Sepete Ekle</button>
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
        }
      
        document.querySelector(".carousel-nav.left").addEventListener("click", () => {
          if (currentIndex > 0) {
            currentIndex--;
            renderCarousel();
          }
        });
      
        document.querySelector(".carousel-nav.right").addEventListener("click", () => {
          if (currentIndex + 5 < products.length) {
            currentIndex++;
            renderCarousel();
          }
        });
      
        renderCarousel();
      
        const style = document.createElement("style");
        style.textContent = `
          * { box-sizing: border-box; }
      
        
          .carousel-section-wrapper {

             width:100%;
             background:;
             display: grid;
             justify-content:space-around;
             align-items:center:
             gap: 8px;
            margin: 40px auto;
            font-family: 'Poppins', sans-serif;
            position: relative; 
}

            .carousel-nav {
              background: white;
              border: 1px solid #ddd;
              border-radius: 50%;
              width: 32px;
              height: 32px;
              font-size: 18px;
              font-weight: bold;
              color: #f29100;
              cursor: pointer;
              z-index: 10;
              display: flex;
              align-items: center;
              justify-content: center;
              align-self: center;
              flex-shrink: 0;
            }


            .general-carousel {

              display: grid;
              gap: 8px;
              flex-grow: 1;

            }



            .carousel-header {
              padding: 25px 67px;
              background: linear-gradient(to right, #fff5e0, #ffe9c2);
              border-top-left-radius: 24px;
              border-top-right-radius: 24px;
              border-bottom: 1px solid #eee;
            }

            .carousel-box {
              padding: 25px 0px;
              background: white;
              border-radius: 0 0 16px 16px;
              overflow: hidden;
            }


            .carousel-header h2 {
              margin: 0;
              font-size: 28px;
              color: #f29100;
              font-weight: bold;
              font-family: 'Quicksand', sans-serif;
            }



            .carousel {
              display: flex;
              gap: 16px;
              justify-content: space-around;
            }
            .carousel-nav.left {
              left: 5px;
            }

            .carousel-nav.right {
              right: 5px;
            }
      
          .product-card {
              width: 220px;
              background: white;
              border: 1px solid #eee;
              border-radius: 8px;
              overflow: hidden;
              position: relative; /* Buton sabitleme için gerekli */
              transition: transform 0.2s ease;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              flex-shrink: 0;
              padding-bottom: 48px; /* Butonun yer kaplayacağı kadar boşluk bırak */
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
       flex-grow: 1;          
         display: flex;
      flex-direction: column;
        justify-content: space-between;
             }
            

            .add-to-cart-btn {
           position: absolute;
            bottom: 12px;
              left: 12px;
              right: 12px;
            padding: 10px 0;
             background-color: #ffe9c2; 
             color: #f29100; 
            border: none;
            border-radius: 30px;
             cursor: pointer;
            font-weight: bold;
            transition: background 0.2s ease;
            }

            .add-to-cart-btn:hover {
                 background-color: #ffd99c;
            }
      
            .brand {
            font-weight: bold;
             color: #333;
             margin-bottom: 4px;
            }

            .name {
             color: #555;
             margin-bottom: 12px;
             line-height: 1.4;
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
      
          .carousel-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: white;
            border: 1px solid #ddd;
            border-radius: 50%;
            width: 32px;
            height: 32px;
            font-size: 18px;
            font-weight: bold;
            color: #f29100;
            cursor: pointer;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: ;
          }
      
          .carousel-nav.left {
            left: 5px;
          }
      
          .carousel-nav.right {
            right: 5px;
          }
        `;
        document.head.appendChild(style);
      })();
      
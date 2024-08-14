document.addEventListener('DOMContentLoaded', function () {
    const data = [
      {
        "id": "1",
        "image": "./Frame25.png",
        "title": "Tudor Black Bay Fifty-Eight",
        "subtitle": "Black Beauty, Select Me",
        "description": "Explore the ideal timepiece for any moment and enhance your style with timeless sophistication and impeccable craftsmanship.",
        "price": "Rs 13000.00",
        "backgroundColor": "#003366" 
      },
      {
        "id": "2",
        "image": "./Frame26.png",
        "title": "Seiko Prospex",
        "subtitle": "Green Edition, Refined Style",
        "description": "A timepiece that reflects your refined taste and timeless elegance, crafted with the highest quality materials.",
        "price": "Rs 12599.00",
        "backgroundColor": "#004d00" 
      },
      {
        "id": "3",
        "image": "./Frame25.png",
        "title": "Orient Bambino",
        "subtitle": "Sporty Luxury, Unmatched Precision",
        "description": "Unleash your inner adventurer with a watch that combines sporty luxury with unmatched precision and durability.",
        "price": "Rs 14729.00",
        "backgroundColor": "#8b0000" 
      },
      {
        "id": "4",
        "image": "./Frame27.png",
        "title": "Stowa Verus 40",
        "subtitle": "Red Edition, Timeless Simplicity",
        "description": "Embrace the essence of modern minimalism with a sleek and stylish watch that redefines timeless simplicity.",
        "price": "Rs 18999.00",
        "backgroundColor": "#4d4d00" 
      }
    ];
  
    const splideList = document.getElementById('splide-list');
    const body = document.getElementById('body');
    const navBar = document.querySelector('.nav-bar');
    const title = document.getElementById('title');
    const subtitle = document.getElementById('subtitle');
    const description = document.getElementById('description');
    const price = document.getElementById('price');
  
    data.forEach((item) => {
      const slide = document.createElement('li');
      slide.classList.add('splide__slide');
  
      slide.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="mx-auto">
      `;
  
      splideList.appendChild(slide);
    });
  
    
    const splide = new Splide('.splide', {
      type: 'loop',
      perPage: 1,
      autoplay: true,
      pauseOnHover: true,
      arrows: true,
      pagination: false,
    }).mount();
  
    
    function setContent(index) {
      const selectedItem = data[index];
      title.textContent = selectedItem.title;
      subtitle.textContent = selectedItem.subtitle;
      description.textContent = selectedItem.description;
      price.textContent = selectedItem.price;
      body.style.backgroundColor = selectedItem.backgroundColor;
      navBar.style.backgroundColor = selectedItem.backgroundColor; 
    }
  
    
    setContent(0);
  
    
    splide.on('moved', (newIndex) => {
      setContent(newIndex);
    });
  });

document.addEventListener('DOMContentLoaded', function () {
  const data = [
    {
      "id": "1",
      "image": "./Watches.png",
      "title": "Exquisite Watches",
      "subtitle": "Gold Luxury, <span>Choose Us</span>",
      "description": "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
      "price": "$499.00",
      "backgroundGradient": "linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)"
    },
    {
      "id": "2",
      "image": "./Frame25.png",
      "title": "Dainty Timepieces",
      "subtitle": "Silver Luxury, <span>Choose Us</span>",
      "description": "Explore the Ideal Timepiece for Any Moment and  Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
      "price": "$469.00",
      "backgroundGradient": "linear-gradient(105.54deg, #ADB0B0 -2.93%, #E1E1E1 72.14%)"
    },
    {
      "id": "3",
      "image": "./Frame26.png",
      "title": "Elegant Timepieces",
      "subtitle": "Choose Luxury,<span> Choose Us</span>",
      "description": "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
      "price": "$529.00",
      "backgroundGradient": "linear-gradient(105.54deg, #30A357 -2.93%, #DEF4E6 72.14%)"
    },
    {
      "id": "4",
      "image": "./Frame27.png",
      "title": "Refined Timepieces",
      "subtitle": "Choose Luxury,<span> Choose Us</span>",
      "description": "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
      "price": "$599.00",
      "backgroundGradient": "linear-gradient(105.54deg, #F24F4F -2.93%, #FFA895 72.14%)"
    },
  ];

  const splideList = document.getElementById('splide-list');
  const titleElement = document.getElementById('title');
  const subtitleElement = document.getElementById('subtitle');
  const descriptionElement = document.getElementById('description');
  const priceElement = document.getElementById('price');
  const body = document.getElementById('body');
  const navBar = document.querySelector('.nav-bar');

  data.forEach(item => {
    const splideSlide = document.createElement('li');
    splideSlide.classList.add('splide__slide');

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    img.classList.add('splide__img');
    splideSlide.appendChild(img);

    splideList.appendChild(splideSlide);
  });

  const splide = new Splide('.splide', {
    type: 'loop',
    autoplay: true,
    interval: 3000,
    arrows: true,
    pagination: false,
    perPage: 1,
  }).mount();

  splide.on('move', (newIndex) => {
    const currentItem = data[newIndex];
    titleElement.textContent = currentItem.title;
    subtitleElement.innerHTML = currentItem.subtitle;
    descriptionElement.textContent = currentItem.description;
    priceElement.textContent = currentItem.price;
    body.style.background = currentItem.backgroundGradient;
    navBar.style.backgroundColor = currentItem.backgroundGradient; 
  });

  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navBarLinks = document.querySelector('.nav-bar__links');

  hamburgerMenu.addEventListener('click', () => {
    navBar.classList.toggle('open');
  });

  navBarLinks.addEventListener('click', () => {
    navBar.classList.remove('open');
  });
});

      
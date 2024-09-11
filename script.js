window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('bg-black/70', 'backdrop-blur-sm');
    } else {
      header.classList.remove('bg-black/70', 'backdrop-blur-sm');
    }
  });
  
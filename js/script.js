gsap.registerPlugin(ScrollTrigger);

// Step 1: Horizontal scroll (Panel 1 -> Panel 2 -> Panel 3)
gsap.to(".scroll-container", {
  xPercent: -200, // Move horizontally by 2 panels (200vw)
  ease: "none",
  scrollTrigger: {
    trigger: ".scroll-container", // Trigger scroll on the container
    pin: true, // Pin the container for horizontal scroll
    scrub: 1, // Smooth scroll
    start: "top top", // Start when top of container hits top of viewport
    end: "+=200%", // Scroll for 200% of the viewport (2 panels width)
    pinSpacing: false // Disable extra pin spacing
  }
});

// Step 2: Vertical scroll for Panel 3
gsap.to(".panel-3", {
  yPercent: -100, // Move vertically by 100% (one full panel)
  ease: "none",
  scrollTrigger: {
    trigger: ".panel-3", // Trigger scroll when panel 3 reaches viewport
    start: "top top", // Start vertical scroll when panel 3 is at the top
    end: "+=100%", // Scroll another 100% of viewport height
    scrub: 1,
    pin: true, // Pin the panel during vertical scroll
    pinSpacing: false // Disable pinSpacing for smooth transition
  }
});

gsap.from(".text-panel-1", {
  scrollTrigger: {
    trigger: ".kontainer-buram", // Elemen yang memicu animasi
    start: "top 80%", // Mulai animasi saat elemen hampir masuk ke viewport
    end: "top 50%", // Selesai animasi saat elemen setengah ke dalam viewport
    toggleActions: "play none none reverse", // Animasi akan berjalan maju saat muncul dan mundur saat hilang
  },
  opacity: 0, // Awal opacity (tidak terlihat)
  y: 50, // Awal posisi vertikal lebih rendah dari posisinya sekarang
  duration: 1.5, // Durasi animasi
  ease: "power3.out" // Gerakan yang lebih halus saat masuk
});

  // Animasi untuk teks kutipan
  gsap.from(".kata-quotes p", {
    scrollTrigger: {
      trigger: ".kata-quotes",
      start: "top 80%", // Mulai animasi saat 80% dari elemen terlihat
      end: "bottom 60%", // Berakhir ketika 60% elemen sudah di-scroll
      toggleActions: "play none none reverse", // Play saat muncul, reverse saat di-scroll kembali
    },
    y: 50, // Mulai dari 50px di bawah
    opacity: 0, // Dimulai dengan transparan
    duration: 1.5, // Durasi animasi
    ease: "power3.out" // Efek easing
  });

  // Animasi untuk gambar AI
  gsap.from(".foto-quotes img", {
    scrollTrigger: {
      trigger: ".foto-quotes",
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none reverse",
    },
    scale: 0.8, // Dimulai dari skala 0.8
    opacity: 0, // Mulai dari tidak terlihat
    duration: 1.5, // Durasi animasi
    ease: "power3.out"
  });

   // Animasi untuk setiap gambar dalam gallery-grid
   gsap.from(".gallery-grid img", {
    scrollTrigger: {
      trigger: ".gallery-grid", // Memulai animasi saat grid galeri mulai terlihat
      start: "top 80%", // Mulai animasi saat 80% dari grid terlihat di viewport
      end: "bottom 60%", // Berakhir saat 60% dari grid sudah discroll
      toggleActions: "play none none reverse", // Animasi diputar saat muncul dan dibalik ketika discroll kembali
    },
    opacity: 0, // Mulai dari transparan
    scale: 0.8, // Memulai dengan ukuran gambar lebih kecil
    rotation: 10, // Gambar sedikit berputar
    stagger: 0.2, // Menambahkan jeda antar gambar untuk efek berurutan
    duration: 1.5, // Durasi animasi
    ease: "power3.out" // Efek easing untuk animasi halus
  });

  // Tambahkan hover effect untuk memperbesar gambar
  const images = document.querySelectorAll(".gallery-grid img");

  images.forEach(image => {
    image.addEventListener("mouseenter", () => {
      gsap.to(image, { scale: 1.1, duration: 0.5, ease: "power2.out" });
    });
    image.addEventListener("mouseleave", () => {
      gsap.to(image, { scale: 1, duration: 0.5, ease: "power2.out" });
    });
  });

  

// scroll reveal

// tilt.js
VanillaTilt.init(document.querySelector(".elemen-tilt"), {
  max : 25,
  speed: 400
});

// keyframe
document.addEventListener("DOMContentLoaded", function() {
  const waveText = document.querySelector('.wave-text');
  const text = waveText.textContent;
  waveText.innerHTML = text.split('').map(char => `<span>${char}</span>`).join('');
});



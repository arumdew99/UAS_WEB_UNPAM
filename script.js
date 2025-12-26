// Fungsi untuk toggle menu hamburger (responsif)
function myMenuFunction() {
  const navMenu = document.getElementById("myNavMenu");
  if (navMenu.className === "nav-menu") {
    navMenu.className += " responsive";
    ody.style.overflow = "hidden";
  } else {
    navMenu.className = "nav-menu";
    body.style.overflow = "auto"
  }
}

// Fungsi untuk menutup menu saat klik link (untuk UX yang lebih baik)
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const navMenu = document.getElementById("myNavMenu");
    navMenu.className = "nav-menu"; // Tutup menu setelah klik
    document.body.style.overflow = "auto"
  });
});

// Dark mode toggle dengan animasi smooth
const toggleSwitch = document.getElementById("toggle-switch");
toggleSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  // Simpan preferensi dark mode di localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Load tema dari localStorage saat halaman dimuat
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});

// Animasi typing untuk nama di Home section
const typedTextSpan = document.querySelector(".typedText");
const textArray = ["Arum Kusuma Dewi", "a Web Developer", "a Student at Pamulang University"]; // Array teks yang akan diketik
const typingDelay = 200; // Delay antar karakter
const erasingDelay = 100; // Delay saat menghapus
const newTextDelay = 2000; // Delay sebelum teks baru
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

// Mulai animasi typing saat halaman load
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(type, newTextDelay + 250);
});

// Animasi skill bar saat scroll ke About section
const skillBars = document.querySelectorAll(".skill-per");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const targetWidth = entry.target.getAttribute("data-width");
      entry.target.style.width = targetWidth;
      // Tambahkan atribut untuk menampilkan teks
      setTimeout(() => {
        entry.target.setAttribute("data-filled", "true");
      }, 1000); // Delay 1 detik agar animasi selesai dulu
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
  const width = bar.style.width; // Ambil width dari CSS
  bar.setAttribute("data-width", width);
  bar.style.width = "0"; // Reset ke 0 untuk animasi
  observer.observe(bar);
});

// Smooth scroll untuk navigasi (opsional, tapi menarik)
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 90, // Offset untuk navbar fixed
        behavior: "smooth"
      });
    }
  });
});

// Efek hover pada ikon sosial di Home (menarik dengan animasi)
const socialIcons = document.querySelectorAll(".social_icons .icon");
socialIcons.forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "scale(1.2) rotate(10deg)";
    icon.style.transition = "transform 0.3s ease";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "scale(1) rotate(0deg)";  // Perbaikan: Menyelesaikan bagian yang terpotong
  });
});

// Efek klik pada tombol Hire Me (alert sederhana, bisa diganti dengan modal)
const hireBtn = document.querySelector(".hire-btn");
hireBtn.addEventListener("click", () => {
  alert("Terima kasih! Silakan hubungi saya di email atau WhatsApp.");
});

// Efek scroll untuk navbar (ubah background saat scroll)
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(255, 255, 255, 0.9)"; // Semi-transparan
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  } else {
    nav.style.background = "var(--nav-color)";
    nav.style.boxShadow = "none";
  }
});

// Efek hover pada ikon sosial di footer (sudah ada, tapi diperkuat untuk footer)
const footerSocialIcons = document.querySelectorAll(".footer-social-icons .icon");
footerSocialIcons.forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "scale(1.2) rotate(10deg)";
    icon.style.transition = "transform 0.3s ease, color 0.3s ease";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "scale(1) rotate(0deg)";
  });
});

// Smooth scroll untuk link footer (opsional, tapi menarik)
const footerLinks = document.querySelectorAll(".footer-menu-list a");
footerLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 90, // Offset untuk navbar fixed
        behavior: "smooth"
      });
    }
  });
});
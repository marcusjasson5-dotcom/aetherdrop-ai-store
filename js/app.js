// AetherDrop — AI Dropshipping Storefront

// Sample products tailored for Electronics / Tech Accessories / Vehicle Accessories
const products = [
  {
    id: 1,
    name: "MagSafe Wireless Charger Pro",
    category: "Tech Accessories",
    price: 34.99,
    margin: "48%",
    demand: "High",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36338f18?w=400&h=400&fit=crop",
    badge: "Trending"
  },
  {
    id: 2,
    name: "Noise-Cancelling Earbuds X3",
    category: "Electronics",
    price: 59.99,
    margin: "52%",
    demand: "Very High",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    badge: "Best Seller"
  },
  {
    id: 3,
    name: "360° Magnetic Phone Mount",
    category: "Vehicle Accessories",
    price: 24.99,
    margin: "61%",
    demand: "High",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop",
    badge: null
  },
  {
    id: 4,
    name: "Dash Cam Dual Lens 4K",
    category: "Vehicle Accessories",
    price: 89.99,
    margin: "41%",
    demand: "Rising",
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=400&h=400&fit=crop",
    badge: "New"
  },
  {
    id: 5,
    name: "USB-C Fast Charge Hub 7-in-1",
    category: "Tech Accessories",
    price: 42.99,
    margin: "55%",
    demand: "High",
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop",
    badge: null
  },
  {
    id: 6,
    name: "Smart LED Car Ambient Lights",
    category: "Vehicle Accessories",
    price: 29.99,
    margin: "58%",
    demand: "High",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=400&fit=crop",
    badge: "Popular"
  },
  {
    id: 7,
    name: "Portable Power Bank 20000mAh",
    category: "Electronics",
    price: 39.99,
    margin: "47%",
    demand: "Very High",
    image: "https://images.unsplash.com/photo-1609091839311-b71b0d4c4f0a?w=400&h=400&fit=crop",
    badge: null
  },
  {
    id: 8,
    name: "Bluetooth OBD2 Scanner",
    category: "Vehicle Accessories",
    price: 49.99,
    margin: "53%",
    demand: "Rising",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=400&fit=crop",
    badge: "AI Pick"
  }
];

// Render products
function renderProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  grid.innerHTML = products.map(p => `
    <div class="product-card group rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden">
      <div class="relative aspect-square overflow-hidden bg-slate-800">
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" onerror="this.src='https://placehold.co/400x400/1e293b/94a3b8?text=Product'">
        ${p.badge ? `<span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary-500/90 text-white">${p.badge}</span>` : ""}
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div class="p-4">
        <div class="text-xs text-primary-400 font-medium mb-1">${p.category}</div>
        <h3 class="font-semibold text-sm leading-snug mb-3 line-clamp-2">${p.name}</h3>
        <div class="flex items-center justify-between">
          <span class="text-lg font-bold">$${p.price.toFixed(2)}</span>
          <div class="text-right">
            <div class="text-xs text-slate-400">Est. margin</div>
            <div class="text-sm font-medium text-emerald-400">${p.margin}</div>
          </div>
        </div>
        <div class="mt-3 flex items-center justify-between text-xs">
          <span class="px-2 py-0.5 rounded bg-slate-800 text-slate-300">Demand: ${p.demand}</span>
          <button class="text-primary-400 hover:text-primary-300 font-medium">View →</button>
        </div>
      </div>
    </div>
  `).join("");
}

// Mobile menu toggle
document.getElementById("mobile-menu-btn")?.addEventListener("click", () => {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});

// Close mobile menu on link click
document.querySelectorAll("#mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.add("hidden");
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 20) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Contact form handling — opens email client with pre-filled message to real address
document.getElementById("contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const success = document.getElementById("form-success");
  const data = Object.fromEntries(new FormData(form));

  const subject = encodeURIComponent(`AetherDrop Inquiry — ${data.niche || "General"}`);
  const body = encodeURIComponent(
    `Name: ${data.firstName || ""} ${data.lastName || ""}\n` +
    `Email: ${data.email || ""}\n` +
    `Focus: ${data.niche || ""}\n\n` +
    `Message:\n${data.message || "(none)"}\n\n` +
    `---\nSent from AetherDrop website`
  );

  // Opens the visitor's email client addressed to your real email
  window.location.href = `mailto:marcusjasson5@gmail.com?subject=${subject}&body=${body}`;

  // Show success state
  setTimeout(() => {
    form.classList.add("hidden");
    success.classList.remove("hidden");
  }, 500);
});

// Init
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});

/**
 * Global Group - Corporate Portal JavaScript
 * Unilever-inspired structure, Black & Red theme
 * Features: 14 Subsidiary Grid, Interactive Modal, Filtering, Search, Multilingual & Modular Leadership
 */

// All 14 Conglomerate Subsidiaries Dataset
const subsidiariesData = [
  {
    id: "wealth-management",
    name: "GLOBAL ONE WEALTH MANAGEMENT LIMITED",
    category: "finance",
    categoryName: "Finance & Wealth",
    image: "assets/companies/wealth-management.jpg",
    website: "https://globalonewealth.lk",
    desc: "Private wealth structuring, portfolio advisory, and capital growth solutions for institutions and high-net-worth investors.",
    descSi: "පෞද්ගලික ධන කළමනාකරණය, ආයෝජන උපදේශනය සහ උසස් මූල්‍ය වර්ධන උපාය මාර්ග.",
    highlights: ["Portfolio Advisory", "Asset Preservation", "Capital Growth", "Equity Structuring"]
  },
  {
    id: "consortium",
    name: "GRAND CEYLON CONSORTIUM LIMITED",
    category: "finance",
    categoryName: "Corporate Holdings",
    image: "assets/companies/consortium.jpg",
    website: "https://grandceylonconsortium.com",
    desc: "Apex conglomerate holding division driving multinational investments, joint ventures, and strategic corporate synergies.",
    descSi: "උපායමාර්ගික ආයෝජන, ජාත්‍යන්තර ව්‍යාපාර ඒකාබද්ධතා සහ මහා පරිමාණ සංවර්ධන ව්‍යාපෘති මෙහෙයවීම.",
    highlights: ["Strategic Mergers", "Venture Syndication", "Corporate Governance", "Regional Expansion"]
  },
  {
    id: "sigiriya-resort",
    name: "GRAND AURA SIGIRIYA LIMITED",
    category: "hospitality",
    categoryName: "Luxury Hospitality",
    image: "assets/companies/sigiriya-resort.jpg",
    website: "https://grandaurasigiriya.com",
    desc: "Luxury eco-resort sanctuary and wellness retreat overlooking the UNESCO World Heritage fortress of Sigiriya.",
    descSi: "ඓතිහාසික සීගිරිය අභියස පිහිටි පරිසර හිතකාමී තරු පහේ සුඛෝපභෝගී නිවාඩු නිකේතනය.",
    highlights: ["5-Star Eco Villas", "Ayurvedic Spa & Wellness", "Cultural Excursions", "Fine Dining"]
  },
  {
    id: "stanford-campus",
    name: "GLOBAL STANFORD CAMPUS",
    category: "education",
    categoryName: "Higher Education",
    image: "assets/companies/stanford-campus.jpg",
    website: "https://globalstanfordcampus.edu.lk",
    desc: "Globally accredited degree pathways, postgraduate executive programs, and industry-focused professional certifications.",
    descSi: "ජාත්‍යන්තරව පිළිගත් උසස් උපාධි, පශ්චාත් උපාධි සහ වෘත්තීය ඩිප්ලෝමා පාඨමාලා මධ්‍යස්ථානය.",
    highlights: ["Global University Affiliations", "Executive MBAs", "IT & Business Degrees", "Modern Campus Labs"]
  },
  {
    id: "ehelpola-hotel",
    name: "HERITAGE EHELEPOLA HOTEL",
    category: "hospitality",
    categoryName: "Heritage Leisure",
    image: "assets/companies/ehelpola-hotel.jpg",
    website: "https://heritageehelpola.com",
    desc: "Royal boutique hospitality celebrating Sri Lanka's aristocratic architectural elegance and bespoke culinary experiences.",
    descSi: "ශ්‍රී ලංකාවේ රාජකීය උරුමය හා සංස්කෘතික සුඛෝපභෝගීත්වය එක්තැන් වූ බුටික් හෝටල් අත්දැකීම.",
    highlights: ["Kandyan Heritage Architecture", "Royal Dining", "Boutique Suites", "Historic Ambience"]
  },
  {
    id: "pixel-printmall",
    name: "PIXEL PRINTMALL",
    category: "trade",
    categoryName: "Commercial Printing & Media",
    image: "assets/companies/pixel-printmall.jpg",
    website: "https://pixelprintmall.com",
    desc: "Next-generation digital large-format printing, offset packaging, and comprehensive brand collateral manufacturing.",
    descSi: "අතිනවීන ඩිජිටල් මුද්‍රණ තාක්ෂණය, ඇසුරුම්කරණ විසඳුම් සහ ආයතනික සන්නාමකරණ සේවා.",
    highlights: ["High-Volume Offset", "Digital Packaging", "UV & Large Format", "Corporate Branding"]
  },
  {
    id: "ceylon-gold",
    name: "CEYLON GOLD",
    category: "trade",
    categoryName: "Precious Metals & Gems",
    image: "assets/companies/ceylon-gold.jpg",
    website: "https://ceylongold.lk",
    desc: "Ethically sourced certified Ceylon gemstones, bespoke investment-grade gold bullion, and sovereign jewelry crafts.",
    descSi: "ස්වභාවික නිල් මැණික්, ආයෝජන රන් සහ අගනා ස්වර්ණාභරණ අපනයන හා සිල්ලර සේවා.",
    highlights: ["Certified Gemstones", "Pure Gold Bullion", "Artisan Jewelry", "Export Certification"]
  },
  {
    id: "franchise-ceylon",
    name: "FRANCHISE CEYLON",
    category: "trade",
    categoryName: "Franchise Development",
    image: "assets/companies/franchise-ceylon.jpg",
    website: "https://franchiseceylon.com",
    desc: "Pioneering franchise incubation, master license development, and international retail brand distribution across South Asia.",
    descSi: "ව්‍යාපාර ෆ්‍රැන්චයිස් ක්‍රමවේද සංවර්ධනය, නව සන්නාම හඳුන්වාදීම සහ වෙළඳ ව්‍යාප්ති උපදේශනය.",
    highlights: ["Franchise Incubation", "Retail Network Expansion", "Brand Licensing", "Operational Audits"]
  },
  {
    id: "vip-cars",
    name: "GLOBAL VIP CARS",
    category: "automotive",
    categoryName: "Luxury Mobility",
    image: "assets/companies/vip-cars.jpg",
    website: "https://globalvipcars.lk",
    desc: "Exclusive luxury vehicle imports, diplomatic fleet solutions, and bespoke executive chauffeur services nationwide.",
    descSi: "සුඛෝපභෝගී වාහන ආනයනය, රාජ්‍ය තාන්ත්‍රික රථවාහන සේවා සහ විශේෂ ප්‍රභූ ප්‍රවාහන පහසුකම්.",
    highlights: ["Premium European Imports", "Executive Chauffeur Fleet", "Airport Concierge", "Fleet Leasing"]
  },
  {
    id: "peoples-ceylon",
    name: "PEOPLES CEYLON",
    category: "trade",
    categoryName: "FMCG & Community Retail",
    image: "assets/companies/peoples-ceylon.jpg",
    website: "https://peoplesceylon.com",
    desc: "Empowering grassroots enterprise through essential consumer commodities, fair-trade distribution, and community retail networks.",
    descSi: "පාරිභෝගික භාණ්ඩ බෙදාහැරීම, සාධාරණ වෙළඳ ජාලයන් සහ ප්‍රජා සවිබලගැන්වීමේ සිල්ලර සේවා.",
    highlights: ["Daily Essentials Supply", "Direct Farmer Sourcing", "Nationwide Logistics", "Community Empowerment"]
  },
  {
    id: "life-school",
    name: "GLOBAL LIFE SCHOOL",
    category: "education",
    categoryName: "Holistic Education",
    image: "assets/companies/life-school.jpg",
    website: "https://globallifeschool.org",
    desc: "Transformative life coaching, emotional intelligence, youth character leadership, and holistic wellness education.",
    descSi: "ජීවන කුසලතා සංවර්ධනය, නායකත්ව පුහුණුව, මානසික සුවතාව සහ දරුවන්ගේ පෞරුෂ වර්ධනය.",
    highlights: ["Emotional Intelligence (EQ)", "Youth Leadership Camps", "Mindfulness & Wellness", "Corporate Coaching"]
  },
  {
    id: "fintech-forum",
    name: "ASIAN FINTECH FORUM",
    category: "finance",
    categoryName: "Financial Technology",
    image: "assets/companies/fintech-forum.jpg",
    website: "https://asianfintechforum.org",
    desc: "Regional knowledge summit, blockchain innovation incubator, and digital payment infrastructure acceleration across Asia.",
    descSi: "ආසියානු ඩිජිටල් මූල්‍ය තාක්ෂණ සමුළුව, බ්ලොක්චේන් සහ නව්‍ය ගෙවීම් පද්ධති සංවර්ධනය.",
    highlights: ["Fintech Hackathons", "Policy Dialogue", "Decentralized Finance (DeFi)", "Cross-border Payments"]
  },
  {
    id: "auto-channeling",
    name: "AUTO-CHANNELING",
    category: "automotive",
    categoryName: "Digital Health & Mobility",
    image: "assets/companies/auto-channeling.jpg",
    website: "https://autochanneling.lk",
    desc: "Smart automated emergency medical dispatch, telehealth integration, and synchronized hospital transport channel.",
    descSi: "හදිසි වෛද්‍ය ප්‍රවාහන සම්බන්ධීකරණය, ඩිජිටල් වෛද්‍ය චැනලින් සහ ස්මාර්ට් සෞඛ්‍ය ප්‍රවාහන ජාලය.",
    highlights: ["24/7 Smart Dispatch", "Doctor Channeling System", "Emergency Ambulance Link", "GPS Fleet Tracking"]
  },
  {
    id: "nano-fertilizer",
    name: "SUPERANK NANO - FERTILIZER",
    category: "agro",
    categoryName: "Nanotechnology Agriculture",
    image: "assets/companies/nano-fertilizer.jpg",
    website: "https://superanknano.com",
    desc: "Scientific nanotechnology-based agricultural inputs maximizing harvest yields while restoring ecological soil vitality.",
    descSi: "නැනෝ තාක්ෂණික පොහොර නිෂ්පාදනය, ඉහළ අස්වැන්නක් සහ පරිසර හිතකාමී කාබනික කෘෂිකාර්මික විසඳුම්.",
    highlights: ["Nano-Nutrient Delivery", "Zero Toxic Residue", "Soil Biome Regeneration", "Certified Organic Standards"]
  }
];

// Board of Directors & Leadership Dataset
const leadershipData = [
  {
    id: "dr-sampath-bandara",
    name: "Dr. Sampath Bandara",
    role: "Chairman of the Board",
    qualifications: "PhD in Education, MBA, MED, BSc",
    portrait: "assets/leadership/dr-sampath-bandara-portrait.jpg",
    banner: "assets/leadership/dr-sampath-bandara-banner.jpg",
    bio: "Dr. Sampath Bandara provides the visionary governance that steers Global Group across multi-sector enterprises. An esteemed scholar and institutional strategist holding a doctorate in Education alongside comprehensive executive management degrees, he is committed to building sustainable corporate legacies and human capital excellence.",
    bioSi: "ආචාර්ය සම්පත් බණ්ඩාර මහතා ග්ලෝබල් සමූහයේ සභාපතිවරයා ලෙස උපායමාර්ගික හා ආයතනික දැක්ම මෙහෙයවයි. අධ්‍යාපනය පිළිබඳ ආචාර්ය උපාධියක් සහ ව්‍යාපාර කළමනාකරණය පිළිබඳ පශ්චාත් උපාධි සහිත ප්‍රවීණ විද්වතෙකි.",
    focus: ["Strategic Governance", "Human Capital Development", "Institutional Integrity", "Educational Leadership"]
  },
  {
    id: "dr-asanka-weerasinghe",
    name: "Dr. Asanka Weerasinghe",
    role: "Chief Executive Officer (CEO)",
    qualifications: "PhD in Management, PGD in Business Management, B.Sc (Mgt)(Pub)SP, Honce, ICA (f), LICA",
    portrait: "assets/leadership/dr-asanka-weerasinghe-portrait.jpg",
    banner: "assets/leadership/dr-asanka-weerasinghe-banner.jpg",
    bio: "Dr. Asanka Weerasinghe leads the executive operations, fiscal growth, and strategic commercial expansion of Global Group. With advanced doctoral mastery in management, chartered accounting fellowship, and multi-disciplinary governance credentials, he champions high-impact execution across all 14 subsidiaries.",
    bioSi: "ආචාර්ය අසංක වීරසිංහ මහතා ග්ලෝබල් සමූහයේ ප්‍රධාන විධායක නිලධාරී (CEO) ලෙස සමූහයේ සමස්ත මෙහෙයුම් සහ මූල්‍ය වර්ධනය මෙහෙයවයි. කළමනාකරණය පිළිබඳ ආචාර්ය උපාධියක් සහ වරලත් ගණකාධිකරණ සුදුසුකම් ලත් දක්ෂ නායකයෙකි.",
    focus: ["Executive Operations", "Financial Engineering", "Corporate Expansion", "Portfolio Profitability"]
  }
];

// Global State
let currentLang = 'en'; // 'en' | 'si'
let currentCategory = 'all';
let searchQuery = '';

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initSubsidiariesGrid();
  initCategoryFilters();
  initSearch();
  initModal();
  initLanguageToggle();
  initContactForm();
  initHeroVideoSound();
  
  // If on leadership page, render leadership
  if (document.getElementById('leadershipGridFull')) {
    renderLeadershipPage();
  }
});

// Hero Corporate Video Sound Toggle
function initHeroVideoSound() {
  const video = document.getElementById('heroCorporateVideo');
  const btn = document.getElementById('heroSoundToggleBtn');
  const soundLabel = document.getElementById('soundLabel');
  if (!video || !btn || !soundLabel) return;

  btn.addEventListener('click', () => {
    video.muted = !video.muted;
    soundLabel.innerHTML = video.muted ? '🔇 Unmute' : '🔊 Mute Audio';
  });
}

// Navbar Scroll Effect
function initNavbarScroll() {
  const navbar = document.getElementById('mainNavbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Mobile Menu
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const isOpen = navMenu.classList.contains('open');
    toggleBtn.innerHTML = isOpen ? '&times;' : '&#9776;';
  });

  // Close when link clicked
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.innerHTML = '&#9776;';
    });
  });
}

// Render Subsidiaries Grid
function initSubsidiariesGrid() {
  const grid = document.getElementById('subsidiariesGrid');
  if (!grid) return;

  const filtered = subsidiariesData.filter(item => {
    const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 1.2rem; font-weight: 600; color: #ffffff; margin-bottom: 8px;">No subsidiaries found matching "${searchQuery}"</p>
        <p style="font-size: 0.9rem;">Try selecting a different industry category or clear your search.</p>
        <button onclick="resetFilters()" style="margin-top: 18px; padding: 8px 20px; background: var(--red-gradient); color: #fff; border-radius: 9999px; font-weight: 600; font-size: 0.85rem;">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <div class="company-card" onclick="openCompanyModal('${item.id}')" data-id="${item.id}">
      <div class="company-img-container">
        <img class="company-img" src="${item.image}" alt="${item.name}" loading="lazy">
        <span class="company-badge-category">${item.categoryName}</span>
        <div class="company-logo-badge" title="Subsidiary Seal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      </div>
      <div class="company-card-content">
        <h3 class="company-name">${item.name}</h3>
        <p class="company-desc">${currentLang === 'si' && item.descSi ? item.descSi : item.desc}</p>
        <div class="company-card-actions">
          <span class="btn-visit-company">
            <span>${currentLang === 'si' ? 'විස්තර බලන්න' : 'Explore Profile'}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
          <span class="company-arrow-btn">&#8599;</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Category Filters
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category') || 'all';
      initSubsidiariesGrid();
    });
  });
}

// Search
function initSearch() {
  const input = document.getElementById('companySearchInput');
  if (!input) return;
  input.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    initSubsidiariesGrid();
  });
}

function resetFilters() {
  currentCategory = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('companySearchInput');
  if (searchInput) searchInput.value = '';
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-category') === 'all');
  });
  initSubsidiariesGrid();
}

// Subsidiary Modal Logic
function initModal() {
  const modal = document.getElementById('companyModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', closeCompanyModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeCompanyModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeCompanyModal();
    }
  });
}

function openCompanyModal(id) {
  const item = subsidiariesData.find(s => s.id === id);
  if (!item) return;

  const modal = document.getElementById('companyModal');
  if (!modal) return;

  document.getElementById('modalImg').src = item.image;
  document.getElementById('modalCategory').innerText = item.categoryName;
  document.getElementById('modalTitle').innerText = item.name;
  document.getElementById('modalDesc').innerText = currentLang === 'si' && item.descSi ? item.descSi : item.desc;
  
  // Highlights
  const highlightsEl = document.getElementById('modalHighlights');
  if (highlightsEl && item.highlights) {
    highlightsEl.innerHTML = item.highlights.map(h => `
      <div class="modal-spec-card">
        <div class="modal-spec-label">Core Competency</div>
        <div class="modal-spec-val">${h}</div>
      </div>
    `).join('');
  }

  // Visit Button & Inquire Button
  const visitBtn = document.getElementById('modalVisitBtn');
  if (visitBtn) {
    visitBtn.href = item.website;
    visitBtn.setAttribute('target', '_blank');
  }

  const inquireBtn = document.getElementById('modalInquireBtn');
  if (inquireBtn) {
    inquireBtn.onclick = () => {
      closeCompanyModal();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        const companySelect = document.getElementById('contactSubsidiary');
        if (companySelect) {
          companySelect.value = item.name;
        }
      }
    };
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCompanyModal() {
  const modal = document.getElementById('companyModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Multilingual Switcher
function initLanguageToggle() {
  const langBtn = document.getElementById('langToggleBtn');
  if (!langBtn) return;

  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'si' : 'en';
    langBtn.innerHTML = currentLang === 'en' ? '<span>🌐 SI / සිංහල</span>' : '<span>🌐 EN / English</span>';
    applyTranslations();
  });
}

function applyTranslations() {
  document.querySelectorAll('[data-en]').forEach(el => {
    const textEn = el.getAttribute('data-en');
    const textSi = el.getAttribute('data-si');
    if (currentLang === 'si' && textSi) {
      el.innerText = textSi;
    } else if (textEn) {
      el.innerText = textEn;
    }
  });
  initSubsidiariesGrid();
}

// Contact Form Handling (Direct WhatsApp & Email Integration)
function initContactForm() {
  const form = document.getElementById('corporateInquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const subsidiary = document.getElementById('contactSubsidiary').value;
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !phone) {
      alert('Please provide your name and phone number.');
      return;
    }

    const whatsappText = encodeURIComponent(
      `*New Inquiry - Global Group Portal*\n` +
      `-----------------------------------\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Subsidiary of Interest:* ${subsidiary}\n` +
      `*Message:* ${message}\n` +
      `-----------------------------------\n` +
      `Sent via thegroupglobal.com corporate portal.`
    );

    const whatsappUrl = `https://wa.me/94766667807?text=${whatsappText}`;
    window.open(whatsappUrl, '_blank');

    // Show nice confirmation
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '✓ Inquiry Dispatched via WhatsApp';
    btn.style.background = '#25D366';
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      form.reset();
    }, 4000);
  });
}

// Render Dedicated Leadership Page with Distinct Hierarchy & Clean Minimalist Details
function renderLeadershipPage() {
  const grid = document.getElementById('leadershipGridFull');
  if (!grid) return;

  grid.className = 'leadership-hierarchy-container';

  const chairman = leadershipData.find(l => l.id === 'dr-sampath-bandara');
  const ceo = leadershipData.find(l => l.id === 'dr-asanka-weerasinghe');

  const chairmanHtml = chairman ? `
    <div class="leader-card-chairman" id="${chairman.id}">
      <img src="${chairman.banner}" alt="${chairman.name}" class="leader-banner-img">
      <div class="leader-body">
        <span class="leader-role-badge-apex">★ CHAIRMAN OF THE BOARD</span>
        <h2 class="leader-name">${chairman.name}</h2>
        <p class="leader-degrees">${chairman.qualifications}</p>
        <div class="leader-card-footer-clean">
          <span style="font-size: 0.85rem; font-weight: 700; color: #ffd700; letter-spacing: 0.5px;">Apex Board Governance</span>
          <a href="index.html#contact" class="btn-profile-link">
            <span>Direct Board Contact</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  ` : '';

  const ceoHtml = ceo ? `
    <div class="leader-card-ceo" id="${ceo.id}">
      <img src="${ceo.banner}" alt="${ceo.name}" class="leader-banner-img">
      <div class="leader-body">
        <span class="leader-role-badge-exec">CHIEF EXECUTIVE OFFICER</span>
        <h2 class="leader-name">${ceo.name}</h2>
        <p class="leader-degrees">${ceo.qualifications}</p>
        <div class="leader-card-footer-clean">
          <span style="font-size: 0.82rem; font-weight: 600; color: var(--text-muted);">Executive Operations Directorate</span>
          <a href="index.html#contact" class="btn-profile-link">
            <span>Contact Secretariat</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  ` : '';

  const addMemberHtml = `
    <div class="add-member-card" onclick="openAddMemberGuide()" style="max-width: 820px; margin: 0 auto; width: 100%; min-height: 220px;">
      <div class="add-member-icon" style="width: 48px; height: 48px; font-size: 1.5rem; margin-bottom: 12px;">+</div>
      <h3 class="add-member-title">Add Executive / Director</h3>
      <p class="add-member-desc">Append new board members or executive directors to this governance portal.</p>
      <button class="btn-secondary" style="font-size: 0.82rem; padding: 6px 18px;">View Integration Guide</button>
    </div>
  `;

  grid.innerHTML = chairmanHtml + ceoHtml + addMemberHtml;
}

// Open Simple Modal / Alert for Adding More Members
function openAddMemberGuide() {
  alert(
    "HOW TO ADD FUTURE DIRECTORS & EXECUTIVES:\n\n" +
    "1. Open 'script.js' in any text editor.\n" +
    "2. Locate the 'leadershipData' array at line ~160.\n" +
    "3. Copy and paste an existing entry, and update the Name, Role, Qualifications, and Photo!\n" +
    "4. Save the file. The page updates automatically and permanently without any expiry!"
  );
}

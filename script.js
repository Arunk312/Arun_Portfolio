// ===== Edit your content here =====
const skills = [
  { title: "Programming", items: ["Python", "SQL", "Git", "Bash"], url: "#projects" },
  { title: "Data and ML", items: ["Pandas", "NumPy", "scikit-learn", "Deep Learning", "Agentic AI", "XGBoost"], url: "#projects" },
  { title: "Visualization", items: ["Matplotlib", "Seaborn","Plotly"], url: "#projects" },
  { title: "Tools and Deployment", items: ["Streamlit", "VS code", "HTML CSS JavaScripts", "APIs", "Jupyter"], url: "#projects" }
];

const projects = [

  { title: "Live Dashboard for Stock Profit Tracking App", tag: "Dashboard", h: 200, text: "Live portfolio dashboard that tracks holdings, profit and loss in real time.",
    url: "https://your-stock-app.streamlit.app", code: "https://github.com/your-handle/stock-profit-tracker" },
  { title: "Live Trading Bot", tag: "Automation", h: 160, text: "Bot that reads live market data and places trades based on a rule-based strategy.",
    url: "https://your-trading-bot.onrender.com", code: "https://github.com/your-handle/live-trading-bot" },
  { title: "Movie Recommendation System", tag: "Machine Learning", h: 270, text: "Suggests movies using content-based and collaborative filtering.",
    url: "https://cinenexus-312.streamlit.app/", code: "https://github.com/Arunk312/CineNexus" },
  { title: "Book Recommendation System", tag: "Machine Learning", h: 25, text: "Recommends books based on reader ratings and book similarity.",
    url: "https://your-book-app.streamlit.app", code: "https://github.com/your-handle/book-recommendation" },
  { title: "WhatsApp Chat Analysis", tag: "Data Analysis", h: 140, text: "Analyzes exported chats: busiest days, top words, emojis and member activity.",
    url: "https://your-whatsapp-app.streamlit.app", code: "https://github.com/your-handle/whatsapp-chat-analysis" },
  { title: "Customer Churn Prediction", tag: "Machine Learning", h: 330, text: "Predicts which customers are likely to leave so teams can act early.",
    url: "https://your-churn-app.streamlit.app", code: "https://github.com/your-handle/customer-churn-prediction" },
  { title: "Sales Forecasting Dashboard", tag: "Dashboard", h: 220, text: "Forecasts monthly sales and shows trends by region and product.",
    url: "https://your-sales-app.streamlit.app", code: "https://github.com/your-handle/sales-forecasting" },
  { title: "Review Sentiment Analysis", tag: "NLP", h: 300, text: "Classifies product reviews as positive, neutral or negative.",
    url: "https://your-sentiment-app.streamlit.app", code: "https://github.com/your-handle/review-sentiment" }
];

const certificates = [
  { title: "Bechelor Of Computer Applications", org: "IGNOU", year: "August 2021", url: "https://www.ignou.ac.in/" },
  { title: "Python for Data Science", org: "IIT Madras", year: "2022", url: "https://nptel.ac.in/courses/106106212" },
  { title: "Introduction To Machine Learning ", org: "IIT Kharagpur", year: "2022", url: "https://nptel.ac.in/courses/106105152" },
  { title: "Data Science Foundations", org: "Great Learning", year: "2023", url: "https://olympus.mygreatlearning.com/courses/13680?th=b&pb_id=581" },
  { title: "Convolutional Neural Networks", org: "Great Learning", year: "2023", url: "https://olympus.mygreatlearning.com/courses/64211?th=b&pb_id=581" },
  { title: "Multilayer Perceptron", org: "Great Learning", year: "2023", url: "https://olympus.mygreatlearning.com/courses/64308?th=b&pb_id=581" },
  { title: "Statistical Analysis", org: "Great Learning", year: "2023", url: "https://olympus.mygreatlearning.com/courses/50612?th=b&pb_id=581" }
];

const experience = [
  { title: "Data Science Intern", org: "Company Name", when: "2025 to present", text: "Built prediction models and automated weekly reports.", url: "https://example.com/company-1" },
  { title: "Freelance Data Analyst", org: "Self-employed", when: "2024 to 2025", text: "Delivered dashboards and analysis for small clients.", url: "https://example.com/freelance" },
  { title: "Trading Bot Developer", org: "Personal project", when: "2024", text: "Designed, backtested and deployed a live trading bot.", url: "https://github.com/your-handle/live-trading-bot" },
  { title: "B.Tech in Your Field", org: "University Name", when: "2021 to 2025", text: "Studied statistics, machine learning and databases.", url: "https://example.com/university" }
];

const articles = [
  { title: "How I built a live stock profit tracker", site: "Towards Data Science", text: "Step-by-step guide to building a real-time portfolio dashboard.", url: "https://towardsdatascience.com/author/your-handle" },
  { title: "Building a movie recommender in Python", site: "Medium", text: "A beginner-friendly walkthrough with code.", url: "https://medium.com/@your-handle" },
  { title: "What WhatsApp chats can tell you", site: "Medium", text: "Exploring chat data with pandas and matplotlib.", url: "https://medium.com/@your-handle" },
  { title: "Predicting customer churn, end to end", site: "Towards Data Science", text: "From raw data to a deployed model.", url: "https://towardsdatascience.com/author/your-handle" }
];

const contacts = [
  { title: "Email", text: "you@example.com", url: "mailto:you@example.com" },
  { title: "LinkedIn", text: "Connect with me", url: "https://www.linkedin.com/in/your-handle" },
  { title: "GitHub", text: "See my code", url: "https://github.com/your-handle" },
  { title: "Medium profile", text: "Read my articles", url: "https://medium.com/@your-handle" },
  { title: "Towards Data Science", text: "My published articles", url: "https://towardsdatascience.com/author/your-handle" },
  { title: "Kaggle", text: "Notebooks and datasets", url: "https://www.kaggle.com/your-handle" }
];

// ===== Rendering =====
const $ = (s) => document.querySelector(s);
const ext = (u) => /^https?:/.test(u) ? ' target="_blank" rel="noopener"' : "";
const card = (u, inner) => `<a class="card" href="${u}"${ext(u)}>${inner}</a>`;

$("#skills-grid").innerHTML = skills.map(s => card(s.url,
  `<div class="card-body"><h3>${s.title}</h3><ul class="chips">${s.items.map(i => `<li>${i}</li>`).join("")}</ul></div>`)).join("");

$("#projects-grid").innerHTML = projects.map((p, i) => `
  <article class="card project">
    <div class="pimg" style="--h:${p.h}">
      <img src="${p.img || `assets/project${i + 1}.jpg`}" alt="${p.title}" loading="lazy" onerror="this.style.display='none'">
    </div>
    <div class="card-body">
      <span class="meta">${p.tag}</span>
      <h3>${p.title}</h3>
      <p>${p.text}</p>
      <div class="plinks">
        <a href="${p.url}"${ext(p.url)}>Open project</a>
        <a href="${p.code || p.url}"${ext(p.code || p.url)}>View code</a>
      </div>
    </div>
  </article>`).join("");

$("#certificates-grid").innerHTML = certificates.map(c => card(c.url,
  `<div class="card-body"><span class="meta">${c.org} · ${c.year}</span><h3>${c.title}</h3><span class="open">View certificate</span></div>`)).join("");

$("#experience-grid").innerHTML = experience.map(e => card(e.url,
  `<div class="card-body"><span class="meta">${e.when}</span><h3>${e.title}</h3><span class="meta">${e.org}</span><p>${e.text}</p><span class="open">Learn more</span></div>`)).join("");

$("#articles-grid").innerHTML = articles.map(a => card(a.url,
  `<div class="card-body"><span class="meta">${a.site}</span><h3>${a.title}</h3><p>${a.text}</p><span class="open">Read article</span></div>`)).join("");

$("#contact-grid").innerHTML = contacts.map(c => card(c.url,
  `<div class="card-body"><h3>${c.title}</h3><p>${c.text}</p><span class="open">Open</span></div>`)).join("");

// ===== Slider =====
const track = $("#slides");
const slideCount = track.children.length;
const dotsBox = $("#dots");
let cur = 0, timer = null;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

dotsBox.innerHTML = [...track.children].map((_, i) => `<button type="button" aria-label="Go to slide ${i + 1}"></button>`).join("");
const dots = [...dotsBox.children];

function show(i) {
  cur = (i + slideCount) % slideCount;
  track.style.transform = `translateX(-${cur * 100}%)`;
  dots.forEach((d, n) => d.setAttribute("aria-current", n === cur));
}
function play() { if (!reduce) { stop(); timer = setInterval(() => show(cur + 1), 5500); } }
function stop() { clearInterval(timer); }

$(".next").addEventListener("click", () => { show(cur + 1); play(); });
$(".prev").addEventListener("click", () => { show(cur - 1); play(); });
dots.forEach((d, i) => d.addEventListener("click", () => { show(i); play(); }));
const slider = $(".slider");
slider.addEventListener("mouseenter", stop);
slider.addEventListener("mouseleave", play);
slider.addEventListener("focusin", stop);
slider.addEventListener("focusout", play);

let startX = null;
slider.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; stop(); }, { passive: true });
slider.addEventListener("touchend", (e) => {
  if (startX !== null) {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) show(cur + (dx < 0 ? 1 : -1));
    startX = null;
  }
  play();
});
show(0);
play();

// ===== Nav =====
const toggle = $(".nav-toggle");
const menu = $("#menu");
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") { menu.classList.remove("open"); toggle.setAttribute("aria-expanded", false); }
});
const links = [...menu.querySelectorAll("a")];
const observer = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => observer.observe(s));

$("#year").textContent = new Date().getFullYear();

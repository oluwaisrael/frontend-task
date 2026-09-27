
const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Architecture",
    date: "Sep 15, 2026",
    category: "Sustainability",
    hero: "https:
    excerpt: "Exploring how green building practices are shaping the next generation of design...",
    body: `
      <p>Sustainable architecture is no longer a niche trend — it is the foundation of modern design. From passive solar strategies to carbon-neutral materials, architects are rethinking every layer of the built environment.</p>
      <p>Green roofs, rainwater harvesting, and high-performance glazing are becoming standard rather than optional. Clients increasingly demand buildings that reduce operational costs while minimizing environmental impact.</p>
      <div class="single-blog-gallery">
        <img src="https:
        <img src="https:
      </div>
      <p>At Derin & Israel, we integrate sustainability from the earliest concept sketches. Every project begins with a site analysis that considers solar orientation, prevailing winds, and local climate data.</p>
      <p>The result is architecture that performs as beautifully as it looks — spaces that are healthier for occupants and gentler on the planet.</p>
    `
  },
  {
    id: 2,
    title: "5 Trends in Modern Interior Design",
    date: "Sep 10, 2026",
    category: "Interior Design",
    hero: "https:
    excerpt: "From biophilic design to smart homes, discover the trends defining interiors today...",
    body: `
      <p>Interior design in 2026 is defined by warmth, flexibility, and a deep connection to nature. Here are five trends shaping how we live and work indoors.</p>
      <p><strong>1. Biophilic design</strong> — Living walls, natural materials, and abundant daylight are prioritised to improve wellbeing.</p>
      <p><strong>2. Multifunctional spaces</strong> — Homes now blend work, rest, and social zones without feeling cluttered.</p>
      <div class="single-blog-gallery">
        <img src="https:
        <img src="https:
      </div>
      <p><strong>3. Warm minimalism</strong> — Soft neutrals, textured fabrics, and carefully chosen statement pieces replace stark white boxes.</p>
      <p><strong>4. Smart integration</strong> — Technology disappears into the architecture rather than competing with it.</p>
      <p><strong>5. Local craftsmanship</strong> — Custom joinery and regionally sourced materials give each project a unique identity.</p>
    `
  },
  {
    id: 3,
    title: "How to Choose the Right Architect",
    date: "Sep 5, 2026",
    category: "Guide",
    hero: "https:
    excerpt: "A practical guide to finding the perfect design partner for your next project...",
    body: `
      <p>Selecting an architect is one of the most important decisions you will make on a building project. The right partner turns a brief into a lasting piece of architecture.</p>
      <p>Start by reviewing portfolios that align with the scale and style of your project. Look for consistency in quality, not just photogenic images.</p>
      <div class="single-blog-gallery">
        <img src="https:
        <img src="https:
      </div>
      <p>Meet the team in person if possible. Chemistry matters — you will work closely for months or years. Ask about their process, communication style, and how they handle budgets and timelines.</p>
      <p>Finally, check references. Speak with previous clients about delivery, responsiveness, and whether the finished building matched the vision.</p>
    `
  },
  {
    id: 4,
    title: "Urban Living in Dense Cities",
    date: "Aug 28, 2026",
    category: "Urban Design",
    hero: "https:
    excerpt: "How thoughtful density can create vibrant, human-scale neighbourhoods...",
    body: `
      <p>Density does not have to mean overcrowding. When designed well, higher-density urban housing supports walkable streets, local businesses, and stronger communities.</p>
      <p>The key is balancing private space with shared amenities — courtyards, roof terraces, and flexible ground floors that activate the street.</p>
      <div class="single-blog-gallery">
        <img src="https:
        <img src="https:
      </div>
      <p>At Derin & Israel we study successful examples from around the world and adapt them to local climate, culture, and regulations. The goal is always the same: cities that feel alive, not just efficient.</p>
    `
  },
  {
    id: 5,
    title: "Material Matters: Choosing Finishes",
    date: "Aug 20, 2026",
    category: "Materials",
    hero: "https:
    excerpt: "Why the right materials transform both the look and longevity of a building...",
    body: `
      <p>Materials are the skin of architecture. They determine how a building ages, how it feels to touch, and how it responds to light throughout the day.</p>
      <p>We prefer materials that improve with time — natural stone, untreated timber, and metals that develop a patina. These choices reduce long-term maintenance and create richer visual character.</p>
      <div class="single-blog-gallery">
        <img src="https:
        <img src="https:
      </div>
      <p>Every specification is tested against performance criteria: durability, thermal behaviour, embodied carbon, and cost. Beauty alone is never enough.</p>
    `
  },
  {
    id: 6,
    title: "Light as a Design Material",
    date: "Aug 12, 2026",
    category: "Design Theory",
    hero: "https:
    excerpt: "How natural and artificial light shape mood, space, and energy use...",
    body: `
      <p>Light is the most powerful tool an architect has. It reveals form, creates atmosphere, and connects interior spaces to the rhythm of the day.</p>
      <p>We design from the inside out, placing windows and skylights where they will deliver the most useful light while controlling glare and heat gain.</p>
      <div class="single-blog-gallery">
        <img src="https:
        <img src="https:
      </div>
      <p>Artificial lighting is layered carefully — ambient, task, and accent — so spaces can shift character from morning productivity to evening calm without changing the architecture itself.</p>
    `
  }
];


function loadBlogPost() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;
  const post = blogPosts.find(p => p.id === id) || blogPosts[0];

  document.title = post.title + ' | Derin & Israel';
  document.getElementById('post-title').textContent = post.title;
  document.getElementById('post-date').textContent = post.date;
  document.getElementById('post-category').textContent = post.category;
  document.getElementById('post-hero').src = post.hero;
  document.getElementById('post-hero').alt = post.title;
  document.getElementById('post-body').innerHTML = post.body;

  
  const related = blogPosts.filter(p => p.id !== post.id).slice(0, 3);
  const relatedContainer = document.getElementById('related-posts');
  if (relatedContainer) {
    relatedContainer.innerHTML = related.map(p => `
      <article class="blog-card">
        <div class="blog-image">
          <img src="${p.hero}" alt="${p.title}">
        </div>
        <div class="blog-content">
          <h3>${p.title}</h3>
          <p>${p.excerpt}</p>
          <a href="single-blog.html?id=${p.id}" class="blog-link">Read More →</a>
        </div>
      </article>
    `).join('');
  }
}


function loadBlogListing() {
  const grid = document.querySelector('.blog-page .blog-grid');
  if (!grid) return;

  grid.innerHTML = blogPosts.map(p => `
    <article class="blog-card">
      <div class="blog-image">
        <img src="${p.hero}" alt="${p.title}">
      </div>
      <div class="blog-content">
        <h3>${p.title}</h3>
        <p>${p.excerpt}</p>
        <a href="single-blog.html?id=${p.id}" class="blog-link">Read More →</a>
      </div>
    </article>
  `).join('');
}


if (document.getElementById('post-title')) {
  loadBlogPost();
} else if (document.querySelector('.blog-page')) {
  loadBlogListing();
}
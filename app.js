(() => {
  const projects = {
    sales: {
      number: 'PROJECT / 01', title: 'Retail Sales & Customer Analytics Dashboard',
      summary: 'A business intelligence workflow for understanding sales trends, customer behavior and product performance from retail data.',
      contributions: ['Cleaned and transformed retail datasets for analysis.', 'Performed exploratory data analysis to investigate sales, customer and product patterns.', 'Developed an interactive Power BI dashboard to make findings easier to explore.'],
      stack: ['Python', 'Pandas', 'SQL', 'Power BI', 'Excel'],
      repository: 'https://github.com/AkashGupta004/ecommerce-customer-segmentation-analytics'
    },
    automation: {
      number: 'PROJECT / 02', title: 'D2C Order Follow-up Automation',
      summary: 'An automated order-monitoring application that identifies operational exceptions and creates structured follow-up tasks.',
      contributions: ['Implemented five rule-based checks for unconfirmed orders, dispatch delays, shipment delays, failed deliveries and high-value overdue orders.', 'Built five functional modules for monitoring, task management, reporting and audit tracking.', 'Added duplicate-task prevention and automatic task resolution.'],
      stack: ['Python', 'Streamlit', 'Pandas', 'SQLite'],
      repository: 'https://github.com/AkashGupta004/d2c-order-followup-automation'
    },
    inventory: {
      number: 'PROJECT / 03', title: 'Inventory Management & Tracking System',
      summary: 'A Django-based application for managing products and categories while surfacing stock risks and useful inventory metrics.',
      contributions: ['Implemented product and category management, stock tracking and search/filter functionality.', 'Added low-stock alerts below 10 units and out-of-stock detection.', 'Built dashboard metrics for inventory valuation, potential sales revenue and category-wise stock distribution; tested with sample data covering 15 products across five categories.'],
      stack: ['Python', 'Django'],
      repository: 'https://github.com/AkashGupta004/stockpulse-inventory-management'
    }
  };
  const $ = selector => document.querySelector(selector);
  const nav = $('#site-nav');
  const menu = $('#menu-toggle');
  const themeButton = $('#theme-toggle');
  const dialog = $('#project-dialog');
  const dialogContent = $('#dialog-content');
  const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

  $('#year').textContent = new Date().getFullYear();
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation');
  }));

  let savedTheme = 'dark';
  try { savedTheme = localStorage.getItem('akash-portfolio-theme') || 'dark'; } catch (_) {}
  if (savedTheme === 'light') document.body.classList.add('light');
  const updateThemeLabel = () => {
    const light = document.body.classList.contains('light');
    themeButton.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
    themeButton.title = light ? 'Switch to dark theme' : 'Switch to light theme';
    themeButton.querySelector('.theme-glyph').textContent = light ? '◐' : '☼';
    document.querySelector('meta[name="theme-color"]').content = light ? '#f5f7fa' : '#090b10';
  };
  updateThemeLabel();
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle('light');
    try { localStorage.setItem('akash-portfolio-theme', document.body.classList.contains('light') ? 'light' : 'dark'); } catch (_) {}
    updateThemeLabel();
  });

  function openProject(key) {
    const project = projects[key];
    if (!project) return;
    dialogContent.innerHTML = `<span class="dialog-kicker">${esc(project.number)} · CASE STUDY</span><h2>${esc(project.title)}</h2><p>${esc(project.summary)}</p><h3>Scope &amp; contributions</h3><ul>${project.contributions.map(item => `<li>${esc(item)}</li>`).join('')}</ul><div class="dialog-tags">${project.stack.map(item => `<span>${esc(item)}</span>`).join('')}</div><a class="dialog-repo" href="${esc(project.repository)}" target="_blank" rel="noopener noreferrer">View GitHub repository <span>↗</span></a>`;
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  }
  document.querySelectorAll('[data-open-project]').forEach(button => button.addEventListener('click', event => {
    event.stopPropagation(); openProject(button.dataset.openProject);
  }));
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', event => { if (!event.target.closest('button')) openProject(card.dataset.project); });
    card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openProject(card.dataset.project); } });
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${projects[card.dataset.project].title}`);
  });
  $('#dialog-close').addEventListener('click', () => dialog.close ? dialog.close() : dialog.removeAttribute('open'));
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && dialog.open) dialog.close(); });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
    }), {threshold: 0.12});
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add('in-view'));

  const backTop = $('#back-top');
  const setScrollState = () => backTop.classList.toggle('visible', window.scrollY > 500);
  window.addEventListener('scroll', setScrollState, {passive:true});
  setScrollState();
  backTop.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
})();


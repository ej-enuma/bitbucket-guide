const PAGES = [
  { file: 'index.html',           icon: '🏠', label: '소개' },
  { file: 'getting-started.html', icon: '🚀', label: '시작하기' },
  { file: 'repository.html',      icon: '📁', label: '저장소 생성 & 클론' },
  { file: 'git-basics.html',      icon: '🔁', label: '기본 Git 흐름' },
  { file: 'branches.html',        icon: '🌿', label: '브랜치 & 머지' },
  { file: 'pull-request.html',    icon: '🔀', label: 'Pull Request' },
];

function renderSidebar(pages, currentPath) {
  const items = pages.map((page) => {
    const cls = page.file === currentPath ? 'nav-link active' : 'nav-link';
    return `<li><a class="${cls}" href="${page.file}">` +
           `<span class="nav-icon">${page.icon}</span>${page.label}</a></li>`;
  }).join('');
  return `<ul class="nav-list">${items}</ul>`;
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const current = location.pathname.split('/').pop() || 'index.html';
    const mount = document.getElementById('sidebar');
    if (mount) mount.innerHTML = renderSidebar(PAGES, current);

    const toggle = document.getElementById('nav-toggle');
    const shell = document.querySelector('.shell');
    if (toggle && shell) {
      toggle.addEventListener('click', () => shell.classList.toggle('nav-open'));
    }
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PAGES, renderSidebar };
}

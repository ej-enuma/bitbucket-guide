document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.code-block').forEach((block) => {
    const pre = block.querySelector('pre');
    if (!pre) return;
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.type = 'button';
    btn.textContent = '복사';
    btn.addEventListener('click', async () => {
      await navigator.clipboard.writeText(pre.innerText);
      btn.textContent = '복사됨!';
      setTimeout(() => { btn.textContent = '복사'; }, 1500);
    });
    block.appendChild(btn);
  });
});

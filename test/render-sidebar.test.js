const { test } = require('node:test');
const assert = require('node:assert');
const { PAGES, renderSidebar } = require('../assets/js/nav.js');

test('PAGES는 6개 페이지를 정의한다', () => {
  assert.strictEqual(PAGES.length, 6);
});

test('renderSidebar는 모든 페이지 라벨을 포함한다', () => {
  const html = renderSidebar(PAGES, 'index.html');
  for (const page of PAGES) {
    assert.ok(html.includes(page.label), `라벨 누락: ${page.label}`);
    assert.ok(html.includes(`href="${page.file}"`), `링크 누락: ${page.file}`);
  }
});

test('현재 페이지 링크에만 active 클래스가 붙는다', () => {
  const html = renderSidebar(PAGES, 'repository.html');
  assert.ok(html.includes('class="nav-link active" href="repository.html"'));
  assert.strictEqual((html.match(/nav-link active/g) || []).length, 1);
});

test('알 수 없는 경로면 active가 하나도 없다', () => {
  const html = renderSidebar(PAGES, 'nope.html');
  assert.strictEqual((html.match(/nav-link active/g) || []).length, 0);
});

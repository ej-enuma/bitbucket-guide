const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const { PAGES } = require('../assets/js/nav.js');

const root = path.join(__dirname, '..');

test('모든 PAGES 파일이 실제로 존재한다', () => {
  for (const page of PAGES) {
    assert.ok(fs.existsSync(path.join(root, page.file)), `없는 파일: ${page.file}`);
  }
});

test('모든 페이지가 공통 구조를 갖춘다', () => {
  for (const page of PAGES) {
    const html = fs.readFileSync(path.join(root, page.file), 'utf8');
    assert.match(html, /<html lang="ko">/, `${page.file}: lang 누락`);
    assert.ok(html.includes('id="sidebar"'), `${page.file}: #sidebar 누락`);
    assert.ok(html.includes('assets/css/style.css'), `${page.file}: css 누락`);
    assert.ok(html.includes('assets/js/nav.js'), `${page.file}: nav.js 누락`);
  }
});

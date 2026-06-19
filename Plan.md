# Bitbucket 입문 가이드 사이트 — Plan

작성일: 2026-06-18
참고 레퍼런스: https://claude-code-guide-nu.vercel.app/ (한국어 입문자용 가이드)

## 1. 목표

Git/협업 **입문자**를 위한 한국어 Bitbucket 사용법 매뉴얼 웹사이트.
실제 도구(Bitbucket)를 처음 접하는 사람이 따라 하며 협업을 시작할 수 있게 한다.

## 2. 결정 사항

| 항목 | 결정 |
|---|---|
| 대상 독자 | Git/협업 입문자 (한국어) |
| 내용 범위 | 기초 + 협업 (5개 주제) |
| 기술 스택 | 정적 HTML/CSS/JS, 빌드 과정 없음 (`file://`로도 열림) |
| 레이아웃 | 문서형 — 고정 사이드바 + 본문 |
| 비주얼 톤 | 친근한 입문자형 (둥근 모서리, 부드러운 보라 톤, 이모지, 💡 팁 박스) |
| 스크린샷 | 제공된 2장(대시보드·저장소) 활용 + 나머지는 placeholder |

## 3. 페이지 구성 (사이드바 항목 순서)

1. `index.html` — 홈/소개: "Bitbucket이란?", 이 가이드 사용법
2. `getting-started.html` — 시작하기: 계정 · 워크스페이스 · 프로젝트 개념 (제공 스크린샷 ①② 사용)
3. `repository.html` — 저장소 생성 & 클론
4. `git-basics.html` — 기본 Git 흐름 (add → commit → push → pull)
5. `branches.html` — 브랜치 · 머지 · 충돌(conflict) 해결
6. `pull-request.html` — Pull Request (코드 리뷰 흐름)

## 4. 파일 구조

```
bitbucket-guide/
├── Plan.md
├── index.html
├── getting-started.html
├── repository.html
├── git-basics.html
├── branches.html
├── pull-request.html
├── assets/
│   ├── css/
│   │   └── style.css        # 친근한 톤 디자인 시스템 (색·타이포·컴포넌트)
│   ├── js/
│   │   ├── nav.js           # 사이드바 렌더(단일 소스) + active 표시 + 모바일 토글
│   │   └── copy.js          # 코드 블록 복사 버튼
│   └── img/                 # 제공 스크린샷 2장
└── test/                    # 테스트
```

## 5. 핵심 컴포넌트

- **사이드바**: `nav.js`의 순수 함수 `renderSidebar(pages, currentPath)`가 페이지 목록(JS 배열 1곳)에서 사이드바 HTML을 생성한다. 각 HTML에 사이드바를 복붙하지 않으며 항목 추가/수정은 한 곳에서. `file://`에서도 동작(fetch 미사용).
- **코드 블록**: `$ git ...` 예시마다 "복사" 버튼.
- **보조 박스**: 💡 팁 / ⚠️ 주의 박스 — 입문자용 부가 설명 컴포넌트.
- **반응형**: 모바일에서 사이드바 햄버거 토글.

## 6. 테스트 전략 (TDD)

정적 사이트지만 검증 가능한 로직을 Red → Green 순서로 테스트한다.
도구: Node `node:test` + `jsdom`.

- `renderSidebar`
  - 6개 페이지 항목을 모두 포함하는가
  - 현재 페이지 항목에 `active` 표시가 붙는가
- **링크 무결성**: 사이드바가 가리키는 모든 페이지 파일이 실제 존재하는가
- **구조 검증**: 각 페이지에 사이드바 마운트 지점과 필수 스크립트가 포함됐는가

각 페이지는 브라우저 프리뷰로 시각 검증도 병행한다.

## 7. 작업 순서(개요)

1. 프로젝트 뼈대 + 디자인 시스템(CSS) + `nav.js` 골격
2. `renderSidebar` 테스트 작성 → 구현 (TDD)
3. 6개 페이지를 순서대로 작성, 페이지마다 시각 검증
4. 복사 버튼·반응형 토글 추가
5. 링크 무결성·구조 테스트 통과 확인
6. 제공 스크린샷 삽입, 최종 점검

상세 구현 계획은 이후 별도 작성한다.

# Reactjs Template

리액트 프로젝트를 쉽게 시작할 수 있도록 기본적인 패키지 구성과 설정을 제공합니다.

## 개발환경

- nodejs v19
- npm v9
- vite v3
- typescript v4

## 의존성 라이브러리

- eslint
- jest
- msw (목서버)
- reactjs
- react router dom
- redux toolkit
- nivo (차트)
- store (로컬 저장소 관리)
- nanoid (id 생성)
- axios
- mui5

## 폴더구조

```
├─ .github - Github 설정
├─ .vscode - VS Code 설정
├─ deploy - AWS 배포 설정
├─ public - 빌드시 그대로 복사되는 정적 파일들 (style, image, fonts, svg...)
├─ src
| ├─ __tests__ - testing
| ├─ @types - 외부 라이브러리 타입 선언
| ├─ assets - 빌드시 참조되는 정적 파일들
| ├─ components - 컴포넌트 (ui 컴포넌트)
| ├─ constants - 상수 모음
| ├─ containers - 페이지 컨테이너들 (컨테이너 컴포넌트)
| ├─ endpoints - 서버 통신 구현 파일 (axios functions)
| ├─ layouts - 레이아웃 (header, footer, side 컴포넌트)
| ├─ mocks - 목서버 (msw)
| | └─ handlers - stubs
| ├─ settings - 전역 설정
| ├─ stores - 상태 관리 구현 파일 (Redux Toolkit)
| | └─ apis - RTK Query
| | └─ slices - Redux Slice
| ├─ styles - css (mui theme)
| └─ utils - 유용한 함수들 모음 (common utils functions)
```

- 폴더명는 소문자로 작성한다.
- 파일명은 `파스칼 케이스` 혹은 `카멜 케이스` 로 작성한다.

## 시작하기

### Node & NPM 설치

```
$ sudo brew install node

$ sudo npm install -g npm
```

### 애플리케이션 설치

```
$ npm install
```

### 애플리케이션 실행

```
// 개발 (msw 목서버 사용)
$ npm run dev
// 개발 (스테이징 서버 사용)
$ npm run stage
// 배포용 빌드
$ npm run build
// jest run
$ npm run test
```

### 환경변수

아래와 같은 순서로 파일을 읽는 다. 파일이 없으면 무시된다.

- .env
- .env.local

`.env.local` 파일은 개인 로컬에서만 사용할 환경변수를 선언한다.

운영 환경의 변수를 읽기 위해 아래와 같이 실행한다.

- .env.stage - 스테이징 서버 사용을 위한 설정
- .env.prod - 운영 배포용 설정

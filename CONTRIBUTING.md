

## 커밋 메시지 가이드라인
본 프로젝트는 다음과 같은 커밋 메시지 규칙을 갖습니다.

### 1. 명확한 커밋 메시지 작성
커밋 메시지는 변경 내용을 간결하고 명확하게 기술합니다.

### 2. 커밋 메시지 구조
커밋 메시지는 타입(Type), 제목(Subject), 그리고 선택 사항인 본문(Body)과 푸터(Footer) 식의 구조를 갖습니다.

### 3. 타입(Type)
타입은 커밋의 목적을 간단하게 나타냅니다. 본 프로젝트는 아래의 타입들만을 사용하며, 모두 소문자를 사용합니다.

- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 변경
- style: 코드의 스타일 변경 (로직 변경 제외)
- refac: 코드 리팩토링
- test: 테스트 추가 또는 수정
- chore: 기타 작업 (라이브러리 업데이트 등)

### 4. 제목(Subject)
- 제목은 50자를 넘지 않도록 작성합니다.
- 마침표는 사용하지 않습니다.

### 5. 본문(Body) (선택적)
- 제목으로 충분한 설명이 불가할 때 사용합니다.
- 어떻게 변경했는지보다, 왜 변경했는지에 대해 설명합니다.

### 6. 푸터(Footer) (선택적)
이슈 트래커 ID나 참조된 이슈에 대한 정보를 작성합니다.

### 예시 커밋 메시지
```text
feat: 사용자 프로필 페이지 추가

사용자의 이름, 이메일, 프로필 사진 등의 정보를 나타내는 페이지를 추가하였음.

Closes #123
```

## 이슈 가이드라인
본 프로젝트는 다음과 같은 이슈 규칙을 갖습니다.

### 1. 책임과 역할
이슈를 관리하는 자는 보고된 이슈를 검토하고, 분류하며, 해결을 위한 조치를 취하는 책임이 있습니다.

### 2. 우선 순위 및 분류
- 우선 순위는 이슈의 심각성, 영향 범위, 해결의 시급성을 기반으로 결정됩니다.
- 이슈엔 Label를 적용하여 분류합니다. Label은 아래와 같습니다.

| Label        | Description                               |
| ------------ | ----------------------------------------- |
| `bug`        | Something isn't working                   |
| `documentation` | Improvements or additions to documentation |
| `duplicate`  | This issue or pull request already exists |
| `enhancement` | New feature or request                    |
| `good first issue` | Good for newcomers                      |
| `help wanted` | Extra attention is needed                 |
| `invalid`    | This doesn't seem right                   |
| `question`   | Further information is requested          |
| `wontfix`    | This will not be worked on                |


### 3. 보고 절차 및 방법
- 이슈는 기본적으로 경어체를 사용하는 것을 원칙으로 합니다.
- 보고 시, 이슈의 상세한 설명, 발생 시간, 영향을 받는 영역, 그리고 기타 관련 정보를 제공해야 합니다.

### 4. 처리 및 해결 프로세스
모든 이슈는 보고된 순서와 우선 순위에 따라 처리됩니다.


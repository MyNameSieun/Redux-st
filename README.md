## redux-st1: Redux를 활용한 계산기 만들기

1. input 안에 숫자를 입력 후, [더할게요] 선택 시 결과에 해당 숫자만큼 + 처리
2. input 안에 숫자를 입력 후, [뺄게요] 선택 시 결과에 해당 숫자만큼 - 처리
3. 처리 후에는 input 안의 숫자가 0으로 초기화
4. redux 환경으로 작성

<br>

## redux-st2: Redux를 활용한 TodoList 만들기

1. Home.jsx 완성
   - Header, Footer, Main 영역 존재
   - Main 영역 : Input 영역, TodoList 영역 존재
     - Input 영역 : input 태그 2개, 제출버튼 1개
     - TodoList 영역 : todos 중 isDone 항목이 false인 개수만큼 Todo 박스 생성. 각 Todo 박스는 제목 텍스트, 내용 텍스트, [완료]버튼, [삭제], [상세보기] 버튼이 표시됨.
     - DoneList 영역 : todos 중 isDone 항목이 true인 개수만큼 Todo 박스 생성. 각 Todo 박스는 제목 텍스트, 내용 텍스트, [취소]버튼, [삭제], [상세보기] 버튼이 표시됨.
     - TodoList 영역과 DoneList 영역은 하나의 컴포넌트를 재활용 하되, **`isActive`** props를 만들어 이용하여 작성
     - [완료] 버튼을 누르면 ‘DoneList’로, [취소] 버튼을 누르면 ‘TodoList’로 이동시킴
     - [상세보기] 버튼을 누르면 todo item 하나의 상세정보가 보여지는 화면(Detail.jsx)으로 이동
2. 상세화면
   - [뒤로가기] 버튼, 제목, 내용, 완료여부, [삭제]버튼 존재
   - [삭제] 버튼 선택 시, 해당 todo item 삭제 후 메인 페이지로 이동

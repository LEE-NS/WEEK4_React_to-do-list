# React : to-do list 작성하기

React로 to-do list를 작성해본다.

### 20240519 Update

- working state 삭제
- done state 삭제
- working을 tasks에서 isDone이 false인 것만 반환받은 배열로 선언
- done을 tasks에서 isDone이 true인 것만 반환받은 배열로 선언
- sectionName에 따라 working 또는 done 배열을 렌더하도록 수정
- removeTask, updateTask를 TodoItem 컴포넌트로 이동
- updateTask는 task의 id를 인자로 받도록 수정
- updateTask는 tasks에서 클릭한 task의 id값이 일치하는 요소만 isDone 값을 반전시키고, 반전시킨 요소를 포함하는 새로운 배열 updatedTasks를 반환받아 tasks에 set하도록 수정

### 20240516 Update

* 모든 컴포넌트들의 형식과 기능 분화
  * TodoForm.jsx, TodoSection.jsx, TodoItem 생성
    * TodoForm.jsx :
      - 입력 양식 컴포넌트.
      - 양식에서의 텍스트 입력, 양식으로 만들어진 task 카드 추가 작업이 가능하다.
    * TodoSection.jsx :
      - task 카드가 들어오는 컴포넌트.
      - task의 삭제, 완료 상태 변경의 작업이 가능하다.
      - TodoItem의 working, done의 섹션으로의 분기가 가능하다.
    * TodoItem.jsx :
      - task 카드 양식 컴포넌트.
      - isDone의 값에 따라 내부 속성과 UI가 다른 task 카드를 생성한다.

* TodoForm.jsx에 유효성 검사 추가

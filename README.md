# React : to-do list 작성하기

React로 to-do list를 작성해본다.

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

import React, { useState } from 'react';

export default function AppMentor() {
  const [plan, setPlan] = useState({
    name: '오얏리',
    dream: '프론트엔드 개발자',
    studying: [
      {
        title: '네트워크',
        detail: "HTTP"
      },
      {
        title: '리액트',
        detail: "배열 상태 관리"
      },
    ],
  });

  const handelPlanChage = () => {
    const prevTitle = prompt("어떤 Title을 바꾸고 싶어?");
    const currentTitle = prompt("뭐라고 바꾸고 싶어?");
    const currentDetail = prompt("Detail은?");

    setPlan((plan)=>({
      ...plan, 
      studying: plan.studying.map((study) => 
        study.title === prevTitle 
        ? {title: currentTitle, detail: currentDetail}
        : study
      )
    }));
  }

  return (
    <div>
      <h1>{plan.name}의 꿈은 {plan.dream} 🔮</h1>
      <ul>
        {
          plan.studying.map((item) => (
            <li key={item.detail}>
              Title : {item.title} - Detail : {item.detail} 공부하기
            </li>
          ))
        }
      </ul>
      <button onClick={handelPlanChage}>
        Plan Change
      </button>
    </div>
  );
}


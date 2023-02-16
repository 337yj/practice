import React, {useEffect, useState} from 'react';

function Effect() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 첫 렌더링될 때는 무조건 한번 실행됨
  // count의 상태가 바뀔 때만 실행 되도록
  // useEffect(() => {
  //   console.log('렌더링 🐥')
  // },[count])

  // count의 상태가 바뀔 때만 렌더링 되도록
  // useEffect(() => {
  //   console.log('렌더링 🐥')
  // },[count])

  // 마운트될 때만 실행
  useEffect(() => {
    console.log('렌더링 🐥')
  },[])

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count : {count}</span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name : {name}</span>
    </div>
  )
}

export default Effect;
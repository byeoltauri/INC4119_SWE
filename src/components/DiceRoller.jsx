import React, { useState } from "react";

const DiceRoller = () => {
  const [numDice, setNumDice] = useState(1); // 주사위 개수
  const [dieType, setDieType] = useState("d6"); // 주사위 면체체 (기본값: d6)
  const [results, setResults] = useState([]); // 결과 
  const [total, setTotal] = useState(0); // 결과 합
  const [rolling, setRolling] = useState(false); // 굴림 상태
  const [animation, setAnimation] = useState(false); // 애니메이션 상태

  // 주사위 굴리기 함수
  const rollDice = () => {
    setRolling(true);
    setResults([]);
    setTotal(0);
    setAnimation(true);

    let rolledResults = [];
    let diceTotal = 0;

    // 주사위 굴리기
    for (let i = 0; i < numDice; i++) {
      const sides = parseInt(dieType.slice(1)); // 면체 숫자 추출
      const roll = Math.floor(Math.random() * sides) + 1;
      rolledResults.push(roll);
      diceTotal += roll;
    }

    // 결과 설정
    setResults(rolledResults);
    setTotal(diceTotal);

    // 애니메이션 종료 후 결과 표시
    setTimeout(() => {
      setRolling(false);
      setAnimation(false);
    }, 1000); // 애니메이션 시간 1초
  };

  return (
    <div className="dice-roller">
      <h2>주사위 굴리기</h2>

      {/* 주사위 개수 입력 */}
      <div>
        <label>주사위 개수: </label>
        <input
          type="number"
          value={numDice}
          onChange={(e) => setNumDice(parseInt(e.target.value))}
          min="1"
        />
      </div>

      {/* 주사위 종류 선택 */}
      <div>
        <label>주사위 종류: </label>
        <select value={dieType} onChange={(e) => setDieType(e.target.value)}>
          <option value="d4">d4</option>
          <option value="d6">d6</option>
          <option value="d8">d8</option>
          <option value="d10">d10</option>
          <option value="d12">d12</option>
          <option value="d20">d20</option>
          <option value="d100">d100</option>
        </select>
      </div>

      {/* 주사위 굴리기 버튼 */}
      <button onClick={rollDice} disabled={rolling}>
        {rolling ? "굴리는 중..." : "주사위 굴리기"}
      </button>

      {/* 애니메이션 */}
      {animation && <div className="dice-animation">🎲</div>}

      {/* 결과 표시 */}
      {results.length > 0 && (
        <div className="dice-results">
          <h3>결과: {results.join(", ")}</h3>
          <h3>합: {total}</h3>
        </div>
      )}
    </div>
  );
};

export default DiceRoller;

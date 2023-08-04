const 정답 = "APPLE";

let attempts = 0;
let index = 0;

function appStart() {

  const displaygameover = () => {
    const div = document.createElement("div");
    div.innerText = "게임이 종료됐습니다.";
    div.style = "display:flex; justify-contents:center;"
    document.body.appendChild(div);
  }; 

  const gameover = () => {
    window.removeEventListener("keydown", handlekeydown)};
    displaygameover();
  
  const nextLine = () => {
    if(attempts ===6 ) return gameover();
    attempts += 1;
    index = 0;
  };

  const handleEnterkey = () => {
    let 맞은_갯수 = 0;
    for (let i = 0; i < 5; i++) {
      const block = document.querySelector(
        `.board-column[data-index='${attempts}${i}']`
      );
      const 입력한_글자 = block.innerText;
      const 정답_글자 = 정답[i];
      if (입력한_글자 === 정답_글자)
      맞은_갯수 += 1;
      block.style.background = "#00DC64";
      else if (정답.includes(입력한_글자)) block.style.background = "#E7CD7E";
      else block.style.background = "#A4A5A2";
      block.style.color = "white";
    }

    if(맞은_갯수 === 5 ) gameover(); 
    else nextline();
  };

  const handlekeydown = (event) => {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(
      `.board-column[data-index='${attempts}${index}']`
    );

    if (index === 5) {
    if (event.key === "Enter") handleEnterkey();
    else return;
    } else if (65 <= keyCode && keyCode <= 90) {
    thisBlock.innerText = key;
    index += 1;
    }
  };

  window.addEventListener("keydown", handlekeydown);
};

appStart();

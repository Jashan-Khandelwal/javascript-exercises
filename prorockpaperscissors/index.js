// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Rock Paper Scissors</title>
//   <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap" rel="stylesheet">
//   <style>
//     body {
//       margin: 0;
//       padding: 0;
//       font-family: 'Rubik', sans-serif;
//       background: linear-gradient(135deg, #1f4037, #99f2c8);
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       min-height: 100vh;
//       color: #fff;
//     }

//     h1 {
//       margin-bottom: 0.5em;
//       font-size: 2.5rem;
//     }

//     .buttons {
//       display: flex;
//       gap: 1em;
//       margin-bottom: 2em;
//     }

//     button {
//       padding: 1em 2em;
//       font-size: 1.2rem;
//       border: none;
//       border-radius: 12px;
//       background: rgba(255, 255, 255, 0.15);
//       color: #fff;
//       cursor: pointer;
//       transition: all 0.3s ease;
//       backdrop-filter: blur(5px);
//     }

//     button:hover {
//       background: rgba(255, 255, 255, 0.3);
//       transform: scale(1.05);
//     }

//     #result {
//       background: rgba(0, 0, 0, 0.3);
//       padding: 1em 2em;
//       border-radius: 10px;
//       font-size: 1.2rem;
//       text-align: center;
//       max-width: 400px;
//     }

//     .score {
//       margin-top: 1em;
//       font-weight: 600;
//     }
//   </style>
// </head>
// <body>
//   <h1>Rock Paper Scissors</h1>
//   <div class="buttons">
//     <button id="rock">🪨 Rock</button>
//     <button id="paper">📄 Paper</button>
//     <button id="scissors">✂️ Scissors</button>
//   </div>
//   <div id="result">Make your move!</div>

//   <script>
//     let hScore = 0, cScore = 0;
//     const result = document.getElementById("result");

//     function playRound(humanChoice) {
//       const computerChoice = Math.floor(Math.random() * 3);
//       let message = "";

//       const icons = ["🪨 Rock", "📄 Paper", "✂️ Scissors"];

//       if (humanChoice === computerChoice) {
//         message = `🤝 It's a draw! You both chose ${icons[humanChoice]}.`;
//       } else if ((humanChoice === 0 && computerChoice === 2) ||
//                  (humanChoice === 1 && computerChoice === 0) ||
//                  (humanChoice === 2 && computerChoice === 1)) {
//         hScore++;
//         message = `✅ You win! ${icons[humanChoice]} beats ${icons[computerChoice]}.`;
//       } else {
//         cScore++;
//         message = `❌ You lose! ${icons[computerChoice]} beats ${icons[humanChoice]}.`;
//       }

//       result.innerHTML = `
//         <p>${message}</p>
//         <p class="score">Your Score: ${hScore} | Computer Score: ${cScore}</p>
//       `;

//       if (hScore === 5 || cScore === 5) {
//         setTimeout(() => {
//           alert(
//             hScore > cScore ?
//             `🎉 You win the game! Final Score:\nYou: ${hScore} Computer: ${cScore}` :
//             `😢 You lose the game. Final Score:\nYou: ${hScore} Computer: ${cScore}`
//           );
//           hScore = 0;
//           cScore = 0;
//           result.innerText = "Make your move!";
//         }, 300);
//       }
//     }

//     document.getElementById("rock").addEventListener("click", () => playRound(0));
//     document.getElementById("paper").addEventListener("click", () => playRound(1));
//     document.getElementById("scissors").addEventListener("click", () => playRound(2));
//   </script>
// </body>
// </html>
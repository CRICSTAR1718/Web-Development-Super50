let A = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
let B = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
let flag = true; // true → A, false → B
let gameOver = false;
const handleClickElement = (e) => {
    if (gameOver) return;
    const [x, y] = e.target.id.split(",").map(Number);
    // invalid click
    if (A[x][y] === 1 || B[x][y] === 1) {
        alert("Invalid Click");
        return;
    }
    // place move
    if (flag) {
        A[x][y] = 1;
        e.target.style.backgroundColor = "coral";
        e.target.innerText="X";
    } else {
        B[x][y] = 1;
        e.target.style.backgroundColor ="teal";
        e.target.innerText="O";
        e.target.style.color="white";
    }
    // check win
    if (isWin(flag ? A : B)) {
        const gif=document.getElementById("winArea");
        gif.style.visibility="visible";
        gameOver = true;
        return;
    }
    // check draw
    if (moves(A) + moves(B) === 9) {
        alert("DRAW");
        gameOver = true;
        return;
    }
    flag = !flag;
};

const moves = (grid) => {
    let count = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[i][j] === 1) count++;
        }
    }
    return count;
};

const isWin = (grid) => {
    // rows
    for (let i = 0; i < 3; i++) {
        if (grid[i][0] && grid[i][1] && grid[i][2]) return true;
    }
    // columns
    for (let j = 0; j < 3; j++) {
        if (grid[0][j] && grid[1][j] && grid[2][j]) return true;
    }
    // diagonals
    if (grid[0][0] && grid[1][1] && grid[2][2]) return true;
    if (grid[0][2] && grid[1][1] && grid[2][0]) return true;
    return false;
};






// let A=[
//     [0,0,0],
//     [0,0,0],
//     [0,0,0]
// ];
// let B=[
//     [0,0,0],
//     [0,0,0],
//     [0,0,0]
// ];
// let flag=true;
// const handleClickElement=(e)=>{
//     console.log(e);
//     if(flag)
//     {
//         e.target.style.backgroundColor="red";
//     }
//     else{
//         e.target.style.backgroundColor="blue";
//     }
//     // let [x, y]=e.target.id.split(",");
//     const move=e.target.id.split(",");
//     const x=move[0];
//     const y=move[1];
//     if(A[x][y]==1 || B[x][y]==1)
//     {
//         alert("Invalid Click");
//         return;
//     }
//     if(flag)
//     {
//         A[x][y]=1;
//     }
//     else{
//         B[x][y]=1;
//     }
//     console.log(e.target.id);
//     console.log("-----------------------------------------");
//     flag=!flag;
//     if(isWin(A))
//     {
//         alert("A WON");
//     }
//     if(isWin(B))
//     {
//         alert("B WON");
//     }
//     if(moves(A)+moves(B)==9)
//     {
//         alert("DRAW");
//     }
// };
// const moves=(grid)=>{
//     let count=0;
//     for(let i=0; i<3; i++)
//     {
//         for(j=0; j<3; j++)
//         {
//             if(grid[i][j]==1)
//             {
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// const isWin=(grid)=>{
    // for (let i = 0; i < 3; i++) {
    //     if (grid[i][0] && grid[i][1] && grid[i][2]) return true;
    // }
    // // columns
    // for (let j = 0; j < 3; j++) {
    //     if (grid[0][j] && grid[1][j] && grid[2][j]) return true;
    // }
    // // diagonals
    // if (grid[0][0] && grid[1][1] && grid[2][2]) return true;
    // if (grid[0][2] && grid[1][1] && grid[2][0]) return true;
    // return false;
// };
// const draw=(grid)=>{

// };
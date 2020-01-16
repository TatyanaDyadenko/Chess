let bord=document.createElement('div');
bord.classList.add('main_bord');
function wrihteLineBord(div1,div2){
    let div;
    let str;
    let arr=['A','B','C','D','F','G','H'];
    for(let i=0; i<=7; i++) {
        let str1 = arr[i];
        for (let j = 0; i <= 7; j++) {
            div = document.createElement('div');
            str = str1 + j + 1;
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    div.classList.add('black_div');
                    div.setAttribute('id', str);
                } else {
                    div.classList.add('yellow_div');
                    div.setAttribute('id', str);
                }
            } else {
                if (j%2 === 0) {
                    div.classList.add('yellow_div');
                    div.setAttribute('id', str);
                }
            } else{
                div.classList.add('black_div');
                div.setAttribute('id', str);
            }
        }
        bord.appendChild(div);
    }
    }

wrihteLineBord(div);
/*let queen_black=document.createElement('img');
queen_black.classList.add('queen_black');
queen_black.setAttribute('src','queen.jpg');
bord.childNodes
document.getElementById('A2').appendChild()*/

let script=document.getElementsByTagName('script');
document.body.insertBefore(bord,script);

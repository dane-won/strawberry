
// (function() {
//     const stage = document.querySelector('.berrys');
//     let berryClickCount = 0;
//     function clickHandler(e){
//         if(e.target.classList.contains('berry')){
//             stage.removeChild(e.target);
//             berryClickCount++;
//             //console.log(berryClickCount);
//             document.querySelector(".berryCount").innerHTML=berryClickCount;
//         }
//     }
//     stage.addEventListener('click',clickHandler)
// })();

(function(){
    const outputElem = document.querySelector('.output');
    const jihyoElem = document.querySelector('.char');
    
    const sect2title = document.querySelector('.sect2title');
    const sanaElem = document.querySelector('.sana');

    let num = 0;

    function showValue() {
        let posY = jihyoElem.getBoundingClientRect().bottom;
        outputElem.innerHTML = posY;

        // 여기 스크롤 기준점들은 어떻게 동적으로 만들지? // 

        if(posY>1500) {
            jihyoElem.classList.add('zoom');
        } else {
            jihyoElem.classList.remove('zoom');
        }

        if(posY>-900) {
            sect2title.style = "visibility: hidden;";
        } else if(posY>-1100) {
            sect2title.style = "position:fixed; top:20%;";
            sanaElem.style.background = "url('img/sana-01.png') center bottom no-repeat fixed ";
        }else if(posY>-1100) {
            sect2title.style = "position:fixed; top:20%;";
            sanaElem.style.background = "url('img/sana-02.png') center bottom no-repeat fixed ";
        }else if(posY>-1200) {
            sect2title.style = "position:fixed; top:20%;";
            sanaElem.style.background = "url('img/sana-03.png') center bottom no-repeat fixed ";
        }else if(posY>-1300) {
            sect2title.style = "position:fixed; top:20%;";
            sanaElem.style.background = "url('img/sana-04.png') center bottom no-repeat fixed ";
        }else if(posY>-1400) {
            sect2title.style = "position:fixed; top:20%;";
            sanaElem.style.background = "url('img/sana-05.png') center bottom no-repeat fixed ";
        }else if(posY>-1500) {
            sect2title.style = "position:fixed; top:20%;";
            sanaElem.style.background = "url('img/sana-06.png') center bottom no-repeat fixed ";
        }else if(posY>-1600) {
            sect2title.style = "position:fixed; top:20%;";
            sanaElem.style.background = "url('img/sana-07.png') center bottom no-repeat fixed ";
        }else if(posY>-1700) {
            sect2title.style = "position:fixed; top:20%;";
            sanaElem.style.background = "url('img/sana-08.png') center bottom no-repeat fixed ";
        }else if(posY>-1800) {
            sect2title.style = "position:fixed; top:20%;";
            sanaElem.style.background = "url('img/sana-09.png') center bottom no-repeat fixed ";
        }else if(posY>-1900) {
            sect2title.style = "position:fixed; top:20%;";
            sanaElem.style.background = "url('img/sana-10.png') center bottom no-repeat fixed ";
        }else if(posY>-2000) {
            sect2title.style = "position:fixed; top:20%;";
            sanaElem.style.background = "url('img/sana-11.png') center bottom no-repeat fixed ";
        }else if(posY>-2100) {
            sect2title.style = "position:fixed; top:20%;";
            sanaElem.style.background = "url('img/sana-12.png') center bottom no-repeat fixed ";
        }else{
            sect2title.style = "";
        }
        
        sanaElem.style.backgroundSize = "70% 70%";
        
        
    }

    window.addEventListener('scroll',function(){
        showValue();
    });

    showValue();
})();
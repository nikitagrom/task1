//Ваш код будет здесь
window.addEventListener('load',function(){
   var button = document.querySelector('.startNewGame');
    button.addEventListener('click',function(){
        startNewGame();
    })
});

function startNewGame() {

    var array = document.querySelectorAll('.cell');

    for (var i = 0; i < array.length; i++) {
        array[i].classList.remove('x');
        array[i].classList.remove('o')
    }


    function eListener() {

        if (2 % 2 == 0) {

            if (!this.classList.contains('x') && !this.classList.contains('o')) {
                this.classList.add('x')

            }

        }
        else {
            if (!this.classList.contains('o') && !this.classList.contains('x')) {
                this.classList.add('o')

            }
        }
    }

    function addEventListeners(arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addEventListener('click', eListener)
        }
    }

    function removeEventListeners(arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].removeEventListener('click', eListener)
        }
    }

    addEventListeners(array)

  var body = document.querySelector('body');
    body.addEventListener('click',function e(event){
        if(getWinner()){
            alert("winner is "+getWinner())
            removeEventListeners(array)
            this.removeEventListener('click',e)

        }
        event.stopPropagation();
    })

}




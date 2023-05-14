setInterval(function(){

    if(document.getElementsByClassName('slider-img')[0].classList.contains('active')){

        document.getElementsByClassName('slider-img')[1].classList.add('active');
        document.getElementsByClassName('slider-img')[0].classList.remove('active');

    }else if(document.getElementsByClassName('slider-img')[1].classList.contains('active')){

        document.getElementsByClassName('slider-img')[0].classList.add('active');
        document.getElementsByClassName('slider-img')[1].classList.remove('active');
    }
},5000);
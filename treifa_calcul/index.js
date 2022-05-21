

$(function() {
    $('body').hide();
    window.addEventListener('message', function(event) {
        var data = event.data;
        if (data.action == 'showui') {
        $('body').fadeIn();
    
        } else {
            $('body').hide();
        }
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $.post('https://treifa_calcul/close');
            $("body").fadeOut();
        }
    })
    
})


const button = document.querySelectorAll('.btn');
const result = document.getElementById('result');

button.forEach((btn) => {

    btn.addEventListener('click', (e) => {
    
        result.textContent += e.target.id;
        
    })

});

equal.addEventListener('click', (e) => {
    result.textContent = eval(result.textContent);
});

Clear.addEventListener('click', (e) => {
    result.textContent = '';
});





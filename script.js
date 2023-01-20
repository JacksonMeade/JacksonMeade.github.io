// When the a key is pressed, hide '.sad'
// When the a key is raised, show '.sad'

document.querySelectorAll('.skill').forEach(s => {
    console.log(s.querySelector('small').textContent);
    document.querySelector(`#${s.querySelector('small').textContent}`).style.opacity = '0';
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        document.querySelector('.sad').style.opacity = '0';
    }
    }
);
document.addEventListener('keyup', function(event) {
    if (event.key === 'a') {
        document.querySelector('.sad').style.opacity = '1';
    }
    }
);
document.querySelectorAll('.skill, .request-searchbar').forEach(element => {
    element.addEventListener('mouseover', function(event) {
        document.querySelector('.sad').style.opacity = '0';
        if (element.classList.contains('skill')) {
            //document.querySelector('.background').style.opacity = '1';
            document.querySelector(`#${element.querySelector('small').textContent}`).style.opacity = '1';
        }
        });    
})
document.querySelectorAll('.skill, .request-searchbar').forEach(element => {
    element.addEventListener('mouseout', function(event) {
        document.querySelector('.sad').style.opacity = '1';
        if (element.classList.contains('skill')) {
            //document.querySelector('.background').style.opacity = '0';
            document.querySelector(`#${element.querySelector('small').textContent}`).style.opacity = '0';
        }
        });    
});


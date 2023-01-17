// When the a key is pressed, hide '.sad'
// When the a key is raised, show '.sad'
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
        });    
})
document.querySelectorAll('.skill, .request-searchbar').forEach(element => {
    element.addEventListener('mouseout', function(event) {
        document.querySelector('.sad').style.opacity = '1';
        });    
});
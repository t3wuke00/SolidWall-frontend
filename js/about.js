// JavaScript to handle click events on option links
document.querySelectorAll('.option-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var targetId = this.getAttribute('data-target');
        var descriptionContent = document.getElementById(targetId + '-content').innerHTML;
        document.getElementById('description-container').innerHTML = descriptionContent;
    });
});



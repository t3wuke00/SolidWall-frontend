// Function to handle form submission
document.getElementById('story-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    var content = document.getElementById('story-content').value;
    var image = document.getElementById('story-image').files[0];

    // Create FormData object to send form data to the server
    var formData = new FormData();
    formData.append('content', content);
    formData.append('image', image);

    // Send form data to the server (you'll need to implement this)
    // Replace 'postStory' with the actual endpoint on your server
    fetch('/postStory', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Clear form fields after successful submission
        document.getElementById('story-content').value = '';
        document.getElementById('story-image').value = '';
        // Optionally, display the new story on the page
        displayStory(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Function to display existing stories
function displayStory(story) {
    var storyContainer = document.getElementById('story-container');
    var storyElement = document.createElement('div');
    storyElement.classList.add('story');

    // Add content
    var contentElement = document.createElement('p');
    contentElement.classList.add('story-content');
    contentElement.textContent = story.content;
    storyElement.appendChild(contentElement);

    // Add image if available
    if (story.image) {
        var imageElement = document.createElement('img');
        imageElement.classList.add('story-image');
        imageElement.src = story.image;
        storyElement.appendChild(imageElement);
    }

    // Add delete button (you'll need to implement this)
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        deleteStory(story.id); // Call deleteStory function with story ID
    });
    storyElement.appendChild(deleteButton);

    // Add story element to the container
    storyContainer.appendChild(storyElement);
}

// Function to delete a story
function deleteStory(storyId) {
    // Send request to delete story with storyId (you'll need to implement this)
    // Replace 'deleteStory' with the actual endpoint on your server
    fetch('/deleteStory/' + storyId, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Remove the deleted story from the DOM
        var storyElement = document.getElementById('story-' + storyId);
        if (storyElement) {
            storyElement.remove();
        }
    });
}

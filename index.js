const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]



// post1
const nameElement = document.getElementsByClassName("user-name");
const userLocationElement = document.getElementsByClassName("user-location");
const userLikesElement = document.getElementsByClassName("user-likes");
const usernameElement = document.getElementsByClassName("username-bold");
const userPostElement = document.getElementsByClassName("users-post");
const userAvatarElement = document.getElementsByClassName("user-avatar");
const postImageElement = document.getElementsByClassName("post-image");


nameElement[0].textContent = posts[0].name;
userLocationElement[0].textContent = posts[0].location;
userLikesElement[0].textContent = posts[0].likes;
usernameElement[0].textContent = posts[0].username;
userPostElement[0].textContent = posts[0].comment;
userAvatarElement[0].src = posts[0].avatar;
postImageElement[0].src = posts[0].post;


// post2
const nameElement2 = document.getElementsByClassName("user-name-two");
const userLocationElement2 = document.getElementsByClassName("user-location-two");
const userLikesElement2 = document.getElementsByClassName("user-likes-two");
const usernameElement2 = document.getElementsByClassName("username-bold-two");
const userPostElement2 = document.getElementsByClassName("users-post-two");
const userAvatarElement2 = document.getElementsByClassName("user-avatar-two");
const postImageElement2 = document.getElementsByClassName("post-image-two");


nameElement2[0].textContent = posts[1].name;
userLocationElement2[0].textContent = posts[1].location;
userLikesElement2[0].textContent = posts[1].likes;
usernameElement2[0].textContent = posts[1].username;
userPostElement2[0].textContent = posts[1].comment;
userAvatarElement2[0].src = posts[1].avatar;
postImageElement2[0].src = posts[1].post;


// post3
const nameElement3 = document.getElementsByClassName("user-name-three");
const userLocationElement3 = document.getElementsByClassName("user-location-three");
const userLikesElement3 = document.getElementsByClassName("user-likes-three");
const usernameElement3 = document.getElementsByClassName("username-bold-three");
const userPostElement3 = document.getElementsByClassName("users-post-three");
const userAvatarElement3 = document.getElementsByClassName("user-avatar-three");
const postImageElement3 = document.getElementsByClassName("post-image-three");


nameElement3[0].textContent = posts[2].name;
userLocationElement3[0].textContent = posts[2].location;
userLikesElement3[0].textContent = posts[2].likes;
usernameElement3[0].textContent = posts[2].username;
userPostElement3[0].textContent = posts[2].comment;
userAvatarElement3[0].src = posts[2].avatar;
postImageElement3[0].src = posts[2].post;

  // Get references to the elements for like counter
  const likeCounter = document.getElementById('like-counter');
  const likeIcon = document.getElementById('like-icon');

  // Add a click event listener to the 1st post like icon
  likeIcon.addEventListener('click', function() {
    posts[0].likes ++; // Increment the like count
    likeCounter.textContent = posts[0].likes; // Update the displayed like count
  });
  
    // Get references to the 2nd elements
  const likeCounter1 = document.getElementById('like-counter-two');
  const likeIcon1 = document.getElementById('like-icon-two');

  // Add a click event listener to the 1st post like icon
  likeIcon1.addEventListener('click', function() {
    posts[1].likes ++; // Increment the like count
    likeCounter1.textContent = posts[1].likes; // Update the displayed like count
  });
  
    // Get references to the 3rd elements
  const likeCounter2 = document.getElementById('like-counter-three');
  const likeIcon2 = document.getElementById('like-icon-three');

  // Add a click event listener to the 1st post like icon
  likeIcon2.addEventListener('click', function() {
    posts[2].likes ++; // Increment the like count
    likeCounter2.textContent = posts[2].likes; // Update the displayed like count
  });
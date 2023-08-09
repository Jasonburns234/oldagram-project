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


// DRY 
function updatePostContent(postIndex, nameClass, locationClass, likesClass, usernameClass, commentClass, avatarClass, postImageClass) {
  const post = posts[postIndex];
  const nameElement = document.getElementsByClassName(nameClass);
  const userLocationElement = document.getElementsByClassName(locationClass);
  const userLikesElement = document.getElementsByClassName(likesClass);
  const usernameElement = document.getElementsByClassName(usernameClass);
  const userPostElement = document.getElementsByClassName(commentClass);
  const userAvatarElement = document.getElementsByClassName(avatarClass);
  const postImageElement = document.getElementsByClassName(postImageClass);


  nameElement[0].textContent = post.name;
  userLocationElement[0].textContent = post.location;
  userLikesElement[0].textContent = post.likes;
  usernameElement[0].textContent = post.username;
  userPostElement[0].textContent = post.comment;
  userAvatarElement[0].src = post.avatar;
  postImageElement[0].src = post.post;
}

updatePostContent(0, "user-name", "user-location", "user-likes", "username-bold", "users-post", "user-avatar", "post-image");

updatePostContent(1, "user-name-two", "user-location-two", "user-likes-two", "username-bold-two", "users-post-two", "user-avatar-two", "post-image-two");

updatePostContent(2, "user-name-three", "user-location-three", "user-likes-three", "username-bold-three", "users-post-three", "user-avatar-three", "post-image-three");


function setupLikeEvent(postIndex, likeCounterId, likeIconId) {
  const likeCounter = document.getElementById(likeCounterId);
  const likeIcon = document.getElementById(likeIconId);


  likeIcon.addEventListener('click', function() {
    posts[postIndex].likes++;
    likeCounter.textContent = posts[postIndex].likes;
  });
}

setupLikeEvent(0, 'like-counter', 'like-icon');
setupLikeEvent(1, 'like-counter-two', 'like-icon-two');
setupLikeEvent(2, 'like-counter-three', 'like-icon-three');

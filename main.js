function toggleMenu() {
    const nav = document.getElementById("navContainer");
    nav.classList.toggle("active");
  }
  
  const images = [
    "images/Chhath_puja_photo.jpg",
    "images/gol-ghar-patna-bihar-1-attr-hero.jpeg",
    "images/images (1).png"
  ];

  let index = 0;

  function showImage() {
    document.getElementById("carouselImage").src = images[index];
  }

  function showNext() {
    index = (index + 1) % images.length;
    showImage();
  }

  setInterval(showNext, 2000);

  
  function addComment() {
    const commentInput = document.getElementById("commentInput");
    const commentText = commentInput.value.trim();
  
    if (commentText === "") {
      alert("Please write a comment before posting!");
      return;
    }
  
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
  
    const textDiv = document.createElement("div");
    textDiv.textContent = commentText;
  
    const timeDiv = document.createElement("div");
    timeDiv.classList.add("comment-time");
    const now = new Date();
    timeDiv.textContent = "Posted at: " + now.toLocaleString(); 
  
    commentDiv.appendChild(textDiv);
    commentDiv.appendChild(timeDiv);
  
    const commentsContainer = document.getElementById("commentsContainer");
    commentsContainer.prepend(commentDiv); 
  
    commentInput.value = "";
  }
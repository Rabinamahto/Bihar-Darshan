function toggleMenu() {
    const nav = document.getElementById("navContainer");
    nav.classList.toggle("active");
  }
  
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
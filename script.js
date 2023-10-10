document.addEventListener("DOMContentLoaded", function() {
    const commentList = document.getElementById("comment-list");
    const commentText = document.getElementById("comment-text");
    const submitButton = document.getElementById("submit-comment");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    const topics = [
        "Topic 1: Discuss your favorite books.",
        "Topic 2: Share your thoughts on recent movies.",
        "Topic 3: Talk about your favorite hobbies.",
        "Topic 4: Discuss the latest technology trends.",
    ];

    // Populate the initial topics
    topics.forEach(topic => addComment(topic));

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // You should implement server-side logic for authentication here
        // For this simplified example, just display a message
        alert(`Login with email: ${email}, password: ${password}`);
    });

    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const newEmail = document.getElementById("new-email").value;
        const newPassword = document.getElementById("new-password").value;

        // You should implement server-side logic for user registration here
        // For this simplified example, just display a message
        alert(`Sign up with email: ${newEmail}, password: ${newPassword}`);
    });

    submitButton.addEventListener("click", function() {
        const text = commentText.value;
        if (text.trim() === "") {
            return;
        }
        addComment(text);
        commentText.value = "";
    });

    function addComment(text) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="vote">
                <span class="upvote">▲</span>
                <span class="downvote">▼</span>
            </span>
            ${text}
        `;
        commentList.appendChild(li);

        const upvoteButton = li.querySelector(".upvote");
        const downvoteButton = li.querySelector(".downvote");

        upvoteButton.addEventListener("click", function() {
            // Add your upvoting logic here
        });

        downvoteButton.addEventListener("click", function() {
            // Add your downvoting logic here
        });
    }
});

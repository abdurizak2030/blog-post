document.addEventListener("DOMContentLoaded", function () {

    const addBtn = document.getElementById("addBtn");
    const titleInput = document.getElementById("title");
    const imageInput = document.getElementById("image");
    const contentInput = document.getElementById("content");
    const postsContainer = document.getElementById("posts");

    addBtn.addEventListener("click", function () {

        const title = titleInput.value.trim();
        const image = imageInput.value.trim();
        const content = contentInput.value.trim();

        if (!title || !content) {
            alert("Title and Content are required!");
            return;
        }

        const postDiv = document.createElement("div");
        postDiv.classList.add("post");

        const postTitle = document.createElement("h3");
        postTitle.textContent = title;

        const postContent = document.createElement("p");
        postContent.textContent = content;

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postContent);

        if (image) {
            const img = document.createElement("img");
            img.src = image;
            img.alt = "Post Image";
            postDiv.appendChild(img);
        }

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", function () {
            postDiv.remove();
        });

        postDiv.appendChild(deleteBtn);

        postsContainer.prepend(postDiv);

        // Clear inputs
        titleInput.value = "";
        imageInput.value = "";
        contentInput.value = "";
    });

});
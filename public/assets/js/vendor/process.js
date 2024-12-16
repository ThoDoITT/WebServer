       // Hàm bật/tắt hiển thị phần bình luận
       function toggleComments(commentId) {
        const commentSection = document.getElementById(commentId);
    
        // Kiểm tra trạng thái hiển thị
        if (commentSection.style.display === "none" || commentSection.style.display === "") {
            commentSection.style.display = "block"; // Hiển thị
        } else {
            commentSection.style.display = "none";  // Ẩn
        }
    }
    
    // Hàm thêm bình luận
    function submitComment(commentSectionId, inputId) {
        const input = document.getElementById(inputId);
        const commentText = input.value.trim();
    
        if (commentText === "") {
            alert("Vui lòng nhập nội dung bình luận!");
            return;
        }
    
        // Tạo phần tử bình luận mới
        const commentList = document.querySelector(`#${commentSectionId} .comments-list`);
        const newComment = document.createElement("div");
        newComment.classList.add("comment-item");
    
        newComment.innerHTML = `
            <img src="user-avatar.png" alt="Avatar" class="user-avatar">
            <div class="comment-content">
                <span class="comment-author">Người dùng</span>
                <p class="comment-text">${commentText}</p>
                <span class="comment-time">Vừa xong</span>
            </div>
        `;
    
        // Thêm bình luận vào danh sách
        commentList.appendChild(newComment);
    
        // Xóa nội dung trong ô nhập
        input.value = "";
    }

    // JavaScript for API Integration
    document.getElementById("share-btn").addEventListener("click", async function () {
        const content = document.getElementById("post-content").value.trim(); // Lấy nội dung bài post
        if (!content) {
            alert("Please write something before sharing.");
            return;
        }

        // URL and Token (replace these with actual values)
        const apiUrl = "{{http://localhost:58023}}/api/auth/post/create"; // Thay bằng URL thực tế
        const token = "{{token}}"; // Thay bằng token thực tế của bạn

        // Data to be sent
        const postData = {
            Content: content,
            Id_Media: "", // Thêm nếu cần
            Status: 1 // Status mặc định
        };

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(postData)
            });

            if (response.ok) {
                const result = await response.json();
                alert("Post shared successfully!");
                console.log("API Response:", result);
                // Xử lý giao diện sau khi post thành công (VD: Làm mới danh sách bài viết)
            } else {
                const error = await response.json();
                alert("Failed to share post. " + (error.message || "Try again later."));
                console.error("Error Response:", error);
            }
        } catch (err) {
            alert("An error occurred. Please try again.");
            console.error("API Error:", err);
        }
    });
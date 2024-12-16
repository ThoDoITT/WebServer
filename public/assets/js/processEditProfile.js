    // begin edit profile js
    document.addEventListener("DOMContentLoaded", function () {
        const editProfileBtn = document.querySelector(".edit-profile-btn");
        const popup = document.getElementById("profile-popup");
        const overlay = document.getElementById("overlay");
        const closePopup = document.getElementById("close-popup");
        const editIcons = document.querySelectorAll(".edit-icon");
        const saveProfileBtn = document.getElementById("save-profile");
    
        // Mở popup
        editProfileBtn.addEventListener("click", () => {
            overlay.classList.add("active");
            popup.classList.add("active");
        });
    
        // Đóng popup khi nhấn vào overlay hoặc nút đóng
        const closePopupFunction = () => {
            overlay.classList.remove("active");
            popup.classList.remove("active");
        };
    
        closePopup.addEventListener("click", closePopupFunction);
        overlay.addEventListener("click", closePopupFunction);
    
        // Xử lý chỉnh sửa thông tin từng trường
        editIcons.forEach(icon => {
            icon.addEventListener("click", (event) => {
                const fieldId = event.target.dataset.field;
                const field = document.getElementById(fieldId);
    
                if (field.disabled) {
                    field.disabled = false;  // Cho phép chỉnh sửa trường
                    field.focus();
                    icon.textContent = "Save💾";  // Thay đổi biểu tượng thành "Save"
    
                    // Lưu thay đổi khi nhấn "Save"
                    icon.addEventListener("click", () => {
                        field.disabled = true;  // Không cho phép chỉnh sửa nữa
                        icon.textContent = "Edit✏️";  // Quay lại biểu tượng "Edit"
                        saveChanges(fieldId, field.value);  // Lưu thay đổi
                    }, { once: true });
                }
            });
        });
    
        // Lưu tất cả thay đổi (ví dụ: in ra console)
        saveProfileBtn.addEventListener("click", () => {
            const formData = new FormData(document.getElementById("edit-profile-form"));
            console.log("Profile Data Saved:");
            formData.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            });
            closePopupFunction();  // Đóng popup sau khi lưu
        });
    
        // Hàm để xử lý lưu thay đổi của từng trường
        function saveChanges(fieldId, value) {
            console.log(`Updated ${fieldId}: ${value}`);  // In ra thông tin thay đổi
            // Thực hiện lưu dữ liệu tại đây (ví dụ: gửi AJAX hoặc lưu vào cơ sở dữ liệu)
        }
    });
    // end
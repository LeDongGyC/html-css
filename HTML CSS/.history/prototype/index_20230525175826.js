const inputElement = document.getElementById("image-input");
    const imagePreview = document.getElementById("image-preview");
    const deleteSelectedButton = document.getElementById("delete-selected-button");
    const loadingOverlay = document.querySelector(".loading-overlay");

    inputElement.addEventListener("change", function(event) {
      const files = event.target.files;

      showLoadingOverlay();

      setTimeout(function() {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const imageURL = URL.createObjectURL(file);

          const imgElement = document.createElement("img");
          imgElement.src = imageURL;
          imgElement.classList.add("preview-image");

          imgElement.addEventListener("click", function() {
            imgElement.classList.toggle("selected");
          });

          const imageContainer = document.createElement("div");
          imageContainer.appendChild(imgElement);

          imagePreview.appendChild(imageContainer);
        }

        hideLoadingOverlay();
      }, 2000);
    });

    deleteSelectedButton.addEventListener("click", function() {
      const selectedImages = document.querySelectorAll(".preview-image.selected");

      selectedImages.forEach(function(image) {
        const imageContainer = image.parentNode;
        imageContainer.remove();
      });
    });

    function showLoadingOverlay() {
      loadingOverlay.classList.add("show");
    }

    function hideLoadingOverlay() {
      loadingOverlay.classList.remove("show");
    }
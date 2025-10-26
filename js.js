<script>
  // Get modal elements
  var modal = document.getElementById("imgModal");
  var modalImg = document.getElementById("modalImg");
  var caption = document.getElementById("caption");
  var closeBtn = document.getElementsByClassName("close")[0];

  // Add click event to all gallery images
  document.querySelectorAll(".image-gallery img").forEach(img => {
    img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      caption.innerHTML = this.alt;
    }
  });

  // Close modal on X click
  closeBtn.onclick = function() {
    modal.style.display = "none";
  }

  // Optional: close when clicking outside the image
  modal.onclick = function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  }
</script>
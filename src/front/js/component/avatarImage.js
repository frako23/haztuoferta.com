import React from "react";

export const AvatarImage = () => {
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $("#imagePreview").css(
          "background-image",
          "url(" + e.target.result + ")"
        );
        $("#imagePreview").hide();
        $("#imagePreview").fadeIn(650);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#imageUpload").change(function () {
    readURL(this);
  });

  return (
    <div class="container">
      <h1>
        jQuery Image Upload
        <small>with preview</small>
      </h1>
      <div class="avatar-upload">
        <div class="avatar-edit">
          <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
          <label for="imageUpload"></label>
        </div>
        <div class="avatar-preview">
          <div
            id="imagePreview"
            style="background-image: url(http://i.pravatar.cc/500?img=7);"
          ></div>
        </div>
      </div>
    </div>
  );
};

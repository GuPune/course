




<template>
  <div>
    <div class="errorarea sp_top_100 sp_bottom_100">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-10 col-sm-12 col-12 m-auto">
            <div class="errorarea__inner" data-aos="fade-up">
              <div class="error__img">
                <img src="../../assets/img/icon/ma.png" alt="error" />
              </div>
              <div class="error__text">
                <h3>Server Maintenance!</h3>
                <p>
                  Please wait a moment. The system will return to normal
                  operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "blank",
});
</script>
  <style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  width: 50%;
}

button {
  margin-top: 10px;
}
</style>
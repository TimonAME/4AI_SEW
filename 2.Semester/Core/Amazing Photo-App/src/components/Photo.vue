<template>
  <div class="p-4 flex flex-col items-center justify-center space-y-4 h-max">
    <h1 class="text-4xl font-bold mb-4">Photo</h1>
    <video ref="video" autoplay class="h-1/3"></video>
    <button @click="capturePhoto" class="px-8 py-4 bg-blue-500 text-white rounded transform active:scale-90">Take Photo</button>
  </div>
</template>

<script setup>
import {ref, inject, onMounted} from 'vue';

const photos = inject('photos');
const photoUrl = ref('');
const video = ref(null);

onMounted(async () => {
  const mediaStream = await navigator.mediaDevices.getUserMedia({video: true});
  video.value.srcObject = mediaStream;
  video.value.play();
});

const capturePhoto = async () => {
  const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
  const mediaTrack = mediaStream.getVideoTracks()[0];
  const imageCapture = new ImageCapture(mediaTrack);
  const photoBlob = await imageCapture.takePhoto();
  const url = URL.createObjectURL(photoBlob);
  photoUrl.value = url;
  photos.value.push({ id: photos.value.length + 1, name: `Photo ${photos.value.length + 1}`, url });

  console.log("Photo captured");
};
/*
const capturePhoto = () => {
  const canvas = document.createElement('canvas');
  canvas.width = video.value.videoWidth;
  canvas.height = video.value.videoHeight;
  canvas.getContext('2d').drawImage(video.value, 0, 0);
  const url = canvas.toDataURL('image/png');
  photoUrl.value = url;
  photos.value.push({ id: photos.value.length + 1, name: `Photo ${photos.value.length + 1}`, url });

  console.log("Photo captured");
};
 */
</script>

<style scoped>
/* Add your styles here */
</style>
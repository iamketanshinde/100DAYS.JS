const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx= canvas.getContext('2d');

const facecanvas = document.querySelector('.face');
const facectx= canvas.getContext('2d');

const FaceDetector= new window.FaceDetector();
// console.log(vedio,canvas,facecanvas,FaceDetector);



async function populateVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { width: 1920, height: 1080 },
    });
    video.srcObject=stream;
    await video.play();
    //size the canvases to be the same size of vedio
   console.log(video.videoWidth,video.videoHeight);
   canvas.width=video.videoWidth;
   canvas.Height=video.videoHeight;
   facecanvas.width=video.videoWidth;
   facecanvas.Height=video.videoHeight;
}
populateVideo();


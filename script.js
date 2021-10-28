const button = document.getElementById("button");
const video = document.getElementById("video");


async function selectMdeiaStream(){
    // use of navigator api
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject=mediaStream;
    video.onloadedmetadata = () =>{
        video.play();
    }
}


button.addEventListener('click', async () => {
    button.disabled = true;

    // start picture in picture
    await video.requestPictureInPicture();

    button.disabled = false;
});

selectMdeiaStream();
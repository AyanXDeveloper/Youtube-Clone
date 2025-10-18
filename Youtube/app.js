const videoInput = document.getElementById('video-upload');
    const fileNameDisplay = document.getElementById('file-name');

    videoInput.addEventListener('change', function () {
      fileNameDisplay.textContent = this.files.length > 0 ? this.files[0].name : 'No file selected';
    });

function upload() {
    var title = document.getElementById("title")
    var thumbnail = document.getElementById("file-upload")
    var videoUpload = document.getElementById("video-upload")
    var video = document.getElementById("video")
    var file = thumbnail.files[0]
    var imgUrl = URL.createObjectURL(file)
    var videoFile = videoUpload.files[0]
    var VideoUrl = URL.createObjectURL(videoFile)

    video.innerHTML += `<div class="video1">
                    <img class="thumbnail"
                        src="${imgUrl}"
                        alt="">
                    <div class="d-flex gap-2 py-3">
                        <img class="profile-img"
                        src="https://yt3.ggpht.com/vxvtam-sG-fO97B-K4BcnH482P0gg945LtFSoak11S8abfUfXFkEyUNt5X5xANqCaOaPLx9womM=s88-c-k-c0x00ffffff-no-rj"
                        alt="">
                        <div>
                            <p class="title">${title.value}</p>
                            <p class="channel">Ayan</p>
                            <p class="data">1.2M views &nbsp; 2 days ago</p>
                        </div>
                    </div>
                </div>`

    title.value = " "
    thumbnail.files = ""

}
document
  .getElementById('fleche')
  .animate(
    [{ transform: 'translateY(1%)' }, { transform: 'translateY(10%)' }],
    {
      duration: 500,
      iterations: Infinity,
    }
  )

const moveUp = () => {
  let changeText = document.getElementById('bottomTitle')
  changeText.innerHTML = "J'Y VAIS"
  let moveVideo = document.getElementById('videoPuma')
  moveVideo.style.display = 'none'
  let upDeoContainer = document.getElementById('textHide')
  upDeoContainer.style.transform = 'translateY(-50%)'
}

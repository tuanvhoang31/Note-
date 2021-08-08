/**
 * <div class="lightbox">
        <div class="lightbox-content">
            <img src="https://images.pexels.com/photos/5038385/pexels-photo-5038385.jpeg?cs=srgb&dl=pexels-ave-calvar-martinez-5038385.jpg&fm=jpg" alt="" 
            class="lightbox-image">
        </div>
    </div>
 */
const images = document.querySelectorAll('.content img ');
images.forEach(item => item.addEventListener('click',handleZoomImage));
function handleZoomImage(event){
    console.log(event.target);
    const image = event.target.getAttribute('src');
    const template =`<div class="lightbox">
    <div class="lightbox-content">
    <i class="fa fa-angle-left lightbox-prev"></i>
        <img src="${image}" alt="" 
        class="lightbox-image">
        <i class="fa fa-angle-right lightbox-next"></i>
    </div>
</div>`;
document.body.insertAdjacentHTML("beforeend",template);
}
// click vào img và click ra để thoát 
document.body.addEventListener('click', function(e){
    const lightImage = e.target.querySelector('.lightbox-image')
    const lightSrc = '';
    if(e.target.matches ('.lightbox ')){
        //dùng để xóa DOM 
         e.target.parentNode.removeChild(e.target);
    }
    
});
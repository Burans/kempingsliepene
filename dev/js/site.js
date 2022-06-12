document.addEventListener('DOMContentLoaded', function() {
  windowHeightFix();
  initGallery();
  intiServicesList();
  initVideoCont();

});


function initGallery(){
  let slider = document.querySelector('.s02__slider-cont');
  let flkty = new Flickity( slider, {
    // options
    contain: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false,
    selectedAttraction: 0.020,
    friction: 0.2,
    cellAlign: 'center',
    accessibility: false
  });
  // flkty.on( 'dragStart', function( event, pointer ) {
  //
  // });
  flkty.on( 'staticClick', function( event, pointer, cellElement, cellIndex ) {
    let url = event.target.getAttribute('data-video-url');
    if(url){
      openVideo(url);
    }
  });

  document.querySelector('.s02__arrow-left').addEventListener('click',function(){
    flkty.previous();
  })
  document.querySelector('.s02__arrow-right').addEventListener('click',function(){
    flkty.next();
  })
}

function intiServicesList(){
  let items = document.querySelectorAll('.s04__item');
  for (let i = 0; i < items.length; i++) {
    let item = items[i];

    item.addEventListener('click',function(){
      this.toggleAttribute('data-open');
    });

  }
}

function openVideo(url){
  let videoCont = document.querySelector('.video-cont');
  let iframeCont = document.querySelector('.iframe-cont');

  let iframe = '<iframe src="'+url+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

  videoCont.setAttribute('data-active','')
  iframeCont.innerHTML = iframe;
}

function initVideoCont(){
  let videoCont = document.querySelector('.video-cont');
  let iframeCont = document.querySelector('.iframe-cont');
  let body = document.querySelector('body');

  videoCont.addEventListener('click', function(){
    videoCont.removeAttribute('data-active');
    iframeCont.innerHTML = '';
  });

}

function windowHeightFix(){
  onWindowResize();
  window.addEventListener('resize', onWindowResize, false);

  function onWindowResize(){
    document.querySelector('body').style.height = window.innerHeight+'px';
  }

}

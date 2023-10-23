window.addEventListener('DOMContentLoaded', function() {
    // burger
    document.querySelector('#burger').addEventListener('click', function(){
            document.querySelector('#burger').classList.toggle('is-active')
            document.querySelector('#menu').classList.toggle('is-active')
    });
    document.querySelectorAll('.header__nav-item').forEach(function(closeMenu){
            closeMenu.addEventListener('click', function(){
                document.querySelector('#burger').classList.remove('is-active')
                document.querySelector('#menu').classList.remove('is-active')
        })
    })

    // search
    this.document.querySelector('#search__btn').addEventListener('click', function(){
        document.querySelector('#search__form').classList.add('is-active');
        // document.querySelector('#search__btn').classList.add('is-active');
    });
    this.document.querySelector('#close').addEventListener('click', function(){
        document.querySelector('#search__form').classList.remove('is-active');
        // document.querySelector('#search__btn').classList.remove('is-active');
    });

    // tabs
    this.document.querySelectorAll('.work__tab-link').forEach(function(tabsBtn){
        tabsBtn.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path;

            document.querySelectorAll('.work__body').forEach(function(work__body){
                work__body.classList.remove('is-active')
                document.querySelector(`[data-target="${path}"]`).classList.add('is-active')
            });
            
            document.querySelectorAll('.work__tab-link').forEach(function(tabRemove){
                tabRemove.classList.remove('is-active');
            })

            event.target.classList.add('is-active');
        })
    })

    // swiper

    const swiper = new Swiper('.swiper', {

        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

        grabCursor: true,

        touchRatio: 1.5,

        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInterection: true
        }
    });

    // Accordion

    $( function() {
        $( "#accordion" ).accordion({
            collapsible: true,
            active: false,
            classes: {
                // "ui-accordion-header-icon": "icon-cross"
            },
            icons: { header: "icon-cross", "activeHeader": "icon-cross icon-cross_rotate" },
            header: ".accordion__question",
            heightStyle: "content",
        });
    } );

})
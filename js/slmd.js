$(document).ready(function(){

    $('#slider').royalSlider({
        arrowsNav: true,
        loop: false,
        keyboardNavEnabled: true,
        controlsInside: false,
        imageScaleMode: 'fill',
        arrowsNavAutoHide: false,
        autoScaleSlider: true,
        autoScaleSliderWidth: 930,
        autoScaleSliderHeight: 550,
        controlNavigation: 'none',
        navigateByClick: true,
        startSlideId: 0,
        autoPlay: {
            enabled: true,
            pauseOnHover: true,
            delay: 4000
        },
        transitionType:'move',

        /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
        imgWidth: 930,
        imgHeight: 550
    });

});
// Wait for document ready and Revolution Slider to be available
jQuery(document).ready(function($) {
    // Make sure RevolutionSlider exists
    if (typeof $.fn.revolution === 'undefined') {
        console.error('Revolution Slider plugin is not loaded');
        return;
    }

    // Initialize the slider with a timeout to ensure proper loading
    setTimeout(function() {
        let slider = $('#main_slider');

        let durationMainSlider,
        sliderArrowsMainSlider;

    // Get all slider configure
    if (slider.length) {
        durationMainSlider = parseInt(slider.attr('data-duration'));
        sliderArrowsMainSlider = slider.attr('data-arrows');
    }
    if (slider.length) {
        durationMainSlider = parseInt(slider.attr('data-duration'));
      sliderArrowsMainSlider = slider.attr('data-arrows');
    }

    if (sliderArrowsMainSlider == "false") {
      sliderArrowsMainSlider = false;
    } else {
      sliderArrowsMainSlider = true;
    }

        
        if (slider.length) {
            slider.show().revolution({
                sliderType: "standard",
                sliderLayout: "auto",
                delay: durationMainSlider,                     // Delay between slides in milliseconds
                responsiveLevels: [1240, 1024, 778, 480],
                gridwidth: [1240, 1024, 778, 480],
                minHeight: '700',
                
                // Disable progress bar and spinner
                disableProgressBar: "on",
                spinner: "off",
                
                // Stop slider on hover
                stopOnHover: true,
                
                // Navigation settings
                navigation: {
                    onHoverStop: "off",
                    arrows: {
                        enable: sliderArrowsMainSlider,
                        style: 'custom',
                        hide_onleave: true,
                        left: {
                            h_offset: 30
                        },
                        right: {
                            h_offset: 30
                        }
                    },
                    bullets: {
                        enable: false,
                        style: 'custom',
                        hide_onleave: false,
                        h_align: 'center',
                        v_align: 'bottom',
                        h_offset: 0,
                        v_offset: 20,
                        space: 5
                    }
                },
                
                // Slide animation
                viewPort: {
                    enable: true,
                    outof: "wait",
                    visible_area: "80%"
                },
                
                // Touch navigation
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                drag_block_vertical: false
            });

        } else {
           // console.error('Slider element not found');
        }
    }, 100);
});
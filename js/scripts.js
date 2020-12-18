(function ($) {
    "use strict"; // Start of use strict


    /* ---------------------------------------------
     Scripts initialization
     --------------------------------------------- */

    $(window).load(function () {

        // Page loader

        $("body").imagesLoaded(function () {
            $(".page-loader div").fadeOut();
            $(".page-loader").delay(200).fadeOut("slow");
        });

    });


})(jQuery); // End of use strict


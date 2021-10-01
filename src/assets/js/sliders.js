/* global jQuery */
jQuery( $ => {
  const $servicing_slider = $( ".section-servicing .slider" );

  if ( $servicing_slider.length ) {
    require.ensure( [], ( require ) => {
      require( 'slick-carousel' );
      require( 'slick-carousel/slick/slick.css' );

      $servicing_slider.slick( {
        dots: true,
        infinite: true,
        speed: 300,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
      } );
    }, 'slick' );
  }
} );

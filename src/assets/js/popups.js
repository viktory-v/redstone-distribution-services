/* global jQuery */
jQuery( $ => {
  const $inks = $( '.video-link, .link-play' );

  if ( $inks.length ) {
    require.ensure( [], ( require ) => {
      require( 'magnific-popup' );
      require( 'magnific-popup/dist/magnific-popup.css' );

      $inks.magnificPopup( {
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
      } );
    }, 'magnific' );
  }
} );

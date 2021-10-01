import googleFontsLoader from './google-fonts-loader';
//import './block';
import './blog';
import './forms';
import './header';
import './light-tabs';
//import './map';
import './popups';
import './retina';
import './sliders';
import './smooth-scroll';
import './target-blank';
// import '../../woo/js';

googleFontsLoader( [
  'Krub:300,400,500,600,700,900',
  'Noto Sans TC:300,400,500,600,700,900'
] );

jQuery( ( $ ) => {
  $( '.section-products-procedure, .section-our-team, .section-videos' ).find( '.wrap' ).lightTabs();
  $( '.menu-button' ).on( 'click', function() {
    $( this ).next( '.content' ).toggleClass( 'is-visible' );
  } );
} );

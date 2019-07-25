<?php
/**
* The main template file
*
* @package WordPress
* @subpackage Spartan
* @since Spartan 1.0
*/

get_header();

?>

<!-- C. WORK AREA +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

  <!-- C.1. PAGE HEADER ------------------------------- -->

  <?php get_template_part( 'inc/header-home-big' ); ?>

  <!-- C.1. END --------------------------------------- -->

<!-- C.1. PAGE HEADER ------------------------------- -->

<?php get_template_part( 'section-front' ); ?>

<!-- C.1. END --------------------------------------- -->

  <main class="p-main">

    <!-- C.2. SECTIONS -------------------------------- -->

    <?php get_template_part( 'section-vision'); ?>

    <?php get_template_part( 'section-services'); ?>

    <?php get_template_part( 'section-testimonials'); ?>

    <?php get_template_part( 'section-team'); ?>

    <?php get_template_part( 'section-contact'); ?>

    <!-- C.2. END ------------------------------------- -->

    <!-- C.3. FOOTER  --------------------------------- -->

    <?php get_footer(); ?>

    <!-- C.3. END ------------------------------------- -->

  </main>

<!-- C. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<!-- D. JAVASCRIPT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<!-- D.1. FOOTER JS -->

<?php get_template_part( 'inc/footer-scripts' ); ?>

<!-- D. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
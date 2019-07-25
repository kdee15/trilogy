
	<!--[if lt IE 7]>
		<p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
	<![endif]-->

<!-- C. WORK AREA ++++++++++++++++++++++++++++++++++++++ -->

	<!-- C.1. MASTHEAD -->

	<header class="o-header o-page-header big-head" id="o-header">
    <a class="m-link a-small" href="/">
      <?php get_template_part( 'inc/svg--page-logo' ); ?>
    </a>
		<div class="m-breadcrumbs">
      <?php if (function_exists('the_breadcrumb')) the_breadcrumb(); ?>
    </div>

    <div class="o-hamburger m-hamburger--spin burger-nav" name="burger-nav" id="burger-menu">
      <div class="m-hamburger-box">
        <div class="m-hamburger-inner"></div>
      </div>
    </div>

	</header>

  <section class="o-block o-site-navigation top" id="top">
    <?php dynamic_sidebar( 'mymenu' ); ?>
  </section>

  <figure class="m-figure a-large">
    <?php get_template_part( 'inc/svg--logo' ); ?>
  </figure>
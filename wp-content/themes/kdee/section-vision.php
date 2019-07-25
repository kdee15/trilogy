<section class="o-block block-vision" id="block-vision">

  <div class="container">
    <h2 class="mb-5 d-block d-md-none">BUSINES DETAILS</h2>
    <div class="row">
      <?php
      $args = array(
        'post_type' => 'about',
      );
      $about = new WP_Query( $args );
      if( $about->have_posts() ) {
        while( $about->have_posts() ) {
          $about->the_post();
          ?>

          <figure class="col-12 col-md-6">
            <img src="<?php the_field('about_image') ?>" alt="Our Vision" />
          </figure>

          <aside class="col-12 col-md-6">
            <h2 class="mb-5 d-none d-md-block">BUSINES DETAILS</h2>
            <?php the_field('about_copy') ?>
          </aside>

          <?php
        }
      }
      ?>
    </div>
  </div>


</section>
<section class="o-block carousel-block">

  <!-- C.1. PAGE HEADER --------------------------------- -->

  <div class="swiper-container swiper-home">

    <div class="swiper-wrapper">

      <?php
      $args = array(
        'post_type' => 'carousel',
      );
      $carousel = new WP_Query( $args );
      if( $carousel->have_posts() ) {
        while( $carousel->have_posts() ) {
          $carousel->the_post();
          ?>

          <div class="swiper-slide">
            <figure class="carousel-pic" id="pic<?php the_id() ?>" style="background-image: url('<?php the_field('carousel_image') ?>');">
            </figure>
            <style>
              #pic<?php the_id() ?> .set-left { margin-left: <?php the_field('image_shift') ?>; }
              #pic<?php the_id() ?> .set-top { margin-top: <?php the_field('shift_top') ?>; }
            </style>
            <aside class="carousel-text" style="<?php the_field('v_position') ?>: <?php the_field('v_value') ?>; <?php the_field('h_position') ?>: <?php the_field('h_value') ?>;">
              <h3 class="text title" data-swiper-parallax="-100"><?php the_title() ?></h3>
              <h5 class="text subtitle" data-swiper-parallax="-300"><?php the_field('tagline') ?></h5>
            </aside>
          </div>

          <?php
        }
      }
      ?>

    </div>

    <!-- Add Pagination -->
    <div class="swiper-pagination swiper-pagination-white"></div>

  </div>

  <!-- C.1. END ----------------------------------------- -->

</section>
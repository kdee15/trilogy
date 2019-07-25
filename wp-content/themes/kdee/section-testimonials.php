<section class="o-block block-testimonials" id="block-testimonials">
  <div class="container">
    <h3>What our customers say ...</h3>
    <div class="o-testimonial-list row no-gutters">

      <!-- C.1. PAGE HEADER ----------------------- -->

      <div class="swiper-container swiper-testimonials">

        <div class="swiper-wrapper">

          <?php
          $args = array(
            'post_type' => 'testimonials',
          );
          $carouselTwo = new WP_Query( $args );
          if( $carouselTwo->have_posts() ) {
            while( $carouselTwo->have_posts() ) {
              $carouselTwo->the_post();
              ?>

              <div class="swiper-slide">
                <aside class="m-quote-details">
                  <p class="a-quote"><?php the_field('testimonialquote') ?></p>
                  <p class="a-author"><?php the_field('testimonialauthor') ?></p>
                </aside>
              </div>

              <?php
            }
          }
          ?>

        </div>

      </div>

      <!-- Add Pagination -->
      <div class="testimonials-pagination swiper-pagination swiper-pagination-white"></div>

      <!-- C.1. END ------------------------------- -->

    </div>
  </div>
</section>
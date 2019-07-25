<section class="o-block block-team" id="block-team">
  <div class="container">
    <h3>Testimonials</h3>
    <div class="o-team-list row no-gutters">

      <!-- C.1. PAGE HEADER ----------------------- -->

      <div class="swiper-container swiper-home">

        <div class="swiper-wrapper">

          <?php
          $args = array(
            'post_type' => 'team_carousel',
          );
          $carousel = new WP_Query( $args );
          if( $carousel->have_posts() ) {
            while( $carousel->have_posts() ) {
              $carousel->the_post();
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
      <div class="swiper-pagination swiper-pagination-white"></div>

      <!-- C.1. END ------------------------------- -->

    </div>
  </div>
</section>
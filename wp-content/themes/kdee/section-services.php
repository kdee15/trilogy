<section class="o-block our-services" id="block-services">

  <div class="container">
    <div class="row pt-5 no-gutters">
      <h2>What we offer</h2>
    </div>

    <?php
    $args = array(
      'post_type' => 'services',
    );
    $services = new WP_Query( $args );
    if( $services->have_posts() ) {
      while( $services->have_posts() ) {
        $services->the_post();
        ?>

        <p><?php the_field('intro') ?></p>

        <section class="o-services-list blocks-coming-in row no-gutters">

          <article class="card a-slide-h col-12 col-md-6">
            <div class="o-card hover-card o-service-item">
              <figure class="m-card-image">
                <img src="<?php the_field('image_1') ?>" />
              </figure>
              <div class="m-card-body">
                <h3 class="a-card-header"><?php the_field('title_1') ?></h3>
                <?php the_field('detail_1') ?>
              </div>
            </div>
          </article>

          <article class="card a-slide-h col-12 col-md-6">
            <div class="o-card hover-card o-service-item">
              <figure class="m-card-image">
                <img src="<?php the_field('image_2') ?>" />
              </figure>
              <div class="m-card-body">
                <h3 class="a-card-header"><?php the_field('title_2') ?></h3>
                <?php the_field('detail_2') ?>
              </div>
            </div>
          </article>

          <article class="card a-slide-h col-12 col-md-6">
            <div class="o-card hover-card o-service-item">
              <figure class="m-card-image">
                <img src="<?php the_field('image_3') ?>" />
              </figure>
              <div class="m-card-body">
                <h3 class="a-card-header"><?php the_field('title_3') ?></h3>
                <?php the_field('detail_3') ?>
              </div>
            </div>
          </article>


          <article class="card a-slide-h col-12 col-md-6">
            <div class="o-card hover-card o-service-item">
              <figure class="m-card-image">
                <img src="<?php the_field('image_4') ?>" />
              </figure>
              <div class="m-card-body">
                <h3 class="a-card-header"><?php the_field('title_4') ?></h3>
                <?php the_field('detail_4') ?>
              </div>
            </div>
          </article>

        </section>

        <section class="key-words">
          <?php the_content() ?>
        </section>

        <?php
      }
    }
    ?>

  </div>
</section>
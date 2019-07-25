<!-- C.3. ARTISTS MODAL WINDOWS -->

<section class="o-modal-full modal" id="team<?php the_id(); ?>">

  <div class="container">
    <div class="modalClose"></div>
    <section class="m-modal-body row align-items-center">

      <div class="col-12 col-lg-3 offset-lg-2 m-modal-head">

        <!-- C.3.1. The Content ----------------------- -->

        <img src="<?php the_field('photo') ?>" alt="<?php the_title(); ?>" class="a-modal-img" />
        <h2><?php the_title() ?></h2>
        <h3><?php the_field('title') ?></h3>

      </div>

      <div class="col-12 offset-md-2 col-md-8 offset-lg-0 col-lg-5 m-modal-copy">

        <?php the_content() ?>

        <ul class="social-media">
          <li class="soc-med">
            <a class="imgLink" href="mailto:<?php the_field('email') ?>" target="_blank">
              <img src="<?php echo get_template_directory_uri(); ?>/dist/images/icons/icon--email.svg" alt="Twitter" class="icon tw">
            </a>
          </li>
          <li class="soc-med">
            <a class="imgLink" href="<?php the_field('linked_in') ?>" target="_blank">
              <img src="<?php echo get_template_directory_uri(); ?>/dist/images/icons/icon--linkedIn.svg" alt="Linked In" class="icon li">
            </a>
          </li>

        </ul>

      </div>

      <!-- C.3.1. END -------------------------------- -->

    </section>

  </div>

</section>

<!-- C.3. END -->
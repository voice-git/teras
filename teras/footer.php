  <footer>
    <div class="container">
      <div class="footer__logo">
        <img src="<?php echo get_template_directory_uri() ?>/img/footer-logo.png" alt="TERAS">
      </div>
      <p class="footer__info">
        株式会社テラスカンパニー<br>
        <span class="footer__info--inline">〒929-0345 石川県河北郡津幡町太田へ17-4</span>
      </p>
      <p class="footer__copy">Copyright (c) 2018 - 2022<br class="is-sp"> TERAS COMPANY All Rights Reserved.</p>
    </div>
  </footer>

  <!-- original -->
  <?php wp_footer(); ?>

  <!-- font -->
  <script>
    (function(d) {
      var config = {
          kitId: 'lxx2txw',
          scriptTimeout: 3000,
          async: true
        },
        h = d.documentElement,
        t = setTimeout(function() {
          h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
        }, config.scriptTimeout),
        tk = d.createElement("script"),
        f = false,
        s = d.getElementsByTagName("script")[0],
        a;
      h.className += " wf-loading";
      tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
      tk.async = true;
      tk.onload = tk.onreadystatechange = function() {
        a = this.readyState;
        if (f || a && a != "complete" && a != "loaded") return;
        f = true;
        clearTimeout(t);
        try {
          Typekit.load(config)
        } catch (e) {}
      };
      s.parentNode.insertBefore(tk, s)
    })(document);
<?php if (is_front_page()) : ?>
	// 問い合わせ完了画面
	document.addEventListener('wpcf7mailsent', function(event) {
		location = '<?php echo esc_url( home_url('/') ); ?>contactcomp/';
	}, false);
<?php endif; ?>
  </script>
</body>

</html>
function Footer() {
    return (
<section class="footer">

  <div class="footer__top">
    <div class="content-wrapper footer__top--wrapper">
      <div class="footer__top--left">
        <div class="footer__desktop--logo">
            <a
            class="footer__logo"
            href="{{ module.logo.logo_link.url.href }}"
            {% if module.logo.logo_link.open_in_new_tab %}target="_blank"
            {% endif %}
            {% if module.logo.logo_link.rel %}rel="{{ module.logo.logo_link.rel }}"
            {% endif %}
          >
            <img src="{{ module.logo.logo.src }}" alt="{{ module.logo.logo.alt }}" />
          </a>
        </div>
        <div class="footer__address">
          {{ module.address }}
        </div>
        <div class="footer__call">
          <div class="footer__call--phone">
            <a href="tel:{{ module.phone_number }}">{{ module.phone_number }}</a>
          </div>
        </div>
        <ul class="footer__social">
          {% for link in module.social_links %}
          <li class="footer__social--item">
            <a
              class="footer__social--link"
              href="{{ link.link.url.href }}"
              {% if link.link.open_in_new_tab %}target="_blank"
              {% endif %}
              {% if link.link.rel %}rel="{{ link.link.rel }}"
              {% endif %}
            >
              <span class="sr-only">{{ link.social_name | lower }}</span>
              {{ macros.glyph(link.glyph, "true") }}
            </a>
          </li>
          {% endfor %}
        </ul>
      </div>
      <div class="footer__top--right">
        <ul class="footer__menu">
          {% for group in module.menu %}
          <li class="footer__menu--section">
            <button
              class="mobile-only footer__menu--button"
              aria-expanded="false"
            >
              {{ group.group_label }}
              <i aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  fill="none"
                >
                  <path
                    stroke="#043436"
                    stroke-width="2"
                    d="m1 1 4.621 4.123L10.242 1"
                  />
                </svg>
              </i>
            </button>
            <span class="footer__desktop footer__menu--label">
              {{ group.group_label }}
            </span>
            <ul class="footer__menu--links" aria-label="{{ group.group_label }}">
              {% for link in group.menu_items %}
              <li class="footer__menu--item">
                <a
                  class="footer__menu--item__link"
                  href="{{ link.link.url.href }}"
                  {% if link.link.open_in_new_tab %}target="_blank"
                  {% endif %}
                  {% if link.link.rel %}rel="{{ link.link.rel }}"
                  {% endif %}
                >
                  {{ link.link_label }}
                </a>
              </li>
              {% endfor %}
            </ul>
          </li>
          {% endfor %}
        </ul>
      </div>
    </div>
  </div>
  <div class="footer__bottom">
    <div class="content-wrapper footer__bottom--wrapper">
      <div class="footer__bottom--left">
        <ul class="footer__courtesy">
          <span class="footer__courtesy--copyright">
            {{ module.bottom_footer.copyright }}
          </span>
      </div>
      <div class="footer__bottom--right">
        <ul class="footer__right--links">
          {% for link in module.bottom_footer.links %}
          <li class="footer__courtesy--item">
            <a
              class="footer__courtesy--item__link"
              href="{{ link.link.url.href }}"
              {% if link.link.open_in_new_tab %}target="_blank"
              {% endif %}
              {% if link.link.rel %}rel="{{ link.link.rel }}"
              {% endif %}
            >
              {{ link.link_label }}
            </a>
          </li>
          {% endfor %}
      </div>
    </div>
  </div>

</section>
    )
}

export default Footer;

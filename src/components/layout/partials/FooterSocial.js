import React from 'react';
import classNames from 'classnames';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://t.me/Elonzilla_EN">
            <svg
              width="46"
              height="46"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">

              <title>Telegram</title>
              <path
                d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z" />
            </svg>
          </a>
        </li>

      </ul>
    </div>
  );
}

export default FooterSocial;

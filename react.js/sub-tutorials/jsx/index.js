//JSX
import React from 'react';

const navbar = (
  <nav>
    <h1>website</h1>
    <ul>
      <li>
        <a href="/menu">Menu</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/contact">Contact</a>s
      </li>
    </ul>
  </nav>
);

const page = (
  <div>
    {navbar}
    <h1>Hello here is the page</h1>
    <p>
      Lorem ipsum is placeholder text commonly used in the graphic, print, and
      publishing industries for previewing layouts and visual mockups.
    </p>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
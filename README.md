paper
=====

Just paper...

**This is done purely with CSS**

Add the `white paper` class to a `<div>` or `<p>` element and see what happens.

Paper classes available:
* white # Standard issue
* legal # Legal pad
* engineer # Engineering Computation Paper (ECP)

Within a div, you can have `<p>` elements, or `<ul> / <ol>` elements with `<li>`s and their spacing should be fine. `<li class='completed'>` will grey out and strikethrough the text.

Individual `<p>` elements can become paper, as well.

**white**
![white paper](/../screenshot/images/white.png?raw=true "White Paper")

    <div class='white paper'>
      <ul>
        <li>First item in a list, within a paper div</li>
        <li>These</li>
        <li>Are</li>
        <li>All</li>
        <li>List</li>
        <li>Items</li>
        <li>even crossed off</li>
      </ul>
      <br>
      <p>
        This is a p element<br>
        with multiple lines<br>
        in the same div
      </p>
    </div>

**legal**
![legal paper](/../screenshot/images/legal.png?raw=true "Legal Paper"")

    <div class='legal paper'>
      <p>
        This is the first item in a p element, within a paper div<br>
        <b>... and the next, bolded</b><br>
        <i>... and another, italicized</i>
      </p>
      <br>
      <p>This is another p element with a br between</p>
      <p>Another p element, without a br</p>
    </div>

**engineer**
![engineer paper](/../screenshot/images/ecp.png?raw=true "Engineering Computation Paper")

    <p class='engineer paper'>
      First line of a paper p<br>
      ... and the next<br>
      ... you get the idea
    </p>
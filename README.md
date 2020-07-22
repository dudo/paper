# Paper

Just paper...

Add the `white paper` class to any element and see what happens.

Paper classes available:

* white # Standard issue
* legal # Legal pad
* engineer # Engineering Computation Paper (ECP)

Within a `<div>`, you can have `<p>` elements, or `<ul> / <ol>` elements with `<li>`s and their spacing should be fine.

## white paper

    <div class='white paper'>
      <ul>
        <li>First item in a list, within a paper div</li>
        <li>These</li>
        <li>Are</li>
        <li>All</li>
        <li>List</li>
        <li>Items</li>
      </ul>
      <br>
      <p>
        This is a p element<br>
        with multiple lines<br>
        in the same div
      </p>
    </div>

![white paper](/../screenshot/images/white.png?raw=true "White Paper")

## legal pad

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

![legal paper](/../screenshot/images/legal.png?raw=true "Legal Paper")

## engineering computation paper

    <div class='engineer paper'>
      First line of a div<br>
      ... and the next<br>
      ... you get the idea
    </div>

![engineer paper](/../screenshot/images/ecp.png?raw=true "Engineering Computation Paper")

# seximal-columns
Framework built with viewport width scaling, height independent, n/6ths elements.

## Bugs
 * Spoilers with nested .spoiler-toggle's will toggle the parent .spoiler when clicked.

## Features 2 come
 * Form element styles
   * ``` <input> <submit> etc. ```
 * Better header and footer handling
   * Header is currently mandatory-ish
   * Footer could be replaced with bottom-padding on .main
 * .sexc-scrollable > .column elements should not be 100% on mobile. Scrollable sections are used for galleries etc, would make sense to be able to have different width gallery elements.
 * List element styles
   * ```<ul>, <ol> and <li> ```
 * Better default theme. Current is kinda coffee like and makes you think I like coffee or something.

## TO-DO
 * Write a better README.md
 * Write a homepage.md
 * Learn more KSS syntax
   * Test using seximal-columns as the KSS docs theme
 * Figure out how to best release seximal-columns without all the node bullshit bundled with it

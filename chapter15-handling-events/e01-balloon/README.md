# e01 &mdash; Balloon
> displays a ballon on the document and lets the user inflate it or deflate it until it blows up using by listening to `'keydown'` events

## Description
Write a page that displays a balloon emoji (🎈). When you press the up arrow, it should inflate (grow) 10%, and when you press the down arrow it should deflate (shrink) by 10%.

You can control the size of text by setting the `font-size` style property on its parent element. Note that it should include a unit.

Include a limit, so that if it goes beyond a certain threshold the ballon is replaced with the collision emoji (💥) and remove the event handler then.

### Additional Notes
This example contains the [Open Iconic](https://useiconic.com/open) set of icons. It seems it is no longer a preferred option (as of [Bootstrap v4.4.1](https://getbootstrap.com/docs/4.4/extend/icons/#preferred)) but works just fine for this simple purposes.
The library was downloaded from [Open Iconic](https://useiconic.com/open) site, and a few unneeded directories were removed before pasting them on the `stylesheets/` directory.
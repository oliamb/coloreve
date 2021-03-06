# Coloreve

A color book website for children.

Click on the various area to randomly assign a color.

Prototype demo: https://boiling-oasis-35493.herokuapp.com/
Github repository: https://github.com/oliamb/coloreve


# Contributions

This project is at a very early stage so I don't expect contributions. But if you were planning to start the same application, you are welcome as a co-developer. Open an issue to contact me.

# Development

Technically, the web app display a SVG drawing and accept to change the fill
attribute of any element with a `shape` class.

## OSS Projects

A list of OSS projects that sustain this application development

- [HTML5 ⭑ Boilerplate](https://html5boilerplate.com/)
  web popular front-end template
- [React](https://facebook.github.io/react/)
  A javascript library for building user interfaces
- [Webpack](https://webpack.github.io/) module bundler
- [ESLint](http://eslint.org/) pluggable linting utility for JavaScript and JSX

## Roadmap

### Functionality

#### v0.0.1

- **Feature:** bootstrap
  - Display a web page with react and a colored background
  - Deployed to [Heroku](https://boiling-oasis-35493.herokuapp.com/)
  - Hosted on [Github](https://github.com/oliamb/coloreve)
- **Feature:** display a SVG drawing
  - Display a svg drawing in a canvas
- **Feature:** colorize
  - Randomly set the fill color of the drawing shape
  - Each shape can be colored

### Work in progress

### Backlog

- Add an icon to add to favorite
- Remove all colors button (refresh is not for kids)
- Save the drawing in a storage
- Save/Load automatically the current colors
- A reset button
- Import a SVG drawing from an external file
- Cleanup SVG file to only keep the important attributes
- Apply common styles to the SVG (black stroke of even size)
- Display a proper viewport to fit most screen size
- Display a color swatch
- Ability to change the color and paint different area in different colors


## Logbook

### 5 feb 2016

I decided to create this playful application for children on a cold Saturday.
I'm thinking about it for a while. My idea at this time is to create a simple
color book for small children (mine are 2 and 4 years old). I would like to
make it available in the open for any parent artists to be able to submit
stroke SVG to be colorized. Not sure I will reach this state but anyway, let's
start. My objective for this first session is to bootstrap a react application
and to deploy it.

I used the nice getting started guide from [Christian Alfoni](https://christianalfoni.github.io/react-webpack-cookbook/Getting-started.html) to bootstrap a
working environment.

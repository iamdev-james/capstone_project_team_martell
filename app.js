var app = new Vue ({
  el: '#main',
  data: {
   currentColor : '',
   currentClass: ''
  },
  methods: {
    changeBgColor (color) {
      if (color === 'pink') {
        this.currentClass = 'pinkyClass'
      } else if (color === 'grey') {
        this.currentClass = 'greyClass'
      } else if (color === 'yellow') {
        this.currentClass = 'yellowClass'
      } else if (color === 'blue') {
        this.currentClass = 'blueClass'
      }
    },
    setCurrentColor (colorName) {
      this.currentColor = colorName;
      this.changeBgColor(this.currentColor);
    }
  }
})
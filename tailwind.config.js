module.exports = {
  content:[ "./src/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {
      colors :{
        'yellow' :"#989A38",
        'gray':'#F2F1F1',
        'darkGray':'#D6D5D5'
      },
      fontFamily:{
        'quickSand':['Quicksand', 'serif'],
      },
      screens:{
        'medium': '745px',
        'smsm':'450px'
      }
    },
  },
  plugins: [],
}

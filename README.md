# SocialSachin

<img src="./readme_assets/sachin_home.png"></img>

## **Sachin is the god of cricket. Is he really?** [Find Out](https://soicalsachin.firebaseapp.com)

## Libraries used:-

- Vue.js
- Vue-Chartjs
- Vue-router

## Key features:-

- Made a unique anmation to lead user through the site like a story book not like conventional nav bar.
- Wrote the whole css by myself.
- The data is represented from the csv only which was possible after:-
  - Cleaning the CSV for data representation [Done in `src/assets/helper.js`]
  - Writing code to process over the chunk of data in realtime in the browser only.
  - Showing it through charts.
- Used data from various other sources [Specified in `./research.md`].

### Code base Specials:-

- Made chartComponents into a component module by introducing a index.js. So all the charts can be destructured from the chartComponents module within the same export LOC.
- The hero section comprises of two different mages processed and animated through CSS only.

## Project setup

```
npm install
npm run serve
```

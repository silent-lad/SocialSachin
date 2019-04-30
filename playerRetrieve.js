const tabletojson = require("tabletojson");
const fs = require("fs");

var statsUrl = playerID =>
  "http://stats.espncricinfo.com/ci/engine/player/" +
  playerID +
  ".html?class=11;team=6;template=results;type=allround;view=match";

var playerIDs = [35320, 253802];

tabletojson.convertUrl(
  statsUrl(playerIDs[1]),
  { stripHtmlFromCells: true },
  function(tablesAsJson) {
    // console.log(tablesAsJson[3][0]);
    fs.writeFileSync("./virat.json", JSON.stringify(tablesAsJson[3]), () => {
      console.log("done");
    });
  }
);

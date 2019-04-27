export const csvCleaner = csvString => {
  var rows = csvString.split("\n");
  var keyArray = rows[0].split(",");
  var cleanedCsv = [];
  for (let i = 1; i < rows.length; i++) {
    var object = {};
    var notOut = false;
    rows[i].split(",").forEach((value, index) => {
      var refinedValue;
      var refinedKey = `${keyArray[index]}`;

      switch (keyArray[index]) {
        case "date":
          refinedValue = new Date(value);
          break;
        case "batting_innings":
          refinedValue = Number.parseInt(value);
          break;
        case "catches":
          refinedValue = Number.parseInt(value);
          break;
        case "toss":
          value == "won" ? (refinedValue = true) : (refinedValue = false);
          refinedKey = "tossWon";
          break;
        case "opposition":
          refinedValue = value.split(" ")[1];
          break;
        case "batting_score":
          refinedValue = value.split(" ")[1];
          if (value == "DNB" || value == "TDNB") {
            refinedValue = value;
          } else {
            if (value.includes("*")) notOut = true;
            refinedValue = Number.parseInt(value);
          }
          break;

        default:
          refinedValue = value;
          break;
      }
      object[refinedKey] = refinedValue;
    });
    object.notOut = notOut;
    cleanedCsv.push(object);
  }
  return cleanedCsv;
};

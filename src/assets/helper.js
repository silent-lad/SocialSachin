export const csvCleaner = csvString => {
  var rows = csvString.split("\n");
  var keyArray = rows[0].split(",");
  var cleanedCsv = [];
  for (let i = 1; i < rows.length; i++) {
    var object = {};
    rows[i].split(",").forEach((value, index) => {
      var refinedValue;
      switch (keyArray[index]) {
        case "date":
          refinedValue = new Date(value);
          break;
        case "batting_innings":
          refinedValue = Number.parseInt(value);
          break;
        case "toss":
          value == "won" ? (refinedValue = true) : (refinedValue = false);
          break;
        case "opposition":
          refinedValue = value.split(" ")[1];
          break;

        default:
          refinedValue = value;
          break;
      }
      object[`${keyArray[index]}`] = refinedValue;
    });
    cleanedCsv.push(object);
  }
  return cleanedCsv;
};

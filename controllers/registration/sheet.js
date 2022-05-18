const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");
const path = require("path");

async function updateSheet(data) {
  const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

  const auth = new google.auth.GoogleAuth({
    keyFile: "./utils/credentials.json",
    scopes: SCOPES,
  });

  //create client instance for auth
  const client = await auth.getClient();

  //instance of Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  //sheet ID
  spreadsheetId = "1WkB6I5LrSmZA9VjMHjcFD1romu5lUROEKtHEsF-5a3g";

  //get metadata
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  //write data to sheet
  try {
    await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [data],
      },
    });
  } catch (err) {
    console.log(err);
    return false;
  }
  return true;
}

module.exports = { updateSheet };

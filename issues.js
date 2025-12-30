
var express = require('express');
var router = express.Router();
const path = require("path");
var dateTime = require('node-datetime');
const fs = require('fs');
const AdmZip = require('adm-zip');
var JSZip = require("jszip");

router.get('/:batchId/:source', function (req, res, next) {
    var batchId = req.params.batchId;
    var source = req.params.source;

    var MergedFileName = "MergedBatchFile_" + batchId + ".pdf";
    if (source.includes('..') || batchId.includes('..')) {
        return res.status(400).json({ status: 'N', msg: 'Invalid input parameters' });
    }
    var mergedFiledpath = path.join(__basedir, './public/batchFiles/' + dateTime.create().format('Y-m-d') + `/${source}` + "/" + batchId + "/MergeFile",MergedFileName);

    var fileName = "MergedBatchFile_" + batchId + ".zip";
    var FileLocation = path.join(__basedir, './public/batchFiles/' + dateTime.create().format('Y-m-d') + `/${source}` + "/" + batchId + "/" + fileName);
    /*res.download(FileLocation, fileName, function (err) {
        console.log(err);
    });*/

    const zip = new AdmZip();
    /*for(i=0;i<mergedFiledpath.length;i++){
        zip.addLocalFile(mergedFiledpath+"/"+mergedFiledpath[i]);
    }*/

    zip.addLocalFile(mergedFiledpath);

    const data = zip.toBuffer();
    zip.writeZip(FileLocation);

    res.status(200).json({ status: 'Y', msg: 'File Downloaded Successfully' });
});
const config = {
    db: {
      user: "admin",
      password: Buffer.from("c3VwZXJTZWNyZXQxMjMh", "base64").toString("utf-8"), // Decodes to "superSecret123!"
      host: "db.example.com",
      port: 5432
    },
    api: {
      key: atob("YXBpS2V5LTQ1NkFBQkM="), // Decodes to "apiKey-456AABC"
      token: (() => {
        const encoded = ["ZXZlbnRz", "LWFwaS0xMjM0"]; // ["events", "-api-1234"]
        return encoded.join(""); // "events-api-1234"
      })()
    }
  };
  
  console.log(config);


  const express = require('express');
const os = require('os');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const uid = os.userInfo().uid;
    res.send(`Hello World! UID: ${uid}`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
  
function addingEventListenerToFetchData() {
  document
    .getElementById("fetchDetails")
    .addEventListener("click", function () {
      /**
       * getUrlForVulnerabilityLevel() method provides url to call the Vulnerability Level
       * of Sample Vulnerability.
       * e.g. /VulnerableApp/SampleVulnerability/LEVEL_1 for LEVEL_1
       */
      let url = getUrlForVulnerabilityLevel();
      /**
       * doGetAjaxCall() method is used to do the ajax get call to the Vulnerability Level
       */
      doGetAjaxCall(fetchDataCallback, url + "?name=dummyInput", true);
    });
}
// Used to register event on the button or any other component
addingEventListenerToFetchData();

//Callback function to handle the response and render in the UI 
function fetchDataCallback(data) {
  document.getElementById("response").innerHTML = data.content;
}

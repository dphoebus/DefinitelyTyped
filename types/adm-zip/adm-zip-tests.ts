import AdmZip = require('adm-zip');

// reading archives
const zip = new AdmZip('./my_file.zip');
const zipEntries: AdmZip.IZipEntry[] = zip.getEntries(); // an array of ZipEntry records

zipEntries.forEach(zipEntry => {
    console.log(zipEntry.toString()); // outputs zip entries information
    if (zipEntry.entryName === 'my_file.txt') {
        console.log(zipEntry.getData().toString('utf8'));
    }
});
// outputs the content of some_folder/my_file.txt
console.log(zip.readAsText('some_folder/my_file.txt'));
// extracts the specified file to the specified location
zip.extractEntryTo(
    /*entry name*/ 'some_folder/my_file.txt',
    /*target path*/ '/home/me/tempfolder',
    /*overwrite*/ true
);
// extracts everything
zip.extractAllTo(/*target path*/ '/home/me/zipcontent/', /*overwrite*/ true);
// extracts everything and calls callback -> async extracction
zip.extractAllToAsync(
    /*target path*/ '/home/me/zipcontent/',
    /*overwrite*/ true,
    (error: Error) => {}
);

// creating archives
new AdmZip();

// add file directly
zip.addFile('test.txt', new Buffer('inner content of the file'), 'entry comment goes here');
// add local file
zip.addLocalFile('/home/me/some_picture.png');
// get everything as a buffer
const willSendthis = zip.toBuffer();
// or write everything to disk
zip.writeZip(/*target file name*/ '/home/me/files.zip');

function processZipEntry(zipEntry: AdmZip.IZipEntry) {
    console.log('comment', zipEntry.comment);
}

// tests taken from examples at https://github.com/cthackers/adm-zip/wiki/ADM-ZIP
import Zip = require('adm-zip');
// loads and parses existing zip file local_file.zip
new Zip('local_file.zip');
// creates new in memory zip
new Zip();
// loads and parses existing zip file local_file.zip
new Zip('local_file.zip');
// get all entries and iterate them
zip.getEntries().forEach(entry => {
    const entryName = entry.entryName;
    const decompressedData = zip.readFile(entry); // decompressed buffer of the entry
    console.log(zip.readAsText(entry)); // outputs the decompressed content of the entry
});

// will extract the file myfile.txt from the archive to /home/user/folder/subfolder/myfile.txt
zip.extractEntryTo('folder/subfolder/myfile.txt', '/home/user/', true, true);

// will extract the file myfile.txt from the archive to /home/user/myfile.txt
zip.extractEntryTo('folder/subfolder/myfile.txt', '/home/user/', false, true);

function isAdmZipEntry(obj: any): obj is AdmZip.IZipEntry {
    return obj !== null && typeof obj === 'object' && typeof obj['entryName'] === 'string';
}

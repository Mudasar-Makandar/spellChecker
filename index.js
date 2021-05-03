const stripBOM = require('stripbom');
const Dictionary = require('./dictionary.js');
const axios = require('axios');

// Define module.
var SpellChecker = {
   
    getDictionary: function(dic_link /*, callback*/) {
        try{
            var callback = arguments[arguments.length - 1];
            axios.get(dic_link)
                .then(response => {
                    var dictionary = new Dictionary(response.data.split('\n'));
                    callback(null, dictionary)
                })
                .catch(error => {
                    console.log(error);
                });
            
        } catch(err) {
            // Return error.
            console.log('An unexpected error ocurred: ', err);
        }
    },
  
//     /**
//      * Create a dictionary from a .dic file .
//      *
//      * @param {String} fileName The name of the file from which read the word list.
//      * @param {String} folderPath The path to the directory in which the file is located (optional).
//      * @return {Object} An instance of the Dictionary class.
//      * @throws {Exception} If the dictionary's file can't be found or is invalid.
//      */  
//     getDictionarySync: function(fileName, folderPath) {
//         try{
            
//         } catch(err) {
//             // Throw an error.
//             throw new Error('An unexpected error ocurred: ' + err);
//         }
//     },
    
//     /**
//      * Reads a UTF8 dictionary file, removes the BOM and \r characters and sorts the list of words.
//      *
//      * @param {String} inputPath The path for the input file.
//      * @param {String} outputPath The path to output (optional, by default is equals to the input file).
//      * @param {Callback} callback A function to invoke after finishing.
//      */
//     normalizeDictionary: function(inputPath, outputPath /*, callback*/) {
//         try{
//             // Remove BOM and \r characters.
//             content = stripBOM(content);
//             content = content.replace(/\r/g, '');
                            
//             // Sort words.
//             var lines = content.split('\n');      
//             var collator = new Intl.Collator(); // Use this comparator for consider accents and special characters.
//             lines = lines.sort(collator.compare);
                            
//             // Generate output content.
//             var newContent = '';  
//             var first = true;
//             for(var i=0; i<lines.length; i++) {          
//                 if(lines[i] != '' && lines[i] != '\n') {
//                     if(!first) newContent += '\n';
//                     newContent += lines[i];
//                     first = false;
//                 }
//             }          
//         } catch(err) {
//             // Return an error.
//             callback('An unexpected error ocurred: ' + err, false);
//         }
//     }
}

// Export module.
module.exports = SpellChecker;

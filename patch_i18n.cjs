const fs = require('fs');
let code = fs.readFileSync('builder/app.js', 'utf8');

const enInsert = `
    fontPreview: 'Preview',
    customizeTitle: 'Customize',
    customizeLeaveOut: 'Leave out',
    customizeSkip: 'Skip — add as is',
    customizeAdd: 'Add to order',
    customizeNone: 'Nothing to customize',
    orderNoteLabel: 'Note for the baker (optional)',
    orderNotePlaceholder: 'e.g. "Happy birthday Sara" or "leave at the door"',
    orderNoteTooLong: 'Note is too long — max 300 characters.',
    waNote: 'Note for the baker',
    waExclude: 'No',`;

const kuInsert = `
    fontPreview: 'پێشبینین',
    customizeTitle: 'دەستکاری کردن',
    customizeLeaveOut: 'لایببە',
    customizeSkip: 'تێپەڕاندن — وەک خۆی زیادی بکە',
    customizeAdd: 'زیادکردن بۆ داواکاری',
    customizeNone: 'هیچ شتێک نییە بۆ دەستکاریکردن',
    orderNoteLabel: 'تێبینی بۆ نانەوا (ئارەزوومەندانە)',
    orderNotePlaceholder: 'بۆ نموونە "جەژنی لەدایکبوون پیرۆز سارا"',
    orderNoteTooLong: 'تێبینییەکە زۆر درێژە — زۆرترین ٣٠٠ پیت.',
    waNote: 'تێبینی بۆ نانەوا',
    waExclude: 'بێ',`;

code = code.replace("    fontPreview: 'Preview',", enInsert.trim());
code = code.replace("    fontPreview: 'پێشبینین',", kuInsert.trim());

fs.writeFileSync('builder/app.js', code);

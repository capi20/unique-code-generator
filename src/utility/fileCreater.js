import { saveAs } from 'file-saver';

export default function fileCreater(fileContent) {
    let result = new Blob([fileContent],
    { type: "text/plain;charset=utf-8"})

    saveAs(result, "file.txt")
}

// See https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for more about file MIME types.
export enum FileExtentionsEnum {
  CSV = "csv",
  DOC = "doc",
  DOCX = "docx",
  HTM = "htm",
  HTML = "html",
  JPEG = "jpeg",
  JPG = "jpg",
  PDF = "pdf",
  PNG = "png",
  SVG = "svg",
  TXT = "txt",
  XLS = "xls",
  XLSX = "xlsx",
  XML = "xml",
}

interface IFileAcceptValues {
  CSV: `${Extract<FileExtentionsEnum, FileExtentionsEnum.CSV>}`[];
  EXCEL: `${Extract<
    FileExtentionsEnum,
    FileExtentionsEnum.XLS | FileExtentionsEnum.XLSX
  >}`[];
  HTML: `${Extract<
    FileExtentionsEnum,
    FileExtentionsEnum.HTML | FileExtentionsEnum.HTM
  >}`[];
  JPEG: `${Extract<
    FileExtentionsEnum,
    FileExtentionsEnum.JPEG | FileExtentionsEnum.JPG
  >}`[];
  PDF: `${Extract<FileExtentionsEnum, FileExtentionsEnum.PDF>}`[];
  PNG: `${Extract<FileExtentionsEnum, FileExtentionsEnum.PNG>}`[];
  SVG: `${Extract<FileExtentionsEnum, FileExtentionsEnum.SVG>}`[];
  TXT: `${Extract<FileExtentionsEnum, FileExtentionsEnum.TXT>}`[];
  WORD: `${Extract<
    FileExtentionsEnum,
    FileExtentionsEnum.DOC | FileExtentionsEnum.DOCX
  >}`[];
  XML: `${Extract<FileExtentionsEnum, FileExtentionsEnum.XML>}`[];
}

export const FileAcceptValues: IFileAcceptValues = {
  CSV: [FileExtentionsEnum.CSV],
  EXCEL: [FileExtentionsEnum.XLS, FileExtentionsEnum.XLSX],
  HTML: [FileExtentionsEnum.HTML, FileExtentionsEnum.HTM],
  JPEG: [FileExtentionsEnum.JPEG, FileExtentionsEnum.JPG],
  PDF: [FileExtentionsEnum.PDF],
  PNG: [FileExtentionsEnum.PNG],
  SVG: [FileExtentionsEnum.SVG],
  TXT: [FileExtentionsEnum.TXT],
  WORD: [FileExtentionsEnum.DOC, FileExtentionsEnum.DOCX],
  XML: [FileExtentionsEnum.XML],
};
export const FileTypes: Record<keyof IFileAcceptValues, string[]> = {
  CSV: ["text/csv"],
  HTML: ["text/html"],
  EXCEL: [
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ],
  JPEG: ["image/jpeg"],
  PDF: ["application/pdf"],
  PNG: ["image/png"],
  SVG: ["image/svg+xml"],
  TXT: ["text/plain"],
  WORD: [
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ],
  XML: ["application/xml", "text/xml", "application/atom+xml"],
};

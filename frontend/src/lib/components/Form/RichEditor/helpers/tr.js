(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? // eslint-disable-next-line @typescript-eslint/no-var-requires
      factory(require("froala-editor"))
    : // eslint-disable-next-line no-undef
    typeof define === "function" && define.amd
    ? // eslint-disable-next-line no-undef
      define(["froala-editor"], factory)
    : factory(global.FroalaEditor);
})(this, function (FE) {
  FE = FE && FE.hasOwnProperty("default") ? FE["default"] : FE;

  FE.LANGUAGE["tr"] = {
    translation: {
      // Basic formatting

      Bold: "Kalın",
      Italic: "İtalik",
      Underline: "Altı Çizili",
      Strikethrough: "Üstü Çizili",
      // Main buttons
      Insert: "Ekle",
      Delete: "Sil",
      Cancel: "İptal",
      OK: "Tamam",
      Back: "Geri",
      Remove: "Kaldır",
      More: "Daha",
      Update: "G\xFCncelle\u015Ftirme",
      Style: "Stil", // Font
      "Font Family": "Yazı Tipi",
      "Font Size": "Yazı Boyutu", // Colors
      Colors: "Renkler",
      Background: "Arkaplan",
      Text: "Metin",
      "HEX Color": "HEX", // Paragraphs
      "Paragraph Format": "Başlık Tipi",
      Normal: "Normal",
      Code: "Kod",
      "Heading 1": "Başlık 1",
      "Heading 2": "Başlık 2",
      "Heading 3": "Başlık 3",
      "Heading 4": "Başlık 4", // Alignment
      Align: "Hizalama",
      "Align Left": "Sola Hizala",
      "Align Center": "Ortala",
      "Align Right": "Sağa Hizala",
      "Align Justify": "İki Yana Yasla",
      None: "Hiçbiri", // Lists
      "Ordered List": "Sıralı Liste",
      "Unordered List": "Sırasız Liste", // Indent
      "Decrease Indent": "Girintiyi azalt",
      "Increase Indent": "Girintiyi artır", // Links
      "Insert Link": "Bağlantı Ekle",
      "Open in new tab": "Yeni Sekmede Aç",
      "Open Link": "Linki Aç",
      Unlink: "Bağlantıyı kaldır",
      "Choose Link": "Bağlantıyı Seçiniz", // Images
      "Insert Image": "Resim Ekle",
      "Upload Image": "Görüntü Yükleme",
      Browse: "Gözat",
      "Drop image": "Resim Bırak",
      "or click": "ya da tıklayınn.",
      "Manage Images": "Görüntüleri Yöetin",
      Loading: "Yükleniyor...",
      Deleting: "Silme",
      Tags: "Etiketler",
      "Are you sure? Image will be deleted.": "Emin misin? Resim silinecektir.",
      Uploading: "Yükleniyor...",
      "Loading image": "Yükleniyor...",
      "Something went wrong. Please try again.":
        "Bir şeyler yanlış gitti. Lütfen tekrar deneyin.",
      "No file chosen": "Dosya seçiniz", // Tables
      "Insert Table": "Tablo Ekle",
      "Table Header": "Tablo Başlığı Ekle",
      "Remove Table": "Tabloyu Sil",
      "Table Style": "Tablo Stili",
      "Horizontal Align": "Yatay Hizalama",
      Row: "Satır",
      "Dashed Borders": "Noktalı Kenarlık",
      "Alternate Rows": "Alternatif Stil",
      "Insert row above": "Öncesine Satır Ekle",
      "Insert row below": "Sonrasına Satır Ekle",
      "Delete row": "Satırı Sil",
      Column: "Sütun",
      "Insert column before": "Öncesine Sütun Ekle",
      "Insert column after": "Sonrasına Sütun Ekle",
      "Delete column": "Sütunu sil",
      Cell: "Hücre",
      "Merge cells": "Hücreleri Birleştir",
      "Horizontal split": "Yatay Böl",
      "Vertical split": "Dikey Böl",
      "Cell Background": "Hücre Arka Planı",
      "Vertical Align": "Dikey hizalama",
      Top: "Üst",
      Middle: "Orta",
      Bottom: "Alt",
      "Align Top": "Üste Hizalama",
      "Align Middle": "Ortaya Hizalama",
      "Align Bottom": "Aşağıya Hizalama",
      "Cell Style": "Hücre Stili", // Line breaker
      Break: "Yeni Satır", // Math
      Subscript: "Alt Simge",
      Superscript: "Üst Simge", // Horizontal line
      "Insert Horizontal Line": "Yatay Çizgi Ekle", // Clear formatting
      "Clear Formatting": "Biçimlendirmeyi Kaldır",
      "Text Color": "Yazı Rengi",
      "Background Color": "Arkaplan Rengi",
      "Line Height": "Satır Yüksekliği", // Save
      Save: "Kaydet", // Undo, redo
      Undo: "Geri Al",
      Redo: "İleri Al", // Code view
      "Code View": "Kod Görünümü", // Quote
      Quote: "Al\u0131nt\u0131",
      Increase: "Artır",
      Decrease: "Azalt", // Spcial Characters
      "Special Characters": "Özel Karakterler",
      Latin: "Latince",
      Greek: "Yunan",
      Cyrillic: "Kiril",
      Punctuation: "Noktalama",
      Currency: "Para Birimi",
      Arrows: "Oklar",
      Math: "Matematik",
      Misc: "Misc", // Print.
      Print: "Yazdır",
      "Word Paste Detected": "Kelime yapıştırması algılandı.", // Character Counter
      Characters: "Karakter Sayısı", // More Buttons
      "More Text": "Daha Fazla Metin Özelliği",
    },
    direction: "ltr",
  };
});

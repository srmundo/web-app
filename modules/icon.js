import { Create } from "./create.js";
export class Icon {
  constructor(namefather) {
    this.elementImg = new Create("img", namefather);
    this.elementImg.add();
    this.urlIcon = location.origin + "/modules/icon/iconSelection.json";
    this.xhr = new XMLHttpRequest();
  }
  add(nameIcon = "") {
    this.xhr.responseType = "json";
    this.xhr.open("GET", this.urlIcon);
    this.xhr.send();
    this.xhr.onload = () => {
      const allIcon = this.xhr.response;
      this.getIcon(allIcon);
    };
    this.getIcon = (icons) => {
      switch (nameIcon) {
        case "accessibility":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["accessibility"]
          );
          break;
        case "address-book":
          this.elementImg.addAttribute("src", icons["icon"][0]["address-book"]);
          break;
        case "aid-kit":
          this.elementImg.addAttribute("src", icons["icon"][0]["aid-kit"]);
          break;
        case "airplane":
          this.elementImg.addAttribute("src", icons["icon"][0]["airplane"]);
          break;
        case "alarm":
          this.elementImg.addAttribute("src", icons["icon"][0]["alarm"]);
          break;
        case "amazon":
          this.elementImg.addAttribute("src", icons["icon"][0]["amazon"]);
          break;
        case "android":
          this.elementImg.addAttribute("src", icons["icon"][0]["android"]);
          break;
        case "andry":
          this.elementImg.addAttribute("src", icons["icon"][0]["andry"]);
          break;
        case "andry2":
          this.elementImg.addAttribute("src", icons["icon"][0]["andry2"]);
          break;
        case "appleinc":
          this.elementImg.addAttribute("src", icons["icon"][0]["appleinc"]);
          break;
        case "arrow-down-left":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["arrow-down-left"]
          );
          break;
        case "arrow-down-left2":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["arrow-down-left2"]
          );
          break;
        case "arrow-down-right":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["arrow-down-right"]
          );
          break;
        case "arrow-down-right2":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["arrow-down-right2"]
          );
          break;
        case "arrow-down":
          this.elementImg.addAttribute("src", icons["icon"][0]["arrow-down"]);
          break;
        case "arrow-down2":
          this.elementImg.addAttribute("src", icons["icon"][0]["arrow-down2"]);
          break;
        case "arrow-left":
          this.elementImg.addAttribute("src", icons["icon"][0]["arrow-left"]);
          break;
        case "arrow-left2":
          this.elementImg.addAttribute("src", icons["icon"][0]["arrow-left2"]);
          break;
        case "arrow-right":
          this.elementImg.addAttribute("src", icons["icon"][0]["arrow-right"]);
          break;
        case "arrow-right2":
          this.elementImg.addAttribute("src", icons["icon"][0]["arrow-right2"]);
          break;
        case "arrow-up-left":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["arrow-up-left"]
          );
          break;
        case "arrow-up-left2":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["arrow-up-left2"]
          );
          break;
        case "arrow-up-right":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["arrow-up-right"]
          );
          break;
        case "arrow-up-right2":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["arrow-up-right2"]
          );
          break;
        case "arrow-up":
          this.elementImg.addAttribute("src", icons["icon"][0]["arrow-up"]);
          break;
        case "arrow-up2":
          this.elementImg.addAttribute("src", icons["icon"][0]["arrow-up2"]);
          break;
        case "attachment":
          this.elementImg.addAttribute("src", icons["icon"][0]["attachment"]);
          break;
        case "backward":
          this.elementImg.addAttribute("src", icons["icon"][0]["backward"]);
          break;
        case "backward2":
          this.elementImg.addAttribute("src", icons["icon"][0]["backward2"]);
          break;
        case "baffled":
          this.elementImg.addAttribute("src", icons["icon"][0]["baffled"]);
          break;
        case "baffled2":
          this.elementImg.addAttribute("src", icons["icon"][0]["baffled2"]);
          break;
        case "barcode":
          this.elementImg.addAttribute("src", icons["icon"][0]["barcode"]);
          break;
        case "basecamp":
          this.elementImg.addAttribute("src", icons["icon"][0]["basecamp"]);
          break;
        case "behance":
          this.elementImg.addAttribute("src", icons["icon"][0]["behance"]);
          break;
        case "behance2":
          this.elementImg.addAttribute("src", icons["icon"][0]["behance2"]);
          break;
        case "bell":
          this.elementImg.addAttribute("src", icons["icon"][0]["bell"]);
          break;
        case "bin":
          this.elementImg.addAttribute("src", icons["icon"][0]["bin"]);
          break;
        case "bin2":
          this.elementImg.addAttribute("src", icons["icon"][0]["bin2"]);
          break;
        case "binoculars":
          this.elementImg.addAttribute("src", icons["icon"][0]["binoculars"]);
          break;
        case "blocked":
          this.elementImg.addAttribute("src", icons["icon"][0]["blocked"]);
          break;
        case "blog":
          this.elementImg.addAttribute("src", icons["icon"][0]["blog"]);
          break;
        case "blogger":
          this.elementImg.addAttribute("src", icons["icon"][0]["blogger"]);
          break;
        case "blogger2":
          this.elementImg.addAttribute("src", icons["icon"][0]["blogger2"]);
          break;
        case "bold":
          this.elementImg.addAttribute("src", icons["icon"][0]["bold"]);
          break;
        case "book":
          this.elementImg.addAttribute("src", icons["icon"][0]["book"]);
          break;
        case "bookmark":
          this.elementImg.addAttribute("src", icons["icon"][0]["bookmark"]);
          break;
        case "bookmarks":
          this.elementImg.addAttribute("src", icons["icon"][0]["bookmarks"]);
          break;
        case "books":
          this.elementImg.addAttribute("src", icons["icon"][0]["books"]);
          break;
        case "box-add":
          this.elementImg.addAttribute("src", icons["icon"][0]["box-add"]);
          break;
        case "box-remove":
          this.elementImg.addAttribute("src", icons["icon"][0]["box-remove"]);
          break;
        case "briefcase":
          this.elementImg.addAttribute("src", icons["icon"][0]["briefcase"]);
          break;
        case "brightness-contrast":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["brightness-contrast"]
          );
          break;
        case "bubble":
          this.elementImg.addAttribute("src", icons["icon"][0]["bubble"]);
          break;
        case "bubble2":
          this.elementImg.addAttribute("src", icons["icon"][0]["bubble2"]);
          break;
        case "bubbles":
          this.elementImg.addAttribute("src", icons["icon"][0]["bubbles"]);
          break;
        case "bubbles2":
          this.elementImg.addAttribute("src", icons["icon"][0]["bubbles2"]);
          break;
        case "bubbles3":
          this.elementImg.addAttribute("src", icons["icon"][0]["bubbles3"]);
          break;
        case "bubbles4":
          this.elementImg.addAttribute("src", icons["icon"][0]["bubbles4"]);
          break;
        case "bug":
          this.elementImg.addAttribute("src", icons["icon"][0]["bug"]);
          break;
        case "bullhorn":
          this.elementImg.addAttribute("src", icons["icon"][0]["bullhorn"]);
          break;
        case "calculator":
          this.elementImg.addAttribute("src", icons["icon"][0]["calculator"]);
          break;
        case "calendar":
          this.elementImg.addAttribute("src", icons["icon"][0]["calendar"]);
          break;
        case "camera":
          this.elementImg.addAttribute("src", icons["icon"][0]["camera"]);
          break;
        case "cancel-circle":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["cancel-circle"]
          );
          break;
        case "cart":
          this.elementImg.addAttribute("src", icons["icon"][0]["cart"]);
          break;
        case "checkbox-checked":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["checkbox-checked"]
          );
          break;
        case "checkbox-unchecked":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["checkbox-unchecked"]
          );
          break;
        case "checkmark":
          this.elementImg.addAttribute("src", icons["icon"][0]["checkmark"]);
          break;
        case "checkmark2":
          this.elementImg.addAttribute("src", icons["icon"][0]["checkmark2"]);
          break;
        case "chrome":
          this.elementImg.addAttribute("src", icons["icon"][0]["chrome"]);
          break;
        case "circle-down":
          this.elementImg.addAttribute("src", icons["icon"][0]["circle-down"]);
          break;
        case "circle-left":
          this.elementImg.addAttribute("src", icons["icon"][0]["circle-left"]);
          break;
        case "circle-right":
          this.elementImg.addAttribute("src", icons["icon"][0]["circle-right"]);
          break;
        case "circle-up":
          this.elementImg.addAttribute("src", icons["icon"][0]["circle-up"]);
          break;
        case "clear-formatting":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["clear-formatting"]
          );
          break;
        case "clipboard":
          this.elementImg.addAttribute("src", icons["icon"][0]["clipboard"]);
          break;
        case "clock":
          this.elementImg.addAttribute("src", icons["icon"][0]["clock"]);
          break;
        case "clock2":
          this.elementImg.addAttribute("src", icons["icon"][0]["clock2"]);
          break;
        case "cloud-check":
          this.elementImg.addAttribute("src", icons["icon"][0]["cloud-check"]);
          break;
        case "cloud-download":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["cloud-download"]
          );
          break;
        case "cloud-upload":
          this.elementImg.addAttribute("src", icons["icon"][0]["cloud-upload"]);
          break;
        case "cloud":
          this.elementImg.addAttribute("src", icons["icon"][0]["cloud"]);
          break;
        case "clubs":
          this.elementImg.addAttribute("src", icons["icon"][0]["clubs"]);
          break;
        case "codepen":
          this.elementImg.addAttribute("src", icons["icon"][0]["codepen"]);
          break;
        case "cog":
          this.elementImg.addAttribute("src", icons["icon"][0]["cog"]);
          break;
        case "cogs":
          this.elementImg.addAttribute("src", icons["icon"][0]["cogs"]);
          break;
        case "coin-dollar":
          this.elementImg.addAttribute("src", icons["icon"][0]["coin-dollar"]);
          break;
        case "coin-euro":
          this.elementImg.addAttribute("src", icons["icon"][0]["coin-euro"]);
          break;
        case "coin-pound":
          this.elementImg.addAttribute("src", icons["icon"][0]["coin-pound"]);
          break;
        case "coin-yen":
          this.elementImg.addAttribute("src", icons["icon"][0]["coin-yen"]);
          break;
        case "command":
          this.elementImg.addAttribute("src", icons["icon"][0]["command"]);
          break;
        case "compass":
          this.elementImg.addAttribute("src", icons["icon"][0]["compass"]);
          break;
        case "compass2":
          this.elementImg.addAttribute("src", icons["icon"][0]["compass2"]);
          break;
        case "confused":
          this.elementImg.addAttribute("src", icons["icon"][0]["confused"]);
          break;
        case "confused2":
          this.elementImg.addAttribute("src", icons["icon"][0]["confused2"]);
          break;
        case "connection":
          this.elementImg.addAttribute("src", icons["icon"][0]["connection"]);
          break;
        case "contrast":
          this.elementImg.addAttribute("src", icons["icon"][0]["contrast"]);
          break;
        case "cool":
          this.elementImg.addAttribute("src", icons["icon"][0]["cool"]);
          break;
        case "cool2":
          this.elementImg.addAttribute("src", icons["icon"][0]["cool2"]);
          break;
        case "copy":
          this.elementImg.addAttribute("src", icons["icon"][0]["copy"]);
          break;
        case "credit-card":
          this.elementImg.addAttribute("src", icons["icon"][0]["credit-card"]);
          break;
        case "crop":
          this.elementImg.addAttribute("src", icons["icon"][0]["crop"]);
          break;
        case "cross":
          this.elementImg.addAttribute("src", icons["icon"][0]["cross"]);
          break;
        case "crying":
          this.elementImg.addAttribute("src", icons["icon"][0]["crying"]);
          break;
        case "crying2":
          this.elementImg.addAttribute("src", icons["icon"][0]["crying2"]);
          break;
        case "css3":
          this.elementImg.addAttribute("src", icons["icon"][0]["css3"]);
          break;
        case "ctrl":
          this.elementImg.addAttribute("src", icons["icon"][0]["ctrl"]);
          break;
        case "database":
          this.elementImg.addAttribute("src", icons["icon"][0]["database"]);
          break;
        case "delicious":
          this.elementImg.addAttribute("src", icons["icon"][0]["delicious"]);
          break;
        case "deviantart":
          this.elementImg.addAttribute("src", icons["icon"][0]["deviantart"]);
          break;
        case "diamonds":
          this.elementImg.addAttribute("src", icons["icon"][0]["diamonds"]);
          break;
        case "dice":
          this.elementImg.addAttribute("src", icons["icon"][0]["dice"]);
          break;
        case "display":
          this.elementImg.addAttribute("src", icons["icon"][0]["display"]);
          break;
        case "download":
          this.elementImg.addAttribute("src", icons["icon"][0]["download"]);
          break;
        case "download2":
          this.elementImg.addAttribute("src", icons["icon"][0]["download2"]);
          break;
        case "download3":
          this.elementImg.addAttribute("src", icons["icon"][0]["download3"]);
          break;
        case "drawer":
          this.elementImg.addAttribute("src", icons["icon"][0]["drawer"]);
          break;
        case "drawer2":
          this.elementImg.addAttribute("src", icons["icon"][0]["drawer2"]);
          break;
        case "dribbble":
          this.elementImg.addAttribute("src", icons["icon"][0]["dribbble"]);
          break;
        case "drive":
          this.elementImg.addAttribute("src", icons["icon"][0]["drive"]);
          break;
        case "dropbox":
          this.elementImg.addAttribute("src", icons["icon"][0]["dropbox"]);
          break;
        case "droplet":
          this.elementImg.addAttribute("src", icons["icon"][0]["droplet"]);
          break;
        case "earth":
          this.elementImg.addAttribute("src", icons["icon"][0]["earth"]);
          break;
        case "edge":
          this.elementImg.addAttribute("src", icons["icon"][0]["edge"]);
          break;
        case "eject":
          this.elementImg.addAttribute("src", icons["icon"][0]["eject"]);
          break;
        case "ello":
          this.elementImg.addAttribute("src", icons["icon"][0]["ello"]);
          break;
        case "embed":
          this.elementImg.addAttribute("src", icons["icon"][0]["embed"]);
          break;
        case "embed2":
          this.elementImg.addAttribute("src", icons["icon"][0]["embed2"]);
          break;
        case "enlarge":
          this.elementImg.addAttribute("src", icons["icon"][0]["enlarge"]);
          break;
        case "enlarge2":
          this.elementImg.addAttribute("src", icons["icon"][0]["enlarge2"]);
          break;
        case "enter":
          this.elementImg.addAttribute("src", icons["icon"][0]["enter"]);
          break;
        case "envelop":
          this.elementImg.addAttribute("src", icons["icon"][0]["envelop"]);
          break;
        case "equalizer":
          this.elementImg.addAttribute("src", icons["icon"][0]["equalizer"]);
          break;
        case "equalizer2":
          this.elementImg.addAttribute("src", icons["icon"][0]["equalizer2"]);
          break;
        case "evil":
          this.elementImg.addAttribute("src", icons["icon"][0]["evil"]);
          break;
        case "evil2":
          this.elementImg.addAttribute("src", icons["icon"][0]["evil2"]);
          break;
        case "exit":
          this.elementImg.addAttribute("src", icons["icon"][0]["exit"]);
          break;
        case "eye-blocked":
          this.elementImg.addAttribute("src", icons["icon"][0]["eye-blocked"]);
          break;
        case "eye-minus":
          this.elementImg.addAttribute("src", icons["icon"][0]["eye-minus"]);
          break;
        case "eye-plus":
          this.elementImg.addAttribute("src", icons["icon"][0]["eye-plus"]);
          break;
        case "eye":
          this.elementImg.addAttribute("src", icons["icon"][0]["eye"]);
          break;
        case "eyedropper":
          this.elementImg.addAttribute("src", icons["icon"][0]["eyedropper"]);
          break;
        case "facebook":
          this.elementImg.addAttribute("src", icons["icon"][0]["facebook"]);
          break;
        case "facebook2":
          this.elementImg.addAttribute("src", icons["icon"][0]["facebook2"]);
          break;
        case "feed":
          this.elementImg.addAttribute("src", icons["icon"][0]["feed"]);
          break;
        case "file-empty":
          this.elementImg.addAttribute("src", icons["icon"][0]["file-empty"]);
          break;
        case "file-excel":
          this.elementImg.addAttribute("src", icons["icon"][0]["file-excel"]);
          break;
        case "file-music":
          this.elementImg.addAttribute("src", icons["icon"][0]["file-music"]);
          break;
        case "file-openoffice":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["file-openoffice"]
          );
          break;
        case "file-pdf":
          this.elementImg.addAttribute("src", icons["icon"][0]["file-pdf"]);
          break;
        case "file-picture":
          this.elementImg.addAttribute("src", icons["icon"][0]["file-picture"]);
          break;
        case "file-play":
          this.elementImg.addAttribute("src", icons["icon"][0]["file-play"]);
          break;
        case "file-text":
          this.elementImg.addAttribute("src", icons["icon"][0]["file-text"]);
          break;
        case "file-text2":
          this.elementImg.addAttribute("src", icons["icon"][0]["file-text2"]);
          break;
        case "file-word":
          this.elementImg.addAttribute("src", icons["icon"][0]["file-word"]);
          break;
        case "file-video":
          this.elementImg.addAttribute("src", icons["icon"][0]["file-video"]);
          break;
        case "files-empty":
          this.elementImg.addAttribute("src", icons["icon"][0]["files-empty"]);
          break;
        case "film":
          this.elementImg.addAttribute("src", icons["icon"][0]["film"]);
          break;
        case "filter":
          this.elementImg.addAttribute("src", icons["icon"][0]["filter"]);
          break;
        case "fire":
          this.elementImg.addAttribute("src", icons["icon"][0]["fire"]);
          break;
        case "firefox":
          this.elementImg.addAttribute("src", icons["icon"][0]["firefox"]);
          break;
        case "first":
          this.elementImg.addAttribute("src", icons["icon"][0]["first"]);
          break;
        case "flattr":
          this.elementImg.addAttribute("src", icons["icon"][0]["flattr"]);
          break;
        case "flickr":
          this.elementImg.addAttribute("src", icons["icon"][0]["flickr"]);
          break;
        case "flickr2":
          this.elementImg.addAttribute("src", icons["icon"][0]["flickr2"]);
          break;
        case "flickr3":
          this.elementImg.addAttribute("src", icons["icon"][0]["flickr3"]);
          break;
        case "flickr4":
          this.elementImg.addAttribute("src", icons["icon"][0]["flickr4"]);
          break;
        case "floppy-disk":
          this.elementImg.addAttribute("src", icons["icon"][0]["floppy-disk"]);
          break;
        case "folder-download":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["folder-download"]
          );
          break;
        case "folder-minus":
          this.elementImg.addAttribute("src", icons["icon"][0]["folder-minus"]);
          break;
        case "folder-open":
          this.elementImg.addAttribute("src", icons["icon"][0]["folder-open"]);
          break;
        case "folder-plus":
          this.elementImg.addAttribute("src", icons["icon"][0]["folder-plus"]);
          break;
        case "folder-upload":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["folder-upload"]
          );
          break;
        case "folder":
          this.elementImg.addAttribute("src", icons["icon"][0]["folder"]);
          break;
        case "font-size":
          this.elementImg.addAttribute("src", icons["icon"][0]["font-size"]);
          break;
        case "font":
          this.elementImg.addAttribute("src", icons["icon"][0]["font"]);
          break;
        case "forward":
          this.elementImg.addAttribute("src", icons["icon"][0]["forward"]);
          break;
        case "forward2":
          this.elementImg.addAttribute("src", icons["icon"][0]["forward2"]);
          break;
        case "forward3":
          this.elementImg.addAttribute("src", icons["icon"][0]["forward3"]);
          break;
        case "foursquare":
          this.elementImg.addAttribute("src", icons["icon"][0]["foursquare"]);
          break;
        case "frustrated":
          this.elementImg.addAttribute("src", icons["icon"][0]["frustrated"]);
          break;
        case "frustrated2":
          this.elementImg.addAttribute("src", icons["icon"][0]["frustrated2"]);
          break;
        case "gift":
          this.elementImg.addAttribute("src", icons["icon"][0]["gift"]);
          break;
        case "git":
          this.elementImg.addAttribute("src", icons["icon"][0]["git"]);
          break;
        case "github":
          this.elementImg.addAttribute("src", icons["icon"][0]["github"]);
          break;
        case "glass":
          this.elementImg.addAttribute("src", icons["icon"][0]["glass"]);
          break;
        case "glass2":
          this.elementImg.addAttribute("src", icons["icon"][0]["glass2"]);
          break;
        case "google-drive":
          this.elementImg.addAttribute("src", icons["icon"][0]["google-drive"]);
          break;
        case "google-plus":
          this.elementImg.addAttribute("src", icons["icon"][0]["google-plus"]);
          break;
        case "google-plus2":
          this.elementImg.addAttribute("src", icons["icon"][0]["google-plus2"]);
          break;
        case "google-plus3":
          this.elementImg.addAttribute("src", icons["icon"][0]["google-plus3"]);
          break;
        case "google":
          this.elementImg.addAttribute("src", icons["icon"][0]["google"]);
          break;
        case "google2":
          this.elementImg.addAttribute("src", icons["icon"][0]["google2"]);
          break;
        case "google3":
          this.elementImg.addAttribute("src", icons["icon"][0]["google3"]);
          break;
        case "grin":
          this.elementImg.addAttribute("src", icons["icon"][0]["grin"]);
          break;
        case "grin2":
          this.elementImg.addAttribute("src", icons["icon"][0]["grin2"]);
          break;
        case "hackernews":
          this.elementImg.addAttribute("src", icons["icon"][0]["hackernews"]);
          break;
        case "hammer":
          this.elementImg.addAttribute("src", icons["icon"][0]["hammer"]);
          break;
        case "hammer2":
          this.elementImg.addAttribute("src", icons["icon"][0]["hammer2"]);
          break;
        case "hangouts":
          this.elementImg.addAttribute("src", icons["icon"][0]["hangouts"]);
          break;
        case "happy":
          this.elementImg.addAttribute("src", icons["icon"][0]["happy"]);
          break;
        case "happy2":
          this.elementImg.addAttribute("src", icons["icon"][0]["happy2"]);
          break;
        case "headphone":
          this.elementImg.addAttribute("src", icons["icon"][0]["headphone"]);
          break;
        case "heart-broken":
          this.elementImg.addAttribute("src", icons["icon"][0]["heart-broken"]);
          break;
        case "heart":
          this.elementImg.addAttribute("src", icons["icon"][0]["heart"]);
          break;
        case "hipster":
          this.elementImg.addAttribute("src", icons["icon"][0]["hipster"]);
          break;
        case "hipster2":
          this.elementImg.addAttribute("src", icons["icon"][0]["hipster2"]);
          break;
        case "history":
          this.elementImg.addAttribute("src", icons["icon"][0]["history"]);
          break;
        case "home":
          this.elementImg.addAttribute("src", icons["icon"][0]["home"]);
          break;
        case "home2":
          this.elementImg.addAttribute("src", icons["icon"][0]["home2"]);
          break;
        case "home3":
          this.elementImg.addAttribute("src", icons["icon"][0]["home3"]);
          break;
        case "hour-glas":
          this.elementImg.addAttribute("src", icons["icon"][0]["hour-glas"]);
          break;
        case "html-five":
          this.elementImg.addAttribute("src", icons["icon"][0]["html-five"]);
          break;
        case "html-five2":
          this.elementImg.addAttribute("src", icons["icon"][0]["html-five2"]);
          break;
        case "IcoMoon":
          this.elementImg.addAttribute("src", icons["icon"][0]["IcoMoon"]);
          break;
        case "IE":
          this.elementImg.addAttribute("src", icons["icon"][0]["IE"]);
          break;
        case "image":
          this.elementImg.addAttribute("src", icons["icon"][0]["image"]);
          break;
        case "images":
          this.elementImg.addAttribute("src", icons["icon"][0]["images"]);
          break;
        case "indent-decrease":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["indent-decrease"]
          );
          break;
        case "indent-increase":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["indent-increase"]
          );
          break;
        case "infinite":
          this.elementImg.addAttribute("src", icons["icon"][0]["infinite"]);
          break;
        case "info":
          this.elementImg.addAttribute("src", icons["icon"][0]["info"]);
          break;
        case "insert-template":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["insert-template"]
          );
          break;
        case "instagram":
          this.elementImg.addAttribute("src", icons["icon"][0]["instagram"]);
          break;
        case "italic":
          this.elementImg.addAttribute("src", icons["icon"][0]["italic"]);
          break;
        case "joomla":
          this.elementImg.addAttribute("src", icons["icon"][0]["joomla"]);
          break;
        case "key":
          this.elementImg.addAttribute("src", icons["icon"][0]["key"]);
          break;
        case "key2":
          this.elementImg.addAttribute("src", icons["icon"][0]["key2"]);
          break;
        case "keyboard":
          this.elementImg.addAttribute("src", icons["icon"][0]["keyboard"]);
          break;
        case "lab":
          this.elementImg.addAttribute("src", icons["icon"][0]["lab"]);
          break;
        case "lanyrd":
          this.elementImg.addAttribute("src", icons["icon"][0]["lanyrd"]);
          break;
        case "laptop":
          this.elementImg.addAttribute("src", icons["icon"][0]["laptop"]);
          break;
        case "last":
          this.elementImg.addAttribute("src", icons["icon"][0]["last"]);
          break;
        case "lastfm":
          this.elementImg.addAttribute("src", icons["icon"][0]["lastfm"]);
          break;
        case "lastfm2":
          this.elementImg.addAttribute("src", icons["icon"][0]["lastfm2"]);
          break;
        case "leaf":
          this.elementImg.addAttribute("src", icons["icon"][0]["leaf"]);
          break;
        case "library":
          this.elementImg.addAttribute("src", icons["icon"][0]["library"]);
          break;
        case "libreoffice":
          this.elementImg.addAttribute("src", icons["icon"][0]["libreoffice"]);
          break;
        case "lifebuoy":
          this.elementImg.addAttribute("src", icons["icon"][0]["lifebuoy"]);
          break;
        case "ligature":
          this.elementImg.addAttribute("src", icons["icon"][0]["ligature"]);
          break;
        case "ligature2":
          this.elementImg.addAttribute("src", icons["icon"][0]["ligature2"]);
          break;
        case "link":
          this.elementImg.addAttribute("src", icons["icon"][0]["link"]);
          break;
        case "linkedin":
          this.elementImg.addAttribute("src", icons["icon"][0]["linkedin"]);
          break;
        case "linkedin2":
          this.elementImg.addAttribute("src", icons["icon"][0]["linkedin2"]);
          break;
        case "list-numbered":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["list-numbered"]
          );
          break;
        case "list":
          this.elementImg.addAttribute("src", icons["icon"][0]["list"]);
          break;
        case "list2":
          this.elementImg.addAttribute("src", icons["icon"][0]["list2"]);
          break;
        case "location":
          this.elementImg.addAttribute("src", icons["icon"][0]["location"]);
          break;
        case "location2":
          this.elementImg.addAttribute("src", icons["icon"][0]["location2"]);
          break;
        case "lock":
          this.elementImg.addAttribute("src", icons["icon"][0]["lock"]);
          break;
        case "loop":
          this.elementImg.addAttribute("src", icons["icon"][0]["loop"]);
          break;
        case "loop2":
          this.elementImg.addAttribute("src", icons["icon"][0]["loop2"]);
          break;
        case "ltr":
          this.elementImg.addAttribute("src", icons["icon"][0]["ltr"]);
          break;
        case "magic-wand":
          this.elementImg.addAttribute("src", icons["icon"][0]["magic-wand"]);
          break;
        case "magnet":
          this.elementImg.addAttribute("src", icons["icon"][0]["magnet"]);
          break;
        case "mail":
          this.elementImg.addAttribute("src", icons["icon"][0]["mail"]);
          break;
        case "mail2":
          this.elementImg.addAttribute("src", icons["icon"][0]["mail2"]);
          break;
        case "mail3":
          this.elementImg.addAttribute("src", icons["icon"][0]["mail3"]);
          break;
        case "mail4":
          this.elementImg.addAttribute("src", icons["icon"][0]["mail4"]);
          break;
        case "make-group":
          this.elementImg.addAttribute("src", icons["icon"][0]["make-group"]);
          break;
        case "man-woman":
          this.elementImg.addAttribute("src", icons["icon"][0]["man-woman"]);
          break;
        case "man":
          this.elementImg.addAttribute("src", icons["icon"][0]["man"]);
          break;
        case "map":
          this.elementImg.addAttribute("src", icons["icon"][0]["map"]);
          break;
        case "map2":
          this.elementImg.addAttribute("src", icons["icon"][0]["map2"]);
          break;
        case "menu":
          this.elementImg.addAttribute("src", icons["icon"][0]["menu"]);
          break;
        case "menu2":
          this.elementImg.addAttribute("src", icons["icon"][0]["menu2"]);
          break;
        case "menu3":
          this.elementImg.addAttribute("src", icons["icon"][0]["menu3"]);
          break;
        case "menu4":
          this.elementImg.addAttribute("src", icons["icon"][0]["menu4"]);
          break;
        case "meter":
          this.elementImg.addAttribute("src", icons["icon"][0]["meter"]);
          break;
        case "meter2":
          this.elementImg.addAttribute("src", icons["icon"][0]["meter2"]);
          break;
        case "mic":
          this.elementImg.addAttribute("src", icons["icon"][0]["mic"]);
          break;
        case "minus":
          this.elementImg.addAttribute("src", icons["icon"][0]["minus"]);
          break;
        case "mobile":
          this.elementImg.addAttribute("src", icons["icon"][0]["mobile"]);
          break;
        case "mobile2":
          this.elementImg.addAttribute("src", icons["icon"][0]["mobile2"]);
          break;
        case "move-down":
          this.elementImg.addAttribute("src", icons["icon"][0]["move-down"]);
          break;
        case "move-up":
          this.elementImg.addAttribute("src", icons["icon"][0]["move-up"]);
          break;
        case "mug":
          this.elementImg.addAttribute("src", icons["icon"][0]["mug"]);
          break;
        case "music":
          this.elementImg.addAttribute("src", icons["icon"][0]["music"]);
          break;
        case "neutral":
          this.elementImg.addAttribute("src", icons["icon"][0]["neutral"]);
          break;
        case "neutral2":
          this.elementImg.addAttribute("src", icons["icon"][0]["neutral2"]);
          break;
        case "new-tab":
          this.elementImg.addAttribute("src", icons["icon"][0]["new-tab"]);
          break;
        case "newspaper":
          this.elementImg.addAttribute("src", icons["icon"][0]["newspaper"]);
          break;
        case "next":
          this.elementImg.addAttribute("src", icons["icon"][0]["next"]);
          break;
        case "next2":
          this.elementImg.addAttribute("src", icons["icon"][0]["next2"]);
          break;
        case "notification":
          this.elementImg.addAttribute("src", icons["icon"][0]["notification"]);
          break;
        case "npm":
          this.elementImg.addAttribute("src", icons["icon"][0]["npm"]);
          break;
        case "office":
          this.elementImg.addAttribute("src", icons["icon"][0]["office"]);
          break;
        case "omega":
          this.elementImg.addAttribute("src", icons["icon"][0]["omega"]);
          break;
        case "onedrive":
          this.elementImg.addAttribute("src", icons["icon"][0]["onedrive"]);
          break;
        case "opera":
          this.elementImg.addAttribute("src", icons["icon"][0]["opera"]);
          break;
        case "opt":
          this.elementImg.addAttribute("src", icons["icon"][0]["opt"]);
          break;
        case "pacman":
          this.elementImg.addAttribute("src", icons["icon"][0]["pacman"]);
          break;
        case "page-break":
          this.elementImg.addAttribute("src", icons["icon"][0]["page-break"]);
          break;
        case "pagebreak":
          this.elementImg.addAttribute("src", icons["icon"][0]["pagebreak"]);
          break;
        case "paint-format":
          this.elementImg.addAttribute("src", icons["icon"][0]["paint-format"]);
          break;
        case "paragraph-center":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["paragraph-center"]
          );
          break;
        case "paragraph-justify":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["paragraph-justify"]
          );
          break;
        case "paragraph-left":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["paragraph-left"]
          );
          break;
        case "paragraph-right":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["paragraph-right"]
          );
          break;
        case "paste":
          this.elementImg.addAttribute("src", icons["icon"][0]["paste"]);
          break;
        case "pause":
          this.elementImg.addAttribute("src", icons["icon"][0]["pause"]);
          break;
        case "pause2":
          this.elementImg.addAttribute("src", icons["icon"][0]["pause2"]);
          break;
        case "paypal":
          this.elementImg.addAttribute("src", icons["icon"][0]["paypal"]);
          break;
        case "pen":
          this.elementImg.addAttribute("src", icons["icon"][0]["pen"]);
          break;
        case "pencil":
          this.elementImg.addAttribute("src", icons["icon"][0]["pencil"]);
          break;
        case "pencil2":
          this.elementImg.addAttribute("src", icons["icon"][0]["pencil2"]);
          break;
        case "phone-hang-up":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["phone-hang-up"]
          );
          break;
        case "phone":
          this.elementImg.addAttribute("src", icons["icon"][0]["phone"]);
          break;
        case "pie-chart":
          this.elementImg.addAttribute("src", icons["icon"][0]["pie-chart"]);
          break;
        case "pilcrow":
          this.elementImg.addAttribute("src", icons["icon"][0]["pilcrow"]);
          break;
        case "pinterest":
          this.elementImg.addAttribute("src", icons["icon"][0]["pinterest"]);
          break;
        case "pinterest2":
          this.elementImg.addAttribute("src", icons["icon"][0]["pinterest2"]);
          break;
        case "play":
          this.elementImg.addAttribute("src", icons["icon"][0]["play"]);
          break;
        case "play2":
          this.elementImg.addAttribute("src", icons["icon"][0]["play2"]);
          break;
        case "play3":
          this.elementImg.addAttribute("src", icons["icon"][0]["play3"]);
          break;
        case "plus":
          this.elementImg.addAttribute("src", icons["icon"][0]["plus"]);
          break;
        case "podcast":
          this.elementImg.addAttribute("src", icons["icon"][0]["podcast"]);
          break;
        case "point-down":
          this.elementImg.addAttribute("src", icons["icon"][0]["point-down"]);
          break;
        case "point-left":
          this.elementImg.addAttribute("src", icons["icon"][0]["point-left"]);
          break;
        case "point-right":
          this.elementImg.addAttribute("src", icons["icon"][0]["point-right"]);
          break;
        case "point-up":
          this.elementImg.addAttribute("src", icons["icon"][0]["point-up"]);
          break;
        case "power-cord":
          this.elementImg.addAttribute("src", icons["icon"][0]["power-cord"]);
          break;
        case "power":
          this.elementImg.addAttribute("src", icons["icon"][0]["power"]);
          break;
        case "previous":
          this.elementImg.addAttribute("src", icons["icon"][0]["previous"]);
          break;
        case "previous2":
          this.elementImg.addAttribute("src", icons["icon"][0]["previous2"]);
          break;
        case "price-tag":
          this.elementImg.addAttribute("src", icons["icon"][0]["price-tag"]);
          break;
        case "price-tags":
          this.elementImg.addAttribute("src", icons["icon"][0]["price-tags"]);
          break;
        case "printer":
          this.elementImg.addAttribute("src", icons["icon"][0]["printer"]);
          break;
        case "profile":
          this.elementImg.addAttribute("src", icons["icon"][0]["profile"]);
          break;
        case "pushpin":
          this.elementImg.addAttribute("src", icons["icon"][0]["pushpin"]);
          break;
        case "qrcode":
          this.elementImg.addAttribute("src", icons["icon"][0]["qrcode"]);
          break;
        case "question":
          this.elementImg.addAttribute("src", icons["icon"][0]["question"]);
          break;
        case "quill":
          this.elementImg.addAttribute("src", icons["icon"][0]["quill"]);
          break;
        case "quotes-left":
          this.elementImg.addAttribute("src", icons["icon"][0]["quotes-left"]);
          break;
        case "quotes-right":
          this.elementImg.addAttribute("src", icons["icon"][0]["quotes-right"]);
          break;
        case "radio-checked":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["radio-checked"]
          );
          break;
        case "radio-checked2":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["radio-checked2"]
          );
          break;
        case "radio-unchecked":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["radio-unchecked"]
          );
          break;
        case "reddit":
          this.elementImg.addAttribute("src", icons["icon"][0]["reddit"]);
          break;
        case "redo":
          this.elementImg.addAttribute("src", icons["icon"][0]["redo"]);
          break;
        case "redo2":
          this.elementImg.addAttribute("src", icons["icon"][0]["redo2"]);
          break;
        case "renren":
          this.elementImg.addAttribute("src", icons["icon"][0]["renren"]);
          break;
        case "reply":
          this.elementImg.addAttribute("src", icons["icon"][0]["reply"]);
          break;
        case "road":
          this.elementImg.addAttribute("src", icons["icon"][0]["road"]);
          break;
        case "rocket":
          this.elementImg.addAttribute("src", icons["icon"][0]["rocket"]);
          break;
        case "rss":
          this.elementImg.addAttribute("src", icons["icon"][0]["rss"]);
          break;
        case "rss2":
          this.elementImg.addAttribute("src", icons["icon"][0]["rss2"]);
          break;
        case "sad":
          this.elementImg.addAttribute("src", icons["icon"][0]["sad"]);
          break;
        case "sad2":
          this.elementImg.addAttribute("src", icons["icon"][0]["sad2"]);
          break;
        case "safari":
          this.elementImg.addAttribute("src", icons["icon"][0]["safari"]);
          break;
        case "scissors":
          this.elementImg.addAttribute("src", icons["icon"][0]["scissors"]);
          break;
        case "search":
          this.elementImg.addAttribute("src", icons["icon"][0]["search"]);
          break;
        case "section":
          this.elementImg.addAttribute("src", icons["icon"][0]["section"]);
          break;
        case "share":
          this.elementImg.addAttribute("src", icons["icon"][0]["share"]);
          break;
        case "share2":
          this.elementImg.addAttribute("src", icons["icon"][0]["share2"]);
          break;
        case "shield":
          this.elementImg.addAttribute("src", icons["icon"][0]["shield"]);
          break;
        case "shift":
          this.elementImg.addAttribute("src", icons["icon"][0]["shift"]);
          break;
        case "shocked":
          this.elementImg.addAttribute("src", icons["icon"][0]["shocked"]);
          break;
        case "shocked":
          this.elementImg.addAttribute("src", icons["icon"][0]["shocked"]);
          break;
        case "shrink":
          this.elementImg.addAttribute("src", icons["icon"][0]["shrink"]);
          break;
        case "shrink2":
          this.elementImg.addAttribute("src", icons["icon"][0]["shrink2"]);
          break;
        case "shuffle":
          this.elementImg.addAttribute("src", icons["icon"][0]["shuffle"]);
          break;
        case "sigma":
          this.elementImg.addAttribute("src", icons["icon"][0]["sigma"]);
          break;
        case "sina-weibo":
          this.elementImg.addAttribute("src", icons["icon"][0]["sina-weibo"]);
          break;
        case "skype":
          this.elementImg.addAttribute("src", icons["icon"][0]["skype"]);
          break;
        case "sleepy":
          this.elementImg.addAttribute("src", icons["icon"][0]["sleepy"]);
          break;
        case "sleepy2":
          this.elementImg.addAttribute("src", icons["icon"][0]["sleepy2"]);
          break;
        case "smile":
          this.elementImg.addAttribute("src", icons["icon"][0]["smile"]);
          break;
        case "smile2":
          this.elementImg.addAttribute("src", icons["icon"][0]["smile2"]);
          break;
        case "sort-alpha-asc":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["sort-alpha-asc"]
          );
          break;
        case "sort-alpha-desc":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["sort-alpha-desc"]
          );
          break;
        case "sort-amount-asc":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["sort-amount-asc"]
          );
          break;
        case "sort-amount-desc":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["sort-amount-desc"]
          );
          break;
        case "sort-numberic-desc":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["sort-numberic-desc"]
          );
          break;
        case "sort-numeric-asc":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["sort-numeric-asc"]
          );
          break;
        case "soundcloud":
          this.elementImg.addAttribute("src", icons["icon"][0]["soundcloud"]);
          break;
        case "soundcloud2":
          this.elementImg.addAttribute("src", icons["icon"][0]["soundcloud2"]);
          break;
        case "spades":
          this.elementImg.addAttribute("src", icons["icon"][0]["spades"]);
          break;
        case "spell-check":
          this.elementImg.addAttribute("src", icons["icon"][0]["spell-check"]);
          break;
        case "sphere":
          this.elementImg.addAttribute("src", icons["icon"][0]["sphere"]);
          break;
        case "spinner":
          this.elementImg.addAttribute("src", icons["icon"][0]["spinner"]);
          break;
        case "spinner10":
          this.elementImg.addAttribute("src", icons["icon"][0]["spinner10"]);
          break;
        case "spinner11":
          this.elementImg.addAttribute("src", icons["icon"][0]["spinner11"]);
          break;
        case "spinner2":
          this.elementImg.addAttribute("src", icons["icon"][0]["spinner2"]);
          break;
        case "spinner3":
          this.elementImg.addAttribute("src", icons["icon"][0]["spinner3"]);
          break;
        case "spinner4":
          this.elementImg.addAttribute("src", icons["icon"][0]["spinner4"]);
          break;
        case "spinner5":
          this.elementImg.addAttribute("src", icons["icon"][0]["spinner5"]);
          break;
        case "spinner6":
          this.elementImg.addAttribute("src", icons["icon"][0]["spinner6"]);
          break;
        case "spinner7":
          this.elementImg.addAttribute("src", icons["icon"][0]["spinner7"]);
          break;
        case "spinner8":
          this.elementImg.addAttribute("src", icons["icon"][0]["spinner8"]);
          break;
        case "spinner9":
          this.elementImg.addAttribute("src", icons["icon"][0]["spinner9"]);
          break;
        case "spoon-knife":
          this.elementImg.addAttribute("src", icons["icon"][0]["spoon-knife"]);
          break;
        case "spotify":
          this.elementImg.addAttribute("src", icons["icon"][0]["spotify"]);
          break;
        case "stack":
          this.elementImg.addAttribute("src", icons["icon"][0]["stack"]);
          break;
        case "stackoverflow":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["stackoverflow"]
          );
          break;
        case "star-empty":
          this.elementImg.addAttribute("src", icons["icon"][0]["star-empty"]);
          break;
        case "star-full":
          this.elementImg.addAttribute("src", icons["icon"][0]["star-full"]);
          break;
        case "star-half":
          this.elementImg.addAttribute("src", icons["icon"][0]["star-half"]);
          break;
        case "stats-bars":
          this.elementImg.addAttribute("src", icons["icon"][0]["stats-bars"]);
          break;
        case "stats-bars2":
          this.elementImg.addAttribute("src", icons["icon"][0]["stats-bars2"]);
          break;
        case "stats-dots":
          this.elementImg.addAttribute("src", icons["icon"][0]["stats-dots"]);
          break;
        case "steam":
          this.elementImg.addAttribute("src", icons["icon"][0]["steam"]);
          break;
        case "steam2":
          this.elementImg.addAttribute("src", icons["icon"][0]["steam2"]);
          break;
        case "stop":
          this.elementImg.addAttribute("src", icons["icon"][0]["stop"]);
          break;
        case "stop2":
          this.elementImg.addAttribute("src", icons["icon"][0]["stop2"]);
          break;
        case "stopwatch":
          this.elementImg.addAttribute("src", icons["icon"][0]["stopwatch"]);
          break;
        case "strikethrough":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["strikethrough"]
          );
          break;
        case "stumbleupon":
          this.elementImg.addAttribute("src", icons["icon"][0]["stumbleupon"]);
          break;
        case "stumbleupon2":
          this.elementImg.addAttribute("src", icons["icon"][0]["stumbleupon2"]);
          break;
        case "subscript":
          this.elementImg.addAttribute("src", icons["icon"][0]["subscript"]);
          break;
        case "subscript2":
          this.elementImg.addAttribute("src", icons["icon"][0]["subscript2"]);
          break;
        case "sun":
          this.elementImg.addAttribute("src", icons["icon"][0]["sun"]);
          break;
        case "superscript":
          this.elementImg.addAttribute("src", icons["icon"][0]["superscript"]);
          break;
        case "superscript2":
          this.elementImg.addAttribute("src", icons["icon"][0]["superscript2"]);
          break;
        case "svg":
          this.elementImg.addAttribute("src", icons["icon"][0]["svg"]);
          break;
        case "switch":
          this.elementImg.addAttribute("src", icons["icon"][0]["switch"]);
          break;
        case "tab":
          this.elementImg.addAttribute("src", icons["icon"][0]["tab"]);
          break;
        case "table":
          this.elementImg.addAttribute("src", icons["icon"][0]["table"]);
          break;
        case "table2":
          this.elementImg.addAttribute("src", icons["icon"][0]["table2"]);
          break;
        case "tablet":
          this.elementImg.addAttribute("src", icons["icon"][0]["tablet"]);
          break;
        case "target":
          this.elementImg.addAttribute("src", icons["icon"][0]["target"]);
          break;
        case "telegram":
          this.elementImg.addAttribute("src", icons["icon"][0]["telegram"]);
          break;
        case "terminal":
          this.elementImg.addAttribute("src", icons["icon"][0]["terminal"]);
          break;
        case "text-color":
          this.elementImg.addAttribute("src", icons["icon"][0]["text-color"]);
          break;
        case "text-height":
          this.elementImg.addAttribute("src", icons["icon"][0]["text-height"]);
          break;
        case "text-width":
          this.elementImg.addAttribute("src", icons["icon"][0]["text-width"]);
          break;
        case "ticket":
          this.elementImg.addAttribute("src", icons["icon"][0]["ticket"]);
          break;
        case "tongue":
          this.elementImg.addAttribute("src", icons["icon"][0]["tongue"]);
          break;
        case "tongue2":
          this.elementImg.addAttribute("src", icons["icon"][0]["tongue2"]);
          break;
        case "tree":
          this.elementImg.addAttribute("src", icons["icon"][0]["tree"]);
          break;
        case "trello":
          this.elementImg.addAttribute("src", icons["icon"][0]["trello"]);
          break;
        case "trophy":
          this.elementImg.addAttribute("src", icons["icon"][0]["trophy"]);
          break;
        case "truck":
          this.elementImg.addAttribute("src", icons["icon"][0]["truck"]);
          break;
        case "tumblr":
          this.elementImg.addAttribute("src", icons["icon"][0]["tumblr"]);
          break;
        case "tumblr2":
          this.elementImg.addAttribute("src", icons["icon"][0]["tumblr2"]);
          break;
        case "tux":
          this.elementImg.addAttribute("src", icons["icon"][0]["tux"]);
          break;
        case "tv":
          this.elementImg.addAttribute("src", icons["icon"][0]["tv"]);
          break;
        case "twitch":
          this.elementImg.addAttribute("src", icons["icon"][0]["twitch"]);
          break;
        case "twitter":
          this.elementImg.addAttribute("src", icons["icon"][0]["twitter"]);
          break;
        case "underline":
          this.elementImg.addAttribute("src", icons["icon"][0]["underline"]);
          break;
        case "undo":
          this.elementImg.addAttribute("src", icons["icon"][0]["undo"]);
          break;
        case "undo2":
          this.elementImg.addAttribute("src", icons["icon"][0]["undo2"]);
          break;
        case "ungroup":
          this.elementImg.addAttribute("src", icons["icon"][0]["ungroup"]);
          break;
        case "unlocked":
          this.elementImg.addAttribute("src", icons["icon"][0]["unlocked"]);
          break;
        case "upload":
          this.elementImg.addAttribute("src", icons["icon"][0]["upload"]);
          break;
        case "upload2":
          this.elementImg.addAttribute("src", icons["icon"][0]["upload2"]);
          break;
        case "upload3":
          this.elementImg.addAttribute("src", icons["icon"][0]["upload3"]);
          break;
        case "user-check":
          this.elementImg.addAttribute("src", icons["icon"][0]["user-check"]);
          break;
        case "user-minus":
          this.elementImg.addAttribute("src", icons["icon"][0]["user-minus"]);
          break;
        case "user-plus":
          this.elementImg.addAttribute("src", icons["icon"][0]["user-plus"]);
          break;
        case "user-tie":
          this.elementImg.addAttribute("src", icons["icon"][0]["user-tie"]);
          break;
        case "user":
          this.elementImg.addAttribute("src", icons["icon"][0]["user"]);
          break;
        case "users":
          this.elementImg.addAttribute("src", icons["icon"][0]["users"]);
          break;
        case "video-camera":
          this.elementImg.addAttribute("src", icons["icon"][0]["video-camera"]);
          break;
        case "vimeo":
          this.elementImg.addAttribute("src", icons["icon"][0]["vimeo"]);
          break;
        case "vimeo2":
          this.elementImg.addAttribute("src", icons["icon"][0]["vimeo2"]);
          break;
        case "vine":
          this.elementImg.addAttribute("src", icons["icon"][0]["vine"]);
          break;
        case "vk":
          this.elementImg.addAttribute("src", icons["icon"][0]["vk"]);
          break;
        case "volume-decrease":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["volume-decrease"]
          );
          break;
        case "volume-high":
          this.elementImg.addAttribute("src", icons["icon"][0]["volume-high"]);
          break;
        case "volume-increase":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["volume-increase"]
          );
          break;
        case "volume-low":
          this.elementImg.addAttribute("src", icons["icon"][0]["volume-low"]);
          break;
        case "volume-medium":
          this.elementImg.addAttribute(
            "src",
            icons["icon"][0]["volume-medium"]
          );
          break;
        case "volume-mute":
          this.elementImg.addAttribute("src", icons["icon"][0]["volume-mute"]);
          break;
        case "volume-mute2":
          this.elementImg.addAttribute("src", icons["icon"][0]["volume-mute2"]);
          break;
        case "warning":
          this.elementImg.addAttribute("src", icons["icon"][0]["warning"]);
          break;
        case "whatsapp":
          this.elementImg.addAttribute("src", icons["icon"][0]["whatsapp"]);
          break;
        case "wikipedia":
          this.elementImg.addAttribute("src", icons["icon"][0]["wikipedia"]);
          break;
        case "windows":
          this.elementImg.addAttribute("src", icons["icon"][0]["windows"]);
          break;
        case "windows8":
          this.elementImg.addAttribute("src", icons["icon"][0]["windows8"]);
          break;
        case "wink":
          this.elementImg.addAttribute("src", icons["icon"][0]["wink"]);
          break;
        case "wink2":
          this.elementImg.addAttribute("src", icons["icon"][0]["wink2"]);
          break;
        case "woman":
          this.elementImg.addAttribute("src", icons["icon"][0]["woman"]);
          break;
        case "wondering":
          this.elementImg.addAttribute("src", icons["icon"][0]["wondering"]);
          break;
        case "wondering2":
          this.elementImg.addAttribute("src", icons["icon"][0]["wondering2"]);
          break;
        case "wordpress":
          this.elementImg.addAttribute("src", icons["icon"][0]["wordpress"]);
          break;
        case "wrench":
          this.elementImg.addAttribute("src", icons["icon"][0]["wrench"]);
          break;
        case "xing":
          this.elementImg.addAttribute("src", icons["icon"][0]["xing"]);
          break;
        case "xing2":
          this.elementImg.addAttribute("src", icons["icon"][0]["xing2"]);
          break;
        case "yahoo":
          this.elementImg.addAttribute("src", icons["icon"][0]["yahoo"]);
          break;
        case "yahoo2":
          this.elementImg.addAttribute("src", icons["icon"][0]["yahoo2"]);
          break;
        case "yelp":
          this.elementImg.addAttribute("src", icons["icon"][0]["yelp"]);
          break;
        case "youtube":
          this.elementImg.addAttribute("src", icons["icon"][0]["youtube"]);
          break;
        case "youtube2":
          this.elementImg.addAttribute("src", icons["icon"][0]["youtube2"]);
          break;
        case "zoom-in":
          this.elementImg.addAttribute("src", icons["icon"][0]["zoom-in"]);
          break;
        case "zoom-out":
          this.elementImg.addAttribute("src", icons["icon"][0]["zoom-out"]);
          break;
      }
    };
  }
  attr(attr, valueAttr){
    this.elementImg.addAttribute(attr, valueAttr);
  }
}

var id="comment-holder";
var hung1001_icon = [
{text: ":v",img: "../../../image/emoji/pacman.png"},
{text: ":d",img: "../../../image/emoji/1.png"},
{text: ":-D",img: "../../../image/emoji/2.png"},
{text: ":(|",img: "../../../image/emoji/3.png"},
{text: ":-)",img: "../../../image/emoji/4.png"},
{text: "^^",img: "../../../image/emoji/5.png"},
{text: "^.^",img: "../../../image/emoji/6.png"},
{text: "^-^",img: "../../../image/emoji/7.png"},
{text: ";)",img: "../../../image/emoji/8.png"},
{text: ":]",img: "../../../image/emoji/9.png"},
{text: ":*",img: "../../../image/emoji/10.png"},
{text: ":B",img: "../../../image/emoji/11.png"},
{text: ":~|",img: "../../../image/emoji/12.png"},
{text: ":~D",img: "../../../image/emoji/13.png"},
{text: ":&gt;",img: "../../../image/emoji/14.png"},
{text: ":-&gt;",img: "../../../image/emoji/15.png"},
{text: ":=&gt;",img: "../../../image/emoji/16.png"},
{text: "=)",img: "../../../image/emoji/17.png"},
{text: ":)",img: "../../../image/emoji/18.png"},
{text: "-.-",img: "../../../image/emoji/19.png"},
{text: "-_-",img: "../../../image/emoji/20.png"},
{text: "/no",img: "../../../image/emoji/21.png"},
{text: "-_*",img: "../../../image/emoji/22.png"},
{text: ":-(",img: "../../../image/emoji/23.png"},
{text: ":=(",img: "../../../image/emoji/24.png"},
{text: "/-o",img: "../../../image/emoji/25.png"},
{text: "/tired",img: "../../../image/emoji/26.png"},
{text: "/sl",img: "../../../image/emoji/27.png"},
{text: ":z",img: "../../../image/emoji/28.png"},
{text: ":-p",img: "../../../image/emoji/29.png"},
{text: ":~p",img: "../../../image/emoji/30.png"},
{text: ":=p",img: "../../../image/emoji/31.png"},
{text: ":_p",img: "../../../image/emoji/32.png"},
{text: ":^z",img: "../../../image/emoji/33.png"},
{text: "~~",img: "../../../image/emoji/34.png"},
{text: ";-|",img: "../../../image/emoji/35.png"},
{text: ":x",img: "../../../image/emoji/36.png"},
{text: ":w",img: "../../../image/emoji/37.png"},
{text: ":sad",img: "../../../image/emoji/38.png"},
{text: "=((",img: "../../../image/emoji/39.png"},
{text: ":hum",img: "../../../image/emoji/40.png"},
{text: ":^((",img: "../../../image/emoji/41.png"},
{text: ":huhu",img: "../../../image/emoji/42.png"},
{text: ":haiz",img: "../../../image/emoji/43.png"},
{text: "/sad",img: "../../../image/emoji/44.png"},
{text: "/^(",img: "../../../image/emoji/45.png"},
{text: ":-Q",img: "../../../image/emoji/46.png"},
{text: ":=Q",img: "../../../image/emoji/47.png"},
{text: ":Q",img: "../../../image/emoji/48.png"},
{text: "o_o",img: "../../../image/emoji/49.png"},
{text: "@.@",img: "../../../image/emoji/50.png"},
{text: ":angry",img: "../../../image/emoji/51.png"},
{text: "/angry",img: "../../../image/emoji/52.png"},
{text: "|-D",img: "../../../image/emoji/53.png"},
{text: ":-O",img: "../../../image/emoji/54.png"},
{text: ":T",img: "../../../image/emoji/55.png"},
{text: ":-T",img: "../../../image/emoji/56.png"},
{text: ":ok",img: "../../../image/emoji/57.png"},
{text: "(Y)",img: "../../../image/emoji/58.png"},
{text: "(D)",img: "../../../image/emoji/59.png"},
{text: "/clap",img: "../../../image/emoji/61.png"},
{text: "/hand",img: "../../../image/emoji/62.png"},
{text: "&lt;3",img: "../../../image/emoji/63.png"},
{text: "/VN",img: "../../../image/emoji/64.png"},
{text: "&lt;-3",img: "../../../image/emoji/65.png"},
{text: "&lt;=3",img: "../../../image/emoji/66.png"},
{text: "/cup",img: "../../../image/emoji/67.png"},
{text: "/100",img: "../../../image/emoji/68.png"},
{text: "/!",img: "../../../image/emoji/69.png"},
{text: "/done",img: "../../../image/emoji/70.png"},
{text: "/gun",img: "../../../image/emoji/71.png"},
{text: "/sun",img: "../../../image/emoji/72.png"}
];
var a = document.getElementById(id);
var b = a.getElementsByTagName("p");
if (b) {
    for (i = 0; i < b.length; i++) {
        c = b.item(i).innerHTML;
        for (var j = 0; j < hung1001_icon.length; j++) {
            c = c.replace(hung1001_icon[j].text, "<img src=\"" + hung1001_icon[j] + "\"/>");
        }
        
        b.item(i).innerHTML = c ;
    }
}
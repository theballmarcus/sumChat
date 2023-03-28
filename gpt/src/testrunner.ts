import { ChatGPT } from "./chat";
import { readFileSync} from 'fs';

let rawdata : any = readFileSync('config.json');
let chatApiKey : string = JSON.parse(rawdata)['chatApiKey'];

var c = new ChatGPT(chatApiKey)

var t : string = `
Per | København — 01/02/2023 6:09 PM
Ja, det er meget normalt - de bliver sygt varme. Det er nok ikke då sundt i længden, men det er sådan de er designet
OliverNielsen — 01/02/2023 6:09 PM
ok tak
malthe I esbjerg — 01/02/2023 11:28 PM
Nogen der kender en gratis asset store der er god?
Skal bruge det til mini jam om 3 dage
Sune | Kbh/online — 01/03/2023 9:42 AM
2d eller 3d ?
malthe I esbjerg — 01/03/2023 10:01 AM
2d
Gnuflung | Vejle — 01/03/2023 1:31 PM
Min kommer tit op på 80 og jeg har også læst at gpu sagten faktisk kan køre på 100 grader
Per | København — 01/03/2023 1:42 PM
Det man ser er t-junction - og den er rated til at kunne tåle 95 grader. Men ja den kan godt krybe højere - især hvis man kører miner eller noget. Så skal man også forvente levetiden bliver kortere på kortet.
Sune | Kbh/online — 01/03/2023 5:17 PM
tjek https://www.kenney.nl/assets?q=2d
Kenney • Free game assets
We've created over 40,000 images, audio files and 3D models for you to use in your projects. Thanks to our public domain license you're even allowed to use them in commercial projects!
Image
Ordensmagten
BOT
 — 01/03/2023 5:17 PM
Tillykke @Sune | Kbh/online, du er nu nået til level 11!
Sune | Kbh/online — 01/03/2023 6:18 PM
min 3080 rammer 71 under pres
OliverNielsen — 01/03/2023 6:19 PM
ok men snakker du om vram
Ordensmagten
BOT
 — 01/03/2023 6:19 PM
Tillykke @OliverNielsen, du er nu nået til level 1!
Sune | Kbh/online — 01/03/2023 6:23 PM
ah, den rammer op på 98
OliverNielsen — 01/03/2023 7:39 PM
ok
malthe I esbjerg — 01/03/2023 9:14 PM
Mange tak det kommer til at blive brugbart
Sune | Kbh/online — 01/03/2023 9:18 PM
@malthe I esbjerg der er også en masse på itch.io
https://itch.io/game-assets/tag-2d
itch.io
Top game assets tagged 2D
Explore game assets tagged 2D on itch.io. Uses two-dimensional "sprites", 2D images created and used on a flat plane, as opposed to the three-dimensional models o
Top game assets tagged 2D
elli0509 — 01/06/2023 9:46 AM
hej med jer jeg spiser lasagne 🙂
Per | København — 01/06/2023 9:47 AM
Det er også lækkert. Men måske ikke til morgenmad ?
Hannibal — 01/06/2023 12:39 PM
true lol
Maria | Microsoft, Lyngby — 01/29/2023 3:54 PM
NOMINERET TIL ÅRETS FORENING 👍

Davs alle sammen 🙂 
Coding Pirates er nomineret til årets forening! 
Konkurrencen udløber i dag!
https://aaretsforening.dk/nomineringer/coding-pirates/

Måske I og jeres familie vil stemme med? 🙂
Man kan stemme 1 gang pr mobil nr 
`

c.summarize(t, (v) => console.log(v))
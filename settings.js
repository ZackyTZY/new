const fs = require('fs')
const chalk = require('chalk')
const moment = require("moment-timezone");
const { indonesia, english} = require(`./language`)
const { tanggal, getTime } = require('./lib/myfunc')

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan le owner
	zenz: 'https://zenzapis.xyz',
	lol: 'https://api.lolhuman.xyz',
	xteam: 'https://api.xteam.xyz',
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'Ceb3FLtq',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
	'https://zenzapis.xyz': 'b57b228ead', // nayakadonz@gmail.com | nayaka123
	'https://api.lolhuman.xyz': '9026766282040393fc6503b9',
	'https://api.xteam.xyz': 'f39eec1f3046d439',
}

// Time
const waktu =  `${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`

// Setting //punya gw
global.autoread = true // auto read pesan (auto read message)
global.autoketik = false //status auto mengetik (auto typing)
global.autorecording = false //status auto merekam (auto record)
global.available = false //status online (online)
global.unavailable = false //status offline (offline)
global.pause = false //YNTKTS
global.autovoice = false //prank autovoice (auto voice pas ada yg toxic) //punya gw
//global.autobio = true //auto set bio (kalau ada orang yg komen)
global.autoreadsw = true //auto read SW (story WhatsApp)
global.publik = true //publik mode
global.autoblok212 = false //ubah jadi true biar nmr 212 di blok sama bot

//language
//Available in indonesia & english
//You can request others language 
global.language = indonesia  //change indonesia to english if you don't understand the language used by the bot

// Other
global.botname = "кєιтн вσт-м∂ོ" //namabot kalian
global.ownername = "ᴹᴿ᭄ ∂σηz ×፝֟͜૨̸" //nama kalian
global.myweb = "https://chat.whatsapp.com/D6x4RcvnawbIQEikWv0Ryj" //bebas asal jan hapus
global.youtube = "https://youtu.be/FoksUIwNYIM" //bebas asal jan hapus
global.ytchannel = "https://youtube.com/channel/UCJBH-edRR1zUy5X_Cw-5hJw"
global.github = "https://github.com/Radit10" //bebas
global.instagram = "https://instagram.com/lord_zacky69"
global.facebook = "https://Facebook.com/AadipuraStars"
global.email = "kontolodonz@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.timezone = 'Asia/Jakarta' //  timezone wib
global.premium = ["6289664709977","6285236483504","62852364835040","62852364835042","62852364835045"] //premium user
global.owner = ["6289664709977","6285236483504","62852364835040","62852364835042","62852364835045"] //ganti agar fitur owner bisa di gunakan
global.kecuali = ["6283843295654","6288293521754","6283866838382","6281316408830","6281316407846","6287878230953"] //nomor² yg gabisa make fitur tertentu
global.blacklist = ["6285348718624","6287765686820","6281276233861","6285648046590","62881027147106","6282140762482","6289636743196","6285241070729","6282334467096","6285750412441"] // nomor yg akan otomatis di kick dari grup
global.ownernomer = "6289664709977" // nomor wa kalian
global.ownernomerr = "+6289664709977" //nmr wa kalian
global.thumbnail = "./storage/image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./storage/image/donasi.jpg" // foto donasi di folder image
global.background_welcome = "https://telegra.ph/file/392fbf09cfc4f6823d204.jpg" // https://telegra.ph/file/90a931648de597820bc08.jpg maks size 30kb, agar welcome image nya tdk delay

global.packname = '© кєιтн вσт-м∂ོ' //sticker wm ubah
global.wmnya = `Di Buat Oleh ᎠᎾᏁᏃ•T̶Z̶Y` //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'

global.limitawal = {
    premium: "Infinity",
    free: 100
}

//punya gw
global.virgam = fs.readFileSync(`./storage/image/virgam.jpeg`)
global.lenkgrup = ["HAkCGliIQcKDiKSWoKHyhV","F0SxsbBJQRbAaZnDxEk5SR","D6x4RcvnawbIQEikWv0Ryj","KaNrmIHqWeg6hFWhgYUzhb","HzfeafTz6kiEtTXh3lTUG3","L7rUW6uPqBKBn6g0ihDafJ"]

//Sticker Image
global.heker1 = "https://telegra.ph/file/efc8b0115b3f7a8462676.jpg" // capek² emaknya ngelonte
global.heker2 = "https://telegra.ph/file/ef4ecbf5bbe3393ce734e.jpg" // bocah tolol main piltek, bug, slayer
global.heker3 = "https://telegra.ph/file/dbc3d3e9e7f31a9d42556.jpg" // mati diserang heker
global.heker4 = "https://telegra.ph/file/60c26bf4db45aa49935f0.jpg" // ngemri banget hekel pilteks 
global.heker5 = "https://telegra.ph/file/8a066e8731fd52963f91b.png" // cape² ngaku hekel modal piltek
global.heker6 = "https://telegra.ph/file/ab28f93b4fd00540cc548.png" // hekel piltek pas tau pilteknya ga lag
// Sticker Video
global.hekel1 = "https://telegra.ph/file/ff46319058dd5ebabc89a.mp4" // ngeleg kagak lawack iya deck
global.HekerList = [heker1,heker2,heker3,heker4,heker5,heker6,hekel1]

// AntiLink
global.sherlink1 = "https://telegra.ph/file/60ac33e30400ead10f8b0.png"
global.sherlink2 = "https://telegra.ph/file/11ac226ff2fb15d8cad36.png"
global.sherlink3 = "https://telegra.ph/file/aeb0dc90fc42980f4af4a.png"
global.sherlink4 = "https://telegra.ph/file/b9a1f838db947cbe20a3b.png"
global.sherlink5 = "https://telegra.ph/file/5340c5c7c32ef192bfb26.png"
global.sherlink6 = "https://telegra.ph/file/0fd4826325c43a7629148.png"
global.sherlink7 = "https://telegra.ph/file/f9acd7c6acda9bd35faf0.png"
global.sherlink8 = "https://telegra.ph/file/23a6f079509787d497539.png"
global.sherlink9 = "https://telegra.ph/file/08f8200346b3f232ec78c.png"
global.sherlink10 = "https://telegra.ph/file/a468bad9742d8a37a676b.png"
global.sherlink11 = "https://telegra.ph/file/f91f124664db5ac70078f.png"
global.sherlink12 = "https://telegra.ph/file/35c7627e47f74d1283f81.png"
global.sherlink13 = "https://telegra.ph/file/15915398874d984a37661.png"
global.sherlink14 = "https://telegra.ph/file/2d14c3c19f20c623f4017.png"
global.sherlink15 = "https://telegra.ph/file/0b23c92dc4d2950da2352.png"
global.sherlink16 = "https://telegra.ph/file/6150f3255c981dd7a1948.png"
global.sherlink17 = "https://telegra.ph/file/a61b0080e9166990167b8.png"
global.sherlink18 = "https://telegra.ph/file/1d4e2bbc33d619dd8c79c.png"
global.sherlink19 = "https://telegra.ph/file/4b54124f57f16615181c4.png"
global.sherlink20 = "https://telegra.ph/file/cfc3d7b259951358f23be.png"
global.sherlink21 = "https://telegra.ph/file/62672e3f89adf2313417b.png"
global.Sherlink = [sherlink1,sherlink2,sherlink3,sherlink4,sherlink5,sherlink6,sherlink7,sherlink8,sherlink9,sherlink10,sherlink11,sherlink12,sherlink13,sherlink14,sherlink15,sherlink16,sherlink17,sherlink18,sherlink19,sherlink20,sherlink21]

// Documents Variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation' // PPTX
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' // XLSX
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' // DOCX
global.doc4 = 'application/zip' // ZIP
global.doc5 = 'application/pdf' // PDF
global.doc6 = 'application/vnd.android.package-archive' // APK
global.doc7 = 'text/rtf' // RTF
global.documents = [doc1,doc2,doc3,doc5] 

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, Oke Desu~',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '```⏳「▰▰▰▱▱▱▱」Loading...```',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	error: '⚠ Fitur Sedang Error!',
	apierror: '⚠ Apikey Sedang Error! Tunggu Beberapa Saat Nanti',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)',
    tence: '🛠 Fitur Sedang Maintenance'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

/* Set Dias
"6281316408830",
"ᴹᴿ᭄ ƈρg • σƒƒι¢ιαℓ ×፝֟͜૨̸"
*/
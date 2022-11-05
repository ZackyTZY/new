const fs = require('fs')
const chalk = require('chalk')
const moment = require("moment-timezone");
const { indonesia, english} = require(`./language`)
const { tanggal, getTime } = require('./lib/myfunc')

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan le owner
}

// Free apikey
global.APIKeys = { //Nama: Zacky, Sandi: nayaka123
	'https://api.zeeoneofc.xyz': 'Ceb3FLtq',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// Time
const waktu =  `${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB`

// Setting //punya gw
global.autoread = true // auto read pesan (auto read message)
global.autoketik = false //status auto mengetik (auto typing)
global.autorecording = false //status auto merekam (auto record)
global.available = false //status online (online)
global.unavailable = false //status offline (offline)
global.pause = false //YNTKTS
global.autovoice = false //prank autovoice (auto voice pas ada yg toxic) //punya gw
global.autobio = false //auto set bio (kalau ada orang yg komen)
global.autoreadsw = true //auto read SW (story WhatsApp)
global.publik = true //publik mode
global.pconly = true //Private chat mode

//language
//Available in indonesia & english
//You can request others language 
global.language = indonesia  //change indonesia to english if you don't understand the language used by the bot

// Other
global.botname = "кєιтн вσт-м∂ོ" //namabot kalian
global.ownername= "ᴹᴿ᭄ ∂σηz ×፝֟͜૨̸" //nama kalian
global.myweb = "https://chat.whatsapp.com/HKDyOsfEEDCKE4z8GVDahd" //bebas asal jan hapus
global.youtube = "https://youtu.be/FoksUIwNYIM" //bebas asal jan hapus
global.github = "https://github.com/Radit10" //bebas
global.email = "kontolodonz@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.timezone = 'Asia/Jakarta' //  timezone wib
global.premium = ["6283839350104","6285236483504","62852364835040","62852364835042","62852364835045"] //premium user
global.owner = ["6283839350104","6285236483504","62852364835040","62852364835042","62852364835045"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "62852364835045" // nomor wa kalian
global.ownernomerr = "+62852364835045" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome = "https://telegra.ph/file/392fbf09cfc4f6823d204.jpg" // https://telegra.ph/file/90a931648de597820bc08.jpg maks size 30kb, agar welcome image nya tdk delay

global.packname = '© кєιтн вσт-м∂ོ' //sticker wm ubah
global.author = `Di Buat Oleh ᎠᎾᏁᏃ•T̶Z̶Y\n\n\n\n\n\n\n\n\nNomor : +62 896-6470-9977\nWaktu : ${waktu}\nTgl : ${tanggal(new Date())}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n` //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'

global.limitawal = {
    premium: "Infinity",
    free: 100
}

//punya gw, Sticker Image
global.heker1 = "https://telegra.ph/file/6e93488bdd86d4193daf6.jpg"
global.heker2 = "https://telegra.ph/file/16d47fcc205b23e4e99d5.png"
global.heker3 = "https://telegra.ph/file/dbc3d3e9e7f31a9d42556.jpg"
global.heker4 = "https://telegra.ph/file/a9a7a9702db222f61641a.jpg"
global.heker5 = "https://telegra.ph/file/8a066e8731fd52963f91b.png"
global.heker6 = "https://telegra.ph/file/ab28f93b4fd00540cc548.png"
global.HekerList = [heker1,heker2,heker3,heker4,heker5,heker6]

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
global.Sherlink = [sherlink1,sherlink2,sherlink3,sherlink4,sherlink5,sherlink6,sherlink7,sherlink8,sherlink9,sherlink10,sherlink11,sherlink12]

// Sticker Video
global.hekel1 = "https://telegra.ph/file/ff46319058dd5ebabc89a.mp4"
global.HekerListMP4 = [hekel1]

// Documents Variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
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
    wait: '⏳ Sedang Di Proses',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
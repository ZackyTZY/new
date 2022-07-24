const fs = require('fs')
const chalk = require('chalk')
const  { indonesia, english} = require(`./language`)

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan le owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'Ceb3FLtq',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// Setting //punya gw
global.autoread = true // auto read pesan (auto read message)
global.autoketik = false //status auto mengetik (auto typing)
global.autorecording = false //status auto merekam (auto record)
global.available = false //status online (online)
global.unavailable = false //status offline (offline)
global.pause = false //YNTKTS
global.autovoice = false //prank autovoice (auto voice pas ada yg toxic) //punya gw
global.autobio = false //auto set bio (kalau ada orang yg komen)

//language
//Available in indonesia & english
//You can request others language 
global.language = indonesia  //change indonesia to english if you don't understand the language used by the bot

// Other
global.botname = "ᏃᎯᏨᏦᎽ-Mdོ" //namabot kalian
global.ownername= "ᴹᴿ᭄ ᴅᴏɴᴢ ×፝֟͜×" //nama kalian
global.myweb = "https://chat.whatsapp.com/B5xKfSwQR3a6258K9DXhiR" //bebas asal jan hapus
global.youtube = "https://youtube.com/channel/UCJBH-edRR1zUy5X_Cw-5hJw" //bebas asal jan hapus
global.github = "https://github.com/Radit10" //bebas
global.email = "kontolodonz@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.timezone = 'Asia/Jakarta' //  timezone wib
global.premium = ["6283839350104","62852364835040","62852364835042","62852364835045"] //premium user
global.owner = ["6283839350104","62852364835040","62852364835042","62852364835045"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "62852364835045" // nomor wa kalian
global.ownernomerr = "+62852364835045" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome = "https://telegra.ph/file/392fbf09cfc4f6823d204.jpg" // https://telegra.ph/file/90a931648de597820bc08.jpg maks size 30kb, agar welcome image nya tdk delay

global.packname = '© ᏃᎯᏨᏦᎽ-Mdོ' //sticker wm ubah
global.author = 'Di Buat Oleh ᎠᎾᏁᏃ•T̶Z̶Y\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'

global.limitawal = {
    premium: "Infinity",
    free: 100
}

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

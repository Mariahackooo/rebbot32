const a = '```'

exports.wait = () => {
	return`๐ฆ๐ฎ๐ฏ๐ฎ๐ฟ ๐๐ฎ๐ฎ ๐น๐ฎ๐ด๐ถ ๐ฝ๐ฟ๐ผ๐๐ฒ๐`
}

exports.succes = () => {
	return`*ใ Sukses ใ*`
}

exports.lvlon = () => {
	return`*ใ ENABLE ใ LEVELING*`
}

exports.lvloff = () => {
	return`*ใ DISABLE ใ LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GROUP BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*ใ ๐๐๐๐จ๐  ๐ ๐๐ ๐๐จ๐๐ง ๐๐ง๐ฃ ใ*\nโโโโโโโโโโโโโโโโโโโโโโโโโ\n*Cara mendaftar : ${prefix}daftar nama|umur*\n*Contoh : ${prefix}daftar mlspacetoon|17*\nโโโโโโโโโโโโโโโโโโโโโโโโโ`
}

exports.rediregis = () => {
	return`*ใ ๐๐๐ ๐จ ๐ฆ๐จ๐๐๐ ๐ ๐๐ก๐๐๐๐ง๐๐ฅ ใ*\nโโโโโโโโโโโโโโโโโโโโโโโโโ\n*Kamu sudah terdaftar di dalam database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`*ใKhusus Groupใ*`
}

exports.ownerb = () => {
	return`*ใKhusus Owner Botใ*`
}

exports.ownerg = () => {
	return`*ใKhusus Owner Groupใ*`
}

exports.admin = () => {
	return`*ใKhusus Admin Groupใ*`
}

exports.badmin = () => {
	return`*ใBot Harus Jadi Adminใ*`
}

exports.nsfwoff = () => {
	return`*NSFW ga aktif*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*Format salah/text kosong*`
}

exports.clears = () => {
	return`*Clear All Success*`
}

exports.pc = () => {
	return`*ใ REGISTERASI ใ*\nโโโโโโโโโโโโโโโโโโโโโโโโโโ\nUntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*ใ KARTU TANDA PENDUDUK ใ/ใKTPใ*\nโโโโโโโโโโโโโโโโโโโโโ\nKamu sudah terdaftar dengan data \n\nแ ๐ก๐ฎ๐บ๐ฎ: ${namaUser}\nแ ๐ก๐๐บ๐ฏ๐ฒ๐ฟ: wa.me/${sender.split("@")[0]}\nแ ๐จ๐บ๐๐ฟ: ${umurUser}\nแ ๐ช๐ฎ๐ธ๐๐ ๐ฃ๐ฒ๐ป๐ฑ๐ฎ๐ณ๐๐ฎ๐ฟ๐ฎ๐ป: ${time}\nแ ๐ก๐๐บ๐ฏ๐ฒ๐ฟ ๐ฆ๐ก: ${serialUser}\nแ ๐๐ฎ๐๐ฎ๐๐ฎ๐ป: Diharapkan Jangan Sampai Hilang\nKarena ini Penting\n\nSilahkan untuk menampilkan fitur ketik ${prefix}help/menu`
}

exports.cmdnf = (prefix, command) => {
	return`Maaf command *${prefix}${command}* tidak di temukan\coba ketik *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*แ Level: ${getLevelingLevel(sender)}*\n*แ Jenis command : ${command}*\n*แ Syarat Level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*แ Level: ${getLevelingLevel(sender)}*\n*แ Jenis command : ${command}*\n*แ Syarat Level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*แ Level: ${getLevelingLevel(sender)}*\n*แ Jenis command : ${command}*\n*แ Syarat Level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*แ Level: ${getLevelingLevel(sender)}*\n*แ Jenis command : ${command}*\n*แ Syarat Level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*แ Level: ${getLevelingLevel(sender)}*\n*แ Jenis command : ${command}*\n*แ Syarat Level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*แ Level: ${getLevelingLevel(sender)}*\n*แ Jenis command : ${command}*\n*แ Syarat Level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi) => { 
	return `${a}Simple WhatsApp Bot${a}
โฅโฅโฅโฅโฅโฅโฅโฅโฅโฅโฅโฅ


โ  ${a}ABOUT USER${a}
โญโโโโโโโโโโโโโโโโโโโโโ
โโจ ๐ก๐ฎ๐บ๐ฎ :  ${pushname}
โโจ ๐ฃ๐ฟ๐ฒ๐บ๐ถ๐๐บ :  ${premi}
โโจ ๐ก๐๐บ๐ฏ๐ฒ๐ฟ :  wa.me/${sender.split("@")[0]}
โโจ ๐๐๐ถ๐ :  Rp ${uangku}
โโจ ๐ซ๐ฃ :  ${getLevelingXp(sender)} / ${reqXp} 
โโจ ๐๐ฒ๐๐ฒ๐น :  ${getLevelingLevel(sender)}
โโจ ๐ฅ๐ผ๐น๐ฒ :  ${role}
โโจ ๐๐ฎ๐๐ฎ๐ฏ๐ฎ๐๐ฒ ๐จ๐๐ฒ๐ฟ : ${_registered.length}
โโจ ๐๐ผ๐ ๐ฉ๐ฒ๐ฟ๐๐ถ๐ผ๐ป :  ${a}3.0${a}
โฐโโโโโโโโโโโโโโโโโโโโโ

${a}โ HELPER${a}

โญโโโโโโโโโโโโโโโโโโโโโ
โ${a}โจ ${prefix}info${a}
โ${a}โจ ${prefix}owner${a}
โ${a}โจ ${prefix}report${a}
โ${a}โจ ${prefix}donasi${a}
โ${a}โจ ${prefix}request${a}
โฐโโโโโโโโโโโโโโโโโโโโโ

${a}โ OWNER MENU${a}

โญโโโโโโโโโโโโโโโโโโโโโ
โ ${a}แ ${prefix}bc${a}
โ ${a}แ ${prefix}addbadword${a}
โ ${a}แ ${prefix}delbadword${a}
โ ${a}แ ${prefix}bcgc${a}
โ ${a}แ ${prefix}kickall${a}
โ ${a}แ ${prefix}setreply${a}
โ ${a}แ ${prefix}setprefix${a}
โ ${a}แ ${prefix}clearall${a}
โ ${a}แ ${prefix}block${a}
โ ${a}แ ${prefix}unblock${a}
โ ${a}แ ${prefix}leave${a}
โ ${a}แ ${prefix}event [1/0]${a}
โ ${a}แ ${prefix}clone${a}
โ ${a}แ ${prefix}setppbot${a}
โฐโโโโโโโโโโโโโโโโโโโโโ

${a}โ MAKER MENU${a}

โญโโโโโโโโโโโโโโโโโโโโโ
โ ${a}แ ${prefix}sticker${a}
โ ${a}แ ${prefix}stickerhide${a}
โ ${a}แ ${prefix}quotemaker${a}
โ ${a}แ ${prefix}glitchtext${a}
โ ${a}แ ${prefix}qrcode${a}
โ ${a}แ ${prefix}nulis${a}
โ ${a}แ ${prefix}nulis2${a}
โ ${a}แ ${prefix}attp${a}
โ ${a}แ ${prefix}tahta${a}
โ ${a}แ ${prefix}vinta${a}
โ ${a}แ ${prefix}galaxybat${a}
โ ${a}แ ${prefix}pornlogo${a}
โ ${a}แ ${prefix}phcomment${a}
โ ${a}แ ${prefix}gplaybutton${a}
โ ${a}แ ${prefix}googletext${a}
โ ${a}แ ${prefix}thunder${a}
โฐโโโโโโโโโโโโโโโโโโโโโ
 
${a}โ FUN MENU${a}
 
โญโโโโโโโโโโโโโโโโโโโโโ
โ ${a}แ ${prefix}alay${a}
โ ${a}แ ${prefix}jadian${a}
โ ${a}แ ${prefix}pantun${a}
โ ${a}แ ${prefix}tercantik${a}
โ ${a}แ ${prefix}terganteng${a}
โ ${a}แ ${prefix}terbeban${a}
โ ${a}แ ${prefix}lirik${a}
โ ${a}แ ${prefix}artinama${a}
โ ${a}แ ${prefix}chord${a}
โ ${a}แ ${prefix}bisakah${a}
โ ${a}แ ${prefix}kapankah${a}
โ ${a}แ ${prefix}apakah${a}
โ ${a}แ ${prefix}rate${a}
โ ${a}แ ${prefix}slap${a}
โ ${a}แ ${prefix}tampar${a}
โ ${a}แ ${prefix}katadilan${a}
โ ${a}แ ${prefix}ceritahorror${a}
โ ${a}แ ${prefix}hurufterbalik${a}
โ ${a}แ ${prefix}moddroid${a} *[Premium]*
โ ${a}แ ${prefix}happymod${a} *[Premium]*
โ ${a}แ ${prefix}playstore${a}
โ ${a}แ ${prefix}katadilan${a}
โ ${a}แ ${prefix}bacotandilan${a}
โ ${a}แ ${prefix}katadoi${a}
โ ${a}แ ${prefix}hemkel${a}
โ ${a}แ ${prefix}cogan${a}
โ ${a}แ ${prefix}cecan${a}
โ ${a}แ ${prefix}quotes${a}
โฐโโโโโโโโโโโโโโโโโโโโโ
 
${a}โ MUTUAL${a}
 
โญโโโโโโโโโโโโโโโโโโโโโ
โ ${a}แ ${prefix}mutual${a}
โ ${a}แ ${prefix}next${a}
โฐโโโโโโโโโโโโโโโโโโโโโ
 
${a}โ MEDIA MENU${a}

โญโโโโโโโโโโโโโโโโโโโโโ
โ ${a}แ ${prefix}brainly${a} *[Premium]*
โ ${a}แ ${prefix}pinterest${a}
โ ${a}แ ${prefix}resepmasakan${a}
โ ${a}แ ${prefix}igstalk${a}
โ ${a}แ ${prefix}igstory${a}
โ ${a}แ ${prefix}bitly${a}
โ ${a}แ ${prefix}tiktokstalk${a} *[Premium]*
โ ${a}แ ${prefix}ssweb${a}
โ ${a}แ ${prefix}kbbi${a}
โ ${a}แ ${prefix}quran${a}
โ ${a}แ ${prefix}quransurah${a}
โ ${a}แ ${prefix}trendtweet${a}
โ ${a}แ ${prefix}infocuaca${a}
โ ${a}แ ${prefix}resepmasakan${a}
โฐโโโโโโโโโโโโโโโโโโโโโ
 
${a}โ NSFW${a}

โญโโโโโโโโโโโโโโโโโโโโโ
โ ${a}แ ${prefix}lomly${a}
โ ${a}แ ${prefix}wibu${a}
โ ${a}แ ${prefix}anjing${a}
โ ${a}แ ${prefix}blowjob${a}
โ ${a}แ ${prefix}nekonime${a}
โ ${a}แ ${prefix}pokemon${a}
โ ${a}แ ${prefix}husbu${a}
โ ${a}แ ${prefix}nangis${a}
โ ${a}แ ${prefix}cium${a}
โ ${a}แ ${prefix}peluk${a}
โ ${a}แ ${prefix}ranime${a}
โฐโโโโโโโโโโโโโโโโโโโโโ
 
${a}โ LIMIT & DUIT${a}

โญโโโโโโโโโโโโโโโโโโโโโ
โ ${a}แ ${prefix}limit${a}
โ ${a}แ ${prefix}buylimit${a}
โ ${a}แ ${prefix}transfer${a}
โ ${a}แ ${prefix}dompet${a}
โ ${a}แ ${prefix}giftlimit${a}
โ ${a}แ ${prefix}leaderboard${a}
โฐโโโโโโโโโโโโโโโโโโโโโ
 
${a}โ GROUP MENU${a}

โญโโโโโโโโโโโโโโโโโโโโโ
โ ${a}แ ${prefix}infogroup${a}
โ ${a}แ ${prefix}delete${a}
โ ${a}แ ${prefix}hidetag${a}
โ ${a}แ ${prefix}blocklist${a}
โ ${a}แ ${prefix}grouplist${a}
โ ${a}แ ${prefix}level${a}
โ ${a}แ ${prefix}linkgc${a}
โ ${a}แ ${prefix}tagall${a}
โ ${a}แ ${prefix}otagall${a}
โ ${a}แ ${prefix}setpp${a}
โ ${a}แ ${prefix}add${a}
โ ${a}แ ${prefix}kick${a}
โ ${a}แ ${prefix}setname${a}
โ ${a}แ ${prefix}setdesc${a}
โ ${a}แ ${prefix}demote${a}
โ ${a}แ ${prefix}promote${a}
โ ${a}แ ${prefix}listadmin${a}
โ ${a}แ ${prefix}group [buka/tutup]${a}
โ ${a}แ ${prefix}leveling [enable/disable]${a}
โ ${a}แ ${prefix}nsfw [1/0]${a}
โ ${a}แ ${prefix}simih [1/0]${a}
โ ${a}แ ${prefix}welcome [1/0]${a}
โ ${a}แ ${prefix}antilink [1/0]${a}
โ ${a}แ ${prefix}antivirtex [on/off]${a}
โ ${a}แ ${prefix}nobadword [enable/disable]${a}
โฐโโโโโโโโโโโโโโโโโโโโโ
 
${a}โ AUDIO${a}

โญโโโโโโโโโโโโโโโโโโโโโ
โ ${a}แ ${prefix}addsticker${a}
โ ${a}แ ${prefix}getsticker${a}
โ ${a}แ ${prefix}stickerlist${a}
โ ${a}แ ${prefix}addvideo${a}
โ ${a}แ ${prefix}getvideo${a}
โ ${a}แ ${prefix}videolist${a}
โ ${a}แ ${prefix}getimage${a}
โ ${a}แ ${prefix}addImage${a}
โ ${a}แ ${prefix}imagelist${a}
โ ${a}แ ${prefix}addaudio${a}
โ ${a}แ ${prefix}getaudio${a}
โ ${a}แ ${prefix}audiolist${a}
โฐโโโโโโโโโโโโโโโโโโโโโ
 
 ${a}โ SONG${a}
 
โญโโโโโโโโโโโโโโโโโโโโโ
โ ${a}แ ${prefix}spotifysearch${a}
โ ${a}แ ${prefix}joox${a} *[Premium]*
โฐโโโโโโโโโโโโโโโโโโโโโ

${a}โ NEW REQUEST${a}
 
โญโโโโโโโโโโโโโโโโโโโโโ
โ ${a}แ ${prefix}listhargadmff${a}
โ ${a}แ ${prefix}spotifysearch${a} 
โฐโโโโโโโโโโโโโโโโโโโโโ
 
โฌ  ษพรฌึีฐีง  ีฐฤีฒีช  ึฦ  ีงีฐาฝ  าึีง 
โญโโโโโโโโโโโ
โแดสแดษดแดสแดสสแดส <แดสษช
โแดาาษชsแดแดษดษชแดษดแดแด <แดแดแด  
โาแดแดสษชสษขสแดแดสส <แดแดสแดษดแดส 
โแดสsแดแดแดแดแดแดแดษด <แดแดแดสแดส/สแดแดแดsษชแดแดสส 
โฐโโโโโโโโโโโ

${a}โ SOSMED${a}

โญโโโโโโโโโโโ
โyoutube : stardustlrlr
โtelegram : padlikodil
โinstagram : itspapoy
โฐโโโโโโโโโโโ
 โฅโฅโฅโฅโฅโฅโฅโฅโฅโฅโฅโฅ
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
โ *ใ SELAMAT!!๐ ใ*
โญโโโโโโโโโโโโโโโโโโโโโ
โแ *Nama* : ${pushname}
โแ *Number* : wa.me/${sender.split("@")[0]}
โแ *XP* : ${getLevelingXp(sender)}
โแ *Limit* : +3
โแ *Role*: ${role}
โแ *Level* : ${getLevel}  ~>  ${getLevelingLevel(sender)}
โฐโโโโโโโโโโโโโโโโโโโโโ
`}
 
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} limit kamu hari ini habis*\n*Silahkan apabila ingin membeli limit hubungi own / bisa juga lewat naik level*`
}

exports.limitcount = (limitCounts) => {
	return`
*ใ LIMIT COUNT ใ*
Limit anda tersisa : ${limitCounts}

NOTE : Untuk mendapatkan limit. Kamu bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah Parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*โจ ใ ATM ใ*\nโญโโโโโโโโโโโ\nโ *Nama* : ${pushname}\nโ *Number* : ${sender.split("@")[0]}\nโ *Duit* : ${uangkau}\nโฐโโโโโโโโโโโ`
}

exports.premadd = (pnom) => {
	return`
*ใ PREMIUM ADD ใ*
โญโโโโโโโโโโโ
โแ *Name* : ${pnom}
โแ *Expired* : 30 DAYS*
โ *Thanks for ORDER PREMIUM*
โฐโโโโโโโโโโโ`
}

exports.dellprem = (hnom) => {
	return`
*ใ PREMIUM DELETE ใ*
โญโโโโโโโโโโโ
โแ *Name* : ${hnom}
โแ *Expired* : umm:v*
โ ${a}Thanks For ORDER PREMIUM BACK SOON for BUY-ing AGAIN${a}
โฐโโโโโโโโโโโ`
}

exports.premon = (pushname) => {
	return`MAAF ${pushname} KAMU BUKAN USER PREMIUM xixixi`
}


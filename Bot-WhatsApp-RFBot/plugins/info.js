let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
====「 Offensive Security Ghost 」====

Selamat datang di RFBot v.1.0👋🏻

Bot ini di buat dengan baik dan setulus hati, memiliki update dan fitur yang sudah di maksimalkan!

Apa itu fitur ticket dan Energy? Fitur ini di buat untuk mencegah Spam dan penyalahgunaan fitur. Energy akan selalu bertambah jika anda sering menggunakan bot, Energy dapat di tukarkan dengan Ticket(untuk kalkulasi 350Energy : 1 ticket)

Ada beberapa command yang di berikan fitur ticket, silahkan perhatikan keterangan dari beberapa command! 

Anda bisa mendapatkan unlimited ticket dengan cara upgrade nomor anda menjadi premium user.

Package premium:
- 1 Month 25k

Silahkan hubungi Developer jika ingin melakukan upgrade (/owner)
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

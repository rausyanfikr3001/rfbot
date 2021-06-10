let handler = async m => m.reply(`
Hai user!👋🏻

Sebelumnya terima kasih telah mau menggunakan layanan bot kami dengan baik dan benar. 

Apakah fitur dari bot kami sudah memenuhi kebutuhan anda? 

Anda mau request fitur yang lain? Silahkan hubungi Developer (/owner)

Dengan kepuasan layanan yang anda terima apakah anda ingin melakukan donate? Lalu kemanakah uang donate itu? Tentu saja untuk membiaya perawatan dari server bot ini sendiri.

Anda bisa melakukan donasi via Saweria dan nomor kami:

Saweria:
https://saweria.co/rfbot

OVO:
0812-3284-3422

Gopay:
0812-3284-3422

Pulsa:
0812-3284-3422(TELKOMSEL)

`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

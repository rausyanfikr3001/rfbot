let handler = function (m) {
  this.sendContact(m.chat, '6281232843422', 'M Bahauddin Ali R', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler

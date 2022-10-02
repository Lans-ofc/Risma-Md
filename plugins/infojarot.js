let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : Maulana
│ ✎ _Sekolah_ : tidak diketahui
│ ✎ _Umur_ : Rahasia
│ ✎ _Asal_ : Tanggerang
│ ✎ _Status_ : Turu deck
│ ✎ _Official Grup_ :
│    https://chat.whatsapp.com/BRf4zHTYOTjKf8IUhVsrbv
│ ✎ _Instagram_ : 
│    https://instagram.com/lans_store03
│ ✎ _WhatsApp_ :
│    wa.me/6283132749084
╰───────────────────
`.trim(), m)
}

handler.help = ['infoowner']
handler.tags = ['main', 'utama']
handler.command = /^(infojarot)$/i

handler.exp = 150

module.exports = handler

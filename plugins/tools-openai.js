
import cheerio from 'cheerio'
import gpt from 'api-dylux'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Enter the text`
m.react('💬')

	try {
        let syms = `You are BayMax AI Bot, a great Artificial Intelligent Bot Made By Mr Juice. Carefully follow the user instructions. Reply using Markdown.`
        let res = await gpt.ChatGpt(text, syms)
         await m.reply(res.text)
	} catch {
		m.reply(`❎ Error: try later`)
	}

}
handler.help = ['ia <text>']
handler.tags = ['tools']
handler.command = ['ia', 'ai', 'chatgpt', 'openai', 'gpt']

export default handler

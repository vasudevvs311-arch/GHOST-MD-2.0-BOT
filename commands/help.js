const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╔═══════════════════╗
║  *👾 ${settings.botName || 'GHOST-MD'}*  
║  Version: *${settings.version || '2.0.5'}*
║  by ${settings.botOwner || 'GHOST Of MADARA'}
║  YT : ${global.ytch}
║
║ 👻 .menu
║ 👻 .ping
║ 👻 .alive
║ 👻 .tts
║ 👻 .owner
║ 👻 .joke
║ 👻 .quote
║ 👻 .fact
║ 👻 .weather
║ 👻 .news
║ 👻 .attp
║ 👻 .lyrics <song_title>
║ 👻 .8ball
║ 👻 .groupinfo
║ 👻 .staff or .admins 
║ 👻 .vv
║ 👻 .trt
║ 👻 .ss
║ 👻 .jid
║ 👻 .promote
║ 👻 .demote
║ 👻 .mute
║ 👻 .unmute
║ 👻 .delete
║ 👻 .kick
║ 👻 .warnings
║ 👻 .warn
║ 👻 .antilink
║ 👻 .antibadword
║ 👻 .clear
║ 👻 .tag
║ 👻 .tagall
║ 👻 .chatbot
║ 👻 .resetlink
║ 👻 .welcome 
║ 👻 .goodbye
║ 👻 .mode
║ 👻 .autostatus
║ 👻 .clearsession
║ 👻 .antidelete
║ 👻 .cleartmp
║ 👻 .setpp
║ 👻 .autoreact
║ 👻 .blur
║ 👻 .simage
║ 👻 .sticker
║ 👻 .tgsticker
║ 👻 .meme
║ 👻 .take
║ 👻 .emojimix <2 emojis mix 
║ 👻 .tictactoe
║ 👻 .hangman
║ 👻 .guess
║ 👻 .trivia
║ 👻 .answer
║ 👻 .truth
║ 👻 .dare
║ 👻 .metallic
║ 👻 .ice
║ 👻 .snow
║ 👻 .impressive
║ 👻 .matrix
║ 👻 .light
║ 👻 .neon
║ 👻 .devil
║ 👻 .purple
║ 👻 .thunder
║ 👻 .leaves 
║ 👻 .1917 
║ 👻 .arena
║ 👻 .hacker
║ 👻 .sand
║ 👻 .blackpink
║ 👻 .glitch
║ 👻 .fire
╚═══════════════════╝

.       *GHOST MD*`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: 'GHOST MD',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: 'GHOST MD by ghost of madara',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;

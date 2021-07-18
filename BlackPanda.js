# const { WAConnection } = require('@adiwajshing/webPanda');
const fs = require('fs');

async function iniciar () { 
        const client = new WAConnection()

        client.logger.level = 'warn'

        client.on('qr', () => {
        })

        fs.existsSync('./BlackPanda.json') && client.loadAuthInfo('./BlackPanda.json')

        client.on('connecting', () => {
        console.log(' intentando Conectando')
        })

        client.on('open', () => {
        console.log('Conectado exitosamente :D')
        })
        await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BlackPanda.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        }

iniciar ()
.catch (err => console.log("unexpected error: " + err))

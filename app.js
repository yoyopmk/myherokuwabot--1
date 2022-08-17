const { Client, MessageMedia, LocalAuth } = require('whatsapp-web.js');
const express = require('express');
const socketIO = require('socket.io');
const qrcode = require('qrcode');
const http = require('http');
const fs = require('fs');
const fileUpload = require('express-fileupload');
const axios = require('axios');
const mime = require('mime-types');
const porny = require('porny');
const RandomHub = require('random-hub').RandomHub;
const { RandomPHUB } = require('discord-phub');
const moment = require('moment-timezone')

let no = Math.floor(Math.random() * 65000);
const port = process.env.PORT || no;
const prefix = '#';
const hub = new RandomHub();
const nsfw = new RandomPHUB((unique = true));
let randno = Math.floor(Math.random() * 10);
const thumb = 'https://cdn.discordapp.com/attachments/753764856095703182/896815436560203776/Mandity_Izabella7.jpg';
const thumb1= 'https://cdn.discordapp.com/attachments/853643102936629251/1009010709222404166/images_3.jpg';
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')

const caption = `*Made by Sex bot*
*Check telegram*
t.me/onlyfanszsz
`;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

/**
 * BASED ON MANY QUESTIONS
 * Actually ready mentioned on the tutorials
 * 
 * Many people confused about the warning for file-upload
 * So, we just disabling the debug for simplicity.
 */
app.use(fileUpload({
  debug: false
}));

app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: __dirname
  });
});

const client = new Client({
  restartOnAuthFail: true,
  puppeteer: {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process', // <- this one doesn't works in Windows
      '--disable-gpu'
    ],
  },
  authStrategy: new LocalAuth()
});

client.on('message', async (message) => {
  const from = message.from;
  const contact = await message.getContact();
  const  pushname = contact.pushname;
  const chat = await message.getChat();
  const groupName = chat.name;
  const isGroup = chat.isGroup;
  const info = client.info;
  const body = message.body;
  const args = body.slice(prefix.length).trim().split(/ +/).slice(1);
  const isCmd = body.startsWith(prefix);
  const command = body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase();


  if (!isCmd && !isGroup) console.log('[MESS]', color(time, 'white'), 'Message from', color(pushname))
  if (isCmd && !isGroup) console.log(color('[MESS]'), color(time, 'white'), color(`${command} [${args.length}]`), 'from', color(pushname))
  if (!isCmd && isGroup) return console.log('[MESS]', color(time, 'white'), 'Message from', color(pushname))
  if (isCmd && isGroup) console.log(color('[MESS]'), color(time, 'white'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))

  
  if(message.body === `${prefix}help`) {
    if (!isGroup) return message.reply('*Work only in group*')

    const helpmsgs = `*👋️ Ohayo* *@${contact.number}*

*I'm ${info.pushname}*

*My prefix = ${prefix}*

🌟️ *Hentai* 🌟️ 
🍒cum
🍒anal
🍒blowjob
🍒fuck
🍒neko
🍒pussylick
🍒solo
🍒threesome_1
🍒threesome_2
🍒threesome_3
🍒yaoi

=====(pics)=========
randompic
realass
realboobs
creampie
realpussy
bath-shower
bdsm
toys
anal
latin
lesbian
lingerie
massage
mature
milf
pornstar
public
squirting

====(girls)======
asian
indonesiangirl
koreangirl
chinesegirl
japanesegirl
vietnamgirl
thaigirl
malaysiangirl
hijabgirl
loligirl (video)
randomdancinggirl (video)
ukhtygirl (video)
cecangirl

*Check telegram*
t.me/onlyfanszsz

*_🎐Sex bot🎐_*`;

    let no = Math.floor(Math.random() * 1);
    const { data: mediaData } = await axios.get(thumb1, { responseType: 'arraybuffer' }).catch((error) => {
      message.reply('*Try again*')
    })
    const media = new MessageMedia('image/gif', mediaData.toString('base64'));
    message.reply(media, from, { mentions: [contact], caption: helpmsgs }).then((r) => {});
  }

  if(message.body === `${prefix}yuri`) {
    if (!isGroup) return message.reply('*Work only in group*')

    message.reply(`please wait sending...`)
    const result = await axios.get('https://purrbot.site/api/img/nsfw/yuri/gif')
    const { data: mediaData } = await axios.get(result.data.link, {
      responseType: 'arraybuffer',
    }).catch(function (error) {
      message.reply('*Not found try again*')
    })
    const media = new MessageMedia('image/gif', mediaData.toString('base64'));
    message.reply(media, from, { mentions: [contact], caption: '*Sex bot*' }).then((r) => {});
  }

  if(message.body === `${prefix}anal`) {
    if (!isGroup) return message.reply('*Work only in group*')

    message.reply(`please wait sending...`)
    const result = await axios.get('https://purrbot.site/api/img/nsfw/anal/gif')
    const { data: mediaData } = await axios.get(result.data.link, {
      responseType: 'arraybuffer',
    }).catch(function (error) {
      message.reply('*Not found try again*')
    });
    const media = new MessageMedia('image/gif', mediaData.toString('base64'));
    message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});
  }

  if(message.body === `${prefix}blowjob`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = await axios.get('https://purrbot.site/api/img/nsfw/blowjob/gif')
    const { data: mediaData } = await axios.get(result.data.link, {
      responseType: 'arraybuffer',
    }).catch(function (error) {
      message.reply('*Not found try again*')
    });
    const media = new MessageMedia('image/gif', mediaData.toString('base64'));
    message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});
  }

  if(message.body === `${prefix}cum`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = await axios.get('https://purrbot.site/api/img/nsfw/cum/gif')
    const { data: mediaData } = await axios.get(result.data.link, {
      responseType: 'arraybuffer',
    }).catch(function (error) {
      message.reply('*Not found try again*')
    });
    const media = new MessageMedia('image/gif', mediaData.toString('base64'));
    message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});
  }

  if(message.body === `${prefix}fuck`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = await axios.get('https://purrbot.site/api/img/nsfw/fuck/gif')
    const { data: mediaData } = await axios.get(result.data.link, {
      responseType: 'arraybuffer',
    }).catch(function (error) {
      message.reply('*Not found try again*')
    });
    const media = new MessageMedia('image/gif', mediaData.toString('base64'));
    message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});
  }

  if(message.body === `${prefix}neko`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = await axios.get('https://purrbot.site/api/img/nsfw/neko/gif')
    const { data: mediaData } = await axios.get(result.data.link, {
      responseType: 'arraybuffer',
    }).catch(function (error) {
      message.reply('*Not found try again*')
    })
    const media = new MessageMedia('image/gif', mediaData.toString('base64'));
    message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});
  }

  if(message.body === `${prefix}pussylick`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = await axios.get('https://purrbot.site/api/img/nsfw/pussylick/gif')
    const { data: mediaData } = await axios.get(result.data.link, {
      responseType: 'arraybuffer',
    }).catch(function (error) {
      message.reply('*Not found try again*')
    })
    const media = new MessageMedia('image/gif', mediaData.toString('base64'));
    message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});
  }

  if(message.body === `${prefix}solo`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = await axios.get('https://purrbot.site/api/img/nsfw/solo/gif')
    const { data: mediaData } = await axios.get(result.data.link, {
      responseType: 'arraybuffer',
    }).catch(function (error) {
      message.reply('*Not found try again*')
    })
    const media = new MessageMedia('image/gif', mediaData.toString('base64'));
    message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});
  }

  if(message.body === `${prefix}threesome_1`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = await axios.get('https://purrbot.site/api/img/nsfw/threesome_fff/gif')
    const { data: mediaData } = await axios.get(result.data.link, {
      responseType: 'arraybuffer',
    }).catch(function (error) {
      message.reply('*Not found try again*')
    })
    const media = new MessageMedia('image/gif', mediaData.toString('base64'));
    message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});
  }

  if(message.body === `${prefix}threesome_2`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = await axios.get('https://purrbot.site/api/img/nsfw/threesome_ffm/gif')
    const { data: mediaData } = await axios.get(result.data.link, {
      responseType: 'arraybuffer',
    }).catch(function (error) {
      message.reply('*Not found try again*')
    })
    const media = new MessageMedia('image/gif', mediaData.toString('base64'));
    message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});
  }

  if(message.body === `${prefix}threesome_3`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = await axios.get('https://purrbot.site/api/img/nsfw/threesome_mmf/gif')
    const { data: mediaData } = await axios.get(result.data.link, {
      responseType: 'arraybuffer',
    }).catch(function (error) {
      message.reply('*Not found try again*')
    })
    const media = new MessageMedia('image/gif', mediaData.toString('base64'));
    message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});
  }

  if(message.body === `${prefix}yaoi`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = await axios.get('https://purrbot.site/api/img/nsfw/yaoi/gif')
    const { data: mediaData } = await axios.get(result.data.link, {
      responseType: 'arraybuffer',
    }).catch(function (error) {
      message.reply('*Not found try again*')
    })
    const media = new MessageMedia('image/gif', mediaData.toString('base64'));
    message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});
  }

  // start pornpic
  if(body.includes(`${prefix}pornpic`)) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const text = args.join(' ');
    const options = {
      search: text,
      limit: 1,
      type: "all", 
      extension: "jpg", 
      domains: ["xvideos.com", "pornhub.com", "hentai.tv"], 
      addDomains: ["xnxx.com"],
      noDatabase: true, 
    };

    porny.get(options).then(async (res) => {
      if(res[0]?.url) {
        const result = await axios.get(res[0]?.url)
        const { data: mediaData } = await axios.get(result?.config?.url, {
          responseType: 'arraybuffer',
        });
        const media = new MessageMedia('image/gif', mediaData.toString('base64'));
        message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});
      }
    }).catch((err) => {
      console.log('[ERROR] ' + err);
    });
  }
  // end pornpic

  // start randompic
  if(message.body === `${prefix}randompic`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const picresult = hub.getRandomHub();
    const { data: mediaData } = await axios.get(picresult, {
      responseType: 'arraybuffer',
    });
    const media = new MessageMedia('image/gif', mediaData.toString('base64'));
    message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});
  }
  // end randompic

  // start realass
  if(message.body === `${prefix}realass`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = nsfw.getRandomInCategory('ass', 'jpg');
    if(result.url) {
      const { data: mediaData } = await axios.get(result.url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end realass

  // start realboobs
  if(message.body === `${prefix}realboobs`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = nsfw.getRandomInCategory('boobs', 'jpg');
    if(result.url) {
      const { data: mediaData } = await axios.get(result.url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end realboobs

  // start creampie
  if(message.body === `${prefix}creampie`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = nsfw.getRandomInCategory('creampie', 'jpg');
    if(result.url) {
      const { data: mediaData } = await axios.get(result.url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end creampie

  // start pussy
  if(message.body === `${prefix}realpussy`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = nsfw.getRandomInCategory('pussy', 'jpg');
    if(result.url) {
      const { data: mediaData } = await axios.get(result.url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end pussy


  // start pussy
  if(message.body === `${prefix}asian`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = nsfw.getRandomInCategory('asian', 'jpg');
    if(result.url) {
      const { data: mediaData } = await axios.get(result.url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end pussy

  // start pussy
  if(message.body === `${prefix}bath-shower`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = nsfw.getRandomInCategory('bath-shower', 'jpg');
    if(result.url) {
      const { data: mediaData } = await axios.get(result.url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end pussy

  // start pussy
  if(message.body === `${prefix}bdsm`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = nsfw.getRandomInCategory('bdsm', 'jpg');
    if(result.url) {
      const { data: mediaData } = await axios.get(result.url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end pussy


  // start pussy
  if(message.body === `${prefix}anal`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = nsfw.getRandomInCategory('anal', 'jpg');
    if(result.url) {
      const { data: mediaData } = await axios.get(result.url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end pussy

  // start pussy
  if(message.body === `${prefix}latin`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = nsfw.getRandomInCategory('latin', 'jpg');
    if(result.url) {
      const { data: mediaData } = await axios.get(result.url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end pussy

  // start pussy
  if(message.body === `${prefix}lesbian`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = nsfw.getRandomInCategory('lgbt-lesbian', 'jpg');
    if(result.url) {
      const { data: mediaData } = await axios.get(result.url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end pussy

  // start pussy
  if(message.body === `${prefix}lingerie`) {
    if (!isGroup) return message.reply('*Work only in group*')

    message.reply(`please wait sending...`)
    const result = nsfw.getRandomInCategory('lingerie', 'jpg');
    if(result.url) {
      const { data: mediaData } = await axios.get(result.url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end pussy

  // start pussy
  if(message.body === `${prefix}massage`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = nsfw.getRandomInCategory('massage', 'jpg');
    if(result.url) {
      const { data: mediaData } = await axios.get(result.url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end pussy

  // start pussy
  if(message.body === `${prefix}mature`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = nsfw.getRandomInCategory('mature', 'jpg');
    if(result.url) {
      const { data: mediaData } = await axios.get(result.url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end pussy

  // start pussy
  if(message.body === `${prefix}milf`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = nsfw.getRandomInCategory('milf', 'jpg');
    if(result.url) {
      const { data: mediaData } = await axios.get(result.url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end pussy

  // start pussy
  if(message.body === `${prefix}pornstar`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = nsfw.getRandomInCategory('pornstar', 'jpg');
    if(result.url) {
      const { data: mediaData } = await axios.get(result.url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end pussy

  // start pussy
  if(message.body === `${prefix}public`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = nsfw.getRandomInCategory('public', 'jpg');
    if(result.url) {
      const { data: mediaData } = await axios.get(result.url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end pussy

  // start pussy
  if(message.body === `${prefix}squirting`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = nsfw.getRandomInCategory('squirting', 'jpg');
    if(result.url) {
      const { data: mediaData } = await axios.get(result.url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end pussy

  // start pussy
  if(message.body === `${prefix}uniform`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = nsfw.getRandomInCategory('uniform', 'jpg');
    if(result.url) {
      const { data: mediaData } = await axios.get(result.url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end pussy

  // start pussy
  if(message.body === `${prefix}toys`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const result = nsfw.getRandomInCategory('toys', 'jpg');
    if(result.url) {
      const { data: mediaData } = await axios.get(result.url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end pussy


  //================ random girl=============
  // start indo girl
  if(message.body === `${prefix}indonesiangirl`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const url = 'https://api.zacros.my.id/asupan/indonesia';
    if(url) {
      const { data: mediaData } = await axios.get(url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end indo girl


  // start korean girl
  if(message.body === `${prefix}koreangirl`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const url = 'https://api.zacros.my.id/asupan/korea';
    if(url) {
      const { data: mediaData } = await axios.get(url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end korean girl

  // start chinese girl
  if(message.body === `${prefix}chinesegirl`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const url = 'https://api.zacros.my.id/asupan/china';
    if(url) {
      const { data: mediaData } = await axios.get(url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end chinese girl

  // start chinese girl
  if(message.body === `${prefix}japanesegirl`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const url = 'https://api.zacros.my.id/asupan/japan';
    if(url) {
      const { data: mediaData } = await axios.get(url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end chinese girl

  // start chinese girl
  if(message.body === `${prefix}vietnamgirl`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const url = 'https://api.zacros.my.id/asupan/vietnam';
    if(url) {
      const { data: mediaData } = await axios.get(url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end chinese girl

  // start chinese girl
  if(message.body === `${prefix}thaigirl`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const url = 'https://api.zacros.my.id/asupan/thailand';
    if(url) {
      const { data: mediaData } = await axios.get(url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end chinese girl


  // start chinese girl
  if(message.body === `${prefix}malaysiangirl`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const url = 'https://api.zacros.my.id/asupan/malaysia';
    if(url) {
      const { data: mediaData } = await axios.get(url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end chinese girl

  // start chinese girl
  if(message.body === `${prefix}hijabgirl`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const url = 'https://api.zacros.my.id/asupan/hijaber';
    if(url) {
      const { data: mediaData } = await axios.get(url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end chinese girl


  // start chinese girl
  if(message.body === `${prefix}loligirl`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const url = 'https://api.zacros.my.id/asupan/loli';
    if(url) {
      const { data: mediaData } = await axios.get(url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('video/mp4', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end chinese girl

  // start chinese girl
  if(message.body === `${prefix}randomdancinggirl`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const url = 'https://api.zacros.my.id/asupan/santuy';
    if(url) {
      const { data: mediaData } = await axios.get(url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('video/mp4', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end chinese girl

  // start chinese girl
  if(message.body === `${prefix}ukhtygirl`) {
    if (!isGroup) return message.reply('*Work only in group*')
    message.reply(`please wait sending...`)
    const url = 'https://api.zacros.my.id/asupan/ukhty';
    if(url) {
      const { data: mediaData } = await axios.get(url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('video/mp4', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end chinese girl


  // start chinese girl
  if(message.body === `${prefix}cecangirl`) {
    message.reply(`please wait sending...`)
    const url = 'https://api.zacros.my.id/asupan/cecan';
    if(url) {
      const { data: mediaData } = await axios.get(url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('image/gif', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end chinese girl


  // start chinese girl
  if(message.body === `${prefix}randomvideo`) {
    message.reply(`please wait sending...`)
    const url = 'https://api.zacros.my.id/asupan/random';
    if(url) {
      const { data: mediaData } = await axios.get(url, {
        responseType: 'arraybuffer',
      }).catch(function (error) {
        message.reply('*Not found try again*')
      })
      const media = new MessageMedia('video/mp4', mediaData.toString('base64'));
      message.reply(media, from, { mentions: [contact], caption: caption }).then((r) => {});  
    } else {
      message.reply('*Not found try again*')
    }
  }
  // end chinese girl




  // --> end
});

client.initialize();

// Socket IO
io.on('connection', function(socket) {
  socket.emit('message', 'Connecting...');

  client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
    qrcode.toDataURL(qr, (err, url) => {
      socket.emit('qr', url);
      socket.emit('message', 'QR Code received, scan please!');
    });
  });

  client.on('ready', () => {
    socket.emit('ready', 'Whatsapp is ready!');
    socket.emit('message', 'Whatsapp is ready!');
  });

  client.on('authenticated', () => {
    socket.emit('authenticated', 'Whatsapp is authenticated!');
    socket.emit('message', 'Whatsapp is authenticated!');
    console.log('AUTHENTICATED');
  });

  client.on('auth_failure', function(session) {
    socket.emit('message', 'Auth failure, restarting...');
  });

  client.on('disconnected', (reason) => {
    socket.emit('message', 'Whatsapp is disconnected!');
    client.destroy();
    client.initialize();
  });
});

const findGroupByName = async function(name) {
  const group = await client.getChats().then(chats => {
    return chats.find(chat => 
      chat.isGroup && chat.name.toLowerCase() == name.toLowerCase()
    );
  });
  return group;
}

server.listen(port, function() {
  console.log('App running on *: ' + port);
});

color = (text, color) => {
  switch (color) {
  case 'red': return '\x1b[31m' + text + '\x1b[0m'
  case 'white': return '\x1b[33m' + text + '\x1b[0m'
  default: return '\x1b[32m' + text + '\x1b[0m' // default is green
  }
}

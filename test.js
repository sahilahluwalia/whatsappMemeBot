const qrcode = require('qrcode-terminal');
MessageMedia = require('whatsapp-web.js').MessageMedia;
const path = require('path');
const fs = require('fs');
const { unlink } = require('fs/promises');
var myfile
const directoryPath = path.join(__dirname, 'posts');
fs.readdir(directoryPath, function  (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function  (file,number) {
        // console.log(file)
        // console.log(number)
        // if(number%80==0){
        //     console.log(number)
        // }
    });
});

const FileDeleter = async (path) => {
        try {
          await unlink(path);
          console.log(`successfully deleted ${path}`);
        } catch (error) {
          console.error('there was an error:', error.message);
      }
}


const { Client, LocalAuth} = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth(
        {
            dataPath:'./token'
        }
    ),
    puppeteer: {
        headless: false,
        executablePath: '/usr/bin/google-chrome-stable',
    }
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
const groups=[
    // {
    //   id: '917002360198-1552207876@g.us',
    //   name: 'M E M E S T R U A T I O N'
    // },
     { id: '120363046778314843@g.us', name: 'Test' } 
    // { id: '919997607064-1562001752@g.us', name: 'DANK AF MEMES' },
  ]


  
client.on('ready', async() => {
    console.log('Client is ready!');
    for (let group of groups) {
        client.sendMessage(group['id'], "MEME")
    }
    fs.readdir(directoryPath, function  (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        // files.forEach(function  (file) {
        //     for (let group of groups) {
        //         console.log('spam started')
        //         const media = MessageMedia.fromFilePath(`./posts/${file}`);
        //         client.sendMessage(group['id'], media).then
        //         (()=>{
        //             console.log('message sent')
        //             setTimeout (() => {
        //                 console.log('fil deleting started')
        //                 FileDeleter(`./posts/${file}`)
        //                 console.log('file deleted')
        //             },300000)
        //         }
        //         ).catch((err)=>{console.log(err)})
    
        //     }})
    });});
    
   






client.initialize();




// const name=[
//     {
//       id: '917002360198-1552207876@g.us',
//       name: 'M E M E S T R U A T I O N'
//     },
//     // { id: '919997607064-1562001752@g.us', name: 'DANK AF MEMES' },
//   ]

// for (let x of name) {
//     console.log(x['id'])
//     console.log(x['name'])
// }

// const groupName = 'M E M E S T R U A T I O N'
// const chats = await client.getChats()
// const groups = chats
//     .filter(chat => chat.isGroup && chat.name == groupName)
//     .map(chat => {
//         return {
//             id: chat.id._serialized, // ***********-**********@g.us
//             name: chat.name // Your Group Name
//         }
//     })
//     console.log(groups)
 
   
  // client.sendMessage(group['id'], "It's meeeeeeeeeeeeme time")
//     //listing all files using forEach
//     
       
//     });
//     for (let group of groups) {
//         // console.log('spam started')
//         client.sendMessage(group['id'], "Khatam Tata Bye Bye")
//        console.log('completed')
//     }
// });
  
   


    // client.sendMessage(groups[0].id, 'Hello from WhatsApp!');
    // client.searchMessages('Hello from WhatsApp! multple', groups[0].id, 1, 1).then((messages) => {
    //     console.log(messages)
    // })
    // // send myfile to whatsapp media file
    // const media = MessageMedia.fromFilePath(`./posts/${myfile}`);
    // client.sendMessage(groups[0].id, media, { caption: 'My Caption' });
//     // client.sendMessage(groups[0].id, media);


// fs.readdir(directoryPath, function  (err, files) {
//     //handling error
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     } 

// - 3amjokes
//   - ComedyCemetery
//   - dadjokes
//   - funny
//   - jokes
//   - 2meirl42meirl4meirl
//   - rapedwarflore
//   - okretardbuddy
//   - absolutelynotme_irl
//   - anti_meme
//   - blessedimages
//   - anime_irl
//   - 2meirl4meirl
//   - 2meirl42meirl4meirl
//   - BikiniBottomTwitter
//   - Chinese_Bootleg_Memes
//   - chadsriseup
//   - coaxedintoasnafu
//   - dank_meme
//   - dankchristianmemes
//   - dankmemes
//   - DankMemesFromSite19
//   - explainitpeter
//   - FlatEarthMemes
//   - meirl
//   - meme
//   - memes
//   - metal_me_irl
//   - MetalMemes
//   - Minimalisticmemes
//   - SadMemesForHipTeens
//   - simpsonsshitposting
//   - smoobypost
//   - surrealmemes
//   - TooMeIrlForMeIrl
//   - wholesomeprequelmemes
//   - wholesomememes
//   - 4chan
//   - AniMemes
//   - Animememes
//   - MemeEconomy
//   - PrequelMemes
//   - ProgrammerHumor
//   - Whatcouldgowrong
//   - ankmemes
//   - funny
//   - greentext
//   - instantregret
//   - madlads
//   - pewdiepiesubmissions
//   - terriblefacebookmemes
//   - kidsAreFuckingStupid 
//   - trippinthroughtime
//   - MemeEconomy
//   - trippinthroughtime
//   - Memes_Of_The_Dank
//   - me_irl
//   - holup
//   - indiandankmeme
//   - dankrishu




// subreddit:
//   - ComedyCemetery
//   - 2meirl42meirl4meirl
//   - okretardbuddy
//   - anti_meme
//   - blessedimages
//   - anime_irl
//   - 2meirl4meirl
//   - 2meirl42meirl4meirl
//   - BikiniBottomTwitter
//   - dank_meme
//   - dankchristianmemes
//   - dankmemes
//   - explainitpeter
//   - meirl
//   - meme
//   - memes
//   - SadMemesForHipTeens
//   - simpsonsshitposting
//   - surrealmemes
//   - TooMeIrlForMeIrl
//   - wholesomeprequelmemes
//   - wholesomememes
//   - 4chan
//   - AniMemes
//   - Animememes
//   - MemeEconomy
//   - PrequelMemes
//   - ProgrammerHumor
//   - Whatcouldgowrong
//   - funny
//   - greentext
//   - instantregret
//   - madlads
//   - pewdiepiesubmissions
//   - terriblefacebookmemes
//   - kidsAreFuckingStupid 
//   - trippinthroughtime
//   - MemeEconomy
//   - trippinthroughtime
//   - Memes_Of_The_Dank
//   - me_irl
//   - holup
//   - indiandankmeme
//   - dankrishu
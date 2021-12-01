const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
// const unirest = require('unirest');
// const http = require('http');
// const https = require('https');
const request = require('request');
// const got = require('got');
// const { pipeline } = require('stream');

const app = express();

app.use(express.json()); //used to parse req body key-value pairs
app.use(cors()); //used to override browser's same origin policy while making http/https API/fetch kind of requests

const APP_ID = 'AIzaSyDzUn1AQNLHOX0juCnwOsuHZ5YwvhHBvlU';
const APP_CODE = '<YOUR_API_CODE_HERE>';
const APP_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
// const PLAYLIST_ID = 'PLqGvSRIK43p0GTwVeFwgMTtjvrG_ijKGg'; //public API
const PLAYLIST_ID = 'PLy8STvf6H-nj9XqfPt8sZxP1ekktY5Le1'; //private API

app.get('/', (req, res) => {
    res.send('It is working !');
});

// app.get('/youtube1', async (req, res) => {
//     // const playlist = await fetch(`${APP_API}?part=snippet&playlistId=${PLAYLIST_ID}&key=${APP_ID}`);
//     request({
//         uri: `${APP_API}`,
//         qs: {
//             part: 'snippet',
//             playlistId: PLAYLIST_ID,
//             key: APP_ID
//         }
//     }).pipe(res);
// });


// app.get('/youtube2', async (req, res) => {
//     // const playlist = await fetch(`${APP_API}?part=snippet&playlistId=${PLAYLIST_ID}&key=${APP_ID}`);
//     const data = got.stream({
//         uri: APP_API,
//         qs: {
//             part: 'snippet',
//             playlistId: PLAYLIST_ID,
//             key: APP_ID
//         }
//     });
//     pipeline(data, res, (err) => {
//         if (err) {
//             console.log(err);
//             res.sendStatus(500);
//         }
//     });
// });

app.get('/youtube3', async (req, res) => {
    // const playlist = await fetch(`${APP_API}?part=snippet&playlistId=${PLAYLIST_ID}&key=${APP_ID}`);
    request({
        uri: `${APP_API}`,
        qs: {
            part: 'snippet',
            playlistId: PLAYLIST_ID,
            key: APP_ID
        }
    }).pipe(res);
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`app is running on port 5000`);
});
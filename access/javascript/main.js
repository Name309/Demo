

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const music = $('.container-music__mp4')
const btnPlay = $('.container-author__random')

const iconPlay = $('.container-img__icon')
const waveSong = $('.control-left__wave')

const controlLeftImg = $('.control-left__img')
const listSongs = $('.container-list')

const inputTime = $('.control-center__current')
const endTime = $('.control-center__input-end')

const playControlCenter = $('.control-center__btn-play')
const startTime = $('.control-center__input-start')

const namePlaySong = $('.control-left__title-text')
const authorPlaySong = $('.control-left__title-desc')

const btnNext = $('.control-center__btn-next')
const btnPev = $('.control-center__btn-pev')

const randomBtn = $('.control-center__btn-random')
const btnRepeat = $('.control-center__btn-loop')

const volume = $('.control-right__input-current')
const volumeUp = $('.control-right__audio-volume')

const onVolume = $('.volume-up')
const unVolume = $('.icon-no-volume')

const control = $('.control')
const btnCreateListNew = $('.header-menu-news')

const slideWave = $('.bodySlide')
const waveMusic = $('.bodySlide__item')

const header = $('.header')

var listSongNew = []
var volumeNow 

let isPaused = false

const songsAPI = 'http://localhost:3000/songs'




const app = {
    currentIndex: 0,
    songs: [
        {
            id: "1",
            name: "Light It Up (feat. Jex) [NCS Release]",
            author: "Robin Hustin x TobiMorrow",
            album: "Nhạc Điện Tử",
            image: "./access/image/song7.jpg",
            path: "./access/songs/song7.mp4",
            time: "03:05",
            wave: "./access/slide/1.mp4"
        },
        {
            "id": "2",
            "name": "S.K.Y.Prox (Original Mix ) (Official Audio)",
            "author": "Hoaprox",
            "album": "Nhạc Điện Tử",
            "image": "./access/image/song6.jpg",
            "path": "./access/songs/song6.mp4",
            "time": "05:00",
            wave: "./access/slide/2.mp4"
        },
        {
            "id": "3",
            "name": "Perfect 10 (Unknown Brain & RudeLies VIP) [NCS Release]",
            "author": "Unknown Brain, Heather Sommer",
            "album": "Nhạc Điện Tử",
            "image": "./access/image/song4.jpg",
            "path": "./access/songs/song2.mp4",
            "time": "02:37",
            wave: "./access/slide/3.mp4"
        },
        {
            "id": "4",
            "name": "walk thru fire",
            "author": "victone",
            "album": "Nhạc Điện Tử",
            "image": "./access/image/song1.jpg",
            "path": "./access/songs/song1.mp4",
            "time": "02:45",
            wave: "./access/slide/4.mp4"
        },
        
        {
            "id": "5",
            "name": "Lantern Remix (Miyuri Remix)",
            "author": "Xomu",
            "album": "Nhạc Điện Tử",
            "image": "./access/image/song3.PNG",
            "path": "./access/songs/song3.mp4",
            "time": "03:31",
            wave: "./access/slide/5.mp4"
        },
        {
            "id": "6",
            "name": "You And Me (feat. Ke'nekt) [NCS Release]",
            "author": "Distrion & Electro-Light",
            "album": "Nhạc Điện Tử",
            "image": "./access/image/song4.jpg",
            "path": "./access/songs/song4.mp4",
            "time": "02:57",
            wave: "./access/slide/6.mp4"
        },
        {
            "id": "7",
            "name": "Far From Home [Jack Benjamin]",
            "author": "Alan Walker",
            "album": "Nhạc Điện Tử",
            "image": "./access/image/song8.jpg",
            "path": "./access/songs/song8.mp4",
            "time": "03:14",
            wave: "./access/slide/7.mp4"
        },
        {
            "id": "8",
            "name": "Home (Blaze U Remix)",
            "author": "Thimlife feat. Bibiane Z",
            "album": "Nhạc Điện Tử",
            "image": "./access/image/song9.jpeg",
            "path": "./access/songs/song9.mp4",
            "time": "03:03",
            wave: "./access/slide/8.mp4"
        },
        {
            "id": "9",
            "name": "Where We Started (Lyrics) feat. Jex",
            "author": "Lost Sky",
            "album": "Nhạc Điện Tử",
            "image": "./access/image/song9.jpg",
            "path": "./access/songs/song10.mp4",
            "time": "03:42",
            wave: "./access/slide/9.mp4"
        },
        {
            "id": "10",
            "name": "Link [NCS Release]",
            "author": "Jim Yosef",
            "album": "Nhạc Điện Tử",
            "image": "./access/image/song10.jpg",
            "path": "./access/songs/song11.mp4",
            "time": "03:44",
            wave: "./access/slide/10.mp4"
        },
        {
            "id": "11",
            "name": "No Rival [NCS Release]",
            "author": "Egzod, Maestro Chives & Alaina Cross",
            "album": "Nhạc Điện Tử",
            "image": "./access/image/song12.jpg",
            "path": "./access/songs/song12.mp4",
            "time": "03:18",
            wave: "./access/slide/11.mp4"
        }, 
        {
            "id": "12",
            "name": "Sky",
            "author": "Alan Walker & Alex Skrindo",
            "album": "Nhạc Điện Tử",
            "image": "./access/image/song13.webp",
            "path": "./access/songs/song13.mp4",
            "time": "03:22",
            wave: "./access/slide/12.mp4"
        },
        {
            "id": "13",
            "name": "Ignite feat. Julie Bergan & Seungri (Lyric Video)",
            "author": "K-391 & Alan Walker",
            "album": "Nhạc Điện Tử",
            "image": "./access/image/song14.jpg",
            "path": "./access/songs/song14.mp4",
            "time": "03:22",
            wave: "./access/slide/13.mp4"
        }
    ],
    renderListSong() {
        var html = this.songs.map(function (song, index) {
            return `
            <div class="container-list__item ${index == app.currentIndex ? "active-bg": ''}" data-index="${index}">
                <div class="container-list__item-song">
                    <div class="container-list__icon">
                        <i class="container-list__icon-item fa-solid fa-music"></i>
                    </div>
                    <div class="container-list__img">
                        <img src="${song.image}" alt="" class="container-list__item-img">
                        <div class="container-list__wave ${index == app.currentIndex ? 'active-icon' : ''}">
                            <div class="container-list__wave-item"></div>
                            <div class="container-list__wave-item"></div>
                            <div class="container-list__wave-item"></div>
                            <div class="container-list__wave-item"></div>
                        </div>
                    </div>
                    <div class="container-list__name-song">
                        <div class="container-list__item-name">
                            ${song.name}
                        </div>
                        <div class="container-list__item-author">
                            ${song.author}
                        </div>
                    </div>
                </div>
                <div class="container-list__item-album">
                    ${song.album}
                </div>
                <span class="container-list__item-time">
                    ${song.time}
                </span>
            </div>
            `
        })

        listSongs.innerHTML = html.join('')

    },

    handelEvent(songs) {

        var timeMusic = $$('.container-list__item-time')
        timeMusic.innerHTML = 60

        const _this = this
        const waveListItem = $('.container-list__wave')
        btnPlay.onclick = function () {
            if (isPaused) {
                music.pause()
                isPaused = false
            } else {
                music.play()
                isPaused = true
            }
            btnPlay.classList.toggle('btn-pause')
            playControlCenter.classList.toggle('active')
            iconPlay.classList.toggle('active')
            waveSong.classList.toggle('active')
            control.classList.toggle('control-active')
            btnCreateListNew.classList.toggle('bottom')
            slideWave.classList.toggle('active-wave')
            header.classList.toggle('fullscreen')
        }

        iconPlay.onclick = function () {
            if (isPaused) {
                music.pause()
                isPaused = false
            } else {
                music.play()
                isPaused = true
            }
            btnPlay.classList.toggle('btn-pause')
            waveSong.classList.toggle('active')
            iconPlay.classList.toggle('active')
            playControlCenter.classList.toggle('active')
            control.classList.toggle('control-active')
            btnCreateListNew.classList.toggle('bottom')
            slideWave.classList.toggle('active-wave')
            header.classList.toggle('fullscreen')

        }

        listSongs.onclick = function (e) {
            const songNode = e.target.closest('.container-list__item:not(.active-bg)');

            if(songNode || e.target.closest('.container-list__item')) {
                _this.currentIndex = Number(songNode.dataset.index)
                _this.loadCurrentSong(songs)
                music.play()
                _this.renderListSong(songs)
                isPaused = true
            }
            iconPlay.classList.add('active')
            waveSong.classList.add('active')
            playControlCenter.classList.add('active')
            btnPlay.classList.add('btn-pause')
            control.classList.add('control-active')
            btnCreateListNew.classList.add('bottom')
            slideWave.classList.add('active-wave')
            header.classList.add('fullscreen')
            _this.scrollElementTop()

        }

       

        music.ontimeupdate = function (e) {
            if (music.duration) {
                const currentTime = music.currentTime / music.duration * 100
                inputTime.value = currentTime
                var minute = Math.floor(music.duration / 60)
                var millisecond = Math.floor(music.duration % 60)
                if (minute < 10) {
                    minute = "0" + minute
                }
                if (millisecond < 10) {
                    millisecond = "0" + millisecond
                }
                endTime.innerHTML = minute + ":" + millisecond
                var minuteStart = Math.floor(music.currentTime / 60)
                var millisecondEnd = Math.floor(music.currentTime % 60)

                if(minuteStart < 10) {
                    minuteStart = "0" + minuteStart
                }
                if(millisecondEnd < 10) {
                    millisecondEnd = "0" + millisecondEnd
                }
                startTime.innerHTML = `${minuteStart}:${millisecondEnd}`
            }
        }

        playControlCenter.onclick = function() {
            if(isPaused) {
                music.pause()
                isPaused = false
                waveMusic.pause()
            } else {
                music.play()
                waveMusic.play()
                isPaused = true
            }
            playControlCenter.classList.toggle('active')
            iconPlay.classList.toggle('active')
            waveSong.classList.toggle('active')
            btnPlay.classList.toggle('btn-pause')
            
        }

        inputTime.oninput = function(e) {
            const seekTime = e.target.value * music.duration / 100
            music.currentTime = seekTime
        }

        btnNext.onclick = function() {
            if(randomBtn.classList.contains('active-control')) {
                _this.randomCurrentSong(songs)
                music.play()
            } else {
                _this.nextCurrentSong(songs)
                music.play()
                playControlCenter.classList.add('active')
                iconPlay.classList.add('active')
                waveSong.classList.add('active')
                btnPlay.classList.add('btn-pause')
            }
            _this.scrollElementTop()
        }

        btnPev.onclick = function() {
           if(randomBtn.classList.contains('active-control')) {
                _this.randomCurrentSong(songs)
                music.play()
           } else {
                _this.pevCurrentSong(songs)
                music.play()
                playControlCenter.classList.add('active')
                iconPlay.classList.add('active')
                waveSong.classList.add('active')
                btnPlay.classList.add('btn-pause')
                _this.scrollElementTop()
           }
        }

        randomBtn.onclick = function() {
            randomBtn.classList.toggle('active-control')
        }

        btnRepeat.onclick = function() {
            btnRepeat.classList.toggle('active-control')
        }

        music.onended = function() {
            const saveRandom =  randomBtn.classList.contains('active-control')
            const saveRepeat = btnRepeat.classList.contains('active-control')

            if(saveRandom) {
                _this.randomCurrentSong()
                music.play()
            } else {
                if(saveRepeat) {
                    music.play()
                } else {
                    if(app.currentIndex == _this.songs.length - 1) {
                        isPaused = false
                        iconPlay.classList.remove('active')
                        waveSong.classList.remove('active')
                        playControlCenter.classList.remove('active')
                        btnPlay.classList.remove('btn-pause')
                        control.classList.remove('control-active')
                        btnCreateListNew.classList.remove('bottom')
                        header.classList.remove('fullscreen')
                        slideWave.classList.remove('active-wave')
                        music.pause()
                    } else {
                        _this.nextCurrentSong()
                        music.play()
                    }
                }
            }
            _this.scrollElementTop()
        }


        volume.oninput = function() {
            music.volume = volume.value / 10
            volumeNow = volume.value
            if(music.volume == 0) {
                volumeUp.classList.add("no-volume")
            } else {
                volumeUp.classList.remove("no-volume")
            }
        }
        
        onVolume.onclick = function() {
            volumeUp.classList.add("no-volume")
            volume.value = 0
            music.volume = 0
        }

        unVolume.onclick = function() {
            volumeUp.classList.remove("no-volume")
            volume.value = volumeNow
            music.volume = volumeNow / 10
        }

    },  


    scrollElementTop() {
        $('.container-list__item.active-bg').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    },

    loadCurrentSong() {
        this.songs.forEach(function (song, index) {
            if (app.currentIndex == index) {
                music.src = song.path
                controlLeftImg.src = `${song.image}`
                namePlaySong.innerText = `${song.name}`
                authorPlaySong.innerText = `${song.author}`
                waveMusic.src = `${song.wave}`
            }
        })

    },

    nextCurrentSong() {
        this.currentIndex++
        if(this.currentIndex > this.songs.length - 1) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
        this.renderListSong()
    },

    pevCurrentSong() {

        if(this.currentIndex == 0) {
            this.currentIndex = this.songs.length
        }
        this.currentIndex--
        this.loadCurrentSong()
        this.renderListSong()
    },

    randomCurrentSong() {

        var currentIndexNew = listSongNew

        do {
            app.currentIndex = Math.floor(Math.random() * this.songs.length)
        } while(currentIndexNew.some(function(song) {
            return song.id == app.songs[app.currentIndex].id
        }))

        listSongNew.push(this.songs[this.currentIndex])

        if(listSongNew.length === this.songs.length) {
            listSongNew = []
            currentIndexNew = listSongNew
        }

        this.loadCurrentSong()
        this.renderListSong()

    },

    start() {
        listSongNew = [this.songs[this.currentIndex]]
        this.loadCurrentSong()
        this.renderListSong()
        this.handelEvent()
    }
}

app.start()




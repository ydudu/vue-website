<template>
    <div class="music-wrapper">
        <AutoComplete
                class="inputSearch"
                v-model="inputValue"
                :transfer ="true"
                icon="ios-search"
                placeholder="搜索"
                style="width:300px">
            <div class="demo-auto-complete-item" style="height: 400px;">
                <p class="singerMessage">
                    <span class="singerName">歌名</span>
                    <span class="singer">歌手</span>
                </p>
                <Option v-for="(option, index) in inputData.list" :value="option.songname"  :key="option.id" @click.native="playListMusic(index)">
                    <span class="singerName">{{ option.songname }}</span>
                    <span class="singer">{{ option.singer[0].name }}</span>
                </Option>
            </div>
        </AutoComplete>
        <div class="hotSongList animated fadeIn" v-if="!value2">
            <Row :gutter="12">
                <Col class="col-li" :lg="4" :md="6" :sm="8" :xs="12" v-for="(hotSong, index) in hotSongList.list" :key="hotSong.id">
                    <img v-lazy="hotSong.imgurl" :key="hotSong.name" @click="handleEnterLive(index)">
                    <h4>{{hotSong.dissname}}</h4>
                    <p>{{hotSong.creator.name}}</p>
                    <p>播放量: {{hotSong.listennum}}</p>
                </Col>
            </Row>
        </div>
        <div class="musicList" v-if="value2">
            <div class="back" @click="handleBackHome">
                <Icon type="ios-arrow-back" :size="26"/>
            </div>
            <div class="music-body-ul animated fadeIn">
                <div class="theme-title" v-for="(song, index) in musicData" :key="song.id">
                    <img :src="song.logo" alt="" height="100px">
                    <div class="theme-title-p">
                        <p>{{song.dissname}}</p>
                        <p><Icon type="md-person" :size="25" color="green"/>{{song.nick}}</p>
                    </div>
                </div>
                <ul class="music-body-ul-names">
                    <li class="music-default music-name">歌曲</li>
                    <li class="music-default music-author">歌手</li>
                    <li class="music-default music-time">时长</li>
                </ul>
                <ul>
                    <li v-for="(musicSong, index) in resSongList" :key="musicSong.id" class="music-body-li"  @click="handleCurrent(index)" >
                        <div class="music-default music-name">{{index+1}} {{musicSong.title}} </div>
                        <div class="music-default music-author">{{musicSong.singer[0].name}}</div>
                        <div class="music-default music-time">{{s_to_hs(musicSong.interval)}}</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="audio-wrapper-bottom">
            <div class="audio-music">
                <div class="pic-wrapper"
                     :style="[{animationPlayState:playFlag?'paused':'running'}]"
                     @click="handleLrc"
                >
                    <img :src="songPicCurrent" alt="">
                </div>
                <div class="control-list">
                    <progress-bar
                            :songCurrentTime="songCurrentTime"
                            :musicCurrentAllTime="musicCurrentAllTime"
                            :percentData = "percentData"
                            @percentChange="setProgress"
                    ></progress-bar>
                    <div class="control">
                        <div class="songType">
                            <p>{{songName}}</p>
                            <p>{{songSinger}}</p>
                        </div>
                        <div class="control-btn">
                            <div class="backward" @click="handleBack()">
                                <Icon type="md-skip-backward" :size="20"/>
                            </div>
                            <div class="pause" @click="handlePause">
                                <Icon type="md-pause" :size="28" v-show="!playFlag"/>
                                <Icon type="md-play" style="transform: translateX(2px)" :size="28" v-show="playFlag"/>
                            </div>
                            <div class="forward" @click="handleForward">
                                <Icon type="md-skip-forward" :size="20"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <audio  ref="audio" class="audio"  @timeupdate="upDateTime"></audio>
        </div>
        <!-- 歌词界面显示与隐藏 -->
        <transition name="fade"
                    enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut"
        >
            <div class="lrc-wrapper "  v-if="lrcShow">
                <div class="lrc-back" @click="lrcShow = false">
                    <Icon type="ios-arrow-back" :size="26"/>
                </div>
                <div class="lrc-div" style="transition: top 0.3s ease-out;" :style="{'top': (250 - 30 * (lrcCurrentIndex + 1) + 'px')}">
                    <ul>
                        <li v-for="(item, index) in lrc" :key="index" :style="{'color': index === lrcCurrentIndex ? '#11d67a': '#BFEFFF'}" :class="{active: index === lrcCurrentIndex}">
                           {{item.c}}
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import {Row,Col,AutoComplete,Icon,Option} from 'iview'
    import progressBar from '../progress-bar/progress-bar'
    import {getAllListHot,songList,search} from '../../api/api.js'
    export default {
        name: "music",
        components: { progressBar,AutoComplete,Icon,Option,Row,Col},
        data () {
            return {
                musicData: [],
                toHs: [],
                lrcShow: false,
                value2: false,
                playFlag: true, //判断是否暂停
                music_Url: [], //获取的mid加上url后的参数列表
                musicIndex: 0, //当前播放索引
                musicSongName: [], //返回的name列表
                songName: "" ,//当前歌曲name值，
                musicCurrentAllTime: "", //该歌曲的总时间是多少
                songCurrentTime: "0:00",//当前进度时间,默认是0:00
                songCurrentDuration: [],//获取的时间列表,
                songPicList: [],
                songPicCurrent: "",
                songSingerList: [],//歌手列表
                songSinger: "",
                percentData: 0 , //当前进度时间与当前时间的比
                resSongList: [],
                hotSongList: [],
                hotSongListIndex: 0,
                hotId: "",
                inputData: "",
                inputValue: "",
                inputListUrl: [],
                lrcList: [],
                lrc: [], //歌词列表
                medisArray: [],
                lrcCurrentIndex: 0, //歌词当前索引值
                lrcCurrentTime: 0  //歌词播放当前时间
            }
        },
        methods: {
            //判断歌词界面显隐
            handleLrc() {
                this.lrcShow = !this.lrcShow;
            },
            //点击歌单
            handleEnterLive(index) {
                this.playFlag = false;
                this.hotSongListIndex = index;
                this.hotId = this.hotSongList.list[this.hotSongListIndex].dissid;
                this.value2 = !this.value2;
                document.querySelector(".ivu-drawer-body").scrollTop = 0;
                this.getMusic()
            },
            //返回歌单
            handleBackHome() {
                this.value2 =  !this.value2;
                document.querySelector(".ivu-drawer-body").scrollTop = 0;
            },
            //获取全部歌单
            getHotSongList () {
                getAllListHot().then((res)=>{
                    this.hotSongList = res.data.data;
                    // console.log(this.hotSongList);
                    this.getMusic();
                    this.getSearch();
                     // console.log(this.hotSongList)
                })
            },
            //获取歌单
            getMusic () {
                 songList(this.hotId).then((res)=>{
                    this.musicData = res.data.data;              
                    const that = this;
                    that.music_Url = [];
                    that.musicSongName = [];
                    that.songCurrentDuration = [];
                    that.songPicList = [];  //专辑封面列表
                    that.songSingerList = []; //歌手列表
                    that.lrcList = [];
                    that.resSongList = that.musicData[0].songlist;
                    that.resSongList.forEach((val)=>{
                        that.music_Url.push(`https://v1.itooi.cn/tencent/url?id=${val.mid}&quality=192`);//
                        that.songPicList.push(`https://v1.itooi.cn/tencent/pic?id=${val.mid}`);
                        that.lrcList.push(`https://v1.itooi.cn/tencent/lrc?id=${val.mid}`);
                        that.musicSongName.push(val.name);
                        that.songCurrentDuration.push(val.interval);
                        val.singer.forEach((value)=>{
                            that.songSingerList.push(value.name);
                        });
                    });
                    this.autoPlay();
                    // console.log( that.songPicList)
                });
            },
            //获取歌词
            getLrc() {
                this.$ajax.get(`${this.lrcList[this.musicIndex]}`).then((res)=>{
                    this.lrc = res.data;
                    //解析歌词
                    const medises = this.lrc.split("\n");
                    this.medisArray= [];
                    medises.forEach((item,i)=>{
                        var t = item.substring(item.indexOf("[") + 1, item.indexOf("]"));
                        this.medisArray.push({
                            t: (t.split(":")[0] * 60 + parseFloat(t.split(":")[1])).toFixed(3),
                            c: item.substring(item.indexOf("]") + 1, item.length)
                        });
                    });
                    this.lrc = this.medisArray;
                }).then((err)=>{
                    console.log(err)
                })
            },
          
            //搜索音乐
            getSearch () {
                search(this.inputValue).then((res)=>{
                    this.inputData = res.data.data;
                    //  console.log(this.inputData.list)
                    this.music_Url = [];
                    this.musicSongName = [];
                    this.songCurrentDuration = [];
                    this.songPicList = []; //封面列表
                    this.songSingerList = []; //歌手列表
                    this.lrcList = [];
                    this.inputData.list.forEach((val)=>{
                        this.music_Url.push(`https://v1.itooi.cn/tencent/url?id=${val.songmid}&quality=192`);//
                        this.songPicList.push(`https://v1.itooi.cn/tencent/pic?id=${val.songmid}`);
                        this.musicSongName.push(val.songname);
                        this.lrcList.push(`https://v1.itooi.cn/tencent/lrc?id=${val.songmid}`); //获取歌词url
                        this.songCurrentDuration.push(val.interval);
                        this.songSingerList.push(val.singer[0].name);
                    })
                })
            },
            //点击搜索框中的音乐所引到该值
            playListMusic(index) {
                this.handleCurrent(index);
            },
            //监听音乐当前的时间进度
            upDateTime() {
                const audio = this.$refs.audio;
                this.songCurrentTime = this.s_to_hs(parseInt(audio.currentTime));
                this.percentData = (parseInt(audio.currentTime)/this.songCurrentDuration[this.musicIndex]);
                this.songName = this.musicSongName[this.musicIndex];
                this.musicCurrentAllTime = this.s_to_hs(parseInt(this.songCurrentDuration[this.musicIndex]));
                this.songPicCurrent = this.songPicList[this.musicIndex];
                this.songSinger = this.songSingerList[this.musicIndex];
                this.lrcCurrentTime = audio.currentTime; //监听歌词当前时间
                for (let i = 0; i < this.lrc.length; i++) {
                    if (this.lrcCurrentTime > this.lrc[i].t) {
                        this.lrcCurrentIndex = i;
                    }
                }
            },
            setProgress(percent) {
                this.$refs.audio.currentTime = this.songCurrentDuration[this.musicIndex]*percent;
            },
            //点击列表索引到该音乐
            handleCurrent(current) {
                this.musicIndex = current;
                this.playFlag = false;
                this.autoPlay();
            },
            //顺序播放
            autoPlay () {
                const audio = this.$refs.audio;
                audio.src = this.music_Url[this.musicIndex]; //默认开始的url
                audio.loop = false;
                const that = this;
                this.songName = that.musicSongName[this.musicIndex]; //默认显示下标歌名
                this.songPicCurrent = that.songPicList[this.musicIndex];
                this.songSinger = that.songSingerList[this.musicIndex];
                this.musicCurrentAllTime = this.s_to_hs(parseInt(this.songCurrentDuration[this.musicIndex]));
                this.getLrc();
                if(!this.playFlag){
                    this.playing();
                }
                audio.addEventListener('ended',that.endFn,false);
            },
            //一首播放完后进行的函数
            endFn() {
                const audio = this.$refs.audio;
                this.musicIndex++;
                if(this.musicIndex > this.music_Url.length-1) {
                    this.musicIndex=0;
                    audio.src = this.music_Url[this.musicIndex];
                    audio.play();
                }else{
                    audio.src = this.music_Url[this.musicIndex];
                    audio.play();
                }
            },
            //播放
            playing(){
                const audio = this.$refs.audio;
                this.playFlag = false;
                audio.play();
            },
            //向上一首切换
            handleBack () {
                this.musicIndex--;
                if(this.musicIndex < 0) {
                    this.musicIndex = this.music_Url.length -1;
                }
                this.autoPlay();
                this.playing();
            },
            //下一首切换
            handleForward () {
                this.musicIndex++;
                if(this.musicIndex >= this.music_Url.length) {
                    this.musicIndex = 0;
                }
                // console.log(this.musicIndex);
                this.autoPlay();
                this.playing();
            },
            //控制暂停
            handlePause () {
                const audio = this.$refs.audio;
                if(audio !== null){
                    if(audio.paused){
                        audio.play();
                        this.playFlag = false;
                    }else{
                        // audio.currentTime = 0;
                        audio.pause();
                        this.playFlag = true;
                    }
                }
            },
            //秒转化为分钟
            s_to_hs(s) {
                let oh = Math.floor(s/60);
                let os = s % 60;
                oh = (oh.toString().length == 1)?''+oh:oh;
                os = (os.toString().length == 1)?'0'+os:os;
                return oh+':'+os
            }
        },
        mounted () {
            this.getHotSongList();
        },
    }
</script>
<style lang="scss">
    @import './music.scss'
</style>
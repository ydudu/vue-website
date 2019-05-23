<template>
    <div class="progress-wrapper">
        <span >{{songCurrentTime}}</span>
        <div class="progress-side" ref="progressSide" @click="progressClick">
            <div class="progress" ref="progress"></div>
            <div class="progress-ball" ref="progressBall"
                @mousedown.prevent = "progressTouchStart"
                 @mouseup = "progressTouchUp"
                 @touchstart.prevent="progressTouchStart"
                 @touchmove.prevent = "progressTouchMove"
                 @touchend = "progressTouchEnd"
            ></div>
        </div>
        <span>{{musicCurrentAllTime}}</span>
    </div>
</template>

<script>
    export default {
        name: "progress-bar",
        data(){
            return {
                ballWidth: {
                    type: Number,
                    default: 0
                },
                touchInfo: {
                    initiated: false
                },
            }
        },
        props: {
            songCurrentTime: {
                type: String,
                default: ""
            },
            musicCurrentAllTime: {
                type: String,
                default: ""
            },
            percentData: {
                type: Number,
                default: 0
            }
        },
        methods: {
            progressTouchStart(e) { //按下按钮
                this.touchInfo.initiated = true;
                this.touchInfo.startX = e.pageX || e.touches[0].pageX;
                this.touchInfo.left = this.$refs.progress.clientWidth;
                // console.log(this.touchInfo.startX);
                const that = this;
                document.addEventListener('mousemove', that.progressTouchMove, false);
                // this.$refs.progressBall.addEventListener('mousemove', that.progressTouchMove, false);
                document.addEventListener('mouseup', that.progressTouchEnd, false)
            },
            progressTouchMove(e) { //开始移动
                if (!this.touchInfo.initiated) {
                    return
                }
                //计算偏移距离
                const moveX = e.pageX - this.touchInfo.startX||e.touches[0].pageX - this.touchInfo.startX;
                // 设置偏移值
                const offsetWidth = Math.min(Math.max(0, this.touchInfo.left + moveX),
                    this.$refs.progressSide.clientWidth - this.ballWidth);
                this.setOffset(offsetWidth);
                this.triggerPercent()
            },
            progressTouchEnd(e) { //移动结束
                this.touchInfo.initiated = false;
                this.triggerPercent()
            },
            progressTouchUp(e) { //PC按钮移动结束
                this.touchInfo.initiated = false;
                this.setOffset(e.offsetX); //之所以加上这个是为了阻止松开后按钮回到起点
                this.triggerPercent()
            },
            progressClick(e) {
                this.setOffset(e.offsetX);
                this.triggerPercent()
            },
            triggerPercent() { //算出可视区与进度条可视区的比值
                const barWidth = this.$refs.progressSide.clientWidth - this.ballWidth;
                const percent = Math.min(1, this.$refs.progress.clientWidth / barWidth);
                this.$emit('percentChange', percent)
            },
            setOffset(offsetWidth) {
                this.$refs.progress.style.width = `${offsetWidth}px`;
                this.$refs.progressBall.style.transform = `translate3d(${offsetWidth}px, 0, 0)`;
            }
        },
        mounted(){
            this.ballWidth = document.getElementsByClassName('progress-ball')[0].clientWidth;
        },
        watch: {
            percentData (newPercentData) {
                if(newPercentData>0) {
                    const barWidth = this.$refs.progressSide.clientWidth - this.ballWidth; //
                    const offsetWidth = newPercentData * barWidth;
                    this.setOffset(offsetWidth);
                     // console.log(offsetWidth)
                }
            }
        }
    }
</script>

<style lang="scss">
    .progress-wrapper{
        .progress-side{
            display: inline-block;
        }
        .progress-side{
            position: relative;
            margin-left: 8px;
            margin-right: 5px;
            cursor: pointer;
            height: 4px;
            width: 400px;
            @media screen and(max-width: 768px){
                width: 300px;
            }
            @media screen and(max-width: 576px){
                width: 150px;
            }
            background: #ccc;
            .progress{
                background: #48e92a;
                position: absolute;
                height: 100%;
            }
            .progress-ball{
                width: 10px;
                height: 10px;
                background: #fff;
                position: absolute;
                left: -5px;
                top: -3px;
                border-radius: 50%;
                cursor: pointer;
                touch-action: none;
            }
        }
    }
</style>
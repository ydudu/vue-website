<template>
    <Carousel autoplay v-model="value2" loop allow>
        <CarouselItem>
            <img :src="imgUrl.img2" width="100%">
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <img :src="imgUrl.img1" width="100%">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <img :src="imgUrl.img1" width="100%">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <img :src="imgUrl.img1" width="100%">
            </div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        name: 'TakeTurn',
        data () {
            return {
                value2: 0,
            }
        },
        props: {
            imgUrl:{
                type: Object,
                default: ()=>({})
            }
        }
    }
</script>
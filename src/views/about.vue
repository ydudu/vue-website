<template>
    <div class="about">
        <div class="about-website">
            <div>
                <h2>关于本站：</h2>
                <hr>
                <p>
                    制作本站的目的是为了开发与学习，本站采用VUE制作，支持响应式,毕竟是目前最火的三大框架之一，不用白不用，不过真的是棒棒的(^.^)Y Ya!!，虽然我没有用过其他两个，但是觉得Vue就是棒，
                    我觉得它是开发者的福利，轻量级渐进式高效、容易上手、组件化、数据驱动思想，同时拥有非常容易上手的API，官网说采用自底向上增量开发的设计，不得不说开发VUE的作者是个大神级的pioneer。 <br>
                    本站分为主页、文章、图片、音乐、其他等组成，您可以浏览一些各种不同类别的壁纸图片，可以看一些每日一更新的短文，也可以随心听听音乐，算是休闲娱乐吧--皮卡丘皮卡丘皮卡丘皮卡丘皮卡丘。
                    <br>
                    对于一个初级开发者的我而言，开发网站是一件非常有趣的事，它不仅能拓展自己的开发技术，还能很快的找到成就感，它会让你的思维不断更新增加创新能力，那种其乐融融夹杂着迫不及待催使着我努力变强^_^
                    <br>
                </p>
            </div>
        </div>
        <footer-table></footer-table>
    </div>
</template>

<script>
    import titleimg from '@/components/titleimg/titleimg'
    import footerTable from '@/components/footer/footer'
    export default {
        name: "about",
        components: {titleimg, footerTable}
    }
</script>

<style lang="scss">
    .about{
        background: #222125;
        margin-top: -50px;
        .about-website{
            width: 85%;
            margin: 0 auto;
            padding: 120px 10px;
            min-height: 100vh;
            position: relative;
            p{
                text-align: left;
                line-height: 24px;
                color: #fff;
                padding-top: 20px;
                font-size: 14px;
            }
            hr{
                border-color: #685884;
            }
            h2{
                font-size: 20px;
                color: #fff;
                line-height: 40px;
                text-align: left;
                padding-bottom: 10px;
            }
        }
    }
</style>
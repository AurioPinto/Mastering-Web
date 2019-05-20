<template>
<div>
    <div class="main">
        <div class="nav-bar">
            <div class="p">
               <router-link to="load"> <img width="30" height="30" src="../assets/images/tongjirongji.png" alt=""></router-link>
                <div>
                    <router-link to="init">Home</router-link>
                    <router-link to="navbar">Students</router-link>
                    <a href="https://en.tongji.edu.cn/">About Tongji</a>
                    <a href="http://www.lib.tongji.edu.cn/site/tongji/index.html">Library</a>
                </div>
            </div>
            <div class="img">
                <div>
                    <img width="19" height="19" src="../assets/images/alert.png" alt="">
                </div>
                <div>
                    <img width="32" height="32" src="../assets/images/people.png" alt="">
                </div>
            </div>
        </div>
        <div class="carousel">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="../assets/images/xiaotongji.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="../assets/images/chinaTongji.png" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="../assets/images/sipingT.jpg" alt="Third slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
<!--        <div class="news">-->
<!--            <div>-->
<!--                <p>Two Tongji Projects Won First Prize of the Third-->
<!--                      National College Students Innovative Method-->
<!--                      Application Competition</p>-->
<!--            </div>-->
<!--            <div>-->
<!--                <p>Events</p>-->
<!--                <button>More</button>-->
<!--            </div>-->
<!--            <div>-->
<!--                <span>Two Tongji Projects Won First Prize of the Third-->
<!--                    National College Students Innovative Method-->
<!--                    Application Competition</span>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</div>
</template>

<script>
  export default {
    name: 'load',
    data () {
      return {
        user: {
          name: 'load'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.main{
    /*padding: 0 50px 0;*/
    .nav-bar{
        width: 100%;
        height: 6.48%;
        padding: 10px 0 10px;
        background-color: #00263c;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .p{
            display: flex;
        }
        a{
            margin-left: 45px;
            color: #ffffff;
            font-size:16px;
            font-weight:600;
            text-decoration: solid;
        }
        a:nth-child(4){
            color: #00BEBE;
        }
        .img{
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                margin-right: 10px;
            }
        }
    }
    .carousel{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
       img{
           width: 100%;
           height: 500px;
           /*overflow: hidden;*/
       }
    }
    /*.news{*/
    /*    display: flex;*/
    /*    justify-content: space-around;*/
    /*    margin-top: 50px;*/
    /*    color: #ffffff;*/
    /*}*/
}
</style>

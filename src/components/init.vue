<template>
  <!-- <div> -->
  <div class="main">
    <div class="nav-bar">
      <div class="p">
        <router-link to="load">
          <img width="30" height="30" src="../assets/images/tongjirongji.png" alt>
        </router-link>
        <div>
          <router-link to="init">Home</router-link>
          <router-link to="navbar">Students</router-link>
          <a href="https://en.tongji.edu.cn/">About Tongji</a>
          <a href="http://www.lib.tongji.edu.cn/site/tongji/index.html">Library</a>
        </div>
      </div>
      <div class="img">
        <div>
          <img width="19" height="19" src="../assets/images/alert.png" alt>
        </div>
        <div>
          <img width="32" height="32" src="../assets/images/people.png" alt>
        </div>
      </div>
    </div>
    <div class="container">
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
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <div class="d-footer">
      <div class="footer">
        <div class="move up">
          <img src="../assets/images/mainT.png" alt>
        </div>
        <div class="text-footer">
          <p>联系我们</p>
          <p>
            同济大学新闻中心主办
            <b>E-mail:newscenter@tongji.edu.cn</b>
          </p>
          <p>
            Copyright@2018 同济大学版权所有
            <b>沪ICP备10014176号</b>
          </p>
          <p>
            沪公网安备：31009102000038号
            <b>沪举报中心</b>
          </p>
        </div>
        <div class="footer-img">
          <img src="../assets/images/weixi.jpg" alt>
          <img src="../assets/images/weibo.jpg" alt>
          <img src="../assets/images/cloud.jpg" alt>
          <img src="../assets/images/tongji.jpg" alt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "load",
  data() {
    return {
      user: {
        name: "load"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.main {
  /*padding: 0 50px 0;*/
  .nav-bar {
    width: 100%;
    height: 6.48%;
    padding: 10px 0 10px;
    background-color: #00263c;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .p {
      display: flex;
    }
    a {
      margin-left: 45px;
      color: #ffffff;
      font-size: 16px;
      font-weight: 600;
      text-decoration: solid;
    }
    a:nth-child(4) {
      color: #00bebe;
    }
    .img {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        margin-right: 10px;
      }
    }
  }
  .carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    img {
      width: 100%;
      height: 500px;
      /*overflow: hidden;*/
    }
  }
  .d-footer {
    display: flex;
    .footer {
      position: fixed;
      width: 100%;
      left: 0;
      right: 0;
      bottom: 0;
      background: #00263c;
      display: flex;
      height: 170px;
      justify-content: space-around;
      align-items: center;
      .up img {
        border-radius: 50px;
        width: 200px;
        height: 60px;
      }
    }
    .text-footer {
      color: #ffffff;
      font-size: 13px;
    }
    .footer-img img {
      border-radius: 50px;
      margin: 15px;
      width: 30px;
      height: 30px;
    }
  }
}
</style>

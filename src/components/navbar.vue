<template>
<div>
    <div class="init">
        <div class="nav-bar">
            <div class="p">
                <img width="30" height="30" src="../assets/images/tongjirongji.png" alt="">
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

        <div class="step-step">
            <div class="search-1">
                <input  class="search" type="text" placeholder="Search">
                <img width="15" height="16" class="search-pic" src="../assets/images/icon_search.png" alt="">
            </div>
            <div class="box-box">
                <div class="profile-pp" v-show="onOff">
                    <img class="btn" src="../assets/images/btn_closed.png" alt="" @click="onOff = false">
                    <div class="profile ">
                        <img :src="currentPeople.avatar" alt="">
                        <div class="paragh">
                            <P>{{currentPeople.cnName}}</P>
                            <P>{{currentPeople.enName}}</P>
                            <P>电子信息工程学院</P>
                        </div>
                    </div>
                    <div class="first-buttom">
                        <p class="lol">
                            <span>基本信息</span>
                        </p>
                    </div>
                    <div class="text-box">
                        <p class="bold">邮件</p>
                        <p>{{currentPeople.邮件}}</p>
                    </div>
                    <div>
                        <p class="bold">电话</p>
                        <p>{{currentPeople.电话}}</p>
                    </div>
                    <div>
                        <p class="bold">老师</p>
                        <p>{{currentPeople.老师}}</p>
                    </div>
                    <div>
                        <p class="bold">地点</p>
                        <p>shanghai-CN</p>
                    </div>
                    <div>
                        <p class="bold">申请编号</p>
                        <p>{{currentPeople.申请编号}}</p>
                    </div>
                    <div>
                        <p class="bold">毕业院校</p>
                        <p>{{currentPeople.毕业院校}}</p>
                    </div>
                    <div>
                        <p class="bold">专业</p>
                        <p>{{currentPeople.专业}}</p>
                    </div>
                </div>
                <div class="box-flow">
                    <div class="big-box">
                        <p>电子信息工程学院 226人</p>
                    </div>
                    <div class="the-box">
                         <div class="avatar" v-for="(people ,$index) in person" @click="showInfo(people)">
                        <img width="70" height="70" :src="people.avatar" alt="">
                        <p class="first-p">{{people.cnName}}</p>
                        <p class="second-p">{{people.enName}}</p>
                    </div>
                </div>
            </div>
        </div>
     </div>
 </div>
</div>
</template>

<script>
  export default {
    name: 'navbar',
    data () {
      return {
        user: {
          name: 'navbar'
        },
        person:[
          {
            avatar:'../assets/images/west-bj.jpg',
            cnName:'斯提凡',
            enName:"Pinto West",
            邮件:'aurio.pinto@tongji.edu.cn',
            电话: '+86 18717897971',
            专业: '通信工程',
            老师: '徐尚志',
            毕业院校: 'Tongji University',
            申请编号: '0182638'
          },
          {
            avatar:'../assets/images/img-1.jpg',
            cnName:'文蓉蓉',
            enName:"Charlie Torphy",
            邮件:'xiaoxin.fang@tongji.edu.cn',
            电话: '+86 138363293',
            专业: '自动化',
            老师: '徐尚志',
            毕业院校: 'Fudan University',
            申请编号: '01874638'
          },
          {
            avatar:'../assets/images/img-3.jpg',
            cnName:'廖咪',
            enName:"Raquel Haag",
            邮件:'raquel.haag@tongji.edu.cn',
            电话: '+86 127978293',
            专业: '计算机科学与技术',
            老师: '徐尚志',
            毕业院校: 'Beijing University',
            申请编号: '01289138'
          },
          {
            avatar:'../assets/images/img-2.jpg',
            cnName:'杜航斯',
            enName:"Camden Yost",
            邮件:'camden.yost@tongji.edu.cn',
            电话: '+86 122739293',
            专业: '通信工程',
            老师: '徐尚志',
            毕业院校: 'Imperial College',
            申请编号: '01289138'
          },
          {
            avatar:'../assets/images/img-9.jpg',
            cnName:'李童童',
            enName:"Simeon Gislason",
            邮件:'simeon.gislason@tongji.edu.cn',
            电话: '+86 122739293',
            专业: '自动化',
            老师: '徐尚志',
            毕业院校: 'Mexico University',
            申请编号: '01289138'
          },
          {
            avatar:'../assets/images/img-5.jpg',
            cnName:'张晓萌',
            enName:"Alan Cain",
            邮件:'alan.cain@tongji.edu.cn',
            电话: '+86 122739293',
            专业: '计算机科学与技术',
            老师: '徐尚志',
            毕业院校: 'Oxford University',
            申请编号: '01289138'
          },
          {
            avatar:'../assets/images/img-6.jpg',
            cnName:'蒋挺',
            enName:"Rocio Goodwin",
            邮件:'raquel.haag@tongji.edu.cn',
            电话: '+86 127978293',
            专业: '通信工程',
            老师: '徐尚志',
            毕业院校: 'Beijing University',
            申请编号: '01289138'
          },
          {
            avatar:'../assets/images/img-7.jpg',
            cnName:'孙诺',
            enName:"Gianni Block",
            邮件:'giami.block@tongji.edu.cn',
            电话: '+86 122739293',
            专业: '自动化',
            老师: '徐尚志',
            毕业院校: 'Oxford University',
            申请编号: '01289138'
          },
          {
            avatar:'../assets/images/img-8.jpg',
            cnName:'易灿',
            enName:"Elda Rutherford",
            邮件:'elda.rutherford@tongji.edu.cn',
            电话: '+86 127978293',
            专业: '计算机科学与技术',
            老师: '徐尚志',
            毕业院校: 'Wuhan University',
            申请编号: '01289138'
          },
          {
            avatar:'../assets/images/img-4.jpg',
            cnName:'萧嘟嘟',
            enName:"Kole Bednar",
            邮件:'kole.bednar@tongji.edu.cn',
            电话: '+86 185278293',
            专业: '通信工程',
            老师: '徐尚志',
            毕业院校: 'Beijing University',
            申请编号: '01289138'
          },
          {
            avatar:'../assets/images/img-13.jpg',
            cnName:'邓卜鹅',
            enName:"Jarret Mante",
            邮件:'jarret.manteg@tongji.edu.cn',
            电话: '+86 172637893',
            专业: '计算机科学与技术',
            老师: '徐尚志',
            毕业院校: 'State University',
            申请编号: '01226726'
          },
          {
            avatar:'../assets/images/pretty.jpg',
            cnName:'李峰',
            enName:"Vilma Connell",
            邮件:'vilma.connellg@tongji.edu.cn',
            电话: '+86 127971763',
            专业: '自动化',
            老师: '徐尚志',
            毕业院校: 'Jiaotong University',
            申请编号: '01289561'
          },
          {
            avatar:'../assets/images/img-1.jpg',
            cnName:'文蓉蓉',
            enName:"Charlie Torphy",
            邮件:'xiaoxin.fang@tongji.edu.cn',
            电话: '+86 138363293',
            专业: '通信工程',
            老师: '徐尚志',
            毕业院校: 'Fudan University',
            申请编号: '01874638'
          },
          {
            avatar:'../assets/images/img-3.jpg',
            cnName:'廖咪',
            enName:"Raquel Haag",
            邮件:'raquel.haag@tongji.edu.cn',
            电话: '+86 127978293',
            专业: '计算机科学与技术',
            老师: '徐尚志',
            毕业院校: 'Beijing University',
            申请编号: '01289138'
          },
          {
            avatar:'../assets/images/img-2.jpg',
            cnName:'杜航斯',
            enName:"Camden Yost",
            邮件:'camden.yost@tongji.edu.cn',
            电话: '+86 122739293',
            专业: '计算机科学与技术',
            老师: '徐尚志',
            毕业院校: 'Imperial College',
            申请编号: '01289138'
          },
          {
            avatar:'../assets/images/img-9.jpg',
            cnName:'李童童',
            enName:"Simeon Gislason",
            邮件:'simeon.gislason@tongji.edu.cn',
            电话: '+86 122739293',
            专业: '通信工程',
            老师: '徐尚志',
            毕业院校: 'Mexico University',
            申请编号: '01289138'
          },
          {
            avatar:'../assets/images/img-5.jpg',
            cnName:'张晓萌',
            enName:"Alan Cain",
            邮件:'alan.cain@nio.com',
            电话: '+86 122739293',
            专业: '自动化',
            老师: '徐尚志',
            毕业院校: 'Oxford University',
            申请编号: '01289138'
          },

          {
            avatar:'../assets/images/img-6.jpg',
            cnName:'蒋挺',
            enName:"Rocio Goodwin",
            邮件:'raquel.haag@nio.com',
            电话: '+86 127978293',
            专业: '通信工程',
            老师: '徐尚志',
            毕业院校: 'Beijing University',
            申请编号: '01289138'
          },
          {
            avatar:'../assets/images/img-7.jpg',
            cnName:'孙诺',
            enName:"Gianni Block",
            邮件:'giami.block@nio.com',
            电话: '+86 122739293',
            专业: '计算机科学与技术',
            老师: '徐尚志',
            毕业院校: 'Oxford University',
            申请编号: '01289138'
          },
          {
            avatar:'../assets/images/img-8.jpg',
            cnName:'易灿',
            enName:"Elda Rutherford",
            邮件:'elda.rutherford@nio.com',
            电话: '+86 127978293',
            专业: '自动化',
            老师: '徐尚志',
            毕业院校: 'Wuhan University',
            申请编号: '01289138'
          },
          {
            avatar:'../assets/images/img-4.jpg',
            cnName:'萧嘟嘟',
            enName:"Kole Bednar",
            邮件:'kole.bednar@nio.com',
            电话: '+86 185278293',
            专业: '自动化',
            老师: '徐尚志',
            毕业院校: 'Beijing University',
            申请编号: '01289138'
          },
          {
            avatar:'../assets/images/img-13.jpg',
            cnName:'邓卜鹅',
            enName:"Jarret Mante",
            邮件:'jarret.manteg@nio.com',
            电话: '+86 172637893',
            专业: '计算机科学与技术',
            老师: '徐尚志',
            毕业院校: 'State University',
            申请编号: '01226726'
          },
          {
            avatar:'../assets/images/pretty.jpg',
            cnName:'李峰',
            enName:"Vilma Connell",
            邮件:'vilma.connellg@nio.com',
            电话: '+86 127971763',
            专业: '自动化',
            老师: '徐尚志',
            毕业院校: 'Jiaotong University',
            申请编号: '01289561'
          },
          {
            avatar:'../assets/images/img-1.jpg',
            cnName:'文蓉蓉',
            enName:"Charlie Torphy",
            邮件:'xiaoxin.fang@nio.com',
            电话: '+86 138363293',
            专业: '计算机科学与技术',
            老师: '徐尚志',
            毕业院校: 'Fudan University',
            申请编号: '01874638'
          },
        ],
        currentPeople:{
        },
        onOff: false
      }
    },
    methods:{
      showInfo(person){
        console.log(person);
        this.currentPeople=person;
        this.onOff=true;
      }
    }
  }
</script>

<style lang="scss" scoped>
    input{
        outline: none;
    }
.init{
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
    }
    .img{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            margin-right: 10px;
        }
    }
    .step-step{
        margin: 40px 170px 50px;
        .search-1{
            display: flex;
            position: relative;
            .search:hover{
                border: 1px solid #00BEBE;
            }
            .search{
                width: 25%;
                height: 4.44%;
                background:rgba(255,255,255,1);
                border-radius:24px;
                padding: 12px 32px 12px;
            }
            img:nth-child(2){
                position: absolute;
                right: 1207px;
                top: 16px;

            }
        }
        .box-box{
            display: flex;
            margin-top: 50px;
            .profile-pp{
                padding: 30px 30px 0;
            }
            .profile-pp{
                width: 18.75%;
                height: 729px;
                background-color: #ffffff;
                margin-top: 18px;
                position: relative;
                .btn{
                    position: absolute;
                    top: 16px;
                    right: 20px;
                }
                .text-box{
                    margin-top: 31px;
                    .bold{
                        font-weight: bold;
                        margin-top: 20px;
                        font-size: 14px;
                    }
                }
                .first-buttom {
                    border-bottom: 2px solid #999999;
                    padding-bottom: 5px;
                    .lol{
                        margin: 38px 0 0;
                        color: #00BEBE;
                        height: 20px;
                        font-size: 14px;
                        font-weight: bold;
                    }
                    span{
                        position: relative;
                        width: 56px;
                    }
                    span:after{
                        content:'';
                        position: absolute;
                        width: 100%;
                        height: 2px;
                        background: #00BEBE;
                        bottom: -10px;
                        left: 0;
                    }
                }
                .profile{
                    display: flex;
                    align-items: center;
                    img{
                        width: 100px;
                        height: 100px;
                        border-radius: 50px;
                    }
                    .paragh p{
                        margin-left: 20px;
                        p:first-child{
                            font-weight: bold;
                        }
                        p:nth-child(2){
                            height: 24px;
                        }
                        p:nth-child(3){
                            height: 20px;
                            font-size: 12px;
                            color: #999999;
                        }
                    }
                }
            }
            .box-flow{
                padding: 50px 100px 0;
            }
            .box-flow{
                width: 1180px;
                height: 872px;
                background-color: #ffffff;
                margin: 0 40px;
                .the-box{
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    margin-top: 60px;
                }
                p:nth-child(1){
                    text-align: center;
                    font-weight: bold;
                    height: 22px;
                    font-size: 16px;
                    line-height: 22px;
                }
                .avatar{
                    width: 16.667%;
                    text-align: center;
                    margin-bottom: 52px;
                    img{
                        vertical-align: center;
                        border-radius: 50px;
                        border:  1px solid rgba(0,38,60,1);
                    }
                    .first-p second-p{
                        text-align: center;
                    }
                    .first-p,second-p{
                        margin-top: 19px;
                    }
                    .first-p{
                        text-align: center;
                        font-weight: bold;
                    }
                    .second-p{
                        color: #000F16;
                    }
                }
            }
        }
    }
    .last-step p{
        height: 24px;
        font-size: 16px;
        font-weight: bold;
        line-height:24px;
        margin-bottom: 50px;
    }
    .event span{
        margin-left: 20px;
        span:nth-child(3){
            height: 20px;
            font-size: 14px;
            font-weight: bold;
        }
    }

}
</style>

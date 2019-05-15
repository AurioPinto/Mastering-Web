<template>
    <div class="people">
        <div class="nav-bar">
            <div class="p">
                <img src="../assets/images/logo.png" alt="">
                <div >
                    <router-link to="Home">Home</router-link>
                    <router-link to="Value Driven">Value Driven</router-link>
                    <router-link to="Library">Library</router-link>
                    <router-link to="People">People</router-link>
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
        <!-- move  forward to the second step of this page-->
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
                            <P>数字运营部中国</P>
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
                        <p class="bold">汇报</p>
                        <p>{{currentPeople.汇报}}</p>
                    </div>
                    <div>
                        <p class="bold">地点</p>
                        <p>shanghai-CN</p>
                    </div>
                    <div>
                        <p class="bold">员工编号</p>
                        <p>{{currentPeople.员工编号}}</p>
                    </div>
                    <div>
                        <p class="bold">毕业院校</p>
                        <p>{{currentPeople.毕业院校}}</p>
                    </div>
                    <div>
                        <p class="bold">前公司</p>
                        <p>{{currentPeople.前公司}}</p>
                    </div>
                </div>
                <div class="box-flow">
                    <div class="big-box">
                        <p>数字运营部中国 226人</p>
                    </div>
                    <div class="the-box">
                         <div class="avatar" v-for="(people ,$index) in person" @click="showInfo(people)" ></div>
                        <img width="70" height="70" :src="people.avatar" alt="">
                        <p class="first-p">{{people.cnName}}</p>
                        <p class="second-p">{{people.enName}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'student',
  data: function () {
    return {
      user: {
        name: 'student'
      },
      person: [
        {
          avatar: '../assets/images/west-bj.jpg',
          cnName: '斯提凡',
          enName: 'Pinto West',
          邮件: 'aurio.pinto@nio.com',
          电话: '+86 18717897971',
          前公司: 'Microsoft',
          汇报: 'Andy Lu',
          毕业院校: 'Tongji University',
          员工编号: '0182638'
        },
        {
          avatar: '../assets/images/img-1.jpg',
          cnName: '文蓉蓉',
          enName: 'Charlie Torphy',
          邮件: 'xiaoxin.fang@nio.com',
          电话: '+86 138363293',
          前公司: 'Apple',
          汇报: 'Andy Lu',
          毕业院校: 'Fudan University',
          员工编号: '01874638'
        },
        {
          avatar: '../assets/images/img-3.jpg',
          cnName: '廖咪',
          enName: 'Raquel Haag',
          邮件: 'raquel.haag@nio.com',
          电话: '+86 127978293',
          前公司: 'Google',
          汇报: 'Andy Lu',
          毕业院校: 'Beijing University',
          员工编号: '01289138'
        },
        {
          avatar: '../assets/images/img-2.jpg',
          cnName: '杜航斯',
          enName: 'Camden Yost',
          邮件: 'camden.yost@nio.com',
          电话: '+86 122739293',
          前公司: 'Google',
          汇报: 'Andy Lu',
          毕业院校: 'Imperial College',
          员工编号: '01289138'
        },
        {
          avatar: '../assets/images/img-9.jpg',
          cnName: '李童童',
          enName: 'Simeon Gislason',
          邮件: 'simeon.gislason@nio.com',
          电话: '+86 122739293',
          前公司: 'Toyota',
          汇报: 'Andy Lu',
          毕业院校: 'Mexico University',
          员工编号: '01289138'
        },
        {
          avatar: '../assets/images/img-5.jpg',
          cnName: '张晓萌',
          enName: 'Alan Cain',
          邮件: 'alan.cain@nio.com',
          电话: '+86 122739293',
          前公司: 'Facebook',
          汇报: 'Andy Lu',
          毕业院校: 'Oxford University',
          员工编号: '01289138'
        },
        {
          avatar: '../assets/images/img-6.jpg',
          cnName: '蒋挺',
          enName: 'Rocio Goodwin',
          邮件: 'raquel.haag@nio.com',
          电话: '+86 127978293',
          前公司: 'Google',
          汇报: 'Andy Lu',
          毕业院校: 'Beijing University',
          员工编号: '01289138'
        },
        {
          avatar: '../assets/images/img-7.jpg',
          cnName: '孙诺',
          enName: 'Gianni Block',
          邮件: 'giami.block@nio.com',
          电话: '+86 122739293',
          前公司: 'Facebook',
          汇报: 'Andy Lu',
          毕业院校: 'Oxford University',
          员工编号: '01289138'
        },
        {
          avatar: '../assets/images/img-8.jpg',
          cnName: '易灿',
          enName: 'Elda Rutherford',
          邮件: 'elda.rutherford@nio.com',
          电话: '+86 127978293',
          前公司: 'apLink.lda',
          汇报: 'Andy Lu',
          毕业院校: 'Wuhan University',
          员工编号: '01289138'
        },
        {
          avatar: '../assets/images/img-4.jpg',
          cnName: '萧嘟嘟',
          enName: 'Kole Bednar',
          邮件: 'kole.bednar@nio.com',
          电话: '+86 185278293',
          前公司: 'Tecent',
          汇报: 'Andy Lu',
          毕业院校: 'Beijing University',
          员工编号: '01289138'
        },
        {
          avatar: '../assets/images/img-13.jpg',
          cnName: '邓卜鹅',
          enName: 'Jarret Mante',
          邮件: 'jarret.manteg@nio.com',
          电话: '+86 172637893',
          前公司: 'Forbes',
          汇报: 'Andy Lu',
          毕业院校: 'State University',
          员工编号: '01226726'
        },
        {
          avatar: '../assets/images/pretty.jpg',
          cnName: '李峰',
          enName: 'Vilma Connell',
          邮件: 'vilma.connellg@nio.com',
          电话: '+86 127971763',
          前公司: 'Taobao.cn',
          汇报: 'Andy Lu',
          毕业院校: 'Jiaotong University',
          员工编号: '01289561'
        },
        {
          avatar: '../assets/images/img-1.jpg',
          cnName: '文蓉蓉',
          enName: 'Charlie Torphy',
          邮件: 'xiaoxin.fang@nio.com',
          电话: '+86 138363293',
          前公司: 'Apple',
          汇报: 'Andy Lu',
          毕业院校: 'Fudan University',
          员工编号: '01874638'
        },
        {
          avatar: '../assets/images/img-3.jpg',
          cnName: '廖咪',
          enName: 'Raquel Haag',
          邮件: 'raquel.haag@nio.com',
          电话: '+86 127978293',
          前公司: 'Google',
          汇报: 'Andy Lu',
          毕业院校: 'Beijing University',
          员工编号: '01289138'
        },
        {
          avatar: '../assets/images/img-2.jpg',
          cnName: '杜航斯',
          enName: 'Camden Yost',
          邮件: 'camden.yost@nio.com',
          电话: '+86 122739293',
          前公司: 'Google',
          汇报: 'Andy Lu',
          毕业院校: 'Imperial College',
          员工编号: '01289138'
        },
        {
          avatar: '../assets/images/img-9.jpg',
          cnName: '李童童',
          enName: 'Simeon Gislason',
          邮件: 'simeon.gislason@nio.com',
          电话: '+86 122739293',
          前公司: 'Toyota',
          汇报: 'Andy Lu',
          毕业院校: 'Mexico University',
          员工编号: '01289138'
        },
        {
          avatar: '../assets/images/img-5.jpg',
          cnName: '张晓萌',
          enName: 'Alan Cain',
          邮件: 'alan.cain@nio.com',
          电话: '+86 122739293',
          前公司: 'Facebook',
          汇报: 'Andy Lu',
          毕业院校: 'Oxford University',
          员工编号: '01289138'
        },

        {
          avatar: '../assets/images/img-6.jpg',
          cnName: '蒋挺',
          enName: 'Rocio Goodwin',
          邮件: 'raquel.haag@nio.com',
          电话: '+86 127978293',
          前公司: 'Google',
          汇报: 'Andy Lu',
          毕业院校: 'Beijing University',
          员工编号: '01289138'
        },
        {
          avatar: '../../assets/images/img-7.jpg',
          cnName: '孙诺',
          enName: 'Gianni Block',
          邮件: 'giami.block@nio.com',
          电话: '+86 122739293',
          前公司: 'Facebook',
          汇报: 'Andy Lu',
          毕业院校: 'Oxford University',
          员工编号: '01289138'
        },
        {
          avatar: '../assets/images/img-8.jpg',
          cnName: '易灿',
          enName: 'Elda Rutherford',
          邮件: 'elda.rutherford@nio.com',
          电话: '+86 127978293',
          前公司: 'apLink.lda',
          汇报: 'Andy Lu',
          毕业院校: 'Wuhan University',
          员工编号: '01289138'
        },
        {
          avatar: '../assets/images/img-4.jpg',
          cnName: '萧嘟嘟',
          enName: 'Kole Bednar',
          邮件: 'kole.bednar@nio.com',
          电话: '+86 185278293',
          前公司: 'Tecent',
          汇报: 'Andy Lu',
          毕业院校: 'Beijing University',
          员工编号: '01289138'
        },
        {
          avatar: '../assets/images/img-13.jpg',
          cnName: '邓卜鹅',
          enName: 'Jarret Mante',
          邮件: 'jarret.manteg@nio.com',
          电话: '+86 172637893',
          前公司: 'Forbes',
          汇报: 'Andy Lu',
          毕业院校: 'State University',
          员工编号: '01226726'
        },
        {
          avatar: '../assets/images/pretty.jpg',
          cnName: '李峰',
          enName: 'Vilma Connell',
          邮件: 'vilma.connellg@nio.com',
          电话: '+86 127971763',
          前公司: 'Taobao.lda',
          汇报: 'Andy Lu',
          毕业院校: 'Jiaotong University',
          员工编号: '01289561'
        },
        {
          avatar: '../assets/images/img-1.jpg',
          cnName: '文蓉蓉',
          enName: 'Charlie Torphy',
          邮件: 'xiaoxin.fang@nio.com',
          电话: '+86 138363293',
          前公司: 'Apple',
          汇报: 'Andy Lu',
          毕业院校: 'Fudan University',
          员工编号: '01874638'
        }
      ],
      currentPeople: {},
      onOff: false
    }
  },
  methods: {
    showInfo (person) {
      console.log(person)
      this.currentPeople = person
      this.onOff = true
    }
  }
}
</script>

<style lang="scss" scoped>
    input{
        outline: none;
    }
    .nav-bar{
        width: 100%;
        height: 6.48%;
        padding: 10px 0 10px;
        background-color: #00263C;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .p{
            display: flex;
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
    }

    .step-step{
        margin: 40px 170px 50px;
        .search-1{
            display: flex;
            position: relative;
            img:nth-child(2){
                position: absolute;
                right: 1138px;
                top: 11px;
            }
            .search{
                width: 25%;
                height: 4.44%;
                background:rgba(255,255,255,1);
                border-radius:24px;
                padding: 12px 32px 12px;
            }
            .search:hover{
                border: 1px solid #00BEBE;
            }
        }
        .box-box{
            display: flex;
            margin-top: 50px;
            .profile-pp{
                width: 18.75%;
                height: 729px;
                background-color: #ffffff;
                margin-top: 18px;
                position: relative;
            }
            .profile-pp{
                padding: 30px 30px 0;
                .btn{
                    position: absolute;
                    top: 16px;
                    right: 20px;
                }
                .profile img{
                    width: 100px;
                    height: 100px;
                    border-radius: 50px;

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
                .text-box{
                    margin-top: 31px;
                    .bold{
                        font-weight: bold;
                        margin-top: 20px;
                        font-size: 14px;
                    }
                }
            }
            .box-flow{
                width: 1180px;
                height: 872px;
                background-color: #ffffff;
                margin: 0 40px;
            }
            .box-flow{
                padding: 50px 100px 0;
                .big-box p:nth-child(1){
                    text-align: center;
                    font-weight: bold;
                    height: 22px;
                    font-size: 16px;
                    line-height: 22px;
                }
                .the-box{
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    margin-top: 60px;
                    .avatar{
                        width: 16.667%;
                        text-align: center;
                        margin-bottom: 52px;
                        img{
                            vertical-align: center;
                            border-radius: 50px;
                            border:  1px solid rgba(0,38,60,1);
                        }
                        .first-p .second-p{
                            text-align: center;
                        }
                        .first-p .second-p{
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
    }
    .event span:nth-child(3){
        height: 20px;
        font-size: 14px;
        font-weight: bold;
    }
    .profile{
        display: flex;
        align-items: center;
    }
    .paragh p{
        margin-left: 20px;
    }
    .paragh p:first-child{
        font-weight: bold;
    }
    .paragh p:nth-child(2){
        height: 24px;
    }
    .paragh p:nth-child(3){
        height: 20px;
        font-size: 12px;
        color: #999999;
    }


















</style>

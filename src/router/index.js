import home from '../views/Index/home'
import theater from '../views/Index/theater'
import ticket from '../views/Index/ticket'
import mine from '../views/Index/mine'
import login from '../views/login'
import Index from '../views/Index'
import showList from '../views/showList'
import error from '../views/error'
import theaterDetail from '../views/theaterDetail'
import Search from '../views/Search'
import MySet from '../views/Myset'
import balance from '../views/balance'
import myOrder from '../views/myOrder'
import Mycard from '../views/Mycard'
import realName from '../views/realName'
import myAddress from '../views/myAddress'
import suggest from '../views/suggest'
import points from '../views/points'
export default [
    {
        path:'/login',
        component:login
    },
    {
        path:'/showList',
        component:showList
    },
    {
        path:'/theaterDetail/:id/:venue_id',
        component:theaterDetail
    },
    {
        path:'/Search/:venue_id',
        component:Search
    },
    {
        path:'/Myset',
        component:MySet,
        isLogin:true
    },
    {
        path:'/balance',
        component:balance,
        isLogin:true
    },
    {
        path:'/myOrder',
        component:myOrder,
        isLogin:true
    },
    {
        path:'/myCard',
        component:Mycard,
        isLogin:true
    },
    {
        path:'/points',
        component:points
    },
    {
        path:'/realName',
        component:realName,
        isLogin:true
    },
    {
        path:'/myaddress',
        component:myAddress,
        isLogin:true
    },
    {
        path:'/suggest',
        component:suggest,
        isLogin:true
    },
    {
        path:'/error',
        component:error
    },
    {
        path:'/',
        component:Index,
        childrens:[
            {
                path:'/',
                component:home,
                exact:true,
            },
            {
                path:'/theater',
                component:theater
            },
            {
                path:'/ticket',
                component:ticket
            },
            {
                path:'/mine',
                component:mine
            },
            
        ]
    },
]
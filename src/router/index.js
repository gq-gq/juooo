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
        path:'/Search',
        component:Search
    },
    {
        path:'/Myset',
        component:MySet
    },
    {
        path:'/balance',
        component:balance
    },
    {
        path:'/myOrder',
        component:myOrder
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
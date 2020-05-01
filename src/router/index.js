import home from '../views/Index/home'
import theater from '../views/Index/theater'
import ticket from '../views/Index/ticket'
import mine from '../views/Index/mine'
import login from '../views/login'
import Index from '../views/Index'
import showList from '../views/showList'
import error from '../views/error'
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
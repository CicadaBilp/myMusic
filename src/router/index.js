import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/musichall/index'
  },
  {
    path:'/home',
    component: () => import('../views/home/Home.vue'),
    children:[
      {
        path:'/home/musichall',
        component:() => import('../views/musichall/MusicHall.vue'),
        redirect: '/home/musichall/index',
        children:[
          {
            path:'/home/musichall/index',
            component:() => import('../views/musichall/components/index/Index.vue')
          },
          {
            path:'/home/musichall/singer',
            component:() => import('../views/musichall/components/singer/Singer.vue')
          },
          {
            path:'/home/musichall/newdisc',
            component:() => import('../views/musichall/components/newdisc/NewDisc.vue')
          },
          {
            path:'/home/musichall/ranks',
            component:() => import('../views/musichall/components/ranks/Ranks.vue')
          },
          {
            path:'/home/musichall/playlist',
            component:() => import('../views/musichall/components/playlist/PlayList.vue')
          },
          {
            path:'/home/musichall/station',
            component:() => import('../views/musichall/components/station/Station.vue')
          },
          {
            path:'/home/musichall/mv',
            component:() => import('../views/musichall/components/mv/Mv.vue')
          },
          {
            path:'/home/musichall/album',
            component:() => import('../views/musichall/components/album/Album.vue')
          },
          {
            path:'/home/musichall/ticketing',
            component:() => import('../views/musichall/components/ticketing/Ticketing.vue')
          }
        ]
      },
      {
        path:'/home/mymusic',
        component:() => import('../views/mymusic/MyMusic.vue')
      },
      {
        path:'/home/searchlist',
        component:() => import('../views/searchlist/SearchList.vue')
      },
      {
        path:'/home/playlistdetail',
        component:() => import('../views/playlistdetail/PlayListDetail.vue')
      },
      {
        path:'/home/albumdetail',
        component:() => import('../views/albumdetail/AlbumDetail.vue')
      }
    ]
  },
  {
    path:'/client',
    component:() => import('../views/client/Client.vue')
  },
  {
    path:'/open',
    component:() => import('../views/open/Open.vue')
  },
  {
    path:'/vip',
    component:() => import('../views/vip/Vip.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router

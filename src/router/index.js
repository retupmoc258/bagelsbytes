import { createWebHistory, createRouter } from "vue-router";

const routes = [

  {
    path: "/",
    name: "home-page",
    component: () => import('@/bb/HomeView.vue'),
  },
  {
    path: "/about",
    name: "about-page",
    component: () => import('@/bb/AboutView.vue'),
  },
  {
    path: "/services",
    name: "services-page",
    component: () => import('@/bb/ServiceView.vue'),
  },
  {
    path: "/page-team",
    name: "page-team",
    component: () => import('@/pages/page-team.vue'),
  },
  {
    path: "/page-pricing",
    name: "page-pricing",
    component: () => import('@/pages/page-pricing.vue'),
  },
  {
    path: "/page-faqs",
    name: "page-faqs",
    component: () => import('@/pages/page-faqs.vue'),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import('@/bb/contact.vue'),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import('@/pages/profiles/profile.vue'),
  },
  {
    path: "/profile-setting",
    name: "profile-setting",
    component: () => import('@/pages/profiles/profile-setting.vue'),
  },
  {
    path: "/profile-payment",
    name: "profile-payment",
    component: () => import('@/pages/profiles/profile-payment.vue'),
  },
  {
    path: "/billing-invoice",
    name: "billing-invoice",
    component: () => import('@/pages/profiles/billing-invoice.vue'),
  },
  {
    path: "/career-detail",
    name: "career-details",
    component: () => import('@/pages/career/career-detail.vue'),
  },
  {
    path: "/career-detail/:id",
    name: "career-detail",
    component: () => import('@/pages/career/career-detail.vue'),
  },
  {
    path: "/career-apply",
    name: "career-apply",
    component: () => import('@/pages/career/career-apply.vue'),
  },
  {
    path: "/blogs",
    name: "blogs",
    component: () => import('@/pages/blogs/blogs.vue'),
  },
  {
    path: "/blog-detail",
    name: "blog-details",
    component: () => import('@/pages/blogs/blog-detail.vue'),
  },
  {
    path: "/blog-detail/:id",
    name: "blog-detail",
    component: () => import('@/pages/blogs/blog-detail.vue'),
  },
  {
    path: "/page-terms",
    name: "page-terms",
    component: () => import('@/pages/utility/page-terms.vue'),
  },
  {
    path: "/page-privacy",
    name: "page-privacy",
    component: () => import('@/pages/utility/page-privacy.vue'),
  },
  {
    path: "/page-comingsoon",
    name: "page-comingsoon",
    component: () => import('@/pages/special-page/page-comingsoon.vue'),
  },
  {
    path: "/page-maintenance",
    name: "page-maintenance",
    component: () => import('@/pages/special-page/page-maintenance.vue'),
  },
  {
    path: "/thankyou",
    name: "thankyou",
    component: () => import('@/pages/auth-pages/thankyou.vue'),
  },
  {
    path: "/login",
    name: "login",
    component: () => import('@/pages/auth-pages/login.vue'),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import('@/pages/auth-pages/signup.vue'),
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import('@/pages/auth-pages/forgot-password.vue'),
  },
  {
    path: "/work-classic-two",
    name: "work-classic-two",
    component: () => import('@/pages/portfolio/classic-portfolio/work-classic-two.vue'),
  },
  {
    path: "/work-classic-three",
    name: "work-classic-three",
    component: () => import('@/pages/portfolio/classic-portfolio/work-classic-three.vue'),
  },
  {
    path: "/work-classic-four",
    name: "work-classic-four",
    component: () => import('@/pages/portfolio/classic-portfolio/work-classic-four.vue'),
  },
  {
    path: "/work-classic-five",
    name: "work-classic-five",
    component: () => import('@/pages/portfolio/classic-portfolio/work-classic-five.vue'),
  },
  {
    path: "/work-classic-six",
    name: "work-classic-six",
    component: () => import('@/pages/portfolio/classic-portfolio/work-classic-six.vue'),
  },
  {
    path: "/work-grid-two",
    name: "work-grid-two",
    component: () => import('@/pages/portfolio/grid-portfolio/work-grid-two.vue'),
  },
  {
    path: "/work-grid-three",
    name: "work-grid-three",
    component: () => import('@/pages/portfolio/grid-portfolio/work-grid-three.vue'),
  },
  {
    path: "/work-grid-four",
    name: "work-grid-four",
    component: () => import('@/pages/portfolio/grid-portfolio/work-grid-four.vue'),
  },
  {
    path: "/work-grid-five",
    name: "work-grid-five",
    component: () => import('@/pages/portfolio/grid-portfolio/work-grid-five.vue'),
  },
  {
    path: "/work-grid-six",
    name: "work-grid-six",
    component: () => import('@/pages/portfolio/grid-portfolio/work-grid-six.vue'),
  },
  {
    path: "/work-modern-two",
    name: "work-modern-two",
    component: () => import('@/pages/portfolio/modern-portfolio/work-modern-two.vue'),
  },
  {
    path: "/work-modern-three",
    name: "work-modern-three",
    component: () => import('@/pages/portfolio/modern-portfolio/work-modern-three.vue'),
  },
  {
    path: "/work-modern-four",
    name: "work-modern-four",
    component: () => import('@/pages/portfolio/modern-portfolio/work-modern-four.vue'),
  },
  {
    path: "/work-modern-five",
    name: "work-modern-five",
    component: () => import('@/pages/portfolio/modern-portfolio/work-modern-five.vue'),
  },
  {
    path: "/work-modern-six",
    name: "work-modern-six",
    component: () => import('@/pages/portfolio/modern-portfolio/work-modern-six.vue'),
  },
  {
    path: "/work-masonry-two",
    name: "work-masonry-two",
    component: () => import('@/pages/portfolio/masonry-portfolio/work-masonry-two.vue'),
  },
  {
    path: "/work-masonry-three",
    name: "work-masonry-three",
    component: () => import('@/pages/portfolio/masonry-portfolio/work-masonry-three.vue'),
  },
  {
    path: "/work-masonry-four",
    name: "work-masonry-four",
    component: () => import('@/pages/portfolio/masonry-portfolio/work-masonry-four.vue'),
  },
  {
    path: "/work-masonry-five",
    name: "work-masonry-five",
    component: () => import('@/pages/portfolio/masonry-portfolio/work-masonry-five.vue'),
  },
  {
    path: "/work-masonry-six",
    name: "work-masonry-six",
    component: () => import('@/pages/portfolio/masonry-portfolio/work-masonry-six.vue'),
  },
  {
    path: "/work-detail",
    name: "work-details",
    component: () => import('@/pages/portfolio/work-detail.vue'),
  },
  {
    path: "/work-detail/:id",
    name: "work-detail",
    component: () => import('@/pages/portfolio/work-detail.vue'),
  },
  {
    path: "/components",
    name: "components",
    component: () => import('@/pages/components.vue'),
  },
  {
    path: "/:error(.*)",
    name: "page-error",
    component: () => import('@/pages/special-page/page-error.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
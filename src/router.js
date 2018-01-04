import VueRouter from "vue-router";
import Index from "./components/Index";
import Login from "./components/Login";
import Admin from "./components/Admin";
import AdminCharacters from "./components/AdminCharacters";
import CreateCharacter from "./components/CreateCharacter";
import Characters from "./components/Characters";
import Callback from "./components/Callback";

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Index },
    { path: "/login", component: Login },
    { path: "/callback/google", component: Callback },
    { path: "/admin", component: Admin },
    { path: "/admin/characters", component: AdminCharacters },
    { path: "/admin/characters/create", component: CreateCharacter },
    { path: "/characters", component: Characters }
  ]
});

export default router;

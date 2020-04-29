import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Posts from "./pages/Posts";
import NewPosts from "./pages/NewPosts";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/posts" component={Posts} />
        <Route path="/new/post" component={NewPosts} />
        <Route path="/servicos" component={Services} />
        <Route path="/sobre" component={About} />
        <Route path="/contato" component={Contact} />
      </Switch>
    </BrowserRouter>
  ); 
}
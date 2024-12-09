const { Router } = require("express");
const path = require('path');
const MessageRouter = require("./message_router");
const SessionRouter = require("./session_router");

const MainRouter = Router();

MainRouter.use(SessionRouter);
MainRouter.use(MessageRouter);

MainRouter.get('/', function (req, res, next) {
	res.send('<!Doctype html><html lang=en><meta charset=utf-8><meta content="width=device-width,initial-scale=1"name=viewport><title>Whatsapp Gateway</title><link crossorigin=anonymous href=https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css integrity=sha384 rel=stylesheet><body><h1 class="mt-5">Aplikasi Naon by Hillzacky</h1><div class="d-grid gap-2"><a class="btn btn-info mb-3" href="/sessions?key=hillzacky">list</a><button class="btn btn-primary mb-3" onclick=addSession()>add account</button><button class="btn btn-danger" onclick=remSession()>delete</button></div><script crossorigin=anonymous integrity=sha384 src=https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js></script><script>function addSession(){ let setNumber = prompt("Please enter your whatsapp number", "");if (setNumber != null){ document.location.href=`/start-session?session=${setNumber}&scan=true`;}}function remSession(){ let remNumber = prompt("Enter your whatsapp number remove", "");if (remNumber != null){ document.location.href=`/delete-session?session=${remNumber}`;}</script></body></html>');
    
    res.end();
});

module.exports = MainRouter;

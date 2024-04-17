function route(pathname, handle) {
  console.log("pathname :" + pathname);

  if (typeof handle[pathname] === "function") {
    handle[pathname]();
  }
}

exports.route = route;

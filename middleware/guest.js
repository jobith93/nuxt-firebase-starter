export default function({ redirect, route, $auth }) {
  // Do not run on server
  if (process.server) {
    return redirect("/login");
  }

  let user = localStorage.getItem("app_user");
  user = user ? JSON.parse(user) : null;
  $auth.user = user;

  if (user && user.uid) {
    $auth.loggedIn = true;
  } else {
    $auth.loggedIn = false;
  }
}

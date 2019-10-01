export const signUp = user =>
  $.ajax({
    url: "api/users",
    method: "POST",
    data: { user }
  });

export const signIn = user =>
  $.ajax({
    url: "api/session",
    method: "POST",
    data: { user }
  });

export const logout = () =>
  $.ajax({
    url: "api/session",
    method: "DELETE"
  });

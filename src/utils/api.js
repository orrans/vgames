const clientID = import.meta.env.VITE_CLIENT_ID;
const secret = import.meta.env.VITE_CLIENT_SECRET;

let token;
let headers;

async function getToken() {
  const tokenURL = `https://id.twitch.tv/oauth2/token?client_id=${clientID}&client_secret=${secret}&grant_type=client_credentials`;
  const response = await fetch(tokenURL, { method: "POST" });
  const json = await response.json();
  return json.access_token;
}

export async function saveToken() {
  token = await getToken();
  headers = new Headers();
  headers.append("Client-ID", clientID);
  headers.append("Authorization", `Bearer ${token}`);
  //   headers = {
  //     "Client-ID": clientID,
  //     Authorization: "Bearer " + token,
  //   };
}

export async function getGameList(search) {
  const url = "http://localhost:8080/https://api.igdb.com/v4/games/";

  const response = await fetch(url, {
    headers,
    method: "POST",
    mode: "cors",
    body: `
        ${search.length >= 2 ? `search "${search}";` : ""}
        fields cover,first_release_date,genres,name,platforms,
              rating,rating_count,screenshots,summary,url,
              
              cover.url, genres.name, screenshots.url, artworks.*;
        limit 50;
    `,
  });
  const json = await response.json();
  return json;
}

export async function getSingleGame(id) {
  const url = "http://localhost:8080/https://api.igdb.com/v4/games/";

  const response = await fetch(url, {
    headers,
    method: "POST",
    mode: "cors",
    body: `
        where id = ${id};
        fields cover,first_release_date,genres,name,platforms,
               rating,rating_count,screenshots,summary,url, 
               
               cover.url, genres.name, screenshots.url, artworks.*;
        limit 50;
    `,
  });
  const json = await response.json();
  return json[0];
}

export function parseGame(originalGame) {
  const game = {
    title: originalGame.name,
    id: originalGame.id,
    genre: originalGame.genres?.map((genre) => genre.name) || [],
    picture: originalGame.cover?.url || originalGame.artworks?.[0]?.url,
    screenshot_thumbs:
      originalGame.screenshots?.map((screenshot) => screenshot.url) || [],
    screenshots:
      originalGame.screenshots?.map((screenshot) =>
        screenshot.url.replace("t_thumb", "t_original")
      ) || [],
    description: originalGame.summary,
    url: originalGame.url,
  };
  return game;
}

export function getMyGames() {
  const gameListString = localStorage.getItem("myGames") ?? "[]";
  const gameList = JSON.parse(gameListString);
  return gameList;
}

export function saveMyGames(gameList) {
  const updatedListString = JSON.stringify(gameList);
  localStorage.setItem("myGames", updatedListString);
}

export function addToMyGames(game) {
  const gameList = getMyGames();
  if (!findGame(gameList, game)) {
    gameList.push(game);
  }
  saveMyGames(gameList);
}

export function removeFromMyGames(game) {
  const gameList = getMyGames();
  const gameIndex = findGameIndex(gameList, game);
  if (gameIndex != -1) {
    gameList.splice(gameIndex, 1);
  }
  saveMyGames(gameList);
}

export function updateMyGames(game) {
  const gameList = getMyGames();
  const gameIndex = findGameIndex(gameList, game);
  if (gameIndex != -1) {
    gameList[gameIndex] = game;
  }
  saveMyGames(gameList);
}

export function findGame(gameList, game) {
  return gameList.find((currentGame) => game?.id == currentGame.id);
}

export function findGameIndex(gameList, game) {
  return gameList.findIndex((currentGame) => game?.id == currentGame.id);
}

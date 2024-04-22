/* import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { IMG_BASE_URL } from "../components/Movie";

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();

  return (
    <div className="page-container">
      <div style={{ display: "flex" }}>
        <img
          style={{ width: "300px", height: "450px" }}
          src={IMG_BASE_URL + state.poster_path}
          alt="영화 포스터 이미지"
        />
        <div style={{ marginLeft: "20px" }}>
          <h2>{title}</h2>
          <h3>평점: {state.vote_average}</h3>
          <h3>장르:</h3>

          <h3>개봉일: {state.release_date}</h3>
          <h3>줄거리:</h3>
          <p>{state.overview}</p>
        </div>
      </div>
    </div>
  );
}
 */

import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { IMG_BASE_URL } from "../components/Movie";

const MovieDetail = () => {
  const { title } = useParams();
  const { state } = useLocation();

  const getGenreName = (genreId) => {
    const genres = {
      28: "액션",
      12: "모험",
      16: "애니메이션",
      35: "코미디",
      80: "범죄",
      99: "다큐멘터리",
      18: "드라마",
      10751: "가족",
      14: "판타지",
      36: "역사",
      27: "공포",
      10402: "음악",
      9648: "미스터리",
      10749: "로맨스",
      878: "SF",
      10770: "TV 영화",
      53: "스릴러",
      10752: "전쟁",
      37: "서부",
    };

    return genres[genreId] || "알 수 없음";
  };

  const styles = {
    pageContainer: {
      padding: "20px",
      marginRight: "820px",
    },
    movieContainer: {
      display: "flex",
    },
    movieImage: {
      width: "300px",
      height: "450px",
      borderRadius: "8px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    },
    movieInfo: {
      marginLeft: "20px",
    },
    title: {
      fontSize: "24px",
      marginBottom: "10px",
    },
    infoHeader: {
      fontSize: "18px",
      marginBottom: "5px",
    },
    genreList: {
      margin: "0",
      padding: "0",
      listStyle: "none",
      display: "flex",
      flexWrap: "wrap",
    },
    genreItem: {
      fontSize: "16px",
      marginRight: "10px",
      marginBottom: "5px",
      padding: "5px 10px",
      borderRadius: "5px",
      backgroundColor: "#f0f0f0",
    },
    overview: {
      fontSize: "16px",
      lineHeight: "1.5",
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.movieContainer}>
        <img
          style={styles.movieImage}
          src={IMG_BASE_URL + state.poster_path}
          alt="영화 포스터 이미지"
        />
        <div style={styles.movieInfo}>
          <h2 style={styles.title}>{title}</h2>
          <h3 style={styles.infoHeader}>평점: {state.vote_average}</h3>
          <h3 style={styles.infoHeader}>장르:</h3>
          <ul style={styles.genreList}>
            {state.genre_ids.map((genreId) => (
              <li key={genreId} style={styles.genreItem}>
                {getGenreName(genreId)}
              </li>
            ))}
          </ul>
          <h3 style={styles.infoHeader}>개봉일: {state.release_date}</h3>
          <h3 style={styles.infoHeader}>줄거리:</h3>
          <p style={styles.overview}>{state.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

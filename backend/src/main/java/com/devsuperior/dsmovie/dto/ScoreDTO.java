package com.devsuperior.dsmovie.dto;

public class ScoreDTO {

    private Long MovieId;
    private String email;
    private  Double Score;

    public ScoreDTO() {

    }

    public Long getMovieId() {
        return MovieId;
    }

    public void setMovieId(Long movieId) {
        MovieId = movieId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Double getScore() {
        return Score;
    }

    public void setScore(Double score) {
        Score = score;
    }
}
